const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const booksScript = fs.readFileSync(path.join(root, 'data/books.js'), 'utf8');

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(booksScript, sandbox, { filename: 'data/books.js' });

const manifest = sandbox.window.BOOKS_MANIFEST;
assert.ok(manifest, 'BOOKS_MANIFEST should be defined by data/books.js');
assert.ok(indexHtml.includes('src="data/books.js"'), 'index.html should load the relative manifest for direct/static page use');
assert.ok(indexHtml.includes('src="/data/books.js"'), 'index.html should load the absolute manifest for routed page use');
assert.ok(indexHtml.includes('BOOKS_MANIFEST_FALLBACK'), 'index.html should include an inline manifest fallback for production routes without asset serving');
assert.ok(indexHtml.includes('window.BOOKS_MANIFEST || BOOKS_MANIFEST_FALLBACK'), 'main page should use the inline manifest fallback when script assets are unavailable');

const fallbackMatch = indexHtml.match(/const BOOKS_MANIFEST_FALLBACK = (\{[\s\S]*?\n\};)/);
assert.ok(fallbackMatch, 'inline fallback manifest should be parseable from index.html');
const fallbackSandbox = {};
vm.createContext(fallbackSandbox);
vm.runInContext(`fallback = ${fallbackMatch[1].slice(0, -1)}`, fallbackSandbox, { filename: 'index.html:fallback' });
assert.deepEqual(
  JSON.parse(JSON.stringify(fallbackSandbox.fallback)),
  JSON.parse(JSON.stringify(manifest)),
  'inline fallback manifest should match data/books.js'
);

const acts = manifest.books.find(book => book.id === 'acts');
assert.ok(acts, 'manifest should include the Acts book');
assert.equal(acts.name, 'Acts');
assert.equal(acts.name_da, 'ApG');
assert.equal(acts.full_name_da, 'Apostlenes Gerninger');
assert.equal(acts.chapters.length, 28, 'Acts should list 28 chapters');

const implemented = acts.chapters.filter(ch => ch.status === 'implemented');
const soon = acts.chapters.filter(ch => ch.status === 'soon');
assert.deepEqual(Array.from(implemented, ch => ch.n), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Acts 1-12 should be implemented');
assert.equal(soon.length, 16, 'Acts 13-28 should remain Soon');
assert.ok(implemented.every(ch => ch.href), 'implemented chapters should have href values');
assert.ok(soon.every(ch => !ch.href), 'Soon chapters should not have href values');

function localizeBook(book, lang) {
  return {
    id: book.id,
    name: lang === 'da' ? (book.name_da || book.name) : book.name,
    fullName: lang === 'da' ? (book.full_name_da || book.full_name) : book.full_name,
    testament: lang === 'da' ? (book.testament_da || book.testament) : book.testament,
    chapters: book.chapters.map(ch => {
      const status = ch.status || (ch.href ? 'implemented' : 'soon');
      return {
        n: ch.n,
        title: lang === 'da' ? (ch.title_da || ch.title) : ch.title,
        status,
        href: status === 'implemented' ? ch.href : undefined
      };
    })
  };
}

const actsEn = localizeBook(acts, 'en');
const actsDa = localizeBook(acts, 'da');
assert.equal(actsEn.name, 'Acts', 'English book button should use Acts');
assert.equal(actsDa.name, 'ApG', 'Danish book button should use ApG');
assert.equal(actsDa.fullName, 'Apostlenes Gerninger', 'Danish chapter heading should have the full book name');
assert.equal(actsDa.chapters[0].title, 'Venter på løftet');
assert.equal(actsDa.chapters[2].title, 'Den lamme mand går');
assert.equal(actsDa.chapters.filter(ch => ch.href).length, 12, 'localized Danish data should keep 12 clickable chapters');

assert.ok(indexHtml.includes('className="ch-row available"'), 'main page should render available chapter rows');
assert.ok(indexHtml.includes('className="ch-row unavailable"'), 'main page should render unavailable chapter rows');
assert.ok(indexHtml.includes('{text.soon}'), 'main page should display Soon text for unavailable chapters');

console.log('main page manifest contract ok');

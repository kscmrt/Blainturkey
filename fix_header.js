const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

const search = `<Link href="/portal" className="group mb-4 sm:mb-6 flex items-center gap-2 text-sm font-semibold text-steel-500 transition-colors hover:text-indigo-600 dark:text-steel-400 dark:hover:text-indigo-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Geri Dön
        </Link>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-steel-900 dark:text-white mb-4 sm:mb-6">
          Teknik Hesaplama.
        </h2>`;

const replace = `<div className="flex items-center justify-between mb-4 sm:mb-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-steel-900 dark:text-white">
            Teknik Hesaplama.
          </h2>
          <Link href="/portal" className="group flex items-center gap-1.5 text-sm font-semibold text-steel-500 transition-colors hover:text-indigo-600 dark:text-steel-400 dark:hover:text-indigo-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Geri Dön
          </Link>
        </div>`;

content = content.replace(search, replace);

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Header collapsed!');

import fs from 'fs';

let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

content = content.replace(/\{\s*\{\/\*\s*====================================================\s*DYNAMIC VIEWS/g, '{/* \n        ====================================================\n        DYNAMIC VIEWS');

content = content.replace(/<button className="group mb-8 sm:mb-12[\s\S]*?<\/Link>/, `<Link href="/portal" className="group mb-8 sm:mb-12 flex items-center gap-2 text-sm font-semibold text-steel-500 transition-colors hover:text-indigo-600 dark:text-steel-400 dark:hover:text-indigo-400">\n            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>\n            Geri Dön\n          </Link>`);

fs.writeFileSync('src/app/portal/calculator/page.tsx', content);

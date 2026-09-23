const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

// 1. Fix the header to collapse into one line using Regex
content = content.replace(/<Link href="\/portal" className="group mb-4 sm:mb-6 flex items-center gap-2[\s\S]*?<\/svg>\r?\n\s*Geri Dön\r?\n\s*<\/Link>\r?\n\s*<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-steel-900 dark:text-white mb-4 sm:mb-6">\r?\n\s*Teknik Hesaplama\.\r?\n\s*<\/h2>/,
`<div className="flex items-center justify-between mb-4 sm:mb-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-steel-900 dark:text-white">
            Teknik Hesaplama.
          </h2>
          <Link href="/portal" className="group flex items-center gap-1.5 text-sm font-semibold text-steel-500 transition-colors hover:text-indigo-600 dark:text-steel-400 dark:hover:text-indigo-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Geri Dön
          </Link>
        </div>`);

// 2. Change grid items-start to items-stretch
content = content.replace(/<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start relative w-full">/, 
'<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch relative w-full">');

// 3. Make left form h-full and justify-between
content = content.replace(/<form onSubmit={handleCalculate} className="flex flex-col gap-3">/, 
'<form onSubmit={handleCalculate} className="flex flex-col gap-3 h-full justify-between">');

// 4. Wrap the form inside a container if needed? No, just wrap it in a div that takes full height.
// Actually, making the form itself `h-full justify-between` works if the parent `.xl:col-span-5` stretches.

// 5. Make right panel also h-full and justify-between
content = content.replace(/<div className="bg-white dark:bg-steel-900 rounded-2xl p-4 shadow-xl border border-steel-200\/60 dark:border-steel-800\/80 w-full">/,
'<div className="bg-white dark:bg-steel-900 rounded-2xl p-4 shadow-xl border border-steel-200/60 dark:border-steel-800/80 w-full h-full flex flex-col justify-between">');

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Layout exact height fix applied!');

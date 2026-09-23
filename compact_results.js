const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

content = content.replace(/rounded-3xl p-6 sm:p-10/g, 'rounded-3xl p-4 sm:p-5');
content = content.replace(/mb-8 text-base sm:text-lg/g, 'mb-4 text-sm');
content = content.replace(/text-2xl sm:text-3xl font-bold/g, 'text-xl sm:text-2xl font-bold');
content = content.replace(/p-5 sm:p-6 rounded-2xl/g, 'p-3 sm:p-4 rounded-xl');
content = content.replace(/grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8/g, 'grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6');
content = content.replace(/mt-4 p-2.5/g, 'mt-2 p-1.5 text-[11px]');

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Results panel made compact!');

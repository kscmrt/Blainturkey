const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

// Use regex to match the three divs: Sıcaklık, Frekans, Viskozite
// They are inside <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-3 mt-3 pt-3 border-t border-steel-100">
const searchPattern = /<div className="flex flex-col gap-1">\s*<label[^>]*>Sıcaklık\s*\(\°C\)<\/label>[\s\S]*?<\/select>\s*<\/div>/g;

content = content.replace(searchPattern, '');

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Advanced parameters removed robustly!');

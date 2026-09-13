import fs from 'fs';
let content = fs.readFileSync('src/app/portal/page.tsx', 'utf8');

// Fix duplicate className attributes
content = content.replace(/className="w-full max-w-4xl px-6 py-12" className="animate-in fade-in slide-in-from-bottom-4 duration-700"/g, 'className="w-full max-w-4xl px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700"');

fs.writeFileSync('src/app/portal/page.tsx', content);

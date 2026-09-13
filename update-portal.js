import fs from 'fs';

let content = fs.readFileSync('src/app/portal/page.tsx', 'utf8');

// Replace inline styles with Tailwind classes
content = content.replace(/<div style=\{\{\s*minHeight: '100vh',\s*display: 'flex',\s*alignItems: 'center',\s*justifyContent: 'center',\s*backgroundColor: '#fbfbfd', \/\* Apple ultra-light gray \*\/\s*fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',\s*color: '#1d1d1f'\s*\}\}>/g, '<div className="min-h-screen bg-steel-50 text-steel-900 dark:bg-steel-950 dark:text-steel-100 flex items-center justify-center font-sans">');

content = content.replace(/style=\{\{ animation: 'fadeUp 0\.6s ease forwards' \}\}/g, 'className="animate-in fade-in slide-in-from-bottom-4 duration-700"');
content = content.replace(/className="w-full max-w-4xl px-6 py-12" style=\{\{ animation: 'fadeUp 0\.6s ease forwards' \}\}/g, 'className="w-full max-w-4xl px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700"');

content = content.replace(/style=\{\{ width: '100%', maxWidth: '600px', padding: '2rem', animation: 'fadeUp 0\.6s ease forwards' \}\}/g, 'className="w-full max-w-[800px] p-6 sm:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700"');

content = content.replace(/<button className="minimal-back-btn" onClick=\{\(\) => setActiveView\('hub'\)\} style=\{\{ marginBottom: '3rem' \}\}>/g, '<button className="group mb-8 sm:mb-12 flex items-center gap-2 text-sm font-semibold text-steel-500 transition-colors hover:text-brand-600 dark:text-steel-400 dark:hover:text-brand-400" onClick={() => setActiveView("hub")}>');

content = content.replace(/<h2 style=\{\{ fontSize: '2rem', fontWeight: 600, letterSpacing: '-0\.02em', margin: '2rem 0 3rem 0' \}\}>/g, '<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-steel-900 dark:text-white mb-8 sm:mb-12">');

content = content.replace(/style=\{\{ display: 'flex', flexDirection: 'column', gap: '2\.5rem' \}\}/g, 'className="flex flex-col gap-8"');
content = content.replace(/style=\{\{ display: 'flex', flexDirection: 'column', gap: '2rem' \}\}/g, 'className="flex flex-col gap-6"');

content = content.replace(/style=\{\{ background: '#fff', padding: '1\.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba\(0,0,0,0\.02\)' \}\}/g, 'className="rounded-2xl border border-steel-200/60 bg-white p-6 shadow-sm dark:border-steel-800/80 dark:bg-steel-900/50"');

content = content.replace(/<h3 style=\{\{ fontSize: '1\.1rem', fontWeight: 600, borderBottom: '1px solid #e5e5ea', paddingBottom: '0\.5rem', marginBottom: '1\.5rem', color: '#1d1d1f' \}\}>/g, '<h3 className="mb-6 border-b border-steel-100 pb-3 text-lg font-bold text-steel-900 dark:border-steel-800 dark:text-white">');

content = content.replace(/style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1\.5rem' \}\}/g, 'className="grid grid-cols-1 sm:grid-cols-2 gap-6"');
content = content.replace(/style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' \}\}/g, 'className="grid grid-cols-1 sm:grid-cols-2 gap-4"');
content = content.replace(/style=\{\{ display: 'flex', flexDirection: 'column', gap: '1\.5rem' \}\}/g, 'className="flex flex-col gap-6"');

content = content.replace(/className="text-gray-500"/g, 'className="text-steel-500 dark:text-steel-400"');
content = content.replace(/className="text-gray-900"/g, 'className="text-steel-900 dark:text-white"');
content = content.replace(/bg-white\/60 backdrop-blur-xl border border-gray-200\/50/g, 'bg-white/60 dark:bg-steel-900/40 backdrop-blur-xl border border-steel-200/60 dark:border-steel-800/60');


// Apply changes
fs.writeFileSync('src/app/portal/page.tsx', content);
console.log('Transform complete.');

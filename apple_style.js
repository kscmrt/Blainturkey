const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

// 1. Softer panel borders and more rounded corners
// Replace `rounded-2xl border border-steel-200/60 shadow-sm` on left panels
content = content.replace(/rounded-2xl border border-steel-200\/60 bg-white p-4 shadow-sm/g, 
  'rounded-[24px] border border-steel-100 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]');

content = content.replace(/rounded-2xl border border-steel-200\/60 bg-white p-3 shadow-sm/g, 
  'rounded-[20px] border border-steel-100 bg-white p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)]');

// Replace right panel container
content = content.replace(/rounded-2xl p-4 shadow-xl border border-steel-200\/60/g,
  'rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-steel-100');

// 2. Apple-like Inputs
// Currently: `rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none`
// We want: `rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 text-xs text-steel-900 transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:outline-none`
content = content.replace(/rounded border border-steel-200 bg-steel-50\/50 px-2\.5 py-1\.5/g, 
  'rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10');

// 3. Apple-like Typography for Labels
// Currently: `text-[10px] font-bold text-steel-500 uppercase`
// We want: `text-[10px] font-semibold text-steel-400 uppercase tracking-widest`
content = content.replace(/text-\[10px\] font-bold text-steel-500 uppercase/g,
  'text-[9px] font-semibold text-steel-400 uppercase tracking-widest');

// 4. Update the checkboxes inside accessories to be softer
content = content.replace(/rounded border border-steel-200 dark:border-steel-700 hover:bg-steel-100/g,
  'rounded-lg border border-steel-100 dark:border-steel-700 hover:bg-steel-100/50 hover:border-steel-200 transition-all');

// 5. Update the "Hesapla" and "Teklif İste" buttons to be softer (rounded-2xl instead of rounded-xl or whatever they are)
// Left button: `rounded-xl text-sm font-bold`
content = content.replace(/rounded-xl text-sm font-bold cursor-pointer transition-colors shadow-md mt-1/g,
  'rounded-[16px] text-sm font-semibold cursor-pointer transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 mt-2');
  
// Right button: `rounded-xl text-sm font-bold`
content = content.replace(/rounded-xl text-sm font-bold/g, 'rounded-[16px] text-sm font-semibold');

// Right button has inline styles for hover: `onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}`
// Let's replace the right button completely to match the left button style (Apple style)
content = content.replace(/<button onClick=\{\(\) => setShowContactModal\(true\)\} style=\{\{.*\}\}[\s\S]*?Bu Konfigürasyon ile Resmi Teklif İste\r?\n\s*<\/button>/,
  `<button onClick={() => setShowContactModal(true)} className="w-full bg-steel-900 hover:bg-steel-800 text-white border-none py-3 rounded-[16px] text-sm font-semibold cursor-pointer transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">Bu Konfigürasyon ile Resmi Teklif İste</button>`);

// Fix the right cards (Piston, Pompa, etc.) to have softer borders and more rounded corners
// Currently: `rounded-lg shadow-sm border border-steel-200/60`
content = content.replace(/rounded-lg shadow-sm border border-steel-200\/60/g,
  'rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-steel-100');
  
// Valf card is dark: `rounded-lg shadow-sm border border-steel-800`
content = content.replace(/rounded-lg shadow-sm border border-steel-800/g,
  'rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.2)] border border-steel-800');

// Accordions (Accessories and Analysis)
// Currently: `rounded-lg border border-steel-200/60 shadow-sm`
content = content.replace(/rounded-lg border border-steel-200\/60 shadow-sm/g,
  'rounded-xl border border-steel-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]');

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Apple style applied!');

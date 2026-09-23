const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

// Fix main container padding and vertical alignment
content = content.replace(
  /<div className="min-h-screen bg-steel-50 text-steel-900 dark:bg-steel-950 dark:text-steel-100 flex items-center justify-center font-sans py-12">/,
  '<div className="min-h-[calc(100vh-80px)] bg-steel-50 text-steel-900 dark:bg-steel-950 dark:text-steel-100 flex items-start justify-center font-sans py-4 sm:py-6">'
);

// Fix inner container padding
content = content.replace(
  /<div className="w-full max-w-\[1300px\] p-6 sm:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">/,
  '<div className="w-full max-w-[1350px] px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">'
);

// Fix link margin
content = content.replace(
  /<Link href="\/portal" className="group mb-8 sm:mb-12 flex items-center gap-2/,
  '<Link href="/portal" className="group mb-4 sm:mb-6 flex items-center gap-2'
);

// Fix heading margin
content = content.replace(
  /<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-steel-900 dark:text-white mb-8 sm:mb-12">/,
  '<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-steel-900 dark:text-white mb-4 sm:mb-6">'
);

// We can also put the "Geri Dön" link and "Teknik Hesaplama." heading in the same row to save vertical space!
// But replacing that via regex might be tricky. Let's just rely on the reduced margins first.

// Also, the results panel has a sticky top-8. Change it to top-4.
content = content.replace(/xl:col-span-7 w-full sticky top-8/g, 'xl:col-span-7 w-full sticky top-4');

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Top spacing fixed!');

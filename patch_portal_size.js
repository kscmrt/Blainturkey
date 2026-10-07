const fs = require('fs');
const path = 'src/app/portal/page.tsx';

let content = fs.readFileSync(path, 'utf8');

// Reduce min-h-screen to min-h-[calc(100vh-100px)] or just remove the flex centering min height and let it flow.
// Actually keeping flex centering but reducing padding is best.
content = content.replace(/min-h-screen/g, 'min-h-[calc(100vh-100px)]');
content = content.replace(/py-12/g, 'py-4');
content = content.replace(/mb-16/g, 'mb-6');
content = content.replace(/p-8/g, 'p-6');
content = content.replace(/mb-6/g, 'mb-3'); // reduces space under the icons inside cards
content = content.replace(/mt-6/g, 'mt-4'); // reduces space above Devam Et
content = content.replace(/mt-12/g, 'mt-6'); // back button margin
content = content.replace(/w-14 h-14/g, 'w-10 h-10'); // smaller icons
content = content.replace(/w-7 h-7/g, 'w-5 h-5'); // smaller SVGs

fs.writeFileSync(path, content, 'utf8');
console.log("Updated portal page sizing");

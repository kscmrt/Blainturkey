const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

const searchGrid = '<div className="grid grid-cols-5 gap-2 mb-4">';
const replaceGrid = '<div className={`grid ${calcIsExisting ? "grid-cols-4" : "grid-cols-5"} gap-2 mb-4`}>';

content = content.replace(searchGrid, replaceGrid);

const searchCylinderCard = `                      {/* 1. Cylinder Card */}
                      <div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-steel-100 dark:border-steel-800/60">
                        <div className="text-[9px] uppercase tracking-wider text-steel-500 mb-0.5">Piston</div>
                        <div className="text-sm font-bold text-steel-900 dark:text-white">
                          {calcCylinderType === 'telescopic' ? (calcResult?.type || \`T\${calcStages}-\${calcCylDiameter}...\`) : \`Ø\${calcCylDiameter}x\${calcCylThickness}\`}
                        </div>
                        <div className="text-[10px] text-steel-500">{calcCylinderCount} Adet</div>
                      </div>`;

const replaceCylinderCard = `                      {/* 1. Cylinder Card */}
                      {!calcIsExisting && (
                        <div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-steel-100 dark:border-steel-800/60">
                          <div className="text-[9px] uppercase tracking-wider text-steel-500 mb-0.5">Piston</div>
                          <div className="text-sm font-bold text-steel-900 dark:text-white">
                            {calcCylinderType === 'telescopic' ? (calcResult?.type || \`T\${calcStages}-\${calcCylDiameter}...\`) : \`Ø\${calcCylDiameter}x\${calcCylThickness}\`}
                          </div>
                          <div className="text-[10px] text-steel-500">{calcCylinderCount} Adet</div>
                        </div>
                      )}`;

// Because template strings might not match line endings perfectly, let's use regex:
const cylCardRegex = /\{\/\* 1\. Cylinder Card \*\/\}\s*<div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-xl shadow-\[0_2px_10px_rgb\(0,0,0,0\.02\)\] border border-steel-100 dark:border-steel-800\/60">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*/; // Wait, too dangerous to write complex regex manually if we don't need to.

// Let's do it safer:
const splitContent = content.split('<div className="grid grid-cols-5 gap-2 mb-4">');
if (splitContent.length === 2) {
  let afterGrid = splitContent[1];
  
  // Find where the pump card starts
  const pumpStart = afterGrid.indexOf('{/* 2. Pump Card */}');
  
  if (pumpStart !== -1) {
    let cylCard = afterGrid.substring(0, pumpStart);
    
    // Wrap it
    let newCylCard = `{!calcIsExisting && (\n` + cylCard.trimRight() + `\n)}\n                    `;
    
    content = splitContent[0] + replaceGrid + '\n                    ' + newCylCard + afterGrid.substring(pumpStart);
  }
}

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Piston card hidden when calcIsExisting is true!');

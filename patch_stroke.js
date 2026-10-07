const fs = require('fs');

let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

content = content.replace(
    "{calcCylinderType === 'telescopic' ? (calcResult?.type || `T${calcStages}-${calcCylDiameter}...`) : `Ø${calcCylDiameter}x${calcCylThickness}`}",
    "{calcCylinderType === 'telescopic' ? (calcResult?.type || `T${calcStages}-${calcCylDiameter}...`) : `Ø${calcCylDiameter}x${calcCylThickness}x${calcResult?.stroke || ''}`}"
);

content = content.replace(
    `<div className="text-[10px] text-steel-500">Strok {calcResult.stroke}</div>`,
    `<div className="text-[10px] text-steel-500">1 Adet</div>`
);

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log("Updated stroke positions successfully.");

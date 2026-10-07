const fs = require('fs');

let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

content = content.replace(/type="number" required value=\{calcBuffer\}/g, 'type="number" value={calcBuffer}');
content = content.replace(/type="number" required value=\{calcTopFloor\}/g, 'type="number" value={calcTopFloor}');
content = content.replace(/type="number" required value=\{calcPitDepth\}/g, 'type="number" value={calcPitDepth}');
content = content.replace(/type="number" required value=\{calcRopeWeight\}/g, 'type="number" value={calcRopeWeight}');

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log("Updated required fields in page.tsx");

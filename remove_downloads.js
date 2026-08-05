const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'ecosystemProducts.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace blocks matching `downloads: [ ... ],`
content = content.replace(/\s*downloads:\s*\[[\s\S]*?\],?/g, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Downloads removed');

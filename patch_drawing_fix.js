const fs = require('fs');
const path = 'C:/Users/Asus/Desktop/sonproje/src/app/api/cylinder-drawing/route.ts';

let content = fs.readFileSync(path, 'utf8');

// Replace the literal \n characters that were accidentally written
const badStr = `        // Strok = Seyir / 2 (2:1 ise, vs)\\n        // result.stroke deYerini kullanabiliriz (hesaplanan net strok)\\n        const stroke_val = Number(result.stroke || ((travelH_val + buffer_val)/2));\\n        // Kapal boy = strok + G lǬsǬ\\n        const closedLen_val = stroke_val + gValNum;\\n        // Ak boy = kapal boy + strok\\n        const openLen_val = closedLen_val + stroke_val;`;

const newStr = `        // Strok = Seyir / 2 (2:1 ise, vs)
        // result.stroke değerini kullanabiliriz (hesaplanan net strok)
        const stroke_val = Number(result.stroke || ((travelH_val + buffer_val)/2));
        // Kapalı boy = strok + G ölçüsü
        const closedLen_val = stroke_val + gValNum;
        // Açık boy = kapalı boy + strok
        const openLen_val = closedLen_val + stroke_val;`;

// Actually just replace using regex for the literal \n things
content = content.replace(/\/\/ Strok = Seyir.*?const openLen_val = closedLen_val \+ stroke_val;/s, newStr);

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed drawing route in sonproje");

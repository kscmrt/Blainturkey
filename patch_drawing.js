const fs = require('fs');
const path = 'C:/Users/Asus/Desktop/sonproje/src/app/api/cylinder-drawing/route.ts';

let content = fs.readFileSync(path, 'utf8');

// Use a regular expression that ignores whitespace differences
const regex = /\/\/\s*Kapalı boy = \(Strok \+ kayma payı\) \/ 2 \+ G[\s\S]*?const openLen_val = travelH_val > 0 \? \(gValNum \+ travelH_val \+ buffer_val\) : \(closedLen_val \+ travelH_val\);/g;

const newStr = `        // Strok = Seyir / 2 (2:1 ise, vs)
        // result.stroke değerini kullanabiliriz (hesaplanan net strok)
        const stroke_val = Number(result.stroke || ((travelH_val + buffer_val)/2));
        // Kapalı boy = strok + G ölçüsü
        const closedLen_val = stroke_val + gValNum;
        // Açık boy = kapalı boy + strok
        const openLen_val = closedLen_val + stroke_val;`;

if (regex.test(content)) {
    content = content.replace(regex, newStr);
    fs.writeFileSync(path, content, 'utf8');
    console.log("Updated drawing route in sonproje");
} else {
    console.log("Could not find the target string. The regex didn't match.");
}

const fs = require('fs');

let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

// Replace state initializations
content = content.replace("const [calcCapacity, setCalcCapacity] = useState('630');", "const [calcCapacity, setCalcCapacity] = useState('');");
content = content.replace("const [calcCarcass, setCalcCarcass] = useState('500');", "const [calcCarcass, setCalcCarcass] = useState('');");
content = content.replace("const [calcTravel, setCalcTravel] = useState('15000');", "const [calcTravel, setCalcTravel] = useState('');");
content = content.replace("const [calcSpeed, setCalcSpeed] = useState('0.63');", "const [calcSpeed, setCalcSpeed] = useState('');");
content = content.replace("const [calcPitDepth, setCalcPitDepth] = useState('1200');", "const [calcPitDepth, setCalcPitDepth] = useState('');");
content = content.replace("const [calcTopFloor, setCalcTopFloor] = useState('3500');", "const [calcTopFloor, setCalcTopFloor] = useState('');");
content = content.replace("const [calcBuffer, setCalcBuffer] = useState('100');", "const [calcBuffer, setCalcBuffer] = useState('');");
content = content.replace("const [calcRopeWeight, setCalcRopeWeight] = useState('50');", "const [calcRopeWeight, setCalcRopeWeight] = useState('');");

// Replace inputs with placeholders
// capacity
content = content.replace(
    `value={calcCapacity} onChange={(e) => setCalcCapacity(e.target.value)} />`,
    `value={calcCapacity} onChange={(e) => setCalcCapacity(e.target.value)} placeholder="Örn: 630" />`
);
// carcass
content = content.replace(
    `value={calcCarcass} onChange={(e) => setCalcCarcass(e.target.value)} />`,
    `value={calcCarcass} onChange={(e) => setCalcCarcass(e.target.value)} placeholder="Örn: 500" />`
);
// travel
content = content.replace(
    `value={calcTravel} onChange={(e) => setCalcTravel(e.target.value)} />`,
    `value={calcTravel} onChange={(e) => setCalcTravel(e.target.value)} placeholder="Örn: 15000" />`
);
// speed
content = content.replace(
    `value={calcSpeed} onChange={(e) => setCalcSpeed(e.target.value)} />`,
    `value={calcSpeed} onChange={(e) => setCalcSpeed(e.target.value)} placeholder="Örn: 0,63" />`
);
// buffer
content = content.replace(
    `value={calcBuffer} onChange={(e) => setCalcBuffer(e.target.value)} />`,
    `value={calcBuffer} onChange={(e) => setCalcBuffer(e.target.value)} placeholder="Örn: 100" />`
);
// top floor
content = content.replace(
    `value={calcTopFloor} onChange={(e) => setCalcTopFloor(e.target.value)} />`,
    `value={calcTopFloor} onChange={(e) => setCalcTopFloor(e.target.value)} placeholder="Örn: 3500" />`
);
// pit depth
content = content.replace(
    `value={calcPitDepth} onChange={(e) => setCalcPitDepth(e.target.value)} />`,
    `value={calcPitDepth} onChange={(e) => setCalcPitDepth(e.target.value)} placeholder="Örn: 1200" />`
);
// rope weight
content = content.replace(
    `value={calcRopeWeight} onChange={(e) => setCalcRopeWeight(e.target.value)} />`,
    `value={calcRopeWeight} onChange={(e) => setCalcRopeWeight(e.target.value)} placeholder="Örn: 50" />`
);


fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log("Replaced variables and inputs with placeholders successfully.");

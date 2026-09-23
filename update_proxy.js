const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

// Replace the fetch call in page.tsx
const searchStr = `const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || 'https://portal.blainturkey.com.tr';
      
      const priceReq = await fetch(\`\${apiUrl}/api/external-quotes/estimate\`, {`;

const replaceStr = `const priceReq = await fetch('/api/estimate', {`;

content = content.replace(searchStr, replaceStr);

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Updated page.tsx to use local proxy route');

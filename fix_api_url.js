const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

// The line is: const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || (isLocalhost ? 'http://localhost:3000' : 'https://portal.blainturkey.com.tr');
// I will change it to always fall back to the production URL to avoid the local 404 if they don't have the CRM backend running.
const searchStr = `const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || (isLocalhost ? 'http://localhost:3000' : 'https://portal.blainturkey.com.tr');`;
const replaceStr = `const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || 'https://portal.blainturkey.com.tr';`;

content = content.replace(searchStr, replaceStr);

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('CRM API URL updated');

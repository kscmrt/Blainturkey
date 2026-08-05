const fs = require('fs');
const content = fs.readFileSync('C:/Users/Asus/.gemini/antigravity-ide/brain/5b1f222e-6ef2-40e6-9e2b-457030811dd9/.system_generated/steps/3785/content.md', 'utf8');

// Find all image tags
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let match;
while ((match = imgRegex.exec(content)) !== null) {
  const url = match[1];
  if (url.includes('blain.de') && url.includes('uploads')) {
    console.log(url);
  }
}

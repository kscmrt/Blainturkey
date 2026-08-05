const fs = require('fs');
const acc = fs.readFileSync('C:/Users/Asus/.gemini/antigravity-ide/brain/5b1f222e-6ef2-40e6-9e2b-457030811dd9/.system_generated/steps/3740/content.md', 'utf8');
const saf = fs.readFileSync('C:/Users/Asus/.gemini/antigravity-ide/brain/5b1f222e-6ef2-40e6-9e2b-457030811dd9/.system_generated/steps/3785/content.md', 'utf8');
const regex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
let m;
const urls = new Set();
while (m = regex.exec(acc)) {
  if (m[1].includes('/products/') && (m[1].includes('dh') || m[1].includes('en') || m[1].includes('cx'))) {
    urls.add(m[1]);
  }
}
while (m = regex.exec(saf)) {
  if (m[1].includes('/products/') && (m[1].includes('il10') || m[1].includes('ksb'))) {
    urls.add(m[1]);
  }
}
console.log(Array.from(urls).join('\n'));

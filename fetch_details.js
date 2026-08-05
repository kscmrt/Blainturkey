const fs = require('fs');
const https = require('https');

const urls = [
  'https://blain.de/products/hydraulic-elevator-accessories/dh-dl-pressure-switch/',
  'https://blain.de/products/hydraulic-elevator-accessories/en-emergency-power-coil/',
  'https://blain.de/products/hydraulic-elevator-accessories/cx-down-flow-guide/',
  'https://blain.de/products/hydraulic-elevator-safety-valves/il10-s-intelligent-valve/', // guessing the URL for il10-s
  'https://blain.de/products/safety-valves/ksb-piston-safety-system/'
];

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  for (const url of urls) {
    try {
      const html = await fetchUrl(url);
      console.log('--- ' + url + ' ---');
      // Very basic extraction of paragraphs to avoid massive output
      const matches = html.match(/<p>([\s\S]*?)<\/p>/gi);
      if (matches) {
        matches.forEach(m => console.log(m.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')));
      } else {
        console.log('No paragraphs found.');
      }
    } catch (e) {
      console.log('Error fetching ' + url);
    }
  }
}
main();

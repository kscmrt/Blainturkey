const https = require('https');

https.get('https://blain.de/support/smartPhone/js/troubleshootingInhalt1.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    require('fs').writeFileSync('blain_js.js', data);
    console.log('Saved JS');
  });
});

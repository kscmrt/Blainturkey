const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    await page.goto('https://blain.de/support/trouble-shooting-ev/', { waitUntil: 'networkidle2' });
    const htmlEv = await page.content();
    fs.writeFileSync('blain_ev_live.html', htmlEv);

    await page.goto('https://blain.de/support/trouble-shooting-kv/', { waitUntil: 'networkidle2' });
    const htmlKv = await page.content();
    fs.writeFileSync('blain_kv_live.html', htmlKv);

    console.log("Saved live HTML files.");
    await browser.close();
  } catch (e) {
    console.error(e);
  }
})();

import puppeteer from 'puppeteer';
import { setTimeout } from 'timers/promises';

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
  
  console.log('Navigating to local HTML file...');
  // No waitUntil, just fire and forget
  page.goto('file:///C:/Users/Asus/.gemini/antigravity-ide/brain/b000cb90-accb-43ab-a7f7-715d0c63faa1/scratch/ad.html').catch(e => console.log(e.message));
  
  console.log('Waiting 3 seconds for render...');
  await setTimeout(3000);
  
  const outputPath = 'C:\\Users\\Asus\\.gemini\\antigravity-ide\\brain\\b000cb90-accb-43ab-a7f7-715d0c63faa1\\blain_ad_final_hq.png';
  console.log(`Saving screenshot to ${outputPath}...`);
  await page.screenshot({ path: outputPath });
  
  await browser.close();
  console.log('Done!');
  process.exit(0);
})();

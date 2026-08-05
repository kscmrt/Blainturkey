const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.goto('https://blain.de/service/service-documents-download/', { waitUntil: 'networkidle2' });
  
  // Wait for the accordion to be loaded
  await page.waitForSelector('.elementor-accordion');

  const languagesToScrape = [
    { name: "ENGLISH", selector: "a[data-filter='.english']" },
    { name: "TÜRKÇE", selector: "a[data-filter='.turkce']" },
    { name: "DEUTSCH", selector: "a[data-filter='.deutsch']" }
  ];

  let allData = [];

  for (const lang of languagesToScrape) {
    try {
      // Click the language tab
      await page.click(lang.selector);
      await page.waitForTimeout(1000); // Wait for transition

      // Scrape data
      const data = await page.evaluate((langName) => {
        const categories = [];
        const items = document.querySelectorAll('.elementor-accordion-item');
        
        items.forEach(item => {
          const titleEl = item.querySelector('.elementor-accordion-title');
          if (!titleEl) return;
          const title = titleEl.textContent.trim();
          
          const files = [];
          // Look for links inside this accordion item
          const links = item.querySelectorAll('.elementor-accordion-content a');
          
          links.forEach(link => {
            // Only grab visible links (filtering might use display: none)
            if (link.offsetParent !== null) {
              const url = link.href;
              const name = link.textContent.trim() || url.split('/').pop();
              let type = 'pdf';
              if (url.toLowerCase().includes('.cad') || url.toLowerCase().includes('.igs') || url.toLowerCase().includes('.sat')) type = 'cad';
              if (url.toLowerCase().includes('.ppt')) type = 'ppt';
              
              files.push({
                name,
                url,
                type,
                language: langName
              });
            }
          });
          
          categories.push({
            title,
            files
          });
        });
        
        return categories;
      }, lang.name);
      
      allData.push({ lang: lang.name, categories: data });
    } catch(e) {
      console.log("Error scraping " + lang.name, e.message);
    }
  }
  
  // Consolidate data
  // We want an array of categories, where each category has files, and each file has a languages array
  const consolidatedCategories = {};

  allData.forEach(langData => {
    langData.categories.forEach(cat => {
      if (!consolidatedCategories[cat.title]) {
        consolidatedCategories[cat.title] = {
          titleEn: cat.title, // Just use the original title
          titleTr: cat.title,
          files: []
        };
      }
      
      cat.files.forEach(file => {
        // Check if file already exists in this category
        const existingFile = consolidatedCategories[cat.title].files.find(f => f.url === file.url);
        if (existingFile) {
          if (!existingFile.languages.includes(file.language)) {
            existingFile.languages.push(file.language);
          }
        } else {
          consolidatedCategories[cat.title].files.push({
            name: file.name,
            url: file.url,
            type: file.type,
            languages: [file.language]
          });
        }
      });
    });
  });
  
  const finalArray = Object.values(consolidatedCategories);
  
  fs.writeFileSync('scraped_downloads.json', JSON.stringify(finalArray, null, 2));
  console.log("Scraping complete. Saved to scraped_downloads.json");
  
  await browser.close();
})();

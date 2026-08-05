const fs = require('fs');
const html = fs.readFileSync('blain_downloads.html', 'utf8');

const arrayStart = '(["https://blain.de/service/service-documents-download/"';
const startIndex = html.indexOf(arrayStart);
const arrayEndStr = ']]]]]]]);';
const endIndex = html.indexOf(arrayEndStr, startIndex);

const jsonString = html.substring(startIndex + 1, endIndex + 7);

try {
    const p = JSON.parse(jsonString);
    const languagesData = p[3];
    
    // We will group categories by their index
    const consolidatedCategories = [];
    
    languagesData.forEach(lang => {
        const langName = lang[1];
        const cats = lang[3];
        
        cats.forEach((cat, index) => {
            const catName = cat[0];
            const items = cat[1];
            
            if (!consolidatedCategories[index]) {
                consolidatedCategories[index] = {
                    titleEn: catName, // Initially set to this language's name
                    titleTr: catName,
                    files: []
                };
            }
            
            // If the language is ENGLISH, set titleEn
            if (langName === 'ENGLISH') consolidatedCategories[index].titleEn = catName;
            // If the language is TÜRKÇE, set titleTr
            if (langName === 'TÜRKÇE') consolidatedCategories[index].titleTr = catName;
            
            items.forEach(item => {
                const fileName = item[0] || item[3].split('/').pop();
                const typeRaw = item[2] ? item[2].toLowerCase() : 'pdf';
                let type = 'pdf';
                if (typeRaw === 'cad' || typeRaw === 'igs' || typeRaw === 'sat') type = 'cad';
                if (typeRaw === 'ppt' || typeRaw === 'pptx') type = 'ppt';
                const url = item[3];
                
                const existingFile = consolidatedCategories[index].files.find(f => f.url === url);
                if (existingFile) {
                    if (!existingFile.languages.includes(langName)) {
                        existingFile.languages.push(langName);
                    }
                } else {
                    consolidatedCategories[index].files.push({
                        name: fileName,
                        url: url,
                        type: type,
                        languages: [langName]
                    });
                }
            });
        });
    });
    
    const outputContent = `export interface DownloadFile {
  name: string;
  url: string;
  type?: 'pdf' | 'cad' | 'ppt';
  languages?: string[];
}

export interface DownloadCategory {
  titleEn: string;
  titleTr: string;
  files: DownloadFile[];
}

export const downloadsData: DownloadCategory[] = ${JSON.stringify(consolidatedCategories, null, 2)};`;

    fs.writeFileSync('./src/data/downloadsData.ts', outputContent);
    console.log("Successfully wrote downloadsData.ts with", consolidatedCategories.length, "categories!");
} catch (e) {
    console.log("Error parsing:", e);
}

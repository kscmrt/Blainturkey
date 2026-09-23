const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

const targetStr = `<h2 className="text-xl sm:text-2xl font-bold m-0 tracking-tight text-steel-900 dark:text-white">Projenize Özel Konfigürasyon</h2>`;
const replacementStr = `<h2 className="text-xl sm:text-2xl font-bold m-0 tracking-tight text-steel-900 dark:text-white">Projenize Özel Konfigürasyon</h2>
                    
                    {/* Price Banner */}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full border border-green-200 dark:border-green-800">
                      <span className="text-xs font-semibold">Tahmini Fiyat:</span>
                      {isCalculatingPrice ? (
                        <div className="w-16 h-4 bg-green-200/50 dark:bg-green-800/50 rounded animate-pulse"></div>
                      ) : (
                        <span className="font-bold">{estimatedPrice ? \`€\${estimatedPrice.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\` : '---'}</span>
                      )}
                    </div>`;

content = content.replace(targetStr, replacementStr);
fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Price banner added!');

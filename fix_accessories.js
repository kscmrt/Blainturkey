const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

const search = `                  {/* Component Selections */}
                  <div className="mb-8 p-5 sm:p-6 bg-white dark:bg-steel-900 rounded-2xl border border-steel-200/60 dark:border-steel-800/60 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                      <h3 className="text-lg font-semibold text-steel-900 dark:text-white m-0">Opsiyonel Donanımlar (Aksesuarlar)</h3>
                      <span className="text-xs self-start sm:self-auto font-medium text-steel-600 dark:text-steel-400 bg-steel-100 dark:bg-steel-800 px-3 py-1 rounded-full">Birden fazla seçilebilir</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">`;

const replace = `                  {/* Component Selections */}
                  <details className="mb-4 bg-white dark:bg-steel-900 rounded-xl border border-steel-200/60 dark:border-steel-800/60 shadow-sm overflow-hidden group">
                    <summary className="flex items-center justify-between p-3 sm:p-4 cursor-pointer outline-none bg-steel-50/50 dark:bg-steel-800/30">
                      <h3 className="text-sm font-semibold text-steel-900 dark:text-white m-0 flex items-center gap-2">
                        Opsiyonel Donanımlar (Aksesuarlar) Ekle
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="hidden sm:inline-block text-[10px] font-medium text-steel-500 bg-steel-200/50 dark:bg-steel-700/50 px-2 py-0.5 rounded-full">Birden fazla seçilebilir</span>
                        <span className="text-steel-400 group-open:rotate-180 transition-transform">▼</span>
                      </div>
                    </summary>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3 sm:p-4 border-t border-steel-100 dark:border-steel-800">`;

content = content.replace(search, replace);

// Now fix the closing tag
const searchEnd = `                          <input type="checkbox" checked={item.state} onChange={(e) => item.setter(e.target.checked)} style={{ display: 'none' }} />
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Analysis Table Accordion */}`;

const replaceEnd = `                          <input type="checkbox" checked={item.state} onChange={(e) => item.setter(e.target.checked)} style={{ display: 'none' }} />
                        </label>
                      ))}
                    </div>
                  </details>

                  {/* Detailed Analysis Table Accordion */}`;

content = content.replace(searchEnd, replaceEnd);

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Accessories fixed!');

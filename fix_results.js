const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

// 1. Change grid-cols-4 to grid-cols-5 for the main components
content = content.replace(/grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6/g, 'grid grid-cols-2 lg:grid-cols-5 gap-3 mb-4');

// 2. Wrap the accessories section in a details tag
const searchAcc = `<div style={{ background: 'var(--card, #fff)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border, #e2e8f0)', marginBottom: '2rem' }}>`;
const replaceAcc = `<details style={{ background: 'var(--card, #fff)', borderRadius: '12px', border: '1px solid var(--border, #e2e8f0)', marginBottom: '1rem', overflow: 'hidden' }}>
                    <summary style={{ padding: '1rem 1.5rem', background: 'var(--muted, #f8fafc)', borderBottom: '1px solid var(--border, #e2e8f0)', fontWeight: 600, fontSize: '0.9rem', color: 'inherit', cursor: 'pointer', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      Opsiyonel Donanımlar (Aksesuarlar) Ekle
                    </summary>
                    <div style={{ padding: '1.5rem' }}>`;
content = content.replace(searchAcc, replaceAcc);

// 3. Close the details tag properly for accessories (there's an extra div wrap)
// Let's find where the accessories div ends. It's before the Detailed Analysis Table Accordion.
const searchAccEnd = `</div>
                  </div>

                  {/* Detailed Analysis Table Accordion */}`;
const replaceAccEnd = `</div>
                    </div>
                  </details>

                  {/* Detailed Analysis Table Accordion */}`;
content = content.replace(searchAccEnd, replaceAccEnd);

// 4. Reduce margin bottom of Detailed Analysis details
content = content.replace(/marginBottom: '2rem'/g, "marginBottom: '1rem'");

// 5. Remove the huge headers inside accessories since it's now in the summary
content = content.replace(/<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>[\s\S]*?<\/div>/, '');

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Results panel fixed!');

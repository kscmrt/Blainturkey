const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

// Find the Gelişmiş Parametreler section
const searchStr = `<div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Sıcaklık (°C)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-sm text-steel-900" type="number" value={calcMaxAmbientTemp} onChange={(e) => setCalcMaxAmbientTemp(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Frekans (%)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-sm text-steel-900" type="number" value={calcTravelFactor} onChange={(e) => setCalcTravelFactor(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Viskozite</label>
                        <select className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-sm text-steel-900" value={calcOilViscosity} onChange={(e) => setCalcOilViscosity(e.target.value)}>
                          <option value="32">VG 32</option><option value="46">VG 46</option><option value="68">VG 68</option>
                        </select>
                      </div>`;

content = content.replace(searchStr, '');

// Also change the title from "GELİŞMİŞ PARAMETRELER & MEVCUT SİSTEM" to just "MEVCUT SİSTEM (REVİZYON) BİLGİLERİ"
content = content.replace(/Gelişmiş Parametreler & Mevcut Sistem/g, 'Mevcut Sistem (Revizyon) Bilgileri');

// Since we removed 3 items, the first item in that grid is now the "İki Parçalı" checkbox row. We can remove the `mt-2` margin.
content = content.replace(/<div className="col-span-2 sm:col-span-4 mt-2">/, '<div className="col-span-2 sm:col-span-4">');

// Also, let's make sure the grid looks good. Since it's only checkboxes and existing cylinder inputs, `grid-cols-2 sm:grid-cols-4` is still fine.

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Advanced parameters removed!');

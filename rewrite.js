const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

const newForm = `                <form onSubmit={handleCalculate} className="flex flex-col gap-4">
                  <div className="rounded-2xl border border-steel-200/60 bg-white p-4 sm:p-5 shadow-sm dark:border-steel-800/80 dark:bg-steel-900/50">
                    <h3 className="mb-4 text-sm font-bold text-steel-900 dark:text-white uppercase tracking-wider">Proje Parametreleri</h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3">
                      
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Kapasite (kg)</label>
                        <input className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcCapacity} onChange={(e) => setCalcCapacity(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Karkas Ağırlığı</label>
                        <input className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcCarcass} onChange={(e) => setCalcCarcass(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Kabin Hızı (m/s)</label>
                        <input className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required step="0.01" value={calcSpeed} onChange={(e) => setCalcSpeed(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Kalkış / Saat</label>
                        <select className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcStartsPerHour} onChange={(e) => setCalcStartsPerHour(e.target.value)}>
                          <option value="<5">&lt;5 (Düşük)</option>
                          <option value="5-15">5-15 (Orta)</option>
                          <option value="16-25">16-25 (Yüksek)</option>
                          <option value="26-35">26-35 (Çok)</option>
                          <option value="36+">36+ (Aşırı)</option>
                        </select>
                      </div>

                      <div className="col-span-2 sm:col-span-4 my-1 border-b border-steel-100"></div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Seyir Msf (mm)</label>
                        <input className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcTravel} onChange={(e) => setCalcTravel(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Tampon (mm)</label>
                        <input className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcBuffer} onChange={(e) => setCalcBuffer(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Son Kat (mm)</label>
                        <input className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcTopFloor} onChange={(e) => setCalcTopFloor(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Kuyu Dibi (mm)</label>
                        <input className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcPitDepth} onChange={(e) => setCalcPitDepth(e.target.value)} />
                      </div>

                      <div className="col-span-2 sm:col-span-4 my-1 border-b border-steel-100"></div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Askı Tipi</label>
                        <select className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcSuspension} onChange={(e) => setCalcSuspension(e.target.value as any)}>
                          <option value="1:1">1:1</option>
                          <option value="2:1">2:1</option>
                          <option value="4:1">4:1</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Halat Ağ. (kg)</label>
                        <input className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcRopeWeight} onChange={(e) => setCalcRopeWeight(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Piston Sayısı</label>
                        <select className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcCylinderCount} onChange={(e) => setCalcCylinderCount(e.target.value)}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Silindir Tipi</label>
                        <select className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcCylinderType} onChange={(e) => setCalcCylinderType(e.target.value)}>
                          <option value="standard">Standart</option>
                          <option value="telescopic">Teleskopik</option>
                        </select>
                      </div>

                      {calcCylinderType === 'telescopic' && (
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-bold text-steel-500 uppercase">Tel. Kademe</label>
                          <select className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcStages} onChange={(e) => setCalcStages(e.target.value)}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      )}

                    </div>
                  </div>

                  <details className="rounded-2xl border border-steel-200/60 bg-white p-3 shadow-sm cursor-pointer group">
                    <summary className="text-[12px] font-bold text-steel-900 outline-none select-none uppercase tracking-wider flex justify-between items-center">
                      Gelişmiş Parametreler
                      <span className="text-steel-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 mt-3 pt-3 border-t border-steel-100">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Sıcaklık (°C)</label>
                        <input className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900" type="number" value={calcMaxAmbientTemp} onChange={(e) => setCalcMaxAmbientTemp(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Viskozite</label>
                        <select className="w-full rounded-lg border border-steel-200 bg-steel-50/50 px-3 py-1.5 text-sm text-steel-900" value={calcOilViscosity} onChange={(e) => setCalcOilViscosity(e.target.value)}>
                          <option value="32">VG 32</option><option value="46">VG 46</option><option value="68">VG 68</option>
                        </select>
                      </div>
                    </div>
                  </details>

                  <button type="submit" className="w-full bg-steel-900 hover:bg-steel-800 text-white border-none py-3 rounded-xl text-base font-bold cursor-pointer transition-colors shadow-md mt-2">
                    Hesapla
                  </button>
                </form>`;

const startIndex = content.indexOf('<form onSubmit={handleCalculate}');
const endIndex = content.indexOf('</form>', startIndex) + '</form>'.length;
if(startIndex > -1 && endIndex > -1) {
  content = content.substring(0, startIndex) + newForm + content.substring(endIndex);
  fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
  console.log('Replaced form successfully!');
} else {
  console.error('Could not find form boundaries.');
}

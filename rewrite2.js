const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

const newForm = `                <form onSubmit={handleCalculate} className="flex flex-col gap-3">
                  <div className="rounded-2xl border border-steel-200/60 bg-white p-4 shadow-sm dark:border-steel-800/80 dark:bg-steel-900/50">
                    <h3 className="mb-3 text-[13px] font-bold text-steel-900 dark:text-white uppercase tracking-wider flex items-center justify-between">
                      Proje Parametreleri
                      <span className="text-[10px] text-steel-400 font-normal normal-case">Tüm alanları doldurunuz</span>
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-3">
                      
                      {/* Yük ve Performans */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Kapasite (kg)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcCapacity} onChange={(e) => setCalcCapacity(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Karkas (kg)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcCarcass} onChange={(e) => setCalcCarcass(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Kabin Hızı (m/s)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required step="0.01" value={calcSpeed} onChange={(e) => setCalcSpeed(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Kalkış / Saat</label>
                        <select className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcStartsPerHour} onChange={(e) => setCalcStartsPerHour(e.target.value)}>
                          <option value="<5">&lt;5 (Düşük)</option>
                          <option value="5-15">5-15 (Orta)</option>
                          <option value="16-25">16-25 (Yüksek)</option>
                          <option value="26-35">26-35 (Çok)</option>
                          <option value="36+">36+ (Aşırı)</option>
                        </select>
                      </div>

                      {/* Kuyu */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Seyir (mm)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcTravel} onChange={(e) => setCalcTravel(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Tampon (mm)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcBuffer} onChange={(e) => setCalcBuffer(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Son Kat (mm)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcTopFloor} onChange={(e) => setCalcTopFloor(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Kuyu Dibi (mm)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcPitDepth} onChange={(e) => setCalcPitDepth(e.target.value)} />
                      </div>

                      {/* Mekanik */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Askı Tipi</label>
                        <select className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcSuspension} onChange={(e) => setCalcSuspension(e.target.value as any)}>
                          <option value="1:1">1:1</option>
                          <option value="2:1">2:1</option>
                          <option value="4:1">4:1</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Montaj Yönü</label>
                        <select className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcMountingType} onChange={(e) => setCalcMountingType(e.target.value)}>
                          <option value="side">Yandan</option>
                          <option value="central">Merkezi</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Halat Ağ. (kg)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcRopeWeight} onChange={(e) => setCalcRopeWeight(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Sil. Sayısı</label>
                        <select className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcCylinderCount} onChange={(e) => setCalcCylinderCount(e.target.value)}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="4">4</option>
                        </select>
                      </div>

                      {/* Silindir Seçenekleri */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Silindir Tipi</label>
                        <select className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcCylinderType} onChange={(e) => setCalcCylinderType(e.target.value)}>
                          <option value="standard">Standart</option>
                          <option value="telescopic">Teleskopik</option>
                        </select>
                      </div>
                      
                      {calcCylinderType === 'telescopic' ? (
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-bold text-steel-500 uppercase">Tel. Kademe</label>
                          <select className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcStages} onChange={(e) => setCalcStages(e.target.value)}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-bold text-steel-500 uppercase">Yönetmelik</label>
                          <select className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={regulation} onChange={(e) => setRegulation(e.target.value as any)}>
                            <option value="machine">Makine</option>
                            <option value="en81">EN81</option>
                          </select>
                        </div>
                      )}

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Güç Ünitesi</label>
                        <select className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcPowerUnitCount} onChange={(e) => setCalcPowerUnitCount(e.target.value)}>
                          <option value="1">1 Adet</option>
                          <option value="2">2 Adet</option>
                        </select>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Bina Tipi (Ops.)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                      </div>

                    </div>
                  </div>

                  {/* Gelişmiş */}
                  <details className="rounded-2xl border border-steel-200/60 bg-white p-3 shadow-sm cursor-pointer group">
                    <summary className="text-[12px] font-bold text-steel-900 outline-none select-none uppercase tracking-wider flex justify-between items-center">
                      Gelişmiş Parametreler & Mevcut Sistem
                      <span className="text-steel-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-3 mt-3 pt-3 border-t border-steel-100">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Sıcaklık (°C)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900" type="number" value={calcMaxAmbientTemp} onChange={(e) => setCalcMaxAmbientTemp(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Frekans (%)</label>
                        <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900" type="number" value={calcTravelFactor} onChange={(e) => setCalcTravelFactor(e.target.value)} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-steel-500 uppercase">Viskozite</label>
                        <select className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900" value={calcOilViscosity} onChange={(e) => setCalcOilViscosity(e.target.value)}>
                          <option value="32">VG 32</option><option value="46">VG 46</option><option value="68">VG 68</option>
                        </select>
                      </div>

                      <div className="col-span-2 sm:col-span-4 mt-2">
                        <div className="flex flex-wrap gap-4">
                          {calcCylinderType !== 'telescopic' && (
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" checked={calcIsSplit} onChange={(e) => setCalcIsSplit(e.target.checked)} className="w-4 h-4 accent-steel-900" />
                              <span className="text-xs font-medium text-steel-700">İki Parçalı (Ekli)</span>
                            </label>
                          )}
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={calcIsExisting} onChange={(e) => setCalcIsExisting(e.target.checked)} className="w-4 h-4 accent-steel-900" />
                            <span className="text-xs font-medium text-steel-700">Mevcut Piston (Revizyon)</span>
                          </label>
                        </div>
                      </div>

                      {calcIsExisting && (
                        <>
                          <div className="flex flex-col gap-1">
                            <label className="text-[10px] font-bold text-steel-500 uppercase">Mevcut Çap (mm)</label>
                            <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900" type="number" required={calcIsExisting} value={calcExistingRam} onChange={(e) => setCalcExistingRam(e.target.value)} />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="text-[10px] font-bold text-steel-500 uppercase">Mevcut Et (mm)</label>
                            <input className="w-full rounded border border-steel-200 bg-steel-50/50 px-2.5 py-1.5 text-xs text-steel-900" type="number" required={calcIsExisting} value={calcExistingThickness} onChange={(e) => setCalcExistingThickness(e.target.value)} />
                          </div>
                        </>
                      )}
                    </div>
                  </details>

                  <button type="submit" className="w-full bg-steel-900 hover:bg-steel-800 text-white border-none py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-colors shadow-md mt-1">
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

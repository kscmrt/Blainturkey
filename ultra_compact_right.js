const fs = require('fs');
let content = fs.readFileSync('src/app/portal/calculator/page.tsx', 'utf8');

// 1. Remove the long description paragraph
content = content.replace(/<p className="text-steel-600 dark:text-steel-400 mb-4 text-sm">Mühendislik hesaplamaları tamamlandı. Sisteminiz için en uygun ve güvenli komponentler aşağıda listelenmiştir.<\/p>/, '');

// 2. Make the "Önerilen Ana Komponentler" title smaller
content = content.replace(/<h3 className="text-lg sm:text-xl font-semibold mb-4 text-steel-900 dark:text-white">Önerilen Ana Komponentler<\/h3>/, '<h3 className="text-sm font-semibold mb-2 text-steel-900 dark:text-white">Önerilen Ana Komponentler</h3>');

// 3. Ultra-compact cards!
// Find the grid-cols-5 div
const cardsStart = content.indexOf('<div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-4">');
const cardsEnd = content.indexOf('{/* Component Selections */}');
if (cardsStart !== -1 && cardsEnd !== -1) {
  const newCards = `<div className="grid grid-cols-5 gap-2 mb-4">
                    {/* 1. Cylinder Card */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-lg shadow-sm border border-steel-200/60 dark:border-steel-800/60">
                      <div className="text-[9px] uppercase tracking-wider text-steel-500 mb-0.5">Piston</div>
                      <div className="text-sm font-bold text-steel-900 dark:text-white">
                        {calcCylinderType === 'telescopic' ? (calcResult?.type || \`T\${calcStages}-\${calcCylDiameter}...\`) : \`Ø\${calcCylDiameter}x\${calcCylThickness}\`}
                      </div>
                      <div className="text-[10px] text-steel-500">{calcCylinderCount} Adet</div>
                    </div>

                    {/* 2. Pump Card */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-lg shadow-sm border border-steel-200/60 dark:border-steel-800/60">
                      <div className="text-[9px] uppercase tracking-wider text-steel-500 mb-0.5">Pompa</div>
                      <div className="text-sm font-bold text-steel-900 dark:text-white">
                        {recommendedPump}
                      </div>
                      <div className="text-[10px] text-steel-500">{calcResult.pumpFlow} L/dk</div>
                    </div>

                    {/* 3. Motor Card */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-lg shadow-sm border border-steel-200/60 dark:border-steel-800/60">
                      <div className="text-[9px] uppercase tracking-wider text-steel-500 mb-0.5">Motor</div>
                      <div className="text-sm font-bold text-steel-900 dark:text-white">
                        {recommendedMotor} kW
                      </div>
                      <div className="text-[10px] text-steel-500">{calcResult.motorPowerReq} kW</div>
                    </div>

                    {/* 4. Valve Card */}
                    <div className="flex flex-col items-center text-center bg-steel-900 text-white p-2 rounded-lg shadow-sm border border-steel-800">
                      <div className="text-[9px] uppercase tracking-wider text-steel-400 mb-0.5">Valf</div>
                      <div className="text-sm font-bold text-white">
                        {Number(calcResult?.pumpFlow || 0) < 125 ? 'EV100 3/4"' : Number(calcResult?.pumpFlow || 0) <= 800 ? 'EV100 1.5"' : 'EV100 2.5"'}
                      </div>
                      <div className="text-[10px] text-steel-300">Entegre</div>
                    </div>

                    {/* 5. Tank Card */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-lg shadow-sm border border-steel-200/60 dark:border-steel-800/60">
                      <div className="text-[9px] uppercase tracking-wider text-steel-500 mb-0.5">Tank</div>
                      <div className="text-sm font-bold text-steel-900 dark:text-white">
                        {recommendedPowerUnit ? recommendedPowerUnit.model : "Özel"}
                      </div>
                      <div className="text-[10px] text-steel-500">Strok {calcResult.stroke}</div>
                    </div>
                  </div>
                  
                  `;
  content = content.substring(0, cardsStart) + newCards + content.substring(cardsEnd);
}

// 4. Ultra-compact accessories!
// Find from {/* Component Selections */} to {/* Detailed Analysis Table Accordion */}
const accStart = content.indexOf('{/* Component Selections */}');
const accEnd = content.indexOf('{/* Detailed Analysis Table Accordion */}');
if (accStart !== -1 && accEnd !== -1) {
  const newAcc = `{/* Component Selections */}
                  <details className="mb-3 bg-white dark:bg-steel-900 rounded-lg border border-steel-200/60 dark:border-steel-800/60 shadow-sm overflow-hidden group">
                    <summary className="flex items-center justify-between p-2.5 cursor-pointer outline-none bg-steel-50/50 dark:bg-steel-800/30 text-sm font-semibold text-steel-900 dark:text-white">
                      <span>Opsiyonel Donanımlar (Aksesuarlar)</span>
                      <span className="text-steel-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-3 border-t border-steel-100 dark:border-steel-800">
                      <div className="flex flex-wrap gap-2">
                        {[
                          { id: 'handpump', label: 'El Pompası', state: calcHandPump, setter: setCalcHandPump },
                          { id: 'ballvalve', label: 'Küresel Vana', state: calcBallValve, setter: setCalcBallValve },
                          { id: 'rupture', label: 'Boru Patlama Valfi', state: calcRuptureValve, setter: setCalcRuptureValve },
                          { id: 'a3', label: 'A3 Valfi (U33)', state: calcA3Valve, setter: setCalcA3Valve },
                          { id: 'lowpress', label: 'Alçak Basınç Şalteri', state: calcLowPressure, setter: setCalcLowPressure },
                          { id: 'highpress', label: 'Yüksek Basınç Şalteri', state: calcHighPressure, setter: setCalcHighPressure },
                          { id: 'overload', label: 'Aşırı Yük Şalteri', state: calcOverload, setter: setCalcOverload },
                          { id: 'heater', label: 'Yağ Isıtıcı', state: calcHeater, setter: setCalcHeater },
                          { id: 'micro', label: 'Mikro Seviyeleme', state: calcMicroLevel, setter: setCalcMicroLevel }
                        ].map((item) => (
                          <label key={item.id} className="flex items-center gap-1.5 cursor-pointer bg-steel-50 dark:bg-steel-800/50 px-2.5 py-1.5 rounded border border-steel-200 dark:border-steel-700 hover:bg-steel-100 transition-colors">
                            <input type="checkbox" checked={item.state} onChange={(e) => item.setter(e.target.checked)} className="w-3.5 h-3.5 accent-brand-600" />
                            <span className="text-[11px] font-medium text-steel-700 dark:text-steel-300">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </details>
                  
                  `;
  content = content.substring(0, accStart) + newAcc + content.substring(accEnd);
}

// 5. Detailed Analysis Table - Make it smaller
const analysisStart = content.indexOf('{/* Detailed Analysis Table Accordion */}');
const analysisEnd = content.indexOf('<button onClick={() => setShowContactModal(true)}');
if (analysisStart !== -1 && analysisEnd !== -1) {
  const newAnalysis = `{/* Detailed Analysis Table Accordion */}
                  <details className="mb-3 bg-white dark:bg-steel-900 rounded-lg border border-steel-200/60 dark:border-steel-800/60 shadow-sm overflow-hidden group">
                    <summary className="flex items-center justify-between p-2.5 cursor-pointer outline-none bg-steel-50/50 dark:bg-steel-800/30 text-sm font-semibold text-steel-900 dark:text-white">
                      <span>Teknik Parametreleri ve Analiz Detaylarını Göster</span>
                      <span className="text-steel-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-3 border-t border-steel-100 dark:border-steel-800 text-xs">
                      <div className="flex justify-between border-b border-steel-100 pb-1">
                        <span className="text-steel-500">Piston Ağırlığı:</span>
                        <span className="font-semibold">{calcResult.ramWeight} kg</span>
                      </div>
                      <div className="flex justify-between border-b border-steel-100 pb-1">
                        <span className="text-steel-500">Boş Basınç:</span>
                        <span className="font-semibold">{calcResult.pressureEmpty} Bar</span>
                      </div>
                      <div className="flex justify-between border-b border-steel-100 pb-1">
                        <span className="text-steel-500">Gerçek Hız:</span>
                        <span className="font-semibold">{Number(calcResult.actualSpeed || calcSpeed).toFixed(2)} m/s</span>
                      </div>
                      <div className="flex justify-between border-b border-steel-100 pb-1">
                        <span className="text-steel-500">Dinamik Basınç:</span>
                        <span className="font-semibold">{calcResult.dynamicPressure} Bar</span>
                      </div>
                      <div className="flex justify-between border-b border-steel-100 pb-1">
                        <span className="text-steel-500">Kapalı Boy:</span>
                        <span className="font-semibold">{calcResult.closedLen} mm</span>
                      </div>
                    </div>
                  </details>
                  
                  `;
  content = content.substring(0, analysisStart) + newAnalysis + content.substring(analysisEnd);
}

// 6. Reduce paddings on the main right panel
content = content.replace(/<div className="bg-white dark:bg-steel-900 rounded-3xl p-4 sm:p-5 shadow-xl border border-steel-200\/60 dark:border-steel-800\/80 w-full min-h-\[300px\]">/, '<div className="bg-white dark:bg-steel-900 rounded-2xl p-4 shadow-xl border border-steel-200/60 dark:border-steel-800/80 w-full">');

// Reduce button padding
content = content.replace(/padding: '1.25rem'/g, "padding: '0.75rem'");

fs.writeFileSync('src/app/portal/calculator/page.tsx', content, 'utf8');
console.log('Right panel completely redesigned to ultra compact mode!');

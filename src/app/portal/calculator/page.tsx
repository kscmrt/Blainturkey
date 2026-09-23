'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { RAW_POWER_UNITS, RAW_MOTORS, RAW_PUMPS } from '@/lib/catalogData';

export default function CalculatorPage() {
  const [calcCapacity, setCalcCapacity] = useState('');
  const [calcCarcass, setCalcCarcass] = useState('');
  const [calcTravel, setCalcTravel] = useState(''); // mm
  const [calcSpeed, setCalcSpeed] = useState('');
  const [calcSuspension, setCalcSuspension] = useState<'1:1' | '2:1' | '4:1'>('2:1');
  const [calcCylDiameter, setCalcCylDiameter] = useState('100');
  const [calcCylThickness, setCalcCylThickness] = useState('5');
  const [calcResult, setCalcResult] = useState<any>(null);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [isCalculatingPrice, setIsCalculatingPrice] = useState(false);
  
  // Comprehensive Calculator States
  const [calcStartsPerHour, setCalcStartsPerHour] = useState('<5');
  const [calcPitDepth, setCalcPitDepth] = useState(''); // mm
  const [calcTopFloor, setCalcTopFloor] = useState(''); // mm
  const [calcBuffer, setCalcBuffer] = useState(''); // mm
  const [calcMountingType, setCalcMountingType] = useState('side');
  const [calcCylinderCount, setCalcCylinderCount] = useState('1');
  const [calcCylinderType, setCalcCylinderType] = useState('standard');
  const [calcStages, setCalcStages] = useState('2');
  const [calcRopeWeight, setCalcRopeWeight] = useState('');
  // Advanced & Extra CRM fields
  const [calcPowerUnitCount, setCalcPowerUnitCount] = useState('1');
  const [calcMaxAmbientTemp, setCalcMaxAmbientTemp] = useState('');
  const [calcTravelFactor, setCalcTravelFactor] = useState('');
  const [calcOilViscosity, setCalcOilViscosity] = useState('46');
  const [calcIsSplit, setCalcIsSplit] = useState(false);
  const [calcIsExisting, setCalcIsExisting] = useState(false);
  const [calcExistingRam, setCalcExistingRam] = useState('');
  const [calcExistingThickness, setCalcExistingThickness] = useState('');
  const [calcProjectNote, setCalcProjectNote] = useState('');
  
  // Accessories State
  const [calcUserValve, setCalcUserValve] = useState('');
  const [calcHandPump, setCalcHandPump] = useState(false);
  const [calcBallValve, setCalcBallValve] = useState(false);
  const [calcRuptureValve, setCalcRuptureValve] = useState(false);
  const [calcA3Valve, setCalcA3Valve] = useState(false);
  const [calcLowPressure, setCalcLowPressure] = useState(false);
  const [calcHighPressure, setCalcHighPressure] = useState(false);
  const [calcOverload, setCalcOverload] = useState(false);
  const [calcHeater, setCalcHeater] = useState(false);
  const [calcMicroLevel, setCalcMicroLevel] = useState(false);
  const [regulation, setRegulation] = useState<'machine' | 'en81'>('machine');
  const [companyName, setCompanyName] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  
    const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    // Dynamically import the calculator logic so it doesn't block initial page load
    const calc = await import('@/lib/calculator');
    
    const inputs = {
      capacity: Number(calcCapacity),
      carcassWeight: Number(calcCarcass),
      travelDistance: Number(calcTravel),
      buffer: Number(calcBuffer),
      pitDepth: Number(calcPitDepth),
      topFloor: Number(calcTopFloor),
      cylinderCount: Number(calcCylinderCount),
      powerUnitCount: Number(calcPowerUnitCount),
      suspension: calcSuspension as any,
      speed: Number(calcSpeed),
      mountingType: calcMountingType as 'side' | 'central',
      cylinderType: calcCylinderType as any,
      stages: Number(calcStages),
      ropeWeight: Number(calcRopeWeight),
      buildingType: calcStartsPerHour,
      isSplit: calcIsSplit,
      isExisting: calcIsExisting,
      existingRamDiameter: Number(calcExistingRam),
      existingWallThickness: Number(calcExistingThickness),
      maxAmbientTemp: Number(calcMaxAmbientTemp),
      travelFactor: Number(calcTravelFactor),
      oilViscosity: calcOilViscosity,
    };
    
    let bestResult = null;
    let selectedCyl: any = { d: 100, t: 5 };
    try {
      const res = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputs })
      });
      const data = await res.json();
      
      if (data.error) {
        alert("API Hatası: " + data.error + "\n(Vercel Environment Variables ayarlanmamış veya geçerli değil olabilir. Ayarları ekledikten sonra Vercel'den 'Redeploy' yapmayı unutmayın!)");
        return;
      }

      if (data.options && data.options.length > 0) {
        if (data.isTelescopic) {
          // Find the first viable option
          const viableOptions = data.options.filter((opt: any) => opt.isViable && opt.pressureEmpty >= 8 && opt.pressureFull <= (opt.pressureLimit || 59));
          const bestOpt = viableOptions.length > 0 ? viableOptions[0] : data.options[data.options.length - 1]; // Fallback
          
          bestResult = {
            type: `Teleskopik ${bestOpt.model} (${bestOpt.stages} Kademe) - ${bestOpt.stability}`,
            isTelescopic: true,
            isBucklingSafe: bestOpt.isViable,
            staticPressure: bestOpt.pressureFull.toFixed(1),
            oilVolume: bestOpt.oilVolume.toFixed(1),
            actualSpeed: bestOpt.actualSpeed,
            pumpFlow: bestOpt.selectedPumpFlow?.toFixed(1) || bestOpt.requiredFlowPerUnit?.toFixed(1) || 0,
            motorPowerReq: bestOpt.requiredMotorPower?.toFixed(1) || 0,
            usageFactors: bestOpt.usageFactors,
            milCap: `T${bestOpt.stages}-${bestOpt.diameter}`,
            warnings: bestOpt.isViable ? [] : [bestOpt.reason],
          };
          selectedCyl = { d: bestOpt.diameter, t: 5 }; // Mock t since it's not used
        } else {
          // Standard Cylinder Options
          const viableOptions = data.options.filter((opt: any) => {
            const isPressureSafe = !opt.warnings?.some((w: string) => w.includes("COAM katalog sınırını"));
            return opt.isViable && isPressureSafe;
          });
          const bestOpt = viableOptions.length > 0 ? viableOptions[0] : data.options.filter((opt: any) => opt.isViable)[0] || data.options[data.options.length - 1]; // Fallback

          bestResult = bestOpt;
          selectedCyl = { d: bestOpt.originalSpec.d, t: bestOpt.originalSpec.t };
        }
      }
    } catch (err) {
      console.error("Calculation error:", err);
    }

    setCalcCylDiameter(selectedCyl.d.toString());
    setCalcCylThickness(selectedCyl.t.toString());
    setCalcResult(bestResult);
    
    // Auto-recommend valve
    const pFlow = Number(bestResult?.pumpFlow || 0);
    const recommendedValve = pFlow < 125 ? 'EV100 3/4"' : pFlow <= 800 ? 'EV100 1.5"' : 'EV100 2.5"';
    setCalcUserValve(recommendedValve);

    // Fetch live estimated price from CRM
    setIsCalculatingPrice(true);
    setEstimatedPrice(null);
    try {
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || 'https://portal.blainturkey.com.tr';
      
      const priceReq = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectData: {
            calculationResult: bestResult,
            cylinderCount: Number(calcCylinderCount),
            powerUnitCount: Number(calcPowerUnitCount),
            isExisting: calcIsExisting,
            accessoriesFlags: {
              handPump: calcHandPump,
              ballValve: calcBallValve,
              ruptureValve: calcRuptureValve,
              a3Valve: calcA3Valve,
              lowPressure: calcLowPressure,
              highPressure: calcHighPressure,
              overload: calcOverload,
              heater: calcHeater,
              microLevel: calcMicroLevel
            }
          }
        })
      });
      if (priceReq.ok) {
        const priceData = await priceReq.json();
        setEstimatedPrice(priceData.customerTotal);
      }
    } catch (e) {
      console.warn("Could not fetch estimated price", e);
    } finally {
      setIsCalculatingPrice(false);
    }
  };
  const powerUnitsList = useMemo(() => RAW_POWER_UNITS.map(u => ({
    model: u.tank_model,
    dead_zone: Number(u.dead_zone),
    total_oil: Number(u.total_oil),
    min_pump: Number(u.min_pump_size),
    max_pump: Number(u.max_pump_size),
    min_motor: Number(u.min_motor_size),
    max_motor: Number(u.max_motor_size)
  })).sort((a, b) => a.total_oil - b.total_oil), []);

  const standardMotors = useMemo(() => [...new Set(RAW_MOTORS.map(m => Number(m.power_kw)))].sort((a, b) => a - b), []);
  const standardPumps = useMemo(() => RAW_PUMPS.map(p => ({
    desc: `SEIM PA ${p.flow_rate}`, // CRM ile birebir aynı isimlendirme
    flow: Number(p.flow_rate)
  })).sort((a, b) => a.flow - b.flow), []);

  let recommendedPowerUnit: any = null;
  let recommendedMotor: any = null;
  let recommendedPump: any = null;
  
  if (calcResult) {
    const reqOil = calcResult.oilVolume;
    const reqPump = Number(calcResult.pumpFlow);
    const reqMotor = Number(calcResult.motorPowerReq);
    
    recommendedMotor = standardMotors.find(m => m >= reqMotor) || reqMotor;
    recommendedPump = standardPumps.find(p => p.flow >= reqPump)?.desc || `${reqPump} L/dk`;

    recommendedPowerUnit = powerUnitsList.find(unit => 
      (unit.total_oil - unit.dead_zone) >= reqOil &&
      reqPump >= unit.min_pump && reqPump <= unit.max_pump &&
      recommendedMotor >= unit.min_motor && recommendedMotor <= unit.max_motor
    ) || powerUnitsList.find(unit => 
      (unit.total_oil - unit.dead_zone) >= reqOil &&
      reqPump >= unit.min_pump && reqPump <= unit.max_pump
    ) || powerUnitsList.find(unit => (unit.total_oil - unit.dead_zone) >= reqOil);
  }


  
  return (
    <div className="min-h-[calc(100vh-80px)] bg-steel-50 text-steel-900 dark:bg-steel-950 dark:text-steel-100 flex items-start justify-center font-sans py-4 sm:py-6">
      <div className="w-full max-w-[1350px] px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-steel-900 dark:text-white">
            Teknik Hesaplama.
          </h2>
          <Link href="/portal" className="group flex items-center gap-1.5 text-sm font-semibold text-steel-500 transition-colors hover:text-indigo-600 dark:text-steel-400 dark:hover:text-indigo-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Geri Dön
          </Link>
        </div>
        

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch relative w-full">
          
          <div className="xl:col-span-5 w-full">
                                            <form onSubmit={handleCalculate} className="flex flex-col gap-3 h-full justify-between">
                  <div className="rounded-[24px] border border-steel-100 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-steel-800/80 dark:bg-steel-900/50">
                    <h3 className="mb-3 text-[13px] font-bold text-steel-900 dark:text-white uppercase tracking-wider flex items-center justify-between">
                      Proje Parametreleri
                      <span className="text-[10px] text-steel-400 font-normal normal-case">Tüm alanları doldurunuz</span>
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-3">
                      
                      {/* Yük ve Performans */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Kapasite (kg)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcCapacity} onChange={(e) => setCalcCapacity(e.target.value)} placeholder="Örn: 630" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Karkas (kg)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcCarcass} onChange={(e) => setCalcCarcass(e.target.value)} placeholder="Örn: 500" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Kabin Hızı (m/s)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required step="0.01" value={calcSpeed} onChange={(e) => setCalcSpeed(e.target.value)} placeholder="Örn: 0,63" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Kalkış / Saat</label>
                        <select className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcStartsPerHour} onChange={(e) => setCalcStartsPerHour(e.target.value)}>
                          <option value="<5">&lt;5 (Düşük)</option>
                          <option value="5-15">5-15 (Orta)</option>
                          <option value="16-25">16-25 (Yüksek)</option>
                          <option value="26-35">26-35 (Çok)</option>
                          <option value="36+">36+ (Aşırı)</option>
                        </select>
                      </div>

                      {/* Kuyu */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Seyir (mm)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcTravel} onChange={(e) => setCalcTravel(e.target.value)} placeholder="Örn: 15000" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Tampon (mm)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcBuffer} onChange={(e) => setCalcBuffer(e.target.value)} placeholder="Örn: 100" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Son Kat (mm)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcTopFloor} onChange={(e) => setCalcTopFloor(e.target.value)} placeholder="Örn: 3500" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Kuyu Dibi (mm)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcPitDepth} onChange={(e) => setCalcPitDepth(e.target.value)} placeholder="Örn: 1200" />
                      </div>

                      {/* Mekanik */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Askı Tipi</label>
                        <select className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcSuspension} onChange={(e) => setCalcSuspension(e.target.value as any)}>
                          <option value="1:1">1:1</option>
                          <option value="2:1">2:1</option>
                          <option value="4:1">4:1</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Montaj Yönü</label>
                        <select className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcMountingType} onChange={(e) => setCalcMountingType(e.target.value)}>
                          <option value="side">Yandan</option>
                          <option value="central">Merkezi</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Halat Ağ. (kg)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="number" required value={calcRopeWeight} onChange={(e) => setCalcRopeWeight(e.target.value)} placeholder="Örn: 50" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Sil. Sayısı</label>
                        <select className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcCylinderCount} onChange={(e) => setCalcCylinderCount(e.target.value)}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="4">4</option>
                        </select>
                      </div>

                      {/* Silindir Seçenekleri */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Silindir Tipi</label>
                        <select className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcCylinderType} onChange={(e) => setCalcCylinderType(e.target.value)}>
                          <option value="standard">Standart</option>
                          <option value="telescopic">Teleskopik</option>
                        </select>
                      </div>
                      
                      {calcCylinderType === 'telescopic' ? (
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Tel. Kademe</label>
                          <select className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcStages} onChange={(e) => setCalcStages(e.target.value)}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Yönetmelik</label>
                          <select className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={regulation} onChange={(e) => setRegulation(e.target.value as any)}>
                            <option value="machine">Makine</option>
                            <option value="en81">EN81</option>
                          </select>
                        </div>
                      )}

                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Güç Ünitesi</label>
                        <select className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" required value={calcPowerUnitCount} onChange={(e) => setCalcPowerUnitCount(e.target.value)}>
                          <option value="1">1 Adet</option>
                          <option value="2">2 Adet</option>
                        </select>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Bina Tipi (Ops.)</label>
                        <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900 focus:border-blue-500 focus:bg-white focus:outline-none" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                      </div>

                    </div>
                  </div>

                  {/* Gelişmiş */}
                  <details className="rounded-[20px] border border-steel-100 bg-white p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] cursor-pointer group">
                    <summary className="text-[12px] font-bold text-steel-900 outline-none select-none uppercase tracking-wider flex justify-between items-center">
                      Mevcut Sistem (Revizyon) Bilgileri
                      <span className="text-steel-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-3 mt-3 pt-3 border-t border-steel-100">
                      

                      <div className="col-span-2 sm:col-span-4">
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
                            <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Mevcut Çap (mm)</label>
                            <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900" type="number" required={calcIsExisting} value={calcExistingRam} onChange={(e) => setCalcExistingRam(e.target.value)} />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="text-[9px] font-semibold text-steel-400 uppercase tracking-widest">Mevcut Et (mm)</label>
                            <input className="w-full rounded-xl border border-steel-100 bg-steel-50/80 px-3 py-2 transition-all focus:ring-4 focus:ring-blue-500/10 text-xs text-steel-900" type="number" required={calcIsExisting} value={calcExistingThickness} onChange={(e) => setCalcExistingThickness(e.target.value)} />
                          </div>
                        </>
                      )}
                    </div>
                  </details>

                  <button type="submit" className="w-full bg-steel-900 hover:bg-steel-800 text-white border-none py-2.5 rounded-[16px] text-sm font-semibold cursor-pointer transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 mt-2">
                    Hesapla
                  </button>
                </form>

          </div>
          
          <div className="xl:col-span-7 w-full sticky top-4">
            <div className="bg-white dark:bg-steel-900 rounded-3xl p-4 sm:p-5 shadow-xl border border-steel-200/60 dark:border-steel-800/80 w-full min-h-[400px]">
              {!calcResult ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-60 m-auto mt-16">
                  <div className="w-20 h-20 mb-6 bg-steel-100 dark:bg-steel-800 rounded-full flex items-center justify-center text-steel-400">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-steel-800 dark:text-steel-200 mb-2">Sistem Hesaplaması Bekleniyor</h3>
                  <p className="text-sm text-steel-500 max-w-sm">
                    Tüm değerleri sol taraftan yapılandırıp "Hesapla" butonuna bastığınızda, mühendislik onaylı valf, motor, debi ve piston sonuçlarına ulaşacaksınız.
                  </p>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                  <div style={{ animation: 'fadeUp 0.6s ease' }}>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold m-0 tracking-tight text-steel-900 dark:text-white">Projenize Özel Konfigürasyon</h2>
                    
                  </div>
                  
                  


                  {/* Estimated Price Banner removed as per user request */}

                  {/* Top Recommended Components */}
                  <h3 className="text-sm font-semibold mb-2 text-steel-900 dark:text-white">Önerilen Ana Komponentler</h3>
                  <div className={`grid ${calcIsExisting ? "grid-cols-4" : "grid-cols-5"} gap-2 mb-4`}>
                    {/* 1. Cylinder Card */}
                    {!calcIsExisting && (
                      <div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-steel-100 dark:border-steel-800/60">
                        <div className="text-[9px] uppercase tracking-wider text-steel-500 mb-0.5">Piston</div>
                        <div className="text-sm font-bold text-steel-900 dark:text-white">
                          {calcCylinderType === 'telescopic' ? (calcResult?.type || `T${calcStages}-${calcCylDiameter}...`) : `Ø${calcCylDiameter}x${calcCylThickness}x${calcResult?.stroke || ''}`}
                        </div>
                        <div className="text-[10px] text-steel-500">{calcCylinderCount} Adet</div>
                      </div>
                    )}

                    {/* 2. Pump Card */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-steel-100 dark:border-steel-800/60">
                      <div className="text-[9px] uppercase tracking-wider text-steel-500 mb-0.5">Pompa</div>
                      <div className="text-sm font-bold text-steel-900 dark:text-white">
                        {recommendedPump}
                      </div>
                      <div className="text-[10px] text-steel-500">{calcResult.pumpFlow} L/dk</div>
                    </div>

                    {/* 3. Motor Card */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-steel-100 dark:border-steel-800/60">
                      <div className="text-[9px] uppercase tracking-wider text-steel-500 mb-0.5">Motor</div>
                      <div className="text-sm font-bold text-steel-900 dark:text-white">
                        {recommendedMotor} kW
                      </div>
                      <div className="text-[10px] text-steel-500">{calcResult.motorPowerReq} kW</div>
                    </div>

                    {/* 4. Valve Card */}
                    <div className="flex flex-col items-center text-center bg-steel-900 text-white p-2 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.2)] border border-steel-800">
                      <div className="text-[9px] uppercase tracking-wider text-steel-400 mb-0.5">Valf</div>
                      <div className="text-sm font-bold text-white">
                        {Number(calcResult?.pumpFlow || 0) < 125 ? 'EV100 3/4"' : Number(calcResult?.pumpFlow || 0) <= 800 ? 'EV100 1.5"' : 'EV100 2.5"'}
                      </div>
                      <div className="text-[10px] text-steel-300">Entegre</div>
                    </div>

                    {/* 5. Tank Card */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-steel-900 p-2 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-steel-100 dark:border-steel-800/60">
                      <div className="text-[9px] uppercase tracking-wider text-steel-500 mb-0.5">Tank</div>
                      <div className="text-sm font-bold text-steel-900 dark:text-white">
                        {recommendedPowerUnit ? recommendedPowerUnit.model : "Özel"}
                      </div>
                      <div className="text-[10px] text-steel-500">1 Adet</div>
                    </div>
                  </div>
                  
                  {/* Component Selections */}
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
                          <label key={item.id} className="flex items-center gap-1.5 cursor-pointer bg-steel-50 dark:bg-steel-800/50 px-2.5 py-1.5 rounded-lg border border-steel-100 dark:border-steel-700 hover:bg-steel-100/50 hover:border-steel-200 transition-all transition-colors">
                            <input type="checkbox" checked={item.state} onChange={(e) => item.setter(e.target.checked)} className="w-3.5 h-3.5 accent-brand-600" />
                            <span className="text-[11px] font-medium text-steel-700 dark:text-steel-300">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </details>
                  
                  {/* Detailed Analysis Table Accordion */}
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
                  
                  <button onClick={() => setShowContactModal(true)} className="w-full bg-steel-900 hover:bg-steel-800 text-white border-none py-3 rounded-[16px] text-sm font-semibold cursor-pointer transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">Bu Konfigürasyon ile Resmi Teklif İste</button>
                </div>


                </div>
              )}
            </div>
          </div>
          
        </div>
        {showContactModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-steel-900/60 backdrop-blur-sm">
            <div className="w-full max-w-[500px] rounded-3xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 dark:bg-steel-900">
              <h3 className="mb-2 text-2xl font-bold text-steel-900 dark:text-white">İletişim Bilgileri</h3>
              <p className="mb-6 text-sm text-steel-500 dark:text-steel-400">
                Teklifin size ulaşabilmesi ve projenin CRM sistemine kaydedilebilmesi için lütfen bilgilerinizi girin.
              </p>
              
              <form onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmittingQuote(true);
                try {
                  const payload = {
                    contactInfo: { companyName: contactCompany, contactName, email: contactEmail, phone: contactPhone },
                    projectData: {
                      capacity: Number(calcCapacity), carcassWeight: Number(calcCarcass), travelDistance: Number(calcTravel) * 1000,
                      buffer: Number(calcBuffer), pitDepth: Number(calcPitDepth), topFloor: Number(calcTopFloor),
                      cylinderCount: Number(calcCylinderCount), suspension: calcSuspension, speed: Number(calcSpeed),
                      mountingType: calcMountingType, cylinderType: calcCylinderType, stages: Number(calcStages),
                      ropeWeight: Number(calcRopeWeight), buildingType: calcStartsPerHour, calculationResult: calcResult,
                      selectedCylinder: { d: calcCylDiameter, t: calcCylThickness },
                      powerUnitCount: Number(calcPowerUnitCount),
                      maxAmbientTemp: calcMaxAmbientTemp ? Number(calcMaxAmbientTemp) : undefined,
                      travelFactor: calcTravelFactor ? Number(calcTravelFactor) : undefined,
                      oilViscosity: calcOilViscosity,
                      isSplit: calcIsSplit,
                      isExisting: calcIsExisting,
                      existingRamDiameter: calcExistingRam ? Number(calcExistingRam) : undefined,
                      existingWallThickness: calcExistingThickness ? Number(calcExistingThickness) : undefined,
                      projectNote: calcProjectNote,
                      accessoriesFlags: {
                        handPump: calcHandPump, ballValve: calcBallValve, ruptureValve: calcRuptureValve,
                        a3Valve: calcA3Valve, lowPressure: calcLowPressure, highPressure: calcHighPressure,
                        overload: calcOverload, heater: calcHeater, microLevel: calcMicroLevel
                      }
                    }
                  };
                  
                  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
                  const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || (isLocalhost ? 'http://localhost:3000' : 'https://portal.blainturkey.com.tr'); 
                  
                  try {
                    await fetch(`${apiUrl}/api/external-quotes`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload)
                    });
                  } catch (e) {
                    console.error("API Error", e);
                  }

                  const accessories = [];
                  if (calcHandPump) accessories.push('El Pompası');
                  if (calcBallValve) accessories.push('Küresel Vana');
                  if (calcRuptureValve) accessories.push('Boru Kırılma Valfi');
                  if (calcA3Valve) accessories.push('A3 Güvenlik Valfi');
                  if (calcLowPressure) accessories.push('Alçak Basınç Şalteri');
                  if (calcHighPressure) accessories.push('Yüksek Basınç Şalteri');
                  if (calcOverload) accessories.push('Aşırı Yük Şalteri');
                  if (calcHeater) accessories.push('Yağ Isıtıcı');
                  if (calcMicroLevel) accessories.push('Mikro Seviyeleme');

                  const pFlow = Number(calcResult?.pumpFlow || 0);
                  const recommendedValve = pFlow < 125 ? 'EV100 3/4"' : pFlow <= 800 ? 'EV100 1.5"' : 'EV100 2.5"';
                  
                  const message = `*Proje Konfigürasyon Onayı*\n\n` +
                    `Sistem üzerinden teknik teklif talebimi ilettim (Firma: ${contactCompany}). Hızlı iletişim için WhatsApp'tan yazıyorum.\n\n` +
                    `*-- ONAYLANAN KOMPONENTLER --*\n` +
                    `Kapasite: ${calcCapacity} kg (${calcSpeed} m/s, ${calcTravel} m)\n` +
                    `Valf Seçimi: ${recommendedValve}\n` +
                    `Motor Gücü: ${calcResult.motorPowerReq} kW\n` +

                    `Piston: Ø${calcCylDiameter}x${calcCylThickness} mm\n` +
                    `Aksesuarlar: ${accessories.length > 0 ? accessories.join(', ') : 'Yok'}\n\n` +
                    `*-- TEKNİK ONAY --*\n` +
                    `Durum: ${calcResult.isBucklingSafe ? 'Güvenli (Onaylandı)' : 'Riskli (İnceleme Gerekli)'}`;
                    
                  window.open(`https://wa.me/905424862821?text=${encodeURIComponent(message)}`, '_blank');
                } catch(err) {
                  alert("Bir hata oluştu.");
                } finally {
                  setIsSubmittingQuote(false);
                  setShowContactModal(false);
                }
              }} className="flex flex-col gap-5">
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Firma Adı</label>
                  <input type="text" required value={contactCompany} onChange={(e) => setContactCompany(e.target.value)} className="w-full rounded-xl border border-steel-200 bg-steel-50 px-4 py-3 text-sm text-steel-900 outline-none focus:border-brand-500 focus:bg-white dark:border-steel-700 dark:bg-steel-800 dark:text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-steel-700 dark:text-steel-300">Yetkili Kişi</label>
                  <input type="text" required value={contactName} onChange={(e) => setContactName(e.target.value)} className="w-full rounded-xl border border-steel-200 bg-steel-50 px-4 py-3 text-sm text-steel-900 outline-none focus:border-brand-500 focus:bg-white dark:border-steel-700 dark:bg-steel-800 dark:text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-steel-700 dark:text-steel-300">İletişim (Telefon)</label>
                  <input type="text" required value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} className="w-full rounded-xl border border-steel-200 bg-steel-50 px-4 py-3 text-sm text-steel-900 outline-none focus:border-brand-500 focus:bg-white dark:border-steel-700 dark:bg-steel-800 dark:text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-steel-700 dark:text-steel-300">E-posta</label>
                  <input type="email" required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className="w-full rounded-xl border border-steel-200 bg-steel-50 px-4 py-3 text-sm text-steel-900 outline-none focus:border-brand-500 focus:bg-white dark:border-steel-700 dark:bg-steel-800 dark:text-white" />
                </div>

                <div className="mt-4 flex gap-3">
                  <button type="button" onClick={() => setShowContactModal(false)} className="flex-1 rounded-xl bg-steel-100 py-3.5 text-sm font-semibold text-steel-700 hover:bg-steel-200 dark:bg-steel-800 dark:text-steel-300 dark:hover:bg-steel-700">İptal</button>
                  <button type="submit" disabled={isSubmittingQuote} className="flex-1 rounded-xl bg-brand-600 py-3.5 text-sm font-bold text-white hover:bg-brand-700 disabled:opacity-70">
                    {isSubmittingQuote ? 'İletiliyor...' : 'Teklif İste'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

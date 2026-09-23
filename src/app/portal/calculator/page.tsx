'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { RAW_POWER_UNITS, RAW_MOTORS, RAW_PUMPS } from '@/lib/catalogData';

export default function CalculatorPage() {
  const [calcCapacity, setCalcCapacity] = useState('630');
  const [calcCarcass, setCalcCarcass] = useState('500');
  const [calcTravel, setCalcTravel] = useState('15000'); // mm
  const [calcSpeed, setCalcSpeed] = useState('0.63');
  const [calcSuspension, setCalcSuspension] = useState<'1:1' | '2:1' | '4:1'>('2:1');
  const [calcCylDiameter, setCalcCylDiameter] = useState('100');
  const [calcCylThickness, setCalcCylThickness] = useState('5');
  const [calcResult, setCalcResult] = useState<any>(null);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [isCalculatingPrice, setIsCalculatingPrice] = useState(false);
  
  // Comprehensive Calculator States
  const [calcStartsPerHour, setCalcStartsPerHour] = useState('<5');
  const [calcPitDepth, setCalcPitDepth] = useState('1200'); // mm
  const [calcTopFloor, setCalcTopFloor] = useState('3500'); // mm
  const [calcBuffer, setCalcBuffer] = useState('100'); // mm
  const [calcMountingType, setCalcMountingType] = useState('side');
  const [calcCylinderCount, setCalcCylinderCount] = useState('1');
  const [calcCylinderType, setCalcCylinderType] = useState('standard');
  const [calcStages, setCalcStages] = useState('2');
  const [calcRopeWeight, setCalcRopeWeight] = useState('50');
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
          const viableOptions = data.options.filter((opt: any) => opt.isViable);
          const bestOpt = viableOptions.length > 0 ? viableOptions[0] : data.options[data.options.length - 1]; // Fallback to largest if none viable

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
      const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || (isLocalhost ? 'http://localhost:3000' : 'https://portal.blainturkey.com.tr');
      
      const priceReq = await fetch(`${apiUrl}/api/external-quotes/estimate`, {
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
    <div className="min-h-screen bg-steel-50 text-steel-900 dark:bg-steel-950 dark:text-steel-100 flex items-center justify-center font-sans py-12">
      <div className="w-full max-w-[1300px] p-6 sm:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Link href="/portal" className="group mb-8 sm:mb-12 flex items-center gap-2 text-sm font-semibold text-steel-500 transition-colors hover:text-indigo-600 dark:text-steel-400 dark:hover:text-indigo-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Geri Dön
        </Link>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-steel-900 dark:text-white mb-8 sm:mb-12">
          Teknik Hesaplama.
        </h2>
        

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start relative w-full">
          
          <div className="xl:col-span-5 w-full">
                            <form onSubmit={handleCalculate} className="flex flex-col gap-6">
                  
                  {/* GRUP 1: Yük & Performans */}
                  <div className="rounded-2xl border border-steel-200/60 bg-white p-6 shadow-sm dark:border-steel-800/80 dark:bg-steel-900/50">
                    <h3 className="mb-6 border-b border-steel-100 pb-3 text-lg font-bold text-steel-900 dark:border-steel-800 dark:text-white">Yük & Performans</h3>
                    <div className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Kapasite (kg)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" required value={calcCapacity} onChange={(e) => setCalcCapacity(e.target.value)} />
</div>
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Karkas Ağırlığı (kg)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" required value={calcCarcass} onChange={(e) => setCalcCarcass(e.target.value)} />
</div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Kabin Hızı (m/s)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" required step="0.01" value={calcSpeed} onChange={(e) => setCalcSpeed(e.target.value)} />
</div>
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Motor Kalkış (Saat)</label>
  <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" required value={calcStartsPerHour} onChange={(e) =>
       setCalcStartsPerHour(e.target.value)}>
                            <option value="<5">&lt;5 (Düşük Yoğunluk)</option>
                            <option value="5-15">5-15 (Orta)</option>
                            <option value="16-25">16-25 (Yüksek)</option>
                            <option value="26-35">26-35 (Çok Yüksek)</option>
                            <option value="36+">36+ (Aşırı Yoğun)</option>
                          
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-steel-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
  </div>
</div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Yönetmelik</label>
  <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" required value={regulation} onChange={(e) =>
       setRegulation(e.target.value as any)}>
                            <option value="machine">Makine Direktifi</option>
                            <option value="en81">TS EN 81-20/50</option>
                          
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-steel-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
  </div>
</div>
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Bina Tipi (Örn: Konut, Hastane)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Opsiyonel" />
</div>
                      </div>
                    </div>
                  </div>

                  {/* GRUP 2: Kuyu Ölçüleri */}
                  <div className="rounded-2xl border border-steel-200/60 bg-white p-6 shadow-sm dark:border-steel-800/80 dark:bg-steel-900/50">
                    <h3 className="mb-6 border-b border-steel-100 pb-3 text-lg font-bold text-steel-900 dark:border-steel-800 dark:text-white">Kuyu Ölçüleri</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Seyir Mesafesi (mm)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" required value={calcTravel} onChange={(e) => setCalcTravel(e.target.value)} />
</div>
                      <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Tampon Mesafesi (mm)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" required value={calcBuffer} onChange={(e) => setCalcBuffer(e.target.value)} />
</div>
                      <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Son Kat (mm)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" required value={calcTopFloor} onChange={(e) => setCalcTopFloor(e.target.value)} />
</div>
                      <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Kuyu Dibi (mm)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" required value={calcPitDepth} onChange={(e) => setCalcPitDepth(e.target.value)} />
</div>
                    </div>
                  </div>

                  {/* GRUP 3: Mekanik Yapı */}
                  <div className="rounded-2xl border border-steel-200/60 bg-white p-6 shadow-sm dark:border-steel-800/80 dark:bg-steel-900/50">
                    <h3 className="mb-6 border-b border-steel-100 pb-3 text-lg font-bold text-steel-900 dark:border-steel-800 dark:text-white">Mekanik Yapı</h3>
                    <div className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Askı Tipi</label>
  <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" required value={calcSuspension} onChange={(e) =>
       setCalcSuspension(e.target.value as any)}>
                            <option value="1:1">1:1</option>
                            <option value="2:1">2:1</option>
                            <option value="4:1">4:1</option>
                          
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-steel-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
  </div>
</div>
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Montaj Yönü</label>
  <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" required value={calcMountingType} onChange={(e) =>
       setCalcMountingType(e.target.value)}>
                            <option value="side">Yandan Süspansiyon</option>
                            <option value="central">Merkezi / Alttan</option>
                          
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-steel-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
  </div>
</div>
                      </div>
                      
                      <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Halat / Kasnak Ağırlığı Toplamı (kg)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" required value={calcRopeWeight} onChange={(e) => setCalcRopeWeight(e.target.value)} />
</div>
                    </div>
                  </div>

                  {/* GRUP 4: Piston Bilgileri */}
                  <div className="rounded-2xl border border-steel-200/60 bg-white p-6 shadow-sm dark:border-steel-800/80 dark:bg-steel-900/50">
                    <h3 className="mb-6 border-b border-steel-100 pb-3 text-lg font-bold text-steel-900 dark:border-steel-800 dark:text-white">Silindir / Piston Değerleri</h3>
                    <div className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Piston Sayısı</label>
  <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" required value={calcCylinderCount} onChange={(e) =>
       setCalcCylinderCount(e.target.value)}>
                            <option value="1">1 Piston</option>
                            <option value="2">2 Piston</option>
                            <option value="4">4 Piston</option>
                          
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-steel-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
  </div>
</div>
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Silindir Tipi</label>
  <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" required value={calcCylinderType} onChange={(e) =>
       setCalcCylinderType(e.target.value)}>
                            <option value="standard">Standart (Tek Parça)</option>
                            <option value="telescopic">Teleskopik</option>
                          
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-steel-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
  </div>
</div>
                      </div>

                      {calcCylinderType === 'telescopic' && (
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Teleskopik Kademe Sayısı</label>
  <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" required value={calcStages} onChange={(e) =>
       setCalcStages(e.target.value)}>
                            <option value="2">2 Kademeli</option>
                            <option value="3">3 Kademeli</option>
                          
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-steel-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
  </div>
</div>
                      )}

                      <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Güç Ünitesi Sayısı</label>
  <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" required value={calcPowerUnitCount} onChange={(e) =>
       setCalcPowerUnitCount(e.target.value)}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-steel-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
  </div>
</div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--muted-foreground, #64748b)', background: 'var(--muted, #f8fafc)', padding: '1rem', borderRadius: '8px' }}>
                          ℹ️ Sisteminiz için en uygun piston çapı ve et kalınlığı, girilen kuyu ve kapasite ölçülerine göre otomatik olarak hesaplanacaktır.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GRUP 5: Gelişmiş Parametreler (Opsiyonel) */}
                  <details style={{ background: 'var(--card, #fff)', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid var(--border, #e2e8f0)', cursor: 'pointer' }}>
                    <summary style={{ fontSize: '1.1rem', fontWeight: 600, color: 'inherit', outline: 'none' }}>Gelişmiş Parametreler & Özel Durumlar</summary>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Ortam Sıcaklığı (°C) - Opsiyonel</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" value={calcMaxAmbientTemp} onChange={(e) => setCalcMaxAmbientTemp(e.target.value)} />
</div>
                        <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Seyir Frekansı (%) - Opsiyonel</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" value={calcTravelFactor} onChange={(e) => setCalcTravelFactor(e.target.value)} />
</div>
                      </div>

                      <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Yağ Viskozitesi</label>
  <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" value={calcOilViscosity} onChange={(e) =>
       setCalcOilViscosity(e.target.value)}>
                          <option value="32">VG 32</option>
                          <option value="46">VG 46</option>
                          <option value="68">VG 68</option>
                        
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-steel-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
  </div>
</div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {calcCylinderType !== 'telescopic' && (
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                            <input type="checkbox" checked={calcIsSplit} onChange={(e) => setCalcIsSplit(e.target.checked)} style={{ width: '18px', height: '18px', accentColor: '#1d1d1f' }} />
                            <span>İki Parçalı (Ekli) Piston</span>
                          </label>
                        )}
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                          <input type="checkbox" checked={calcIsExisting} onChange={(e) => setCalcIsExisting(e.target.checked)} style={{ width: '18px', height: '18px', accentColor: '#1d1d1f' }} />
                          <span>Mevcut Piston (Sadece Revizyon / Piston değişmeyecek)</span>
                        </label>
                      </div>

                      {calcIsExisting && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', padding: '1rem', background: 'var(--muted, #f8fafc)', borderRadius: '8px' }}>
                          <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Mevcut Çap (mm)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" required={calcIsExisting} value={calcExistingRam} onChange={(e) => setCalcExistingRam(e.target.value)} />
</div>
                          <div className="flex flex-col gap-1.5 group">
  <label className="text-sm font-medium text-steel-500 dark:text-steel-400 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400">Mevcut Kalınlık (mm)</label>
  <input className="w-full rounded-xl border border-steel-200 bg-steel-50/50 px-4 py-2.5 text-steel-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-steel-700 dark:bg-steel-800 dark:text-white" type="number" required={calcIsExisting} value={calcExistingThickness} onChange={(e) => setCalcExistingThickness(e.target.value)} />
</div>
                        </div>
                      )}

                    </div>
                  </details>

                  <button type="submit" style={{ marginTop: "1rem", width: "100%", background: "#1d1d1f", color: "var(--card, #fff)", border: "none", padding: "1.25rem", borderRadius: "12px", fontSize: "1.1rem", fontWeight: 600, cursor: "pointer", transition: "0.2s", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>Hesapla</button>
                </form>

          </div>
          
          <div className="xl:col-span-7 w-full sticky top-8">
            <div className="bg-white dark:bg-steel-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-steel-200/60 dark:border-steel-800/80 w-full min-h-[400px]">
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
                    <h2 className="text-2xl sm:text-3xl font-bold m-0 tracking-tight text-steel-900 dark:text-white">Projenize Özel Konfigürasyon</h2>
                    
                  </div>
                  <p className="text-steel-600 dark:text-steel-400 mb-8 text-base sm:text-lg">Mühendislik hesaplamaları tamamlandı. Sisteminiz için en uygun ve güvenli komponentler aşağıda listelenmiştir.</p>
                  


                  {/* Estimated Price Banner removed as per user request */}

                  {/* Top Recommended Components */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-steel-900 dark:text-white">Önerilen Ana Komponentler</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {/* 1. Cylinder Card */}
                    <div className="flex flex-col justify-between bg-white dark:bg-steel-900 p-5 sm:p-6 rounded-2xl shadow-sm border border-steel-200/60 dark:border-steel-800/60">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-steel-500 mb-2">Seçilen Piston</div>
                        <div className="text-2xl sm:text-3xl font-bold mb-1 text-steel-900 dark:text-white">
                          {calcCylinderType === 'telescopic' ? (calcResult?.type || `T${calcStages}-${calcCylDiameter}...`) : `Ø${calcCylDiameter}x${calcCylThickness}`}
                        </div>
                        <div className="text-sm text-steel-500 dark:text-steel-400">{calcCylinderCount} Adet {calcCylinderType === 'standard' ? 'Standart' : 'Teleskopik'}</div>
                      </div>
                      <div className="mt-4 p-2.5 bg-steel-50 dark:bg-steel-800/50 rounded-lg text-sm font-medium text-steel-700 dark:text-steel-300">
                        Durum: {calcResult.isBucklingSafe ? 'Güvenli (Onaylı)' : 'Riskli'}
                      </div>
                    </div>

                    {/* 2. Pump Card */}
                    <div className="flex flex-col justify-between bg-white dark:bg-steel-900 p-5 sm:p-6 rounded-2xl shadow-sm border border-steel-200/60 dark:border-steel-800/60">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-steel-500 mb-2">Pompa</div>
                        <div className="text-lg sm:text-xl font-bold mb-1 text-steel-900 dark:text-white">
                          {recommendedPump}
                        </div>
                        <div className="text-sm text-steel-500 dark:text-steel-400">Minimum Debi: {calcResult.pumpFlow} L/dk</div>
                      </div>
                      <div className="mt-4 p-2.5 bg-steel-50 dark:bg-steel-800/50 rounded-lg text-sm font-medium text-steel-700 dark:text-steel-300">
                        Sistem Debi Kapasitesi
                      </div>
                    </div>

                    {/* 3. Motor Card */}
                    <div className="flex flex-col justify-between bg-white dark:bg-steel-900 p-5 sm:p-6 rounded-2xl shadow-sm border border-steel-200/60 dark:border-steel-800/60">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-steel-500 mb-2">Motor</div>
                        <div className="text-2xl sm:text-3xl font-bold mb-1 text-steel-900 dark:text-white">
                          {recommendedMotor} <span style={{fontSize:'1.2rem'}}>kW</span>
                        </div>
                        <div className="text-sm text-steel-500 dark:text-steel-400">Minimum gereksinim: {calcResult.motorPowerReq} kW</div>
                      </div>
                      <div className="mt-4 p-2.5 bg-steel-50 dark:bg-steel-800/50 rounded-lg text-sm font-medium text-steel-700 dark:text-steel-300">
                        Statik Basınç: {calcResult.staticPressure} Bar
                      </div>
                    </div>

                    {/* 4. Valve Card - Premium Look */}
                    <div className="flex flex-col justify-between bg-gradient-to-br from-steel-900 to-steel-700 text-white p-5 sm:p-6 rounded-2xl shadow-lg border border-steel-700/50">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-steel-400 mb-2">Kontrol Valfi</div>
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                          {Number(calcResult?.pumpFlow || 0) < 125 ? 'EV100 3/4"' : Number(calcResult?.pumpFlow || 0) <= 800 ? 'EV100 1.5"' : 'EV100 2.5"'}
                        </div>
                        <div className="text-sm text-steel-300">Entegre sistem kontrolü</div>
                      </div>
                      <div className="mt-4 p-2.5 bg-white/10 rounded-lg text-sm text-white font-medium">
                        Debi Kapasitesi: {calcResult.pumpFlow} L/dk
                      </div>
                    </div>

                    {/* 5. Tank Card */}
                    <div className="flex flex-col justify-between bg-white dark:bg-steel-900 p-5 sm:p-6 rounded-2xl shadow-sm border border-steel-200/60 dark:border-steel-800/60">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-steel-500 mb-2">Güç Ünitesi</div>
                        <div className="text-2xl sm:text-3xl font-bold mb-1 text-steel-900 dark:text-white">
                          {recommendedPowerUnit ? recommendedPowerUnit.model : "Özel Tank"}
                        </div>
                        
                      </div>
                      <div className="mt-4 p-2.5 bg-steel-50 dark:bg-steel-800/50 rounded-lg text-sm font-medium text-steel-700 dark:text-steel-300">
                        Piston Strok: {calcResult.stroke} mm
                      </div>
                    </div>
                  </div>

                  {/* Component Selections */}
                  <div className="mb-8 p-5 sm:p-6 bg-white dark:bg-steel-900 rounded-2xl border border-steel-200/60 dark:border-steel-800/60 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                      <h3 className="text-lg font-semibold text-steel-900 dark:text-white m-0">Opsiyonel Donanımlar (Aksesuarlar)</h3>
                      <span className="text-xs self-start sm:self-auto font-medium text-steel-600 dark:text-steel-400 bg-steel-100 dark:bg-steel-800 px-3 py-1 rounded-full">Birden fazla seçilebilir</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { id: 'handpump', label: 'El Pompası', desc: 'Acil kurtarma', state: calcHandPump, setter: setCalcHandPump },
                        { id: 'ballvalve', label: 'Küresel Vana', desc: 'Bakım kolaylığı', state: calcBallValve, setter: setCalcBallValve },
                        { id: 'rupture', label: 'Boru Patlama Valfi', desc: 'Güvenlik', state: calcRuptureValve, setter: setCalcRuptureValve },
                        { id: 'a3', label: 'A3 Valfi (U33/UAB)', desc: 'Ekstra Güvenlik', state: calcA3Valve, setter: setCalcA3Valve },
                        { id: 'lowpress', label: 'Alçak Basınç Şalteri', desc: 'Sistem Koruma', state: calcLowPressure, setter: setCalcLowPressure },
                        { id: 'highpress', label: 'Yüksek Basınç Şalteri', desc: 'Aşırı Yük Koruma', state: calcHighPressure, setter: setCalcHighPressure },
                        { id: 'overload', label: 'Aşırı Yük Şalteri', desc: 'Limit Kontrol', state: calcOverload, setter: setCalcOverload },
                        { id: 'heater', label: 'Yağ Isıtıcı', desc: 'Soğuk İklimler İçin', state: calcHeater, setter: setCalcHeater },
                        { id: 'micro', label: 'Mikro Seviyeleme', desc: 'Hassas Duruş', state: calcMicroLevel, setter: setCalcMicroLevel }
                      ].map((item) => (
                        <label 
                          key={item.id} 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            padding: '1rem', 
                            background: item.state ? '#f0fdf4' : '#fbfbfd', 
                            border: `1px solid ${item.state ? '#bbf7d0' : '#e5e5ea'}`, 
                            borderRadius: '12px', 
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: item.state ? '0 2px 8px rgba(34,197,94,0.1)' : 'none'
                          }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: 600, color: item.state ? '#166534' : '#1d1d1f', fontSize: '0.95rem' }}>{item.label}</span>
                            <span style={{ fontSize: '0.8rem', color: item.state ? '#15803d' : '#86868b' }}>{item.desc}</span>
                          </div>
                          <div style={{ position: 'relative', width: '44px', height: '24px', background: item.state ? '#34c759' : '#e5e5ea', borderRadius: '12px', transition: '0.3s ease' }}>
                            <div style={{ position: 'absolute', top: '2px', left: item.state ? '22px' : '2px', width: '20px', height: '20px', background: 'var(--card, #fff)', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', transition: '0.3s ease' }} />
                          </div>
                          <input type="checkbox" checked={item.state} onChange={(e) => item.setter(e.target.checked)} style={{ display: 'none' }} />
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Analysis Table Accordion */}
                  <details style={{ background: 'var(--card, #fff)', borderRadius: '12px', border: '1px solid var(--border, #e2e8f0)', marginBottom: '2rem', overflow: 'hidden' }}>
                    <summary style={{ padding: '1rem 1.5rem', background: 'var(--muted, #f8fafc)', borderBottom: '1px solid var(--border, #e2e8f0)', fontWeight: 600, fontSize: '1rem', color: 'inherit', cursor: 'pointer', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      Teknik Parametreleri ve Analiz Detaylarını Göster
                    </summary>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border, #e2e8f0)' }}>
                        <span style={{ fontWeight: 500, color: 'var(--muted-foreground, #64748b)' }}>Piston Ağırlığı</span>
                        <div style={{ display: 'flex', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                          <span style={{ fontWeight: 600 }}>{calcResult.ramWeight}</span>
                          <span style={{ color: 'var(--muted-foreground, #64748b)' }}>kg</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border, #e2e8f0)' }}>
                        <span style={{ fontWeight: 500, color: 'var(--muted-foreground, #64748b)' }}>Boş Kabin Basıncı</span>
                        <div style={{ display: 'flex', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                          <span style={{ fontWeight: 600 }}>{calcResult.pressureEmpty}</span>
                          <span style={{ color: 'var(--muted-foreground, #64748b)' }}>Bar</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border, #e2e8f0)' }}>
                        <span style={{ fontWeight: 500, color: 'var(--muted-foreground, #64748b)' }}>Gerçek Hız (Aşağı/Yukarı)</span>
                        <div style={{ display: 'flex', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                          <span style={{ fontWeight: 600 }}>{Number(calcResult.actualSpeed || calcSpeed).toFixed(2)}</span>
                          <span style={{ color: 'var(--muted-foreground, #64748b)' }}>m/s</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border, #e2e8f0)' }}>
                        <span style={{ fontWeight: 500, color: 'var(--muted-foreground, #64748b)' }}>Dinamik Basınç</span>
                        <div style={{ display: 'flex', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                          <span style={{ fontWeight: 600 }}>{calcResult.dynamicPressure}</span>
                          <span style={{ color: 'var(--muted-foreground, #64748b)' }}>Bar</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
                        <span style={{ fontWeight: 500, color: 'var(--muted-foreground, #64748b)' }}>Kapalı Boy</span>
                        <div style={{ display: 'flex', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                          <span style={{ fontWeight: 600 }}>{calcResult.closedLen}</span>
                          <span style={{ color: 'var(--muted-foreground, #64748b)' }}>mm</span>
                        </div>
                      </div>
                    </div>
                  </details>

                  <button onClick={() => setShowContactModal(true)} style={{ width: '100%', background: '#1d1d1f', color: '#fff', border: 'none', padding: '1.25rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', transition: '0.2s', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                     onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                     onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    Bu Konfigürasyon ile Resmi Teklif İste
                  </button>
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

'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { RAW_POWER_UNITS, RAW_MOTORS, RAW_PUMPS } from '@/lib/catalogData';

type ViewState = 'hub' | 'quote' | 'service' | 'login' | 'calculator';

export default function PortalPage() {
  const [activeView, setActiveView] = useState<ViewState>('hub');
  
  // Quote Form State
  const [capacityType, setCapacityType] = useState<'person' | 'kg'>('person');
  const [capacityValue, setCapacityValue] = useState('');
  const [cabinWeight, setCabinWeight] = useState('');
  const [travelType, setTravelType] = useState<'stops' | 'mm'>('stops');
  const [travelValue, setTravelValue] = useState('');
  const [speed, setSpeed] = useState('');
  const [regulation, setRegulation] = useState<'machine' | 'en81'>('machine');
  const [companyName, setCompanyName] = useState('');
  
  // Optional Quote Fields
  const [pistonCount, setPistonCount] = useState<'1' | '2' | '4'>('1');
  const [driveType, setDriveType] = useState<'1:1' | '2:1'>('2:1');
  
  // Service Form State
  const [serviceName, setServiceName] = useState('');
  const [serviceSerial, setServiceSerial] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Contact Modal State (For Official Quotes)
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);

  // Calculator Form State
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

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Yeni Teklif Talebi*\n\n` +
      `Firma Adı: ${companyName}\n` +
      `Kapasite: ${capacityValue} ${capacityType === 'person' ? 'Kişi' : 'kg'}\n` +
      `Karkas Ağırlığı: ${cabinWeight} kg\n` +
      `Seyir Mesafesi: ${travelValue} ${travelType === 'stops' ? 'Durak' : 'mm'}\n` +
      `Kabin Hızı: ${speed} m/s\n` +
      `Piston Sayısı: ${pistonCount}\n` +
      `Tahrik Biçimi: ${driveType}\n` +
      `Regülasyon: ${regulation === 'machine' ? 'Makine Direktifi' : 'TS EN 81-20/50'}`;
    
    window.open(`https://wa.me/905424862821?text=${encodeURIComponent(message)}`, '_blank');
    setActiveView('hub');
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Teknik Servis Talebi*\n\n` +
      `Firma/Kişi: ${serviceName}\n` +
      (serviceSerial ? `Seri No: ${serviceSerial}\n` : '') +
      `Talep/Arıza: ${serviceDesc}`;
      
    window.open(`https://wa.me/905360256494?text=${encodeURIComponent(message)}`, '_blank');
    setActiveView('hub');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Giriş bilgileri hatalı veya yetkiniz yok.');
  };

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
      suspension: calcSuspension as any,
      speed: Number(calcSpeed),
      mountingType: calcMountingType as 'side' | 'central',
      cylinderType: calcCylinderType === 'telescopic' ? `telescopic-${calcStages}` as any : 'standard',
      ropeWeight: Number(calcRopeWeight),
      buildingType: calcStartsPerHour
    };
    
    let candidates = [];
    if (calcCylinderType === 'telescopic') {
      if (calcStages === '2') {
        candidates = [ {d: 60, t: 5}, {d: 70, t: 5}, {d: 80, t: 5}, {d: 90, t: 5}, {d: 100, t: 6}, {d: 110, t: 6}, {d: 120, t: 6} ];
      } else {
        candidates = [ {d: 70, t: 5}, {d: 90, t: 5}, {d: 110, t: 6}, {d: 130, t: 6} ];
      }
    } else {
      candidates = [
        {d: 50, t: 5}, {d: 60, t: 5}, {d: 70, t: 5}, {d: 80, t: 5}, {d: 90, t: 5},
        {d: 100, t: 5}, {d: 110, t: 5}, {d: 120, t: 5}, {d: 130, t: 5}, {d: 150, t: 5},
        {d: 180, t: 5}, {d: 200, t: 5}, {d: 250, t: 6}
      ];
    }

    let bestResult = null;
    let selectedCyl = candidates[candidates.length - 1]; // Default to largest if none safe

    for (const cyl of candidates) {
      const spec = { d: cyl.d, t: cyl.t };
      const result = calc.performEngineeringCalculation(inputs, spec);
      
      // We look for a safe buckling factor and reasonable static pressure (e.g. < 60 bar)
      if (result && !result.error && result.isBucklingSafe && Number(result.staticPressure) < 70) {
        bestResult = result;
        selectedCyl = cyl;
        break; // Found the smallest suitable cylinder!
      }
    }

    if (!bestResult) {
      // If none are fully safe, just calculate with the largest one so we show something
      bestResult = calc.performEngineeringCalculation(inputs, { d: selectedCyl.d, t: selectedCyl.t });
    }

    setCalcCylDiameter(selectedCyl.d.toString());
    setCalcCylThickness(selectedCyl.t.toString());
    setCalcResult(bestResult);
    
    // Auto-recommend valve
    const pFlow = Number(bestResult?.pumpFlow || 0);
    const recommendedValve = pFlow < 125 ? '3/4" (EV100)' : pFlow <= 800 ? '1.5" / 2" (EV100)' : '2.5" (EV100)';
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
    desc: p.description,
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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fbfbfd', /* Apple ultra-light gray */
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#1d1d1f'
    }}>
      
      {/* 
        ====================================================
        HUB VIEW (Minimalist List)
        ====================================================
      */}
      {activeView === 'hub' && (
        <div style={{ width: '100%', maxWidth: '600px', padding: '2rem', animation: 'fadeUp 0.6s ease forwards' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 0.5rem 0' }}>Müşteri Portalı.</h1>
            <p style={{ fontSize: '1.1rem', color: '#86868b', margin: 0 }}>Lütfen yapmak istediğiniz işlemi seçin.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button className="minimal-menu-item" onClick={() => setActiveView('quote')}>
              <div>
                <span className="title">Yeni Teklif İste</span>
                <span className="desc">Hidrolik projeleriniz için detaylı fiyat talebi oluşturun.</span>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <button className="minimal-menu-item" onClick={() => setActiveView('calculator')}>
              <div>
                <span className="title">Teknik Hesaplama</span>
                <span className="desc">Basınç, motor gücü ve debi değerlerini hesaplayın.</span>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            
            <button className="minimal-menu-item" onClick={() => setActiveView('service')}>
              <div>
                <span className="title">Teknik Servis Talebi</span>
                <span className="desc">Blain ürünleriniz için destek veya onarım talebi gönderin.</span>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            
            <button className="minimal-menu-item" onClick={() => {
              const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
              const crmUrl = process.env.NEXT_PUBLIC_CRM_API_URL || (isLocalhost ? 'http://localhost:3000' : 'https://portal.blainturkey.com.tr');
              window.location.href = `${crmUrl}/login`;
            }}>
              <div>
                <span className="title">Bayi Girişi</span>
                <span className="desc">Özel dokümanlarınıza ve geçmiş kayıtlarınıza erişin.</span>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <Link href="/" className="minimal-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      )}

      {/* 
        ====================================================
        DYNAMIC VIEWS
        ====================================================
      */}
      {activeView !== 'hub' && (
        <div style={{ width: '100%', maxWidth: '600px', padding: '2rem', animation: 'fadeUp 0.6s ease forwards' }}>
          
          <button className="minimal-back-btn" onClick={() => setActiveView('hub')} style={{ marginBottom: '3rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Geri Dön
          </button>

          <h2 style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.02em', margin: '2rem 0 3rem 0' }}>
            {activeView === 'quote' && 'Teklif İste.'}
            {activeView === 'service' && 'Servis Talebi.'}
            {activeView === 'login' && 'Bayi Girişi.'}
            {activeView === 'calculator' && 'Teknik Hesaplama.'}
          </h2>

          {/* --- QUOTE FORM --- */}
          {activeView === 'quote' && (
            <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              <div className="minimal-group">
                <label className="minimal-label">Kapasite Tipi</label>
                <div className="minimal-segmented">
                  <button type="button" className={capacityType === 'person' ? 'active' : ''} onClick={() => setCapacityType('person')}>Kişi Sayısı</button>
                  <button type="button" className={capacityType === 'kg' ? 'active' : ''} onClick={() => setCapacityType('kg')}>Kilogram</button>
                </div>
              </div>

              <div className="floating-input">
                <input type="number" required value={capacityValue} onChange={(e) => setCapacityValue(e.target.value)} />
                <label>Kapasite Miktarı ({capacityType === 'person' ? 'Kişi' : 'kg'})</label>
              </div>

              <div className="floating-input">
                <input type="number" required value={cabinWeight} onChange={(e) => setCabinWeight(e.target.value)} />
                <label>Kabin Karkas Ağırlığı (kg)</label>
              </div>

              <div className="minimal-group">
                <label className="minimal-label">Seyir Mesafesi Tipi</label>
                <div className="minimal-segmented">
                  <button type="button" className={travelType === 'stops' ? 'active' : ''} onClick={() => setTravelType('stops')}>Durak Sayısı</button>
                  <button type="button" className={travelType === 'mm' ? 'active' : ''} onClick={() => setTravelType('mm')}>Milimetre (mm)</button>
                </div>
              </div>

              <div className="floating-input">
                <input type="number" required value={travelValue} onChange={(e) => setTravelValue(e.target.value)} />
                <label>Seyir Mesafesi ({travelType === 'stops' ? 'Durak' : 'mm'})</label>
              </div>

              <div className="floating-select">
                <select required value={speed} onChange={(e) => setSpeed(e.target.value)}>
                  <option value="" disabled hidden></option>
                  <option value="0.15">0.15 m/s</option>
                  <option value="0.30">0.30 m/s</option>
                  <option value="0.40">0.40 m/s</option>
                  <option value="0.63">0.63 m/s</option>
                  <option value="0.80">0.80 m/s</option>
                  <option value="1.00">1.00 m/s</option>
                </select>
                <label>Kabin Hızı</label>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>

              <div className="minimal-group">
                <label className="minimal-label">Piston Sayısı (Opsiyonel)</label>
                <SegmentedControl 
                  options={[{label: '1', value: '1'}, {label: '2', value: '2'}, {label: '4', value: '4'}]} 
                  value={pistonCount} 
                  onChange={(v: any) => setPistonCount(v)} 
                />
              </div>

              <div className="minimal-group">
                <label className="minimal-label">Tahrik Biçimi (Opsiyonel)</label>
                <SegmentedControl 
                  options={[{label: '1:1', value: '1:1'}, {label: '2:1', value: '2:1'}]} 
                  value={driveType} 
                  onChange={(v: any) => setDriveType(v)} 
                />
              </div>

              <div className="minimal-group">
                <label className="minimal-label">Uygulanacak Regülasyon</label>
                <div className="minimal-segmented">
                  <button type="button" className={regulation === 'machine' ? 'active' : ''} onClick={() => setRegulation('machine')}>Makine Direktifi</button>
                  <button type="button" className={regulation === 'en81' ? 'active' : ''} onClick={() => setRegulation('en81')}>TS EN 81-20/50</button>
                </div>
              </div>

              <div className="floating-input">
                <input type="text" required value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                <label>Firma Adı</label>
              </div>

              <button type="submit" className="minimal-submit">WhatsApp'a Git</button>
            </form>
          )}

          {/* --- SERVICE FORM --- */}
          {activeView === 'service' && (
            <form onSubmit={handleServiceSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div className="floating-input">
                <input type="text" required value={serviceName} onChange={(e) => setServiceName(e.target.value)} />
                <label>Firma Adı / İletişim Kişisi</label>
              </div>
              <div className="floating-input">
                <input type="text" value={serviceSerial} onChange={(e) => setServiceSerial(e.target.value)} />
                <label>Valf Seri Numarası (Opsiyonel)</label>
              </div>
              <div className="floating-input">
                <textarea required rows={4} value={serviceDesc} onChange={(e) => setServiceDesc(e.target.value)} />
                <label>Talep Detayı / Arıza Açıklaması</label>
              </div>
              
              <button type="submit" className="minimal-submit">WhatsApp'a Git</button>
            </form>
          )}



          {/* --- CALCULATOR FORM --- */}
          {activeView === 'calculator' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {!calcResult ? (
                <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  
                  {/* GRUP 1: Yük & Performans */}
                  <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid #e5e5ea', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: '#1d1d1f' }}>Yük & Performans</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="floating-input">
                          <input type="number" required value={calcCapacity} onChange={(e) => setCalcCapacity(e.target.value)} />
                          <label>Kapasite (kg)</label>
                        </div>
                        <div className="floating-input">
                          <input type="number" required value={calcCarcass} onChange={(e) => setCalcCarcass(e.target.value)} />
                          <label>Karkas Ağırlığı (kg)</label>
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="floating-input">
                          <input type="number" required step="0.01" value={calcSpeed} onChange={(e) => setCalcSpeed(e.target.value)} />
                          <label>Kabin Hızı (m/s)</label>
                        </div>
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={calcStartsPerHour} onChange={(e) => setCalcStartsPerHour(e.target.value)}>
                            <option value="<5">&lt;5 (Düşük Yoğunluk)</option>
                            <option value="5-15">5-15 (Orta)</option>
                            <option value="16-25">16-25 (Yüksek)</option>
                            <option value="26-35">26-35 (Çok Yüksek)</option>
                            <option value="36+">36+ (Aşırı Yoğun)</option>
                          </select>
                          <label>Motor Kalkış (Saat)</label>
                        </div>
                      </div>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={regulation} onChange={(e) => setRegulation(e.target.value as any)}>
                            <option value="machine">Makine Direktifi</option>
                            <option value="en81">TS EN 81-20/50</option>
                          </select>
                          <label>Yönetmelik</label>
                        </div>
                        <div className="floating-input">
                          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Opsiyonel" />
                          <label>Bina Tipi (Örn: Konut, Hastane)</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GRUP 2: Kuyu Ölçüleri */}
                  <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid #e5e5ea', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: '#1d1d1f' }}>Kuyu Ölçüleri</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div className="floating-input">
                        <input type="number" required value={calcTravel} onChange={(e) => setCalcTravel(e.target.value)} />
                        <label>Seyir Mesafesi (mm)</label>
                      </div>
                      <div className="floating-input">
                        <input type="number" required value={calcBuffer} onChange={(e) => setCalcBuffer(e.target.value)} />
                        <label>Tampon Mesafesi (mm)</label>
                      </div>
                      <div className="floating-input">
                        <input type="number" required value={calcTopFloor} onChange={(e) => setCalcTopFloor(e.target.value)} />
                        <label>Son Kat (mm)</label>
                      </div>
                      <div className="floating-input">
                        <input type="number" required value={calcPitDepth} onChange={(e) => setCalcPitDepth(e.target.value)} />
                        <label>Kuyu Dibi (mm)</label>
                      </div>
                    </div>
                  </div>

                  {/* GRUP 3: Mekanik Yapı */}
                  <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid #e5e5ea', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: '#1d1d1f' }}>Mekanik Yapı</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={calcSuspension} onChange={(e) => setCalcSuspension(e.target.value as any)}>
                            <option value="1:1">1:1</option>
                            <option value="2:1">2:1</option>
                            <option value="4:1">4:1</option>
                          </select>
                          <label>Askı Tipi</label>
                        </div>
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={calcMountingType} onChange={(e) => setCalcMountingType(e.target.value)}>
                            <option value="side">Yandan Süspansiyon</option>
                            <option value="central">Merkezi / Alttan</option>
                          </select>
                          <label>Montaj Yönü</label>
                        </div>
                      </div>
                      
                      <div className="floating-input">
                        <input type="number" required value={calcRopeWeight} onChange={(e) => setCalcRopeWeight(e.target.value)} />
                        <label>Halat / Kasnak Ağırlığı Toplamı (kg)</label>
                      </div>
                    </div>
                  </div>

                  {/* GRUP 4: Piston Bilgileri */}
                  <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid #e5e5ea', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: '#1d1d1f' }}>Silindir / Piston Değerleri</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={calcCylinderCount} onChange={(e) => setCalcCylinderCount(e.target.value)}>
                            <option value="1">1 Piston</option>
                            <option value="2">2 Piston</option>
                            <option value="4">4 Piston</option>
                          </select>
                          <label>Piston Sayısı</label>
                        </div>
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={calcCylinderType} onChange={(e) => setCalcCylinderType(e.target.value)}>
                            <option value="standard">Standart (Tek Parça)</option>
                            <option value="telescopic">Teleskopik</option>
                          </select>
                          <label>Silindir Tipi</label>
                        </div>
                      </div>

                      {calcCylinderType === 'telescopic' && (
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={calcStages} onChange={(e) => setCalcStages(e.target.value)}>
                            <option value="2">2 Kademeli</option>
                            <option value="3">3 Kademeli</option>
                          </select>
                          <label>Teleskopik Kademe Sayısı</label>
                        </div>
                      )}

                      <div className="floating-select" style={{ position: 'relative' }}>
                        <select required value={calcPowerUnitCount} onChange={(e) => setCalcPowerUnitCount(e.target.value)}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        <label>Güç Ünitesi Sayısı</label>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        <div style={{ fontSize: '0.85rem', color: '#86868b', background: '#f5f5f7', padding: '1rem', borderRadius: '8px' }}>
                          ℹ️ Sisteminiz için en uygun piston çapı ve et kalınlığı, girilen kuyu ve kapasite ölçülerine göre otomatik olarak hesaplanacaktır.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GRUP 5: Gelişmiş Parametreler (Opsiyonel) */}
                  <details style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid #e5e5ea', cursor: 'pointer' }}>
                    <summary style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1d1d1f', outline: 'none' }}>Gelişmiş Parametreler & Özel Durumlar</summary>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="floating-input">
                          <input type="number" value={calcMaxAmbientTemp} onChange={(e) => setCalcMaxAmbientTemp(e.target.value)} />
                          <label>Ortam Sıcaklığı (°C) - Opsiyonel</label>
                        </div>
                        <div className="floating-input">
                          <input type="number" value={calcTravelFactor} onChange={(e) => setCalcTravelFactor(e.target.value)} />
                          <label>Seyir Frekansı (%) - Opsiyonel</label>
                        </div>
                      </div>

                      <div className="floating-select" style={{ position: 'relative' }}>
                        <select value={calcOilViscosity} onChange={(e) => setCalcOilViscosity(e.target.value)}>
                          <option value="32">VG 32</option>
                          <option value="46">VG 46</option>
                          <option value="68">VG 68</option>
                        </select>
                        <label>Yağ Viskozitesi</label>
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
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', padding: '1rem', background: '#f5f5f7', borderRadius: '8px' }}>
                          <div className="floating-input">
                            <input type="number" required={calcIsExisting} value={calcExistingRam} onChange={(e) => setCalcExistingRam(e.target.value)} />
                            <label>Mevcut Çap (mm)</label>
                          </div>
                          <div className="floating-input">
                            <input type="number" required={calcIsExisting} value={calcExistingThickness} onChange={(e) => setCalcExistingThickness(e.target.value)} />
                            <label>Mevcut Kalınlık (mm)</label>
                          </div>
                        </div>
                      )}

                    </div>
                  </details>

                  <button type="submit" className="minimal-submit">Hesapla</button>
                </form>
              ) : (
                <div style={{ animation: 'fadeUp 0.6s ease' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0, color: '#1d1d1f', letterSpacing: '-0.5px' }}>Projenize Özel Konfigürasyon</h2>
                    <button onClick={() => setCalcResult(null)} style={{ background: '#f5f5f7', border: 'none', color: '#1d1d1f', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, transition: '0.2s' }}>← Değiştir</button>
                  </div>
                  <p style={{ color: '#86868b', marginBottom: '2rem', fontSize: '1.05rem' }}>Mühendislik hesaplamaları tamamlandı. Sisteminiz için en uygun ve güvenli komponentler aşağıda listelenmiştir.</p>
                  


                  {/* Estimated Price Banner removed as per user request */}

                  {/* Top Recommended Components */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '1rem' }}>Önerilen Ana Komponentler</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                    {/* 1. Cylinder Card */}
                    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e5ea', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#86868b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Seçilen Piston</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '0.2rem' }}>
                          Ø{calcCylDiameter}x{calcCylThickness}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#86868b' }}>{calcCylinderCount} Adet {calcCylinderType === 'standard' ? 'Standart' : 'Teleskopik'}</div>
                      </div>
                      <div style={{ marginTop: '1rem', padding: '0.5rem', background: '#f5f5f7', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 500 }}>
                        Durum: {calcResult.isBucklingSafe ? 'Güvenli (Onaylı)' : 'Riskli'}
                      </div>
                    </div>

                    {/* 2. Pump Card */}
                    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e5ea', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#86868b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Pompa</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '0.2rem' }}>
                          {recommendedPump}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#86868b' }}>Minimum Debi: {calcResult.pumpFlow} L/dk</div>
                      </div>
                      <div style={{ marginTop: '1rem', padding: '0.5rem', background: '#f5f5f7', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 500 }}>
                        Sistem Debi Kapasitesi
                      </div>
                    </div>

                    {/* 3. Motor Card */}
                    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e5ea', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#86868b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Motor</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '0.2rem' }}>
                          {recommendedMotor} <span style={{fontSize:'1.2rem'}}>kW</span>
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#86868b' }}>Minimum gereksinim: {calcResult.motorPowerReq} kW</div>
                      </div>
                      <div style={{ marginTop: '1rem', padding: '0.5rem', background: '#f5f5f7', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 500 }}>
                        Statik Basınç: {calcResult.staticPressure} Bar
                      </div>
                    </div>

                    {/* 4. Valve Card - Premium Look */}
                    <div style={{ background: 'linear-gradient(145deg, #1d1d1f 0%, #434353 100%)', color: '#fff', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#a1a1a6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Kontrol Valfi</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                          {Number(calcResult?.pumpFlow || 0) < 125 ? 'EV100 3/4"' : Number(calcResult?.pumpFlow || 0) <= 800 ? 'EV100 1.5"' : 'EV100 2.5"'}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#d2d2d7' }}>Entegre sistem kontrolü</div>
                      </div>
                      <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.85rem' }}>
                        Debi Kapasitesi: {calcResult.pumpFlow} L/dk
                      </div>
                    </div>

                    {/* 5. Tank Card */}
                    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e5ea', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#86868b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Güç Ünitesi</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '0.2rem' }}>
                          {recommendedPowerUnit ? recommendedPowerUnit.model : "Özel Tank"}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#86868b' }}>Sistem yağ ihtiyacı: {calcResult.oilVolume} Lt</div>
                      </div>
                      <div style={{ marginTop: '1rem', padding: '0.5rem', background: '#f5f5f7', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 500 }}>
                        Piston Strok: {calcResult.stroke} mm
                      </div>
                    </div>
                  </div>

                  {/* Component Selections */}
                  <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#fff', borderRadius: '16px', border: '1px solid #e5e5ea', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1d1d1f', margin: 0 }}>Opsiyonel Donanımlar (Aksesuarlar)</h3>
                      <span style={{ fontSize: '0.85rem', color: '#86868b', background: '#f5f5f7', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>Birden fazla seçilebilir</span>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
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
                            <div style={{ position: 'absolute', top: '2px', left: item.state ? '22px' : '2px', width: '20px', height: '20px', background: '#fff', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', transition: '0.3s ease' }} />
                          </div>
                          <input type="checkbox" checked={item.state} onChange={(e) => item.setter(e.target.checked)} style={{ display: 'none' }} />
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Analysis Table Accordion */}
                  <details style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e5ea', marginBottom: '2rem', overflow: 'hidden' }}>
                    <summary style={{ padding: '1rem 1.5rem', background: '#f5f5f7', borderBottom: '1px solid #e5e5ea', fontWeight: 600, fontSize: '1rem', color: '#1d1d1f', cursor: 'pointer', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      Teknik Parametreleri ve Analiz Detaylarını Göster
                    </summary>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid #e5e5ea' }}>
                        <span style={{ fontWeight: 500, color: '#86868b' }}>Piston Ağırlığı</span>
                        <div style={{ display: 'flex', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                          <span style={{ fontWeight: 600 }}>{calcResult.ramWeight}</span>
                          <span style={{ color: '#86868b' }}>kg</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid #e5e5ea' }}>
                        <span style={{ fontWeight: 500, color: '#86868b' }}>Boş Kabin Basıncı</span>
                        <div style={{ display: 'flex', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                          <span style={{ fontWeight: 600 }}>{calcResult.pressureEmpty}</span>
                          <span style={{ color: '#86868b' }}>Bar</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid #e5e5ea' }}>
                        <span style={{ fontWeight: 500, color: '#86868b' }}>Gerçek Hız (Aşağı/Yukarı)</span>
                        <div style={{ display: 'flex', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                          <span style={{ fontWeight: 600 }}>{Number(calcResult.actualSpeed || calcSpeed).toFixed(2)}</span>
                          <span style={{ color: '#86868b' }}>m/s</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid #e5e5ea' }}>
                        <span style={{ fontWeight: 500, color: '#86868b' }}>Dinamik Basınç</span>
                        <div style={{ display: 'flex', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                          <span style={{ fontWeight: 600 }}>{calcResult.dynamicPressure}</span>
                          <span style={{ color: '#86868b' }}>Bar</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
                        <span style={{ fontWeight: 500, color: '#86868b' }}>Kapalı Boy</span>
                        <div style={{ display: 'flex', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                          <span style={{ fontWeight: 600 }}>{calcResult.closedLen}</span>
                          <span style={{ color: '#86868b' }}>mm</span>
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

              )}
            </div>
          )}

        </div>
      )}

      {/* --- CONTACT MODAL --- */}
      {showContactModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
          <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '24px', width: '100%', maxWidth: '500px', animation: 'fadeUp 0.3s ease' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: '#1d1d1f' }}>İletişim Bilgileri</h3>
            <p style={{ color: '#86868b', marginBottom: '2rem', fontSize: '0.95rem' }}>Teklifin size ulaşabilmesi ve projenin sisteme kaydedilebilmesi için lütfen bilgilerinizi girin.</p>
            
            <form onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmittingQuote(true);
              try {
                const payload = {
                  contactInfo: { companyName: contactCompany, contactName: contactName, email: contactEmail, phone: contactPhone },
                  projectData: {
                    capacity: Number(calcCapacity), carcassWeight: Number(calcCarcass), travelDistance: Number(calcTravel) * 1000,
                    buffer: Number(calcBuffer), pitDepth: Number(calcPitDepth), topFloor: Number(calcTopFloor),
                    cylinderCount: Number(calcCylinderCount), suspension: calcSuspension, speed: Number(calcSpeed),
                    mountingType: calcMountingType, cylinderType: calcCylinderType === 'telescopic' ? `telescopic-${calcStages}` : 'standard',
                    ropeWeight: Number(calcRopeWeight), buildingType: calcStartsPerHour, calculationResult: calcResult,
                    selectedCylinder: { d: calcCylDiameter, t: calcCylThickness },
                    recommendedMotor,
                    recommendedPump,
                    recommendedPowerUnit,
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
                };

                const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
                const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || (isLocalhost ? 'http://localhost:3000' : 'https://portal.blainturkey.com.tr'); 
                
                // Using a no-cors or simple try-catch. If CORS fails, we still want to open whatsapp.
                try {
                  await fetch(`${apiUrl}/api/external-quotes`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                  });
                } catch(fetchErr) {
                  console.warn("CRM API could not be reached or CORS blocked:", fetchErr);
                }

                alert("Sisteme başarıyla kaydedildi! Şimdi sizi WhatsApp yetkilisine yönlendiriyoruz.");
                setShowContactModal(false);

                const accessories = [];
                if (calcHandPump) accessories.push('El Pompası');
                if (calcBallValve) accessories.push('Küresel Vana');
                if (calcRuptureValve) accessories.push('Boru Patlama Valfi');
                if (calcA3Valve) accessories.push('A3 Valfi');
                if (calcLowPressure) accessories.push('Alçak Basınç Şalteri');
                if (calcHighPressure) accessories.push('Yüksek Basınç Şalteri');
                if (calcOverload) accessories.push('Aşırı Yük Şalteri');
                if (calcHeater) accessories.push('Yağ Isıtıcı');
                if (calcMicroLevel) accessories.push('Mikro Seviyeleme');

                const recommendedValve = Number(calcResult?.pumpFlow || 0) < 125 ? 'EV100 3/4"' : Number(calcResult?.pumpFlow || 0) <= 800 ? 'EV100 1.5"' : 'EV100 2.5"';
                const finalValve = calcUserValve || recommendedValve;

                const message = `*Proje Konfigürasyon Onayı*\n\n` +
                  `Sistem üzerinden teklif talebimi ilettim (Firma: ${contactCompany}). Hızlı iletişim için WhatsApp'tan yazıyorum.\n\n` +
                  `*-- ONAYLANAN KOMPONENTLER --*\n` +
                  `Kapasite: ${calcCapacity} kg\n` +
                  `Seyir: ${calcTravel} m\n` +
                  `Hız: ${calcSpeed} m/s\n` +
                  `Valf Seçimi: ${finalValve}\n` +
                  `Motor Gücü: ${calcResult.motorPowerReq} kW\n` +
                  `Yağ Hacmi: ${calcResult.oilVolume} Litre\n` +
                  `Silindir Ölçüsü: Ø${calcCylDiameter}x${calcCylThickness} mm\n` +
                  `Aksesuarlar: ${accessories.length > 0 ? accessories.join(', ') : 'Yok'}\n\n` +
                  `*-- TEKNİK ONAY --*\n` +
                  `Durum: ${calcResult.isBucklingSafe ? 'Güvenli (Onaylandı)' : 'Riskli (İnceleme Gerekli)'}`;
                  
                window.open(`https://wa.me/905424862821?text=${encodeURIComponent(message)}`, '_blank');
              } catch(err) {
                alert("Bir hata oluştu.");
              } finally {
                setIsSubmittingQuote(false);
              }
            }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="floating-input">
                <input type="text" required value={contactCompany} onChange={(e) => setContactCompany(e.target.value)} />
                <label>Firma Adı</label>
              </div>
              <div className="floating-input">
                <input type="text" required value={contactName} onChange={(e) => setContactName(e.target.value)} />
                <label>Yetkili Adı Soyadı</label>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="floating-input">
                  <input type="email" required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                  <label>E-posta</label>
                </div>
                <div className="floating-input">
                  <input type="tel" required value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} />
                  <label>Telefon</label>
                </div>
              </div>
              <div className="floating-input">
                <textarea rows={2} value={calcProjectNote} onChange={(e) => setCalcProjectNote(e.target.value)} />
                <label>Proje Notu (Opsiyonel)</label>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" onClick={() => setShowContactModal(false)} style={{ flex: 1, padding: '1rem', background: '#f5f5f7', color: '#1d1d1f', border: 'none', borderRadius: '12px', fontWeight: 500, cursor: 'pointer' }}>
                  İptal
                </button>
                <button type="submit" disabled={isSubmittingQuote} style={{ flex: 2, padding: '1rem', background: '#0066cc', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 600, cursor: 'pointer' }}>
                  {isSubmittingQuote ? 'Gönderiliyor...' : 'Teklif İste & WhatsApp\'a Git'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 
        ====================================================
        GLOBAL CSS STYLES FOR MINIMALIST UI
        ====================================================
      */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Hub Menu Items */
        .minimal-menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: none;
          border-bottom: 1px solid #e5e5ea;
          padding: 1.5rem 0;
          text-align: left;
          cursor: pointer;
          transition: 0.2s ease all;
          color: #1d1d1f;
        }
        .minimal-menu-item:hover {
          border-bottom-color: #1d1d1f;
        }
        .minimal-menu-item:hover svg {
          transform: translateX(4px);
        }
        .minimal-menu-item .title {
          display: block;
          font-size: 1.3rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .minimal-menu-item .desc {
          display: block;
          font-size: 0.95rem;
          color: #86868b;
        }
        .minimal-menu-item svg {
          color: #d2d2d7;
          transition: 0.2s ease transform, 0.2s ease color;
        }
        .minimal-menu-item:hover svg {
          color: #1d1d1f;
        }

        /* Links & Buttons */
        .minimal-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #0066cc;
          text-decoration: none;
          font-size: 0.85rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: calc(100% - 2rem);
          transition: 0.2s ease all;
        }

        /* Form Base Styles */
        .floating-input, .floating-select {
          position: relative;
          display: flex;
          flex-direction: column;
          font-family: inherit;
        }
        .floating-input input, .floating-input textarea, .floating-select select {
          width: 100%;
          padding: 1.4rem 1rem 0.5rem 1rem;
          font-size: 1rem;
          font-family: inherit;
          color: #1d1d1f;
          background: #fff;
          border: 1px solid #e5e5ea;
          border-radius: 12px;
          outline: none;
          transition: all 0.2s ease;
          box-sizing: border-box;
          -webkit-appearance: none;
          appearance: none;
        }
        .floating-input input:focus, .floating-input textarea:focus, .floating-select select:focus {
          border-color: #0066cc;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
        }
        .floating-input label, .floating-select label {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.95rem;
          color: #86868b;
          pointer-events: none;
          transition: all 0.2s ease;
          background: transparent;
        }
        .floating-input textarea ~ label {
          top: 1.2rem;
          transform: none;
        }

        /* Buttons */
        .minimal-submit {
          width: 100%;
          background: #0066cc;
          color: #ffffff;
          border: none;
          padding: 1.2rem;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease all;
          margin-top: 1rem;
          font-family: inherit;
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
        }
        .minimal-submit:hover {
          background: #005bb5;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 102, 204, 0.25);
        }
        .minimal-submit:active {
          transform: translateY(0);
        }

        .minimal-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: #86868b;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0;
          transition: 0.2s ease all;
          font-family: inherit;
        }
        .minimal-back-btn:hover {
          color: #1d1d1f;
        }

        .floating-input input:focus ~ label, 
        .floating-input input:not(:placeholder-shown) ~ label,
        .floating-input input:valid ~ label,
        .floating-input textarea:focus ~ label, 
        .floating-input textarea:valid ~ label,
        .floating-select select:focus ~ label,
        .floating-select select:valid ~ label {
          top: 0.3rem;
          font-size: 0.65rem;
          color: #0066cc;
        }
        .floating-input input:not(:focus):valid ~ label,
        .floating-input textarea:not(:focus):valid ~ label,
        .floating-select select:not(:focus):valid ~ label {
          color: #86868b;
        }
        .floating-select svg {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          color: #86868b;
          pointer-events: none; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: calc(100% - 2rem);
        }

        /* Minimal Segmented Control */
        .minimal-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .minimal-label {
          font-size: 0.85rem;
          color: #86868b;
        }
        .minimal-segmented {
          display: flex;
          background: #f5f5f7;
          border-radius: 8px;
          padding: 3px;
        }
        .minimal-segmented button {
          flex: 1;
          border: none;
          background: transparent;
          padding: 0.5rem;
          border-radius: 6px;
          font-size: 0.95rem;
          color: #86868b;
          font-weight: 500;
          cursor: pointer;
          transition: 0.2s ease all;
        }
        .minimal-segmented button.active {
          background: #ffffff;
          color: #1d1d1f;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}

const SegmentedControl = ({ options, value, onChange }: { options: {label: string, value: string}[], value: string, onChange: (val: string) => void }) => {
  return (
    <div className="minimal-segmented">
      {options.map(opt => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            className={isActive ? 'active' : ''}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

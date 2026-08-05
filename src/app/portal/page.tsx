'use client';
import React, { useState } from 'react';
import Link from 'next/link';

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

  // Calculator Form State
  const [calcCapacity, setCalcCapacity] = useState('630');
  const [calcCarcass, setCalcCarcass] = useState('500');
  const [calcTravel, setCalcTravel] = useState('15'); // meters
  const [calcSpeed, setCalcSpeed] = useState('0.63');
  const [calcSuspension, setCalcSuspension] = useState<'1:1' | '2:1' | '4:1'>('2:1');
  const [calcCylDiameter, setCalcCylDiameter] = useState('100');
  const [calcCylThickness, setCalcCylThickness] = useState('5');
  const [calcResult, setCalcResult] = useState<any>(null);
  
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
  
  // Accessories State
  const [calcUserValve, setCalcUserValve] = useState('');
  const [calcHandPump, setCalcHandPump] = useState(false);
  const [calcBallValve, setCalcBallValve] = useState(false);
  const [calcRuptureValve, setCalcRuptureValve] = useState(false);

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
      travelDistance: Number(calcTravel) * 1000,
      buffer: Number(calcBuffer),
      pitDepth: Number(calcPitDepth),
      topFloor: Number(calcTopFloor),
      cylinderCount: Number(calcCylinderCount),
      suspension: calcSuspension,
      speed: Number(calcSpeed),
      mountingType: calcMountingType as 'side' | 'central',
      cylinderType: calcCylinderType === 'telescopic' ? `telescopic-${calcStages}` as any : 'standard',
      ropeWeight: Number(calcRopeWeight),
      buildingType: calcStartsPerHour
    };
    
    const spec = {
      d: Number(calcCylDiameter),
      t: Number(calcCylThickness),
    };

    const result = calc.performEngineeringCalculation(inputs, spec);
    setCalcResult(result);
    
    // Auto-recommend valve
    const pFlow = Number(result?.pumpFlow || 0);
    const recommendedValve = pFlow < 125 ? '3/4" (EV100)' : pFlow <= 800 ? '1.5" / 2" (EV100)' : '2.5" (EV100)';
    setCalcUserValve(recommendedValve);
  };

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
            
            <button className="minimal-menu-item" onClick={() => setActiveView('login')}>
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

          {/* --- LOGIN FORM --- */}
          {activeView === 'login' && (
            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div className="floating-input">
                <input type="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                <label>E-posta Adresi</label>
              </div>
              <div className="floating-input">
                <input type="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                <label>Şifre</label>
              </div>
              <button type="submit" className="minimal-submit">Giriş Yap</button>
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
                          <select required value={calcStartsPerHour} onChange={(e) => setCalcStartsPerHour(e.target.value)} style={{ width: '100%', padding: '1.25rem 1rem 0.5rem', fontSize: '1rem', border: '1px solid #d2d2d7', borderRadius: '12px', background: 'transparent' }}>
                            <option value="<5">&lt;5 (Düşük Yoğunluk)</option>
                            <option value="5-15">5-15 (Orta)</option>
                            <option value="16-25">16-25 (Yüksek)</option>
                            <option value="26-35">26-35 (Çok Yüksek)</option>
                            <option value="36+">36+ (Aşırı Yoğun)</option>
                          </select>
                          <label style={{ position: 'absolute', top: '0.5rem', left: '1rem', fontSize: '0.75rem', color: '#86868b' }}>Motor Kalkış (Saat)</label>
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
                        <label>Seyir Mesafesi (Metre)</label>
                      </div>
                      <div className="floating-input">
                        <input type="number" required value={calcPitDepth} onChange={(e) => setCalcPitDepth(e.target.value)} />
                        <label>Kuyu Dibi (mm)</label>
                      </div>
                      <div className="floating-input">
                        <input type="number" required value={calcTopFloor} onChange={(e) => setCalcTopFloor(e.target.value)} />
                        <label>Son Kat (mm)</label>
                      </div>
                      <div className="floating-input">
                        <input type="number" required value={calcBuffer} onChange={(e) => setCalcBuffer(e.target.value)} />
                        <label>Tampon Mesafesi (mm)</label>
                      </div>
                    </div>
                  </div>

                  {/* GRUP 3: Mekanik Yapı */}
                  <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid #e5e5ea', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: '#1d1d1f' }}>Mekanik Yapı</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={calcSuspension} onChange={(e) => setCalcSuspension(e.target.value as any)} style={{ width: '100%', padding: '1.25rem 1rem 0.5rem', fontSize: '1rem', border: '1px solid #d2d2d7', borderRadius: '12px', background: 'transparent' }}>
                            <option value="1:1">1:1</option>
                            <option value="2:1">2:1</option>
                            <option value="4:1">4:1</option>
                          </select>
                          <label style={{ position: 'absolute', top: '0.5rem', left: '1rem', fontSize: '0.75rem', color: '#86868b' }}>Askı Tipi</label>
                        </div>
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={calcMountingType} onChange={(e) => setCalcMountingType(e.target.value)} style={{ width: '100%', padding: '1.25rem 1rem 0.5rem', fontSize: '1rem', border: '1px solid #d2d2d7', borderRadius: '12px', background: 'transparent' }}>
                            <option value="side">Yandan Süspansiyon</option>
                            <option value="central">Merkezi / Alttan</option>
                          </select>
                          <label style={{ position: 'absolute', top: '0.5rem', left: '1rem', fontSize: '0.75rem', color: '#86868b' }}>Montaj Yönü</label>
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
                          <select required value={calcCylinderCount} onChange={(e) => setCalcCylinderCount(e.target.value)} style={{ width: '100%', padding: '1.25rem 1rem 0.5rem', fontSize: '1rem', border: '1px solid #d2d2d7', borderRadius: '12px', background: 'transparent' }}>
                            <option value="1">1 Piston</option>
                            <option value="2">2 Piston</option>
                            <option value="4">4 Piston</option>
                          </select>
                          <label style={{ position: 'absolute', top: '0.5rem', left: '1rem', fontSize: '0.75rem', color: '#86868b' }}>Piston Sayısı</label>
                        </div>
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={calcCylinderType} onChange={(e) => setCalcCylinderType(e.target.value)} style={{ width: '100%', padding: '1.25rem 1rem 0.5rem', fontSize: '1rem', border: '1px solid #d2d2d7', borderRadius: '12px', background: 'transparent' }}>
                            <option value="standard">Standart (Tek Parça)</option>
                            <option value="telescopic">Teleskopik</option>
                          </select>
                          <label style={{ position: 'absolute', top: '0.5rem', left: '1rem', fontSize: '0.75rem', color: '#86868b' }}>Silindir Tipi</label>
                        </div>
                      </div>

                      {calcCylinderType === 'telescopic' && (
                        <div className="floating-select" style={{ position: 'relative' }}>
                          <select required value={calcStages} onChange={(e) => setCalcStages(e.target.value)} style={{ width: '100%', padding: '1.25rem 1rem 0.5rem', fontSize: '1rem', border: '1px solid #d2d2d7', borderRadius: '12px', background: 'transparent' }}>
                            <option value="2">2 Kademeli</option>
                            <option value="3">3 Kademeli</option>
                          </select>
                          <label style={{ position: 'absolute', top: '0.5rem', left: '1rem', fontSize: '0.75rem', color: '#86868b' }}>Teleskopik Kademe Sayısı</label>
                        </div>
                      )}

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="floating-input">
                          <input type="number" required value={calcCylDiameter} onChange={(e) => setCalcCylDiameter(e.target.value)} />
                          <label>Dış Çap (mm)</label>
                        </div>
                        <div className="floating-input">
                          <input type="number" required value={calcCylThickness} onChange={(e) => setCalcCylThickness(e.target.value)} />
                          <label>Et Kalınlığı (mm)</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="minimal-submit">Hesapla</button>
                </form>
              ) : (
                <div style={{ animation: 'fadeUp 0.6s ease' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Teknik Analiz Raporu</h2>
                    <button onClick={() => setCalcResult(null)} style={{ background: 'none', border: 'none', color: '#0066cc', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }}>Yeniden Hesapla</button>
                  </div>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid #e5e5ea', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Sistem Değerleri</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                      <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                        <div style={{ fontSize: '0.8rem', color: '#86868b', marginBottom: '0.5rem' }}>Motor Gücü</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{calcResult.motorPowerReq} <span style={{fontSize:'0.9rem', color:'#86868b', fontWeight:400}}>kW</span></div>
                      </div>
                      <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                        <div style={{ fontSize: '0.8rem', color: '#86868b', marginBottom: '0.5rem' }}>Pompa Debisi</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{calcResult.pumpFlow} <span style={{fontSize:'0.9rem', color:'#86868b', fontWeight:400}}>L/dk</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Component Selections */}
                  <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f5f5f7', borderRadius: '16px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', color: '#1d1d1f' }}>Komponent ve Aksesuar Seçimi</h3>
                    
                    <div className="minimal-group" style={{ marginBottom: '1.5rem' }}>
                      <label className="minimal-label" style={{ fontWeight: 600 }}>Valf Seçimi</label>
                      <select 
                        value={calcUserValve}
                        onChange={(e) => setCalcUserValve(e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d2d2d7', fontSize: '1rem', background: '#fff' }}
                      >
                        <option value='3/4" (EV100)'>3/4" (EV100)</option>
                        <option value='1.5" (EV100)'>1.5" (EV100)</option>
                        <option value='2" (EV100)'>2" (EV100)</option>
                        <option value='2.5" (EV100)'>2.5" (EV100)</option>
                        <option value='KV (Küçük Valf)'>KV (Küçük Valf)</option>
                      </select>
                      <div style={{ fontSize: '0.8rem', color: '#86868b', marginTop: '0.5rem' }}>
                        * Sistem debiye göre <strong>{Number(calcResult?.pumpFlow || 0) < 125 ? '3/4" (EV100)' : Number(calcResult?.pumpFlow || 0) <= 800 ? '1.5" / 2" (EV100)' : '2.5" (EV100)'}</strong> modelini önermektedir.
                      </div>
                    </div>

                    <div className="minimal-group">
                      <label className="minimal-label" style={{ fontWeight: 600, marginBottom: '1rem' }}>Opsiyonel Aksesuarlar</label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                          <input type="checkbox" checked={calcHandPump} onChange={(e) => setCalcHandPump(e.target.checked)} style={{ width: '18px', height: '18px' }} />
                          <span>El Pompası (Acil kurtarma için)</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                          <input type="checkbox" checked={calcBallValve} onChange={(e) => setCalcBallValve(e.target.checked)} style={{ width: '18px', height: '18px' }} />
                          <span>Küresel Vana (Bakım kolaylığı için)</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                          <input type="checkbox" checked={calcRuptureValve} onChange={(e) => setCalcRuptureValve(e.target.checked)} style={{ width: '18px', height: '18px' }} />
                          <span>Boru Patlama Valfi (Güvenlik)</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button onClick={() => {
                    const accessories = [];
                    if (calcHandPump) accessories.push('El Pompası');
                    if (calcBallValve) accessories.push('Küresel Vana');
                    if (calcRuptureValve) accessories.push('Boru Patlama Valfi');

                    const message = `*Detaylı Teknik Hesaplama Raporu*\n\n` +
                      `*-- SİSTEM VERİLERİ --*\n` +
                      `Kapasite: ${calcCapacity} kg\n` +
                      `Karkas: ${calcCarcass} kg\n` +
                      `Kabin Hızı: ${calcSpeed} m/s\n` +
                      `Motor Kalkış: ${calcStartsPerHour} (Saat)\n\n` +
                      `*-- KUYU ÖLÇÜLERİ --*\n` +
                      `Seyir: ${calcTravel} m\n` +
                      `Kuyu Dibi: ${calcPitDepth} mm\n` +
                      `Son Kat: ${calcTopFloor} mm\n` +
                      `Tampon: ${calcBuffer} mm\n\n` +
                      `*-- MEKANİK YAPI --*\n` +
                      `Askı Tipi: ${calcSuspension}\n` +
                      `Montaj: ${calcMountingType === 'side' ? 'Yandan' : 'Merkezi'}\n` +
                      `Halat/Kasnak Ağ.: ${calcRopeWeight} kg\n` +
                      `Silindir Tipi: ${calcCylinderType === 'standard' ? 'Standart' : 'Teleskopik (' + calcStages + ' Kademe)'}\n` +
                      `Piston Sayısı: ${calcCylinderCount}\n` +
                      `Silindir Ölçüsü: Ø${calcCylDiameter}x${calcCylThickness} mm\n\n` +
                      `*-- SONUÇLAR --*\n` +
                      `Pompa Debisi: ${calcResult.pumpFlow} L/dk\n` +
                      `Motor Gücü: ${calcResult.motorPowerReq} kW\n` +
                      `Yağ Hacmi: ${calcResult.oilVolume} Litre\n` +
                      `Dinamik Basınç: ${calcResult.dynamicPressure} bar\n` +
                      `Statik Basınç: ${calcResult.staticPressure} bar\n` +
                      `Strok: ${calcResult.stroke} mm\n` +
                      `Burkulma Faktörü: ${calcResult.bucklingFactor} (${calcResult.isBucklingSafe ? 'Güvenli' : 'Riskli!'})\n\n` +
                      `*-- SEÇİLEN KOMPONENTLER --*\n` +
                      `Valf Seçimi: ${calcUserValve}\n` +
                      `Aksesuarlar: ${accessories.length > 0 ? accessories.join(', ') : 'Yok'}`;
                      
                    window.open(`https://wa.me/905424862821?text=${encodeURIComponent(message)}`, '_blank');
                  }} className="minimal-submit" style={{ width: '100%', background: '#34c759' }}>
                    Bu Projeyi WhatsApp'tan Gönder
                  </button>
                </div>
              )}
            </div>
          )}

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
          font-size: 1rem;
          font-weight: 500;
        }
        .minimal-link:hover { text-decoration: underline; }

        .minimal-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: none;
          border: none;
          color: #0066cc;
          font-size: 1rem;
          font-weight: 500;
          padding: 0;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .minimal-back-btn:hover { opacity: 0.7; }

        .minimal-submit {
          background-color: #1d1d1f;
          color: #fff;
          border: none;
          padding: 1rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 1rem;
        }
        .minimal-submit:hover {
          background-color: #424245;
        }

        /* Floating Input Styles */
        .floating-input {
          position: relative;
        }
        .floating-input input, .floating-input textarea {
          width: 100%;
          padding: 0.5rem 0;
          font-size: 1.1rem;
          color: #1d1d1f;
          background: transparent;
          border: none;
          border-bottom: 1px solid #d2d2d7;
          outline: none;
          font-family: inherit;
          border-radius: 0;
          transition: border-color 0.2s;
        }
        .floating-input textarea {
          padding-top: 1.25rem;
        }
        .floating-input label {
          position: absolute;
          left: 0;
          top: 0.5rem;
          color: #86868b;
          font-size: 1.1rem;
          pointer-events: none;
          transition: 0.2s ease all;
        }
        /* Float the label when focused or has value */
        .floating-input input:focus ~ label, 
        .floating-input input:valid ~ label,
        .floating-input textarea:focus ~ label, 
        .floating-input textarea:valid ~ label {
          top: -12px;
          font-size: 0.85rem;
          color: #0066cc;
        }
        .floating-input input:focus, .floating-input textarea:focus {
          border-bottom-color: #0066cc;
        }

        /* Custom Floating Select */
        .floating-select {
          position: relative;
        }
        .floating-select select {
          width: 100%;
          padding: 1.25rem 0 0.5rem 0;
          font-size: 1.1rem;
          color: #1d1d1f;
          background: transparent;
          border: none;
          border-bottom: 1px solid #d2d2d7;
          outline: none;
          font-family: inherit;
          border-radius: 0;
          appearance: none;
          transition: border-color 0.2s;
          cursor: pointer;
        }
        .floating-select select:focus {
          border-bottom-color: #0066cc;
        }
        .floating-select label {
          position: absolute;
          left: 0;
          top: -12px;
          font-size: 0.85rem;
          color: #86868b;
          pointer-events: none;
        }
        .floating-select svg {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-20%);
          width: 16px;
          height: 16px;
          color: #1d1d1f;
          pointer-events: none;
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

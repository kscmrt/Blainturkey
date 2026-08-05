'use client';
import React, { useState } from 'react';
import Link from 'next/link';

type ViewState = 'hub' | 'quote' | 'service' | 'login';

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

  // Service Form State
  const [serviceName, setServiceName] = useState('');
  const [servicePhone, setServicePhone] = useState('');
  const [serviceSerial, setServiceSerial] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Teklif talebiniz başarıyla alınmıştır.');
    setActiveView('hub');
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Servis talebiniz teknik ekibimize iletilmiştir.');
    setActiveView('hub');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Giriş bilgileri hatalı veya yetkiniz yok.');
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
        FORMS CONTAINER
        ====================================================
      */}
      {activeView !== 'hub' && (
        <div style={{ width: '100%', maxWidth: '500px', padding: '2rem', animation: 'fadeUp 0.5s ease forwards' }}>
          
          <button className="minimal-back-btn" onClick={() => setActiveView('hub')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Geri Dön
          </button>

          <h2 style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.02em', margin: '2rem 0 3rem 0' }}>
            {activeView === 'quote' && 'Teklif İste.'}
            {activeView === 'service' && 'Servis Talebi.'}
            {activeView === 'login' && 'Bayi Girişi.'}
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

              <button type="submit" className="minimal-submit">Teklif Gönder</button>
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
                <input type="tel" required value={servicePhone} onChange={(e) => setServicePhone(e.target.value)} />
                <label>Telefon Numaranız</label>
              </div>
              <div className="floating-input">
                <input type="text" value={serviceSerial} onChange={(e) => setServiceSerial(e.target.value)} />
                <label>Valf Seri Numarası (Opsiyonel)</label>
              </div>
              <div className="floating-input">
                <textarea required rows={4} value={serviceDesc} onChange={(e) => setServiceDesc(e.target.value)} />
                <label>Talep Detayı / Arıza Açıklaması</label>
              </div>
              <button type="submit" className="minimal-submit">Talebi Gönder</button>
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
              <div style={{ textAlign: 'right', marginTop: '-1.5rem' }}>
                <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontSize: '0.9rem' }}>Şifremi unuttum</a>
              </div>
              <button type="submit" className="minimal-submit">Giriş Yap</button>
            </form>
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

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

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Teklif talebiniz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçilecektir.');
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

  // UI Components
  const BackButton = () => (
    <button 
      onClick={() => setActiveView('hub')}
      style={{
        background: '#f5f5f7',
        border: 'none',
        color: '#1d1d1f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        fontSize: '0.95rem',
        fontWeight: 600,
        padding: '0.6rem 1rem',
        borderRadius: '20px',
        transition: 'background-color 0.2s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8e8ed'} 
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f7'}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      Geri Dön
    </button>
  );

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'url("/images/Slide-1-1-scaled.jpg") center/cover no-repeat',
      position: 'relative',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      {/* Dark Blur Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 5, 15, 0.75)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
      }}></div>

      <div className="portal-wrapper" style={{ 
        position: 'relative', 
        zIndex: 10, 
        width: '100%', 
        maxWidth: activeView === 'hub' ? '1000px' : '560px', 
        transition: 'max-width 0.5s cubic-bezier(0.25, 1, 0.5, 1)' 
      }}>
        
        {/* ========================================= */}
        {/* HUB VIEW */}
        {/* ========================================= */}
        {activeView === 'hub' && (
          <div style={{ textAlign: 'center', animation: 'fadeIn 0.6s ease' }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-1px', marginBottom: '1rem' }}>Müşteri Portalı</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: '4rem' }}>Lütfen yapmak istediğiniz işlemi seçin.</p>
            
            <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              
              {/* Teklif İste Card */}
              <div 
                className="hub-card"
                onClick={() => setActiveView('quote')}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '28px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #0071e3, #003399)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 10px 20px rgba(0, 113, 227, 0.3)' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.5px' }}>Teklif İste</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.6, textAlign: 'center' }}>Projeleriniz için teknik detayları girerek anında fiyat teklifi talebi oluşturun.</p>
              </div>

              {/* Servis İste Card */}
              <div 
                className="hub-card"
                onClick={() => setActiveView('service')}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '28px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #f56c2d, #d93800)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 10px 20px rgba(245, 108, 45, 0.3)' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.5px' }}>Servis Talebi</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.6, textAlign: 'center' }}>Blain ürünleriniz için teknik destek, bakım veya onarım talebi oluşturun.</p>
              </div>

              {/* Müşteri Girişi Card */}
              <div 
                className="hub-card"
                onClick={() => setActiveView('login')}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '28px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #333, #000)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.5px' }}>Müşteri Girişi</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.6, textAlign: 'center' }}>Bayilerimiz için özel belgeler, geçmiş teklifler ve fatura ekranı.</p>
              </div>

            </div>
            
            <div style={{ marginTop: '5rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s', fontWeight: 500 }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Ana Sayfaya Dön
              </Link>
            </div>
            
          </div>
        )}

        {/* ========================================= */}
        {/* FORMS CONTAINER */}
        {/* ========================================= */}
        {activeView !== 'hub' && (
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            borderRadius: '24px',
            width: '100%',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeIn 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
          }}>
            
            {/* Form Header (Clean White/Modern) */}
            <div className="form-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxSizing: 'border-box',
              borderBottom: '1px solid rgba(0,0,0,0.06)'
            }}>
              <div className="form-header-title">
                {activeView === 'quote' && 'Hidrolik Sistem Teklif'}
                {activeView === 'service' && 'Teknik Servis Talebi'}
                {activeView === 'login' && 'Bayi Girişi'}
              </div>
              <div style={{ alignSelf: 'center' }}>
                <BackButton />
              </div>
            </div>

            {/* QUOTE FORM */}
            {activeView === 'quote' && (
              <form className="form-wrapper" onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Kapasite */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={labelStyle}>Kapasite</label>
                  <SegmentedControl 
                    options={[{label: 'Kişi Sayısı', value: 'person'}, {label: 'Kilogram', value: 'kg'}]} 
                    value={capacityType} 
                    onChange={(v: any) => setCapacityType(v)} 
                  />
                  <input type="number" placeholder={capacityType === 'person' ? 'Örn: 6' : 'Örn: 450'} value={capacityValue} onChange={(e) => setCapacityValue(e.target.value)} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                {/* Kabin Karkas Ağırlığı */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={labelStyle}>Kabin karkas ağırlığı (kg)</label>
                  <input type="number" placeholder="Örn: 600" value={cabinWeight} onChange={(e) => setCabinWeight(e.target.value)} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                {/* Seyir Mesafesi */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={labelStyle}>Seyir Mesafesi</label>
                  <SegmentedControl 
                    options={[{label: 'Durak Sayısı', value: 'stops'}, {label: 'Seyir Mesafesi (mm)', value: 'mm'}]} 
                    value={travelType} 
                    onChange={(v: any) => setTravelType(v)} 
                  />
                  <input type="number" placeholder={travelType === 'stops' ? 'Örn: 5' : 'Örn: 15000'} value={travelValue} onChange={(e) => setTravelValue(e.target.value)} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                {/* Kabin hızı */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={labelStyle}>Kabin hızı</label>
                  <div style={{ position: 'relative' }}>
                    <select value={speed} onChange={(e) => setSpeed(e.target.value)} required style={{...inputStyle, backgroundColor: '#f5f5f7', cursor: 'pointer', appearance: 'none', paddingRight: '3rem'}} onFocus={handleFocus} onBlur={handleBlur}>
                      <option value="" disabled>Seçiniz</option>
                      <option value="0.15">0.15 m/s</option>
                      <option value="0.30">0.30 m/s</option>
                      <option value="0.40">0.40 m/s</option>
                      <option value="0.63">0.63 m/s</option>
                      <option value="0.80">0.80 m/s</option>
                      <option value="1.00">1.00 m/s</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#86868b' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                </div>

                {/* Uygulanacak Regülasyon */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={labelStyle}>Uygulanacak Regülasyon</label>
                  <SegmentedControl 
                    options={[{label: 'Makine Direktifi', value: 'machine'}, {label: 'TS EN 81-20/50', value: 'en81'}]} 
                    value={regulation} 
                    onChange={(v: any) => setRegulation(v)} 
                  />
                </div>

                {/* Firma adı */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={labelStyle}>Firma Adı</label>
                  <input type="text" placeholder="Örn: ABC Asansör" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <SubmitButton text="Teklif İste" />
                </div>
              </form>
            )}

            {/* SERVICE FORM */}
            {activeView === 'service' && (
              <form className="form-wrapper" onSubmit={handleServiceSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <p style={{ color: '#86868b', fontSize: '1.05rem', marginBottom: '0.5rem', lineHeight: 1.5 }}>Blain ürünleriyle ilgili yaşadığınız sorunu veya talebinizi detaylı olarak bizimle paylaşın.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={labelStyle}>Firma Adı / İletişim Kişisi</label>
                  <input type="text" placeholder="Adınız veya firmanız" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={labelStyle}>Telefon Numaranız</label>
                  <input type="tel" placeholder="05XX XXX XX XX" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={labelStyle}>Valf Seri Numarası (Varsa)</label>
                  <input type="text" placeholder="Örn: 24/104523" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={labelStyle}>Talep Detayı</label>
                  <textarea placeholder="Durumu detaylıca açıklayın..." rows={5} required style={{...inputStyle, resize: 'vertical'}} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <SubmitButton text="Talebi Gönder" />
              </form>
            )}

            {/* LOGIN FORM */}
            {activeView === 'login' && (
              <div className="login-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="/images/blainico-150x150.jpg" alt="Blain" style={{ width: '80px', borderRadius: '20px', marginBottom: '1.5rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>Bayi Girişi</h2>
                <p style={{ color: '#86868b', fontSize: '1.05rem', marginBottom: '2.5rem', textAlign: 'center' }}>Lütfen size verilen bilgiler ile giriş yapın.</p>
                
                <form onSubmit={handleLoginSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <label style={labelStyle}>E-posta Adresi</label>
                    <input type="email" placeholder="ornek@firma.com" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <label style={{...labelStyle, display: 'flex', justifyContent: 'space-between'}}>
                      <span>Şifre</span>
                      <a href="#" style={{ color: '#0071e3', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Şifremi Unuttum</a>
                    </label>
                    <input type="password" placeholder="••••••••" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <SubmitButton text="Giriş Yap" />
                  </div>
                </form>
              </div>
            )}

          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .portal-wrapper { padding: 2.5rem; box-sizing: border-box; }
        .hub-card { padding: 3.5rem 2rem; box-sizing: border-box; }
        .form-wrapper { padding: 2.5rem 2rem; box-sizing: border-box; }
        .form-header { padding: 1.5rem 2rem; }
        .login-wrapper { padding: 3.5rem 2rem; box-sizing: border-box; }
        .form-header-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1d1d1f;
          margin: 0;
          letter-spacing: -0.5px;
        }
        
        /* Custom Scrollbar for modern feel */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.3); }

        @media (max-width: 768px) {
          .portal-wrapper { padding: 1.5rem; }
          .hub-card { padding: 2.5rem 1.5rem; }
          .form-wrapper { padding: 1.75rem 1.25rem; }
          .form-header { 
            padding: 1.25rem; 
            flex-direction: row; 
            align-items: center !important; 
          }
          .form-header-title { font-size: 1.25rem; }
          .login-wrapper { padding: 2.5rem 1.5rem; }
          .grid-container { grid-template-columns: 1fr !important; }
        }
        
        @media (max-width: 480px) {
          .portal-wrapper { padding: 1rem; }
          .form-wrapper { padding: 1.5rem 1rem; }
          .form-header { padding: 1rem; flex-direction: column; align-items: flex-start !important; gap: 0.75rem; }
          .login-wrapper { padding: 2rem 1rem; }
        }
      `}</style>
    </div>
  );
}

// Shared Styles & Components
const labelStyle: React.CSSProperties = {
  display: 'block', 
  color: '#1d1d1f', 
  fontWeight: 600, 
  fontSize: '1rem',
  letterSpacing: '-0.3px'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '1rem 1.25rem',
  backgroundColor: '#f5f5f7',
  border: '1px solid transparent',
  borderRadius: '12px',
  fontSize: '1.05rem',
  color: '#1d1d1f',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'inherit',
  boxSizing: 'border-box'
};

const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = '#0071e3';
  e.target.style.backgroundColor = '#ffffff';
  e.target.style.boxShadow = '0 0 0 4px rgba(0, 113, 227, 0.1)';
};
const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = 'transparent';
  e.target.style.backgroundColor = '#f5f5f7';
  e.target.style.boxShadow = 'none';
};

const SegmentedControl = ({ options, value, onChange }: { options: {label: string, value: string}[], value: string, onChange: (val: string) => void }) => {
  return (
    <div style={{ display: 'flex', background: '#f5f5f7', padding: '4px', borderRadius: '12px' }}>
      {options.map(opt => {
        const isActive = value === opt.value;
        return (
          <div 
            key={opt.value}
            onClick={() => onChange(opt.value)}
            style={{ 
              flex: 1, 
              textAlign: 'center', 
              padding: '0.75rem 0.5rem', 
              background: isActive ? '#ffffff' : 'transparent', 
              borderRadius: '8px', 
              boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              color: isActive ? '#1d1d1f' : '#86868b',
              fontWeight: isActive ? 600 : 500,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none'
            }}
          >
            {opt.label}
          </div>
        )
      })}
    </div>
  )
}

const SubmitButton = ({ text }: { text: string }) => (
  <button type="submit" style={{
    width: '100%',
    backgroundColor: '#0071e3',
    color: '#ffffff',
    padding: '1.1rem',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: 600,
    letterSpacing: '-0.3px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 113, 227, 0.3)'
  }} 
  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0062c3'; e.currentTarget.style.transform = 'translateY(-1px)'; }} 
  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0071e3'; e.currentTarget.style.transform = 'translateY(0)'; }}
  onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
  >
    {text}
  </button>
);

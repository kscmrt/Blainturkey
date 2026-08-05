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
        background: 'none',
        border: 'none',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        fontSize: '0.95rem',
        opacity: 0.8,
        transition: 'opacity 0.2s',
        padding: 0
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} 
      onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
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
        backgroundColor: 'rgba(0, 15, 40, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}></div>

      <div className="portal-wrapper" style={{ 
        position: 'relative', 
        zIndex: 10, 
        width: '100%', 
        maxWidth: activeView === 'hub' ? '1000px' : '500px', 
        transition: 'max-width 0.4s cubic-bezier(0.25, 1, 0.5, 1)' 
      }}>
        
        {/* ========================================= */}
        {/* HUB VIEW */}
        {/* ========================================= */}
        {activeView === 'hub' && (
          <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '1rem' }}>Müşteri Portalı</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '3.5rem' }}>Lütfen yapmak istediğiniz işlemi seçin.</p>
            
            <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              
              {/* Teklif İste Card */}
              <div 
                className="hub-card"
                onClick={() => setActiveView('quote')}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              >
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #0071e3, #003399)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 8px 20px rgba(0, 51, 153, 0.4)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem' }}>Teklif İste</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'center' }}>Projeleriniz için teknik detayları girerek anında fiyat teklifi talebi oluşturun.</p>
              </div>

              {/* Servis İste Card */}
              <div 
                className="hub-card"
                onClick={() => setActiveView('service')}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              >
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #f56c2d, #d93800)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 8px 20px rgba(217, 56, 0, 0.4)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem' }}>Servis Talebi</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'center' }}>Blain ürünleriniz için teknik destek, bakım veya onarım talebi oluşturun.</p>
              </div>

              {/* Müşteri Girişi Card */}
              <div 
                className="hub-card"
                onClick={() => setActiveView('login')}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              >
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #111, #333)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem' }}>Müşteri Girişi</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'center' }}>Bayilerimiz için özel belgeler, geçmiş teklifler ve fatura ekranı.</p>
              </div>

            </div>
            
            <div style={{ marginTop: '5rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Ana Sayfaya Dön
              </Link>
            </div>
            
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .portal-wrapper {
                padding: 2rem;
              }
              .hub-card {
                padding: 3rem 2rem;
              }
              .form-wrapper {
                padding: 2rem 1.5rem;
              }
              .form-header {
                padding: 1.25rem 1.5rem;
              }
              .login-wrapper {
                padding: 3rem 2rem;
              }
              @media (max-width: 600px) {
                .portal-wrapper { padding: 1rem; }
                .hub-card { padding: 2rem 1rem; }
                .form-wrapper { padding: 1.5rem 1rem; }
                .form-header { padding: 1rem; }
                .login-wrapper { padding: 2rem 1rem; }
                .grid-container { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </div>
        )}

        {/* ========================================= */}
        {/* FORMS CONTAINER */}
        {/* ========================================= */}
        {activeView !== 'hub' && (
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            width: '100%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeIn 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
          }}>
            
            {/* Form Header */}
            <div className="form-header" style={{
              backgroundColor: '#2b4478',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h1 style={{ color: '#ffffff', margin: 0, fontSize: '1.15rem', fontWeight: 600 }}>
                {activeView === 'quote' && 'Hidrolik Sistem Teklif'}
                {activeView === 'service' && 'Teknik Servis Talebi'}
                {activeView === 'login' && 'Müşteri Girişi'}
              </h1>
              <BackButton />
            </div>

            {/* QUOTE FORM */}
            {activeView === 'quote' && (
              <form className="form-wrapper" onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Kapasite */}
                <div>
                  <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Kapasite</label>
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.75rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: capacityType === 'person' ? '#111' : '#666', fontWeight: capacityType === 'person' ? 600 : 400 }}>
                      <input type="radio" name="capacityType" checked={capacityType === 'person'} onChange={() => setCapacityType('person')} style={{ accentColor: '#2b4478' }} /> Kişi Sayısı
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: capacityType === 'kg' ? '#111' : '#666', fontWeight: capacityType === 'kg' ? 600 : 400 }}>
                      <input type="radio" name="capacityType" checked={capacityType === 'kg'} onChange={() => setCapacityType('kg')} style={{ accentColor: '#2b4478' }} /> Kilogram
                    </label>
                  </div>
                  <input type="number" placeholder={capacityType === 'person' ? 'Örn: 6' : 'Örn: 450'} value={capacityValue} onChange={(e) => setCapacityValue(e.target.value)} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                {/* Kabin Karkas Ağırlığı */}
                <div>
                  <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Kabin karkas ağırlığı (kg)</label>
                  <input type="number" placeholder="Örn: 600" value={cabinWeight} onChange={(e) => setCabinWeight(e.target.value)} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                {/* Seyir Mesafesi */}
                <div>
                  <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Seyir Mesafesi</label>
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.75rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: travelType === 'stops' ? '#111' : '#666', fontWeight: travelType === 'stops' ? 600 : 400 }}>
                      <input type="radio" name="travelType" checked={travelType === 'stops'} onChange={() => setTravelType('stops')} style={{ accentColor: '#2b4478' }} /> Durak Sayısı
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: travelType === 'mm' ? '#111' : '#666', fontWeight: travelType === 'mm' ? 600 : 400 }}>
                      <input type="radio" name="travelType" checked={travelType === 'mm'} onChange={() => setTravelType('mm')} style={{ accentColor: '#2b4478' }} /> Seyir Mesafesi (mm)
                    </label>
                  </div>
                  <input type="number" placeholder={travelType === 'stops' ? 'Örn: 5' : 'Örn: 15000'} value={travelValue} onChange={(e) => setTravelValue(e.target.value)} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                {/* Kabin hızı */}
                <div>
                  <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Kabin hızı</label>
                  <select value={speed} onChange={(e) => setSpeed(e.target.value)} required style={{...inputStyle, backgroundColor: '#fff', cursor: 'pointer'}} onFocus={handleFocus} onBlur={handleBlur}>
                    <option value="" disabled>Hız seçiniz</option>
                    <option value="0.15">0.15 m/s</option>
                    <option value="0.30">0.30 m/s</option>
                    <option value="0.40">0.40 m/s</option>
                    <option value="0.63">0.63 m/s</option>
                    <option value="0.80">0.80 m/s</option>
                    <option value="1.00">1.00 m/s</option>
                  </select>
                </div>

                {/* Uygulanacak Regülasyon */}
                <div>
                  <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Uygulanacak Regülasyon</label>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <label style={{ flex: 1, display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: regulation === 'machine' ? '#111' : '#666', fontWeight: regulation === 'machine' ? 600 : 400 }}>
                      <input type="radio" name="regulation" checked={regulation === 'machine'} onChange={() => setRegulation('machine')} style={{ accentColor: '#2b4478', marginTop: '4px' }} /> 
                      <span style={{ lineHeight: 1.4 }}>Makine Direktifi<br/>(2006/42/EC)</span>
                    </label>
                    <label style={{ flex: 1, display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: regulation === 'en81' ? '#111' : '#666', fontWeight: regulation === 'en81' ? 600 : 400 }}>
                      <input type="radio" name="regulation" checked={regulation === 'en81'} onChange={() => setRegulation('en81')} style={{ accentColor: '#2b4478', marginTop: '4px' }} /> 
                      <span style={{ lineHeight: 1.4 }}>TS EN 81-<br/>20/50</span>
                    </label>
                  </div>
                </div>

                {/* Firma adı */}
                <div>
                  <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Firma adı</label>
                  <input type="text" placeholder="Örn: ABC Asansör" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                <SubmitButton text="Teklif İste" />
              </form>
            )}

            {/* SERVICE FORM */}
            {activeView === 'service' && (
              <form className="form-wrapper" onSubmit={handleServiceSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Blain ürünleriyle ilgili yaşadığınız bir sorun veya bakım talebi için lütfen detayları bizimle paylaşın.</p>
                <div>
                  <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Firma Adı / İletişim Kişisi</label>
                  <input type="text" placeholder="Adınız veya firmanız" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Telefon Numaranız</label>
                  <input type="tel" placeholder="05XX XXX XX XX" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Valf Seri Numarası (Varsa)</label>
                  <input type="text" placeholder="Örn: 24/104523" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Talep Detayı / Arıza Açıklaması</label>
                  <textarea placeholder="Lütfen yaşadığınız sorunu veya talebinizi detaylıca açıklayın..." rows={4} required style={{...inputStyle, resize: 'vertical'}} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <SubmitButton text="Servis Talebi Gönder" />
              </form>
            )}

            {/* LOGIN FORM */}
            {activeView === 'login' && (
              <div className="login-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="/images/blainico-150x150.jpg" alt="Blain" style={{ width: '64px', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', marginBottom: '0.5rem' }}>Bayi Portalı Girişi</h2>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '2rem', textAlign: 'center' }}>Lütfen size verilen e-posta ve şifre ile giriş yapın.</p>
                
                <form onSubmit={handleLoginSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="email" placeholder="E-posta Adresiniz" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  <input type="password" placeholder="Şifreniz" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  <SubmitButton text="Giriş Yap" />
                </form>
                
                <div style={{ marginTop: '2rem', fontSize: '0.85rem' }}>
                  <a href="#" style={{ color: '#0071e3', textDecoration: 'none' }}>Şifremi Unuttum</a>
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}

// Shared Styles & Components
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem 1rem',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit'
};

const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = '#2b4478';
};
const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = '#ddd';
};

const SubmitButton = ({ text }: { text: string }) => (
  <button type="submit" style={{
    marginTop: '1rem',
    width: '100%',
    backgroundColor: '#2b4478',
    color: '#fff',
    padding: '1rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.05rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a2e57'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2b4478'}>
    {text}
  </button>
);

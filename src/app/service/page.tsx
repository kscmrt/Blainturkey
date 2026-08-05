'use client';
import Troubleshooting from '@/components/Troubleshooting';

export default function ServicePage() {
  return (
    <>
      <style>{`
        .service-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        .hero-padding { padding: 2rem 2rem 1.5rem 2rem; }
        .main-padding { padding: 2rem 2rem 4rem 2rem; }
        .form-sidebar {
          position: sticky;
          top: 2rem;
        }
        .hero-title { font-size: 2rem; margin-bottom: 0.5rem; font-weight: 600; letter-spacing: -0.02em; }
        .hero-desc { font-size: 1rem; line-height: 1.5; color: #6e6e73; }
        .widget-title { font-size: 1.15rem; font-weight: 600; color: #1d1d1f; letter-spacing: -0.01em; }
        .widget-header-padding { padding: 1.5rem 1.5rem 0.5rem 1.5rem; }
        .widget-body-padding { padding: 1.5rem; }
        .mobile-hide { display: inline-flex; }
        .hero-section { display: block; }
        
        @media (max-width: 1024px) {
          .service-layout {
            grid-template-columns: 1fr;
          }
          .form-sidebar {
            position: static;
          }
        }
        @media (max-width: 768px) {
          .hero-section { display: none !important; } /* Hide entire hero on mobile */
          .mobile-hide { display: none !important; } /* Hide extra badges on mobile */
          .main-padding { padding: 0.5rem 0.5rem 2rem 0.5rem; }
          .widget-title { font-size: 1rem; }
          .widget-header-padding { padding: 0.75rem 1rem; }
          .widget-body-padding { padding: 0.75rem 0.5rem; }
        }
      `}</style>
      <div style={{ backgroundColor: '#fbfbfd', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#1d1d1f' }}>
      
      {/* ULTRA-COMPACT HEADER (Single Page Feel) */}
      <section className="hero-padding hero-section" style={{ 
        backgroundColor: '#fbfbfd', 
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
        }}>
          <div style={{ maxWidth: '1000px' }}>
            <h1 className="hero-title" style={{ 
              fontWeight: 700, 
              color: '#1a1a1a', 
              letterSpacing: '-0.5px', 
              lineHeight: 1.2 
            }}>
              Teknik Destek & Arıza Arama
            </h1>
            <p className="hero-desc" style={{ 
              color: '#555', 
              fontWeight: 400 
            }}>
              Valf sorunlarını aşağıdan interaktif olarak tespit edebilir veya yandaki formu kullanarak servis ekibimize WhatsApp üzerinden hızlıca ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT LAYOUT */}
      <section className="main-padding" style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
      }}>
        <div className="service-layout">
          
          {/* LEFT SIDE: TROUBLESHOOTING WIDGET (Main Area) */}
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '24px', 
            boxShadow: '0 4px 24px rgba(0,0,0,0.04)', 
            border: 'none', 
            overflow: 'hidden' 
          }}>
            <div className="widget-header-padding" style={{ 
              backgroundColor: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <h2 className="widget-title">İnteraktif Arıza Arama</h2>
            </div>
            
            <div className="widget-body-padding">
              <Troubleshooting />
            </div>
          </div>

          {/* RIGHT SIDE: WHATSAPP FORM (Sidebar) */}
          <div className="form-sidebar" style={{ 
            backgroundColor: 'white', 
            borderRadius: '24px', 
            boxShadow: '0 12px 40px rgba(0,0,0,0.08)', 
            border: '2px solid rgba(37, 211, 102, 0.1)', 
            padding: '2.5rem' 
          }}>
            <style>{`
              .wa-submit-btn {
                margin-top: 1rem;
                background-color: #25D366;
                color: white;
                font-weight: 700;
                padding: 1rem;
                border-radius: 12px;
                border: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
                transition: all 0.3s ease;
                font-size: 1.05rem;
              }
              .wa-submit-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 12px 32px rgba(37, 211, 102, 0.5);
                background-color: #22c35e;
              }
              .wa-icon-container {
                animation: pulse-soft 2s infinite;
              }
              @keyframes pulse-soft {
                0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
                70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
                100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
              }
            `}</style>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #f2f2f7', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="wa-icon-container" style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '18px', 
                backgroundColor: '#25D366', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em', marginBottom: '4px' }}>Hızlı Servis Talebi</h3>
                <p style={{ fontSize: '0.95rem', color: '#25D366', fontWeight: 600 }}>WhatsApp Destek Hattı</p>
              </div>
            </div>
            
            <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.8rem', fontWeight: 500 }}>
              Kılavuzda aradığınızı bulamadınız mı? Formu doldurun, uzman ekibimiz çözüm için size hemen dönüş yapsın.
            </p>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const company = formData.get('company');
                const valve = formData.get('valve');
                const issue = formData.get('issue');
                
                const message = `Merhaba, ismim ${name}. ${company} firmasından yazıyorum. ${valve} model valfimizde şöyle bir servis talebimiz var:\n\n${issue}`;
                const waUrl = `https://wa.me/905360256494?text=${encodeURIComponent(message)}`;
                window.open(waUrl, '_blank');
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>Adınız Soyadınız</label>
                <input type="text" name="name" required style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', outline: 'none', fontSize: '0.9rem', transition: 'border 0.2s' }} placeholder="Ahmet Yılmaz" />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>Firma Adı</label>
                <input type="text" name="company" required style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', outline: 'none', fontSize: '0.9rem', transition: 'border 0.2s' }} placeholder="ABC Asansör" />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>Valf Modeli</label>
                <select name="valve" style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', outline: 'none', fontSize: '0.9rem', cursor: 'pointer', transition: 'border 0.2s' }}>
                  <option value="EV">EV Serisi</option>
                  <option value="KV">KV Serisi</option>
                  <option value="Diğer">Diğer / Emin Değilim</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>Sorununuz</label>
                <textarea name="issue" required rows={4} style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', outline: 'none', fontSize: '0.9rem', resize: 'vertical', transition: 'border 0.2s' }} placeholder="Karşılaştığınız teknik sorunu kısaca özetleyin..."></textarea>
              </div>

              <button type="submit" className="wa-submit-btn">
                WhatsApp'a Git
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
          
        </div>
      </section>

    </div>
    </>
  );
}

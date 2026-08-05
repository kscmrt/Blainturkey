"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import CategoryNav from '../../../../components/ui/CategoryNav';
import { ecosystemProducts } from '../../../../data/ecosystemProducts';
import PowerUnitsCatalog from '../../../../components/products/PowerUnitsCatalog';

export default function ProductSeriesPage() {
  const { id, series } = useParams() as { id: string; series: string };

  const product = ecosystemProducts.find(p => p.slug === series && p.categorySlug === id);

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Ürün bulunamadı.</h1>
        <Link href="/urunler" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Ürünlere Dön</Link>
      </div>
    );
  }

  const availableTabs = [
    ...(product.matrix && product.matrix.length > 0 ? [{ id: 'specs', label: 'Teknik Özellikler' }] : []),
    ...(product.imageGallery && product.imageGallery.length > 0 ? [{ id: 'gallery', label: 'Ürün Görselleri' }] : []),
    ...(product.downloads && product.downloads.length > 0 ? [{ id: 'docs', label: 'Dokümanlar' }] : []),
    ...(product.youtubeVideoId ? [{ id: 'video', label: 'Video' }] : []),
  ];

  const [activeTab, setActiveTab] = useState(availableTabs.length > 0 ? availableTabs[0].id : '');

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFC', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hero-section {
          padding: 6rem 2rem;
          gap: 4rem;
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1.5rem;
        }
        .hero-subtitle {
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          margin-bottom: 2rem;
        }
        .hero-desc {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }
        .section-padding {
          padding: 8rem 2rem;
        }
        .features-grid {
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }
        .specs-grid {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        .carousel-item {
          min-width: 350px;
          height: 350px;
        }
        @media (max-width: 768px) {
          .hero-section {
            padding: 2rem 1.5rem 3rem 1.5rem;
            gap: 2rem;
            text-align: center;
          }
          .hero-section > div {
            align-items: center !important;
          }
          .hero-title {
            font-size: 2rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-desc {
            font-size: 0.95rem !important;
            margin-bottom: 2rem !important;
          }
          .section-padding {
            padding: 4rem 1.5rem !important;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .specs-grid {
            grid-template-columns: 1fr;
          }
          .carousel-item {
            min-width: 280px;
            height: 280px;
          }
          h2 {
            font-size: 1.75rem !important;
            margin-bottom: 2rem !important;
          }
        }
      `}} />

      {/* Sub-Navigation (Apple-Style Icons) */}
      <CategoryNav activeId={id as string} />

      {/* Hero Section (Apple-Style Split) */}
      <section className="hero-section" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        
        {/* Left: Typography */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          
          {/* Breadcrumbs */}
          <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/urunler" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}>Ürünler</Link>
            <span>/</span>
            <Link href={`/urunler/${id}`} style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s', textTransform: 'capitalize' }}>{id.replace('-', ' ')}</Link>
            <span>/</span>
            <span style={{ color: '#003399', fontWeight: 600 }}>{product.title}</span>
          </div>

          <h1 className="hero-title" style={{ fontWeight: 700, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {product.title}
          </h1>
          <p className="hero-subtitle" style={{ color: '#003399', fontWeight: 500, lineHeight: 1.4 }}>
            {product.subtitle}
          </p>
          <p className="hero-desc" style={{ color: '#555', fontWeight: 400, lineHeight: 1.6, maxWidth: '600px' }}>
            {product.description}
          </p>
          <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/905424862821?text=${encodeURIComponent(`Merhaba, ${product.title} hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.`)}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '180px', padding: '1rem 2.5rem', background: '#003399', color: '#fff', fontSize: '1rem', fontWeight: 600, borderRadius: '40px', textDecoration: 'none', boxShadow: '0 8px 20px rgba(0, 51, 153, 0.25)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 51, 153, 0.35)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 51, 153, 0.25)'; }}>
            Ürün Talep Et
          </a>
        </div>

        {/* Right: Floating Product Image */}
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(0,51,153,0.08) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }}></div>
          <img 
            src={product.mainImage} 
            alt={product.title} 
            style={{ width: '100%', maxWidth: '500px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', zIndex: 1, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))', transform: 'translateY(0)', animation: 'float 6s ease-in-out infinite' }} 
          />
          <style>{`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
          `}</style>
        </div>
      </section>

      {/* Long Description (Deep Dive) */}
      {product.longDescription && (
        <section className="section-padding" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.03)', borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#111', marginBottom: '3rem', letterSpacing: '-0.01em' }}>Mühendisliğin Zirvesi</h2>
            <p className="hero-desc" style={{ color: '#444', whiteSpace: 'pre-line', lineHeight: '1.8', fontWeight: 400, marginBottom: 0 }}>
              {product.longDescription}
            </p>
          </div>
        </section>
      )}

      {/* Features (Bento Box Grid) */}
      {product.features && product.features.length > 0 && (
        <section className="section-padding" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#111', marginBottom: '4rem', textAlign: 'center', letterSpacing: '-0.02em' }}>Öne Çıkan Özellikler</h2>
          <div className="features-grid" style={{ display: 'grid', gap: '2rem' }}>
            {product.features.map((feature, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '3rem 2.5rem', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 51, 153, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#003399', marginBottom: '1rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#111' }}>{feature.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.6, fontSize: '1.05rem' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tab Navigation for Detailed Content */}
      {availableTabs.length > 0 && (
        <section style={{ background: '#fff', paddingTop: '4rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', padding: '0 1rem', borderBottom: '2px solid #f0f0f5' }}>
            {availableTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  color: activeTab === tab.id ? '#003399' : '#777',
                  borderBottom: activeTab === tab.id ? '3px solid #003399' : '3px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginBottom: '-2px'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Specs Matrix (Premium Cards) */}
      {activeTab === 'specs' && product.matrix && product.matrix.length > 0 && (
        <section className="section-padding" style={{ background: '#111', color: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="specs-grid" style={{ display: 'grid', gap: '2rem' }}>
              {product.matrix.map((model, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '3rem 2rem', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                  <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                    <img src={model.img} alt={model.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>{model.name}</h3>
                  {model.desc && <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>{model.desc}</p>}
                  
                  {model.flow && (
                    <div style={{ margin: '2rem 0' }}>
                      <h4 style={{ fontSize: '2rem', fontWeight: 700, background: 'linear-gradient(90deg, #fff, #888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{model.flow.split(' ')[0]}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>{model.flow.split(' ')[1] || 'l/min'}</p>
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'left' }}>
                    {model.inch && (
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Bağlantı</p>
                        <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{model.inch}</p>
                      </div>
                    )}
                    {model.pressure && (
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Basınç</p>
                        <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{model.pressure}</p>
                      </div>
                    )}
                    {model.upSpeed && (
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Kalkış Hızı</p>
                        <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{model.upSpeed}</p>
                      </div>
                    )}
                    {model.downSpeed && (
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>İniş Hızı</p>
                        <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{model.downSpeed}</p>
                      </div>
                    )}
                    {model.upStop && (
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Kalkış Duruşu</p>
                        <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{model.upStop}</p>
                      </div>
                    )}
                    {model.oilVolume && (
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Sıcaklık / Yağ</p>
                        <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{model.oilVolume}</p>
                      </div>
                    )}
                    {model.dimensions && (
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Ağırlık</p>
                        <p style={{ fontWeight: 500, fontSize: '0.95rem' }}>{model.dimensions}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery (Responsive Grid) */}
      {activeTab === 'gallery' && product.imageGallery && product.imageGallery.length > 0 && (
        <section className="section-padding" style={{ background: '#FAFAFC' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
            {product.imageGallery.map((imgUrl, idx) => (
              <div key={idx} style={{ position: 'relative', paddingBottom: '100%', borderRadius: '24px', overflow: 'hidden', background: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease, boxShadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'; }}>
                <img src={imgUrl} alt={`${product.title} Görsel ${idx + 1}`} style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', objectFit: 'contain', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Downloads */}
      {activeTab === 'docs' && product.downloads && product.downloads.length > 0 && (
        <section className="section-padding" style={{ background: '#fff', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {product.downloads.map((doc, idx) => (
              <a key={idx} href={doc.url} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.2rem 2.5rem', background: '#f5f5f7', borderRadius: '16px', textDecoration: 'none', color: '#111', fontWeight: 500, transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#ebebeb'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#f5f5f7'; e.currentTarget.style.transform = 'none'; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                {doc.title}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Video Embed */}
      {activeTab === 'video' && product.youtubeVideoId && (
        <section className="section-padding" style={{ background: '#FAFAFC', textAlign: 'center' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '1000px', margin: '0 auto', background: '#000', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src={`https://www.youtube.com/embed/${product.youtubeVideoId}`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </section>
      )}

    </main>
  );
}

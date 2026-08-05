'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        height: '40vh',
        minHeight: '300px',
        background: 'url("/images/Slide-4-eidte-scaled.jpg") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,51,153,0.8)' }}></div>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#fff', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Bize Ulaşın
          </h1>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#393939', marginBottom: '2rem' }}>
            Ekibimizle İletişime Geçin
          </h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#1890d7', margin: '0 auto 3rem auto' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '4rem', textAlign: 'left' }}>
            <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', borderTop: '4px solid #003399' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#003399', marginBottom: '1rem' }}>Blain Headquarters (Almanya)</h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
                Pfaffenstrasse 1<br/>
                74078 Heilbronn<br/>
                Germany
              </p>
              <p style={{ fontSize: '1.1rem', color: '#393939', fontWeight: 600 }}>
                Tel: +49 7131 2821 0<br/>
                Email: info@blain.de
              </p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', borderTop: '4px solid #1890d7' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#003399', marginBottom: '1rem' }}>Blain Türkiye</h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
                Battalgazi, AYTOP Gıdacılar Sitesi 2G17<br/>
                34934 Sultanbeyli / İstanbul<br/>
                Türkiye
              </p>
              <p style={{ fontSize: '1.1rem', color: '#393939', fontWeight: 600 }}>
                Tel: (0216) 592 08 00<br/>
                Email: info@blain.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

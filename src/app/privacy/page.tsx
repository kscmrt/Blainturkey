'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        height: '40vh',
        minHeight: '300px',
        background: 'url("/images/Slide-3-scaled.jpeg") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,51,153,0.8)' }}></div>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#fff', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Data & Privacy
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#fff', minHeight: '40vh' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#393939', marginBottom: '2rem' }}>
            Data & Privacy
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>
            Information regarding data protection and our privacy policy.
          </p>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#1890d7', margin: '0 auto' }}></div>
        </div>
      </section>
    </div>
  );
}

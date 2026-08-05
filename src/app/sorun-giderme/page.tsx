"use client";

import Link from 'next/link';
import Troubleshooting from '@/components/Troubleshooting';

export default function SorunGidermePage() {
  return (
    <>
      

      <section className="mobile-p-top" style={{ 
        padding: '6rem 0 4rem 0', 
        position: 'relative',
        background: 'url("/images/Service-1-scaled-1.jpg") center/cover no-repeat',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 51, 153, 0.85)' }}></div>
        <div className="container mobile-text-center" style={{ position: 'relative', zIndex: 1, color: 'white', padding: '0 1rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} className="animate-fade-in">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>Teknik Destek &<br/>Sorun Giderme</h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', maxWidth: '650px', margin: '0 auto' }}>
              Blain hidrolik asansör valfleri için detaylı arıza tespiti ve videolu çözüm rehberi.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--bg-color)' }}>
        <Troubleshooting />
      </section>
      
    </>
  );
}

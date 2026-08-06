"use client";

import React from 'react';

export default function SocialAd() {
  return (
    <div style={{
      width: '1080px',
      height: '1080px',
      background: 'linear-gradient(135deg, #f5f5f7 0%, #e5e5ea 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem',
      boxSizing: 'border-box'
    }}>
      {/* Decorative Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,102,204,0.1) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(22,163,74,0.1) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />
      
      {/* Header / Logo Space */}
      <div style={{ position: 'absolute', top: '4rem', left: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src="/images/BHlogo-forweb-e1747046392803.png" alt="Blain Logo" style={{ height: '60px' }} />
      </div>

      {/* Main Content Container */}
      <div style={{ 
        display: 'flex', 
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginTop: '2rem'
      }}>
        
        {/* Left Side: Text */}
        <div style={{ flex: '1', paddingRight: '2rem', zIndex: 10 }}>
          <div style={{ 
            background: '#0066cc', 
            color: 'white', 
            display: 'inline-block', 
            padding: '0.5rem 1.5rem', 
            borderRadius: '30px', 
            fontWeight: '600', 
            fontSize: '1.2rem',
            marginBottom: '2rem'
          }}>
            Yeni Portal Yayında
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#1d1d1f', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
            Mühendislik Hesaplamaları Artık Çok Kolay
          </h1>
          <p style={{ fontSize: '1.8rem', color: '#86868b', lineHeight: '1.4', marginBottom: '3rem' }}>
            Projenize en uygun piston, motor ve pompa seçimlerini saniyeler içinde yapın. Tamamen ücretsiz.
          </p>
          
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            background: '#fff', 
            padding: '1rem 2rem', 
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #e5e5ea',
            gap: '1rem'
          }}>
            <div style={{ width: '12px', height: '12px', background: '#16a34a', borderRadius: '50%' }}></div>
            <span style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1d1d1f' }}>blainturkey.com.tr/portal</span>
          </div>
        </div>

        {/* Right Side: Product Image */}
        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', position: 'relative', zIndex: 5 }}>
           {/* Mockup UI Window Behind Product */}
           <div style={{
             position: 'absolute',
             top: '10%',
             right: '10%',
             width: '400px',
             height: '500px',
             background: 'white',
             borderRadius: '24px',
             boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
             border: '1px solid #e5e5ea',
             padding: '2rem',
             opacity: 0.8,
             transform: 'rotate(5deg)'
           }}>
              <div style={{ width: '60px', height: '12px', background: '#e5e5ea', borderRadius: '6px', marginBottom: '2rem' }}></div>
              <div style={{ width: '100%', height: '40px', background: '#f5f5f7', borderRadius: '8px', marginBottom: '1rem' }}></div>
              <div style={{ width: '80%', height: '40px', background: '#f5f5f7', borderRadius: '8px', marginBottom: '1rem' }}></div>
              <div style={{ width: '90%', height: '40px', background: '#f5f5f7', borderRadius: '8px', marginBottom: '1rem' }}></div>
           </div>

           {/* Actual Product Image */}
           <img 
            src="/images/EV100-3-4-1024x783.png" 
            alt="Blain Valve" 
            style={{ 
              width: '120%', 
              maxWidth: '650px', 
              objectFit: 'contain', 
              position: 'relative', 
              zIndex: 10,
              filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.15))'
            }} 
          />
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div style={{ position: 'absolute', bottom: '4rem', width: 'calc(100% - 8rem)', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #d2d2d7', paddingTop: '2rem' }}>
         <span style={{ fontSize: '1.2rem', color: '#86868b', fontWeight: '500' }}>Blain Hydraulics Türkiye</span>
         <span style={{ fontSize: '1.2rem', color: '#86868b', fontWeight: '500' }}>Güvenli ve Kusursuz</span>
      </div>
    </div>
  );
}

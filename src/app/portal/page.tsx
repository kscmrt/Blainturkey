'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function PortalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      /* Apple-style abstract background */
      background: 'url("/images/Slide-1-1-scaled.jpg") center/cover no-repeat',
      position: 'relative',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      {/* Heavy Blur Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 20, 50, 0.5)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
      }}></div>

      {/* Login Card */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        borderRadius: '24px',
        padding: '3rem',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* Logo */}
        <img 
          src="/images/blainico-150x150.jpg" 
          alt="Blain Shield" 
          style={{ width: '64px', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
        />
        
        <h1 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>
          Müşteri Portalı
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#86868b', marginBottom: '2.5rem', textAlign: 'center' }}>
          Blain hesabınıza giriş yapın.
        </p>

        <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
          
          <div style={{ position: 'relative' }}>
            <input 
              type="email" 
              placeholder="E-posta veya Apple Kimliği" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.2rem',
                fontSize: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '12px',
                outline: 'none',
                color: '#1d1d1f',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)',
                transition: 'border-color 0.2s'
              }} 
            />
          </div>

          <div style={{ position: 'relative' }}>
            <input 
              type="password" 
              placeholder="Parola" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.2rem',
                fontSize: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '12px',
                outline: 'none',
                color: '#1d1d1f',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)',
                transition: 'border-color 0.2s'
              }} 
            />
          </div>

          <button style={{
            marginTop: '1rem',
            width: '100%',
            backgroundColor: '#0071e3',
            color: '#fff',
            padding: '1rem',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}>
            Giriş Yap
          </button>
        </form>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
          <a href="#" style={{ color: '#0071e3', textDecoration: 'none' }}>Şifrenizi mi unuttunuz?</a>
          <span style={{ color: '#d2d2d7' }}>|</span>
          <a href="#" style={{ color: '#0071e3', textDecoration: 'none' }}>Hesap oluştur</a>
        </div>
      </div>

    </div>
  );
}

'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Ürünler', path: '/urunler' },
    { name: 'Modernizasyon', path: '/modernization' },
    { name: 'Servis', path: '/service' },
    { name: 'Dokümanlar', path: '/downloads' },
    { name: 'Hakkımızda', path: '/about-us' }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4rem;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          height: 64px;
          position: sticky;
          top: 0;
          z-index: 100;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        .header-nav {
          display: flex;
          align-items: center;
          position: relative;
          gap: 0.5rem;
          padding: 0;
          background: transparent;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          color: #003399;
        }
        .mobile-dropdown {
          display: none;
        }
        @media (max-width: 900px) {
          .header-container {
            padding: 0 1.5rem;
          }
          .header-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .mobile-dropdown {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            background: white;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            padding: 1rem 0;
            z-index: 99;
          }
        }
      `}} />
      <header className="header-container">
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img 
            src="/images/BHlogo-forweb-e1747046392803.png" 
            alt="Blain Hydraulics Logo" 
            style={{ height: '40px', cursor: 'pointer', opacity: 0.9 }}
          />
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: 700, 
            letterSpacing: '1.5px', 
            color: '#003399', 
            borderLeft: '1px solid rgba(0,0,0,0.15)', 
            paddingLeft: '12px',
            opacity: 0.8
          }}>
            TÜRKİYE
          </span>
        </Link>
      </div>

      {/* Navigation - Elevator Cabin Effect */}
      <nav className="header-nav" onMouseLeave={() => setHoveredPath(null)}>

        {navLinks.map((link) => {
          const isCurrent = isActive(link.path) || hoveredPath === link.path;
          return (
            <Link 
              key={link.path} 
              href={link.path}
              onMouseEnter={() => setHoveredPath(link.path)}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem 0.5rem 1.8rem', /* Sol tarafta ray için boşluk */
                textDecoration: 'none',
                color: isCurrent ? '#003399' : '#555',
                fontWeight: isCurrent ? 600 : 500,
                fontSize: '0.85rem',
                transition: 'color 0.3s ease',
                overflow: 'hidden' /* Kabinin yukarı çıkıp kaybolması için */
            }}>
              
              {/* Asansör Rayı (Kılavuz Ray) */}
              <div style={{
                position: 'absolute',
                left: '0.8rem',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '1px'
              }} />

              {/* Asansör Kabini */}
              <div style={{
                position: 'absolute',
                left: 'calc(0.8rem - 3px)', /* 2px rayın tam ortasına 8px kabini hizalama */
                width: '8px',
                height: '10px',
                background: '#003399',
                borderRadius: '2px',
                boxShadow: '0 2px 4px rgba(0, 51, 153, 0.4)',
                /* Animasyon Mantığı: Aktifse ortaya in, değilse yukarı kaç */
                top: isCurrent ? '50%' : '-15px',
                opacity: isCurrent ? 1 : 0,
                transform: 'translateY(-50%)',
                transition: 'top 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease'
              }} />

              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Right Actions: Language & Portal Login */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        


        {/* Portal Login Button */}
        <Link href="/portal" style={{
          backgroundColor: '#0071e3', /* Apple Blue */
          color: '#fff',
          padding: '0.4rem 1.2rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 500,
          textDecoration: 'none',
          letterSpacing: '-0.2px',
          boxShadow: '0 2px 8px rgba(0, 113, 227, 0.3)',
          transition: 'all 0.2s ease'
        }}>
          Müşteri Portalı
        </Link>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menüyü Aç"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen 
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
    </header>
    
    {/* Mobile Dropdown Menu */}
    {isMobileMenuOpen && (
      <div className="mobile-dropdown">
        {navLinks.map((link) => {
          const isCurrent = isActive(link.path);
          return (
            <Link 
              key={link.path} 
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                padding: '1rem 2rem',
                textDecoration: 'none',
                color: isCurrent ? '#003399' : '#555',
                fontWeight: isCurrent ? 700 : 500,
                fontSize: '1rem',
                borderLeft: isCurrent ? '4px solid #003399' : '4px solid transparent',
                backgroundColor: isCurrent ? '#f8fafc' : 'transparent'
              }}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    )}
    </>
  );
}

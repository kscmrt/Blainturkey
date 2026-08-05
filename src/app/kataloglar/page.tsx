"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { catalogsData } from '../../data/catalogsData';

export default function KataloglarPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(catalogsData[0]?.category || null);

  const toggleCategory = (catName: string) => {
    setOpenCategory(prev => prev === catName ? null : catName);
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-color)' }}>
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="mobile-p-top" style={{ 
        padding: '5rem 0 4rem 0', 
        position: 'relative',
        background: 'url("/images/Modernisation-2.jpg") center/cover no-repeat',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0, 51, 153, 0.95), rgba(0, 51, 153, 0.7))' }}></div>
        <div className="container mobile-text-center" style={{ position: 'relative', zIndex: 1, color: 'white' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Teknik Dokümanlar & Kataloglar</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', opacity: 0.9 }}>
            Blain Hydraulics ürünlerine ait güncel teknik kataloglar, ürün föyleri, kullanım kılavuzları ve 3D çizimlere buradan ulaşabilirsiniz. Bütün dosyalarımız PDF veya CAD formatındadır.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="glass" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {catalogsData.map((category, idx) => {
              const isOpen = openCategory === category.category;
              return (
                <div key={idx} style={{ marginBottom: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
                  
                  {/* Category Header (Accordion Toggle) */}
                  <button 
                    onClick={() => toggleCategory(category.category)}
                    style={{ 
                      width: '100%', 
                      padding: '1.25rem 1.5rem', 
                      background: isOpen ? '#f1f5f9' : 'white', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)' }}>
                      {category.category}
                    </span>
                    <span style={{ fontSize: '1.5rem', color: 'var(--text-muted)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                      ▼
                    </span>
                  </button>

                  {/* Category Files List */}
                  {isOpen && (
                    <div style={{ padding: '1rem', background: 'white', borderTop: '1px solid var(--border-color)' }}>
                      <div className="grid-3 mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                        {category.files.map((file, fIdx) => (
                          <a 
                            key={fIdx} 
                            href={file.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.75rem',
                              padding: '1rem',
                              border: '1px solid #e2e8f0',
                              borderRadius: '6px',
                              textDecoration: 'none',
                              color: 'var(--text-main)',
                              background: '#f8fafc',
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'var(--primary)';
                              e.currentTarget.style.background = '#eff6ff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = '#e2e8f0';
                              e.currentTarget.style.background = '#f8fafc';
                            }}
                          >
                            <span style={{ fontSize: '1.5rem' }}>📄</span>
                            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{file.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

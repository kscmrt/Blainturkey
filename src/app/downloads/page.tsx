'use client';
import React, { useState } from 'react';
import { downloadsData } from '../../data/downloadsData';

export default function DownloadsPage() {
  const languages = [
    "ENGLISH", "DEUTSCH", "ESPAÑOL", "PORTUGUÊS", "FRANÇAIS", 
    "ITALIANO", "TÜRKÇE", "POLSKI", "РУССКИЙ", "中文", "العربية", "فارسی"
  ];
  
  const [activeLang, setActiveLang] = useState("ENGLISH");
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<number[]>([0]); 

  const isTurkish = activeLang === "TÜRKÇE";

  const toggleCategory = (idx: number) => {
    if (openCategories.includes(idx)) {
      setOpenCategories(openCategories.filter(i => i !== idx));
    } else {
      setOpenCategories([...openCategories, idx]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fbfbfd', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* ULTRA MINIMAL HERO SECTION */}
      <section style={{
        padding: '3rem 2rem 2rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.02em', color: '#1d1d1f', marginBottom: '0.5rem' }}>
          {isTurkish ? "Dökümanlar" : "Documents"}
        </h1>
        <p style={{ fontSize: '0.95rem', fontWeight: 400, color: '#6e6e73', maxWidth: '600px', lineHeight: 1.5 }}>
          {isTurkish 
            ? "Ürünlerimizin planlanması, bakımı ve sorun giderme işlemleri için teknik belgeler." 
            : "Find documents for the planning, maintenance, and troubleshooting of our products."}
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 8rem 2rem', width: '100%' }}>
        
        {/* MINIMAL SEARCH & TABS ROW */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
          


          {/* LANGUAGE TABS - APPLE STYLE CHIPS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.4rem', borderBottom: '1px solid #e5e5ea', paddingBottom: '1.5rem' }}>
            {languages.map((lang, idx) => {
              const isActive = activeLang === lang;
              return (
                <button 
                  key={idx} 
                  onClick={() => setActiveLang(lang)}
                  style={{ 
                    padding: '0.35rem 0.8rem', 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    color: isActive ? '#fff' : '#8e8e93', 
                    backgroundColor: isActive ? '#1c1c1e' : '#e5e5ea',
                    borderRadius: '100px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    letterSpacing: '0.02em'
                  }}
                >
                  {lang}
                </button>
              );
            })}
          </div>
        </div>

        {/* MINIMAL CATEGORY ACCORDIONS */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {downloadsData.map((category, idx) => {
            const title = isTurkish ? category.titleTr : category.titleEn;
            const isOpen = openCategories.includes(idx);
            
            const filteredFiles = category.files.filter(f => {
              // Check search query
              const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase());
              // Check language
              const matchesLang = !f.languages || f.languages.includes(activeLang);
              
              return matchesSearch && matchesLang;
            });

            if (searchQuery && filteredFiles.length === 0) return null;

            return (
              <div key={idx} style={{ borderBottom: '1px solid #e5e5ea' }}>
                <button 
                  onClick={() => toggleCategory(idx)}
                  style={{ 
                  width: '100%',
                  padding: '1.5rem 0', 
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.01em' }}>
                    {title.replace(/^\d+\.\s*/, '')} 
                  </span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 300, color: '#8e8e93', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                    +
                  </span>
                </button>
                
                <div style={{ 
                  maxHeight: isOpen ? '2000px' : '0', 
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 0.4s ease',
                  overflow: 'hidden'
                }}>
                  
                  {filteredFiles.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', paddingBottom: '2.5rem' }}>
                      {filteredFiles.map((file, fIdx) => (
                        <a 
                          key={fIdx} 
                          href={file.url} 
                          target="_blank" 
                          rel="noreferrer" 
                          style={{ 
                            textDecoration: 'none', 
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '1rem 1.25rem',
                            border: 'none',
                            borderRadius: '12px',
                            transition: 'background 0.2s, transform 0.1s',
                            backgroundColor: '#f5f5f7'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5ea'}
                          onMouseLeave={(e) => e.currentTarget.style.background = '#f5f5f7'}
                          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1d1d1f' }}>{file.name}</span>
                          </div>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div style={{ paddingBottom: '2rem' }}>
                      <p style={{ color: '#999', fontSize: '0.95rem', fontStyle: 'italic' }}>
                        {isTurkish ? "Bu kategoride dosya bulunmuyor." : "No files available."}
                      </p>
                    </div>
                  )}
                  
                </div>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
}

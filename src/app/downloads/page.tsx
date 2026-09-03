'use client';
import React, { useState, useMemo } from 'react';
import { downloadsData } from '../../data/downloadsData';

export default function DownloadsPage() {
  const languages = [
    "TÜMÜ", "TÜRKÇE", "ENGLISH", "DEUTSCH", "ESPAÑOL", "PORTUGUÊS", "FRANÇAIS", 
    "ITALIANO", "POLSKI", "РУССКИЙ", "中文", "العربية", "فارسی"
  ];
  
  const [activeLang, setActiveLang] = useState("TÜRKÇE");
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<number[]>([0, 1]); 

  const isTurkish = activeLang === "TÜRKÇE" || activeLang === "TÜMÜ";

  const toggleCategory = (idx: number) => {
    if (openCategories.includes(idx)) {
      setOpenCategories(openCategories.filter(i => i !== idx));
    } else {
      setOpenCategories([...openCategories, idx]);
    }
  };

  // Filtered categories and total file count
  const filteredCategories = useMemo(() => {
    return downloadsData.map((category, idx) => {
      const title = isTurkish ? category.titleTr : category.titleEn;
      const files = category.files.filter(f => {
        const matchesSearch = searchQuery.trim() === "" || 
          f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.titleTr.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.titleEn.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesLang = activeLang === "TÜMÜ" || !f.languages || f.languages.includes(activeLang);

        return matchesSearch && matchesLang;
      });

      return {
        ...category,
        title,
        files,
        originalIndex: idx,
      };
    });
  }, [activeLang, searchQuery, isTurkish]);

  const totalFilesCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.files.length, 0);
  }, [filteredCategories]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fbfbfd', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI\", Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* HERO SECTION */}
      <section style={{
        padding: '3.5rem 2rem 2rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', marginBottom: '0.75rem' }}>
          Dokümanlar & Teknik İndirmeler
        </h1>
        <p style={{ fontSize: '1rem', fontWeight: 400, color: '#6e6e73', maxWidth: '640px', lineHeight: 1.6 }}>
          Blain hidrolik kontrol valfleri, güç üniteleri ve modernizasyon sistemleri için montaj kılavuzları, kataloglar, 3D CAD (.igs/.sat) çizimleri ve sertifikalar.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 8rem 2rem', width: '100%' }}>
        
        {/* SEARCH & FILTER CONTROLS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
          
          {/* SEARCH INPUT BAR */}
          <div style={{ position: 'relative', maxWidth: '600px', width: '100%', margin: '0 auto' }}>
            <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#86868b' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Valf veya dosya adı ara (örn: EV100, KV1P, CAD, L10, Dichtsatz)..."
              style={{
                width: '100%',
                padding: '0.9rem 2.8rem 0.9rem 2.8rem',
                fontSize: '0.95rem',
                backgroundColor: '#ffffff',
                border: '1px solid #d2d2d7',
                borderRadius: '16px',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#0071e3';
                e.target.style.boxShadow = '0 0 0 4px rgba(0,113,227,0.12)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d2d2d7';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#86868b',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  padding: '0.2rem',
                }}
                aria-label="Aramayı temizle"
              >
                ✕
              </button>
            )}
          </div>

          {/* LANGUAGE TABS - CHIPS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.4rem', borderBottom: '1px solid #e5e5ea', paddingBottom: '1.5rem' }}>
            {languages.map((lang, idx) => {
              const isActive = activeLang === lang;
              return (
                <button 
                  key={idx} 
                  onClick={() => setActiveLang(lang)}
                  style={{ 
                    padding: '0.4rem 0.9rem', 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    color: isActive ? '#fff' : '#48484a', 
                    backgroundColor: isActive ? '#0071e3' : '#e5e5ea',
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

          {/* ACTIVE STATUS BADGE */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#6e6e73', padding: '0 0.5rem' }}>
            <span>Toplam <strong>{totalFilesCount}</strong> doküman listeleniyor</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ background: 'none', border: 'none', color: '#0071e3', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}
              >
                Arama filtresini temizle
              </button>
            )}
          </div>
        </div>

        {/* CATEGORY ACCORDIONS */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredCategories.map((category) => {
            const isOpen = searchQuery.trim() !== "" || openCategories.includes(category.originalIndex);
            
            if (searchQuery && category.files.length === 0) return null;

            return (
              <div key={category.originalIndex} style={{ borderBottom: '1px solid #e5e5ea' }}>
                <button 
                  onClick={() => toggleCategory(category.originalIndex)}
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
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.01em' }}>
                      {category.title.replace(/^\d+\.\s*/, '')} 
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.6rem', backgroundColor: '#e5e5ea', borderRadius: '12px', color: '#6e6e73' }}>
                      {category.files.length}
                    </span>
                  </div>
                  <span style={{ fontSize: '1.4rem', fontWeight: 300, color: '#8e8e93', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                    +
                  </span>
                </button>
                
                <div style={{ 
                  maxHeight: isOpen ? '3000px' : '0', 
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 0.4s ease',
                  overflow: 'hidden'
                }}>
                  
                  {category.files.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', paddingBottom: '2.5rem' }}>
                      {category.files.map((file, fIdx) => (
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
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <span style={{ fontSize: '0.92rem', fontWeight: 500, color: '#1d1d1f', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {file.name}
                            </span>
                          </div>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: '0.5rem' }}>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                          </svg>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div style={{ paddingBottom: '2rem' }}>
                      <p style={{ color: '#999', fontSize: '0.95rem', fontStyle: 'italic' }}>
                        Bu kategoride seçilen dilde dosya bulunmuyor.
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

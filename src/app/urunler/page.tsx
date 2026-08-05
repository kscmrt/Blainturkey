'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import EcosystemMap from '../../components/ui/EcosystemMap';
import CategoryNav from '../../components/ui/CategoryNav';
import { productCategories } from '../../data/productsData';
import PowerUnitsCatalog from '../../components/products/PowerUnitsCatalog';

export default function UrunlerPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const displayedCategories = activeCategory 
    ? productCategories.filter(c => c.id === activeCategory)
    : productCategories;

  return (
    // Forced recompile to clear Next.js data cache
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .filter-container {
          justify-content: center;
          gap: 2rem;
          padding: 1rem 2rem;
        }
        .filter-container::-webkit-scrollbar {
          display: none;
        }
        .product-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          width: 100%;
        }
        .product-card {
          flex: 1 1 280px;
          max-width: 340px;
          padding: 1.5rem;
          background: #fbfbfd;
          border-radius: 20px;
          box-sizing: border-box;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .product-card:hover {
          background: #f5f5f7;
          transform: translateY(-4px);
        }
        .product-image-container {
          height: 140px !important;
          margin-bottom: 1.5rem !important;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-title {
          font-size: 1.1rem;
        }
        .product-desc {
          font-size: 0.85rem;
        }
        .section-padding {
          padding: 0 2rem;
        }
        @media (max-width: 768px) {
          .filter-container {
            justify-content: flex-start !important;
            gap: 1rem !important;
            padding: 1rem !important;
          }
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .product-card {
            padding: 1rem;
            border-radius: 16px;
          }
          .product-image-container {
            height: 100px !important;
            margin-bottom: 1rem !important;
          }
          .product-title {
            font-size: 0.95rem !important;
          }
          .product-desc {
            font-size: 0.75rem !important;
          }
          .section-padding {
            padding: 0 1rem !important;
          }
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.5rem !important;
          }
        }
      `}} />

      
      {/* Sub-Navigation (Apple-Style Icons) */}
      <CategoryNav activeId={activeCategory} onSelect={setActiveCategory} />
      
      {/* Ecosystem Section - Hide if 'guc-uniteleri' since it has no map spots */}
      {activeCategory !== 'guc-uniteleri' && (
        <section style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '3rem', borderBottom: '1px solid #eaeaea' }}>
          <EcosystemMap activeCategory={activeCategory} />
        </section>
      )}

      {/* Render Product Grids for Active Category (or all) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem 0' }}>
        {displayedCategories.map((category) => (
          <section key={category.id} className="section-padding" style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            {/* Category Title */}
            <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '1rem' }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                {category.title}
              </h1>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.5, maxWidth: '700px', margin: '0 auto' }}>
                {category.description}
              </p>
            </div>

            {/* Groups Grid */}
            {category.groups ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {category.groups.map((group, gIdx) => (
                  <div key={gIdx} style={{ width: '100%' }}>
                    
                    {/* Group Heading */}
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                      <h2 style={{ fontSize: '1.8rem', fontWeight: 400, color: '#333', marginBottom: '0.5rem' }}>{group.title}</h2>
                      <p style={{ fontSize: '0.95rem', color: '#777', lineHeight: 1.4, maxWidth: '600px', margin: '0 auto' }}>
                        {group.subtitle}
                      </p>
                    </div>

                    {/* Group Products - Compact Flex Layout */}
                    <div className="product-grid">
                      {group.products.map((prod, pIdx) => (
                        <Link key={pIdx} href={`/urunler/${category.id}/${prod.id || prod.name.toLowerCase().replace(/\s+/g, '-')}`} className="product-card">
                          
                          <div className="product-image-container">
                            <img src={prod.image || category.image} alt={prod.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                          </div>
                          
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <h3 className="product-title" style={{ fontWeight: 600, color: '#111', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                              {prod.name}
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="#003399" stroke="none"><circle cx="12" cy="12" r="10"></circle><polyline points="10 8 14 12 10 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline></svg>
                            </h3>
                            <p className="product-desc" style={{ color: '#666', lineHeight: 1.4 }}>
                              {prod.desc}
                            </p>
                          </div>
                          
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : category.id === 'guc-uniteleri' ? (
              <PowerUnitsCatalog />
            ) : (
              <div className="product-grid">
                {category.products?.map((prod, pIdx) => (
                  <Link key={pIdx} href={`/urunler/${category.id}/${prod.id || prod.name.toLowerCase().replace(/\s+/g, '-')}`} className="product-card">
                    
                    <div className="product-image-container">
                      <img src={prod.image || category.image} alt={prod.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <h3 className="product-title" style={{ fontWeight: 600, color: '#111', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        {prod.name}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#003399" stroke="none"><circle cx="12" cy="12" r="10"></circle><polyline points="10 8 14 12 10 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline></svg>
                      </h3>
                      <p className="product-desc" style={{ color: '#666', lineHeight: 1.4 }}>
                        {prod.desc}
                      </p>
                    </div>
                    
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

    </main>
  );
}


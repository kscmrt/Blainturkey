"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import CategoryNav from '../../../components/ui/CategoryNav';
import { productCategories } from '../../../data/productsData';
import PowerUnitsCatalog from '../../../components/products/PowerUnitsCatalog';

export default function CategoryPage() {
  const { id } = useParams();
  const category = productCategories.find(c => c.id === id);

  if (!category) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Kategori bulunamadı.</h1>
        <Link href="/urunler" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Ürünlere Dön</Link>
      </div>
    );
  }

  return (
    // Forced recompile to clear Next.js data cache
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFC', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hero-section {
          padding: 2rem 2rem 3rem 2rem;
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
        }
        .hero-desc {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
        }
        .section-padding {
          padding: 0 2rem 8rem 2rem;
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
          background: #fff;
          border-radius: 20px;
          box-sizing: border-box;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
        }
        .product-image-container {
          height: 140px !important;
          margin-bottom: 1.5rem !important;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 1.5rem;
          }
          .hero-title {
            font-size: 2.2rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-desc {
            font-size: 1rem !important;
          }
          .section-padding {
            padding: 0 1.5rem 4rem 1.5rem !important;
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
          h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0.5rem !important;
          }
        }
      `}} />

      {/* Sub-Navigation (Apple-Style Icons) */}
      <CategoryNav activeId={id as string} />

      {/* Hero Section */}
      <section className="hero-section" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Breadcrumbs */}
        <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/urunler" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}>Ürünler</Link>
          <span>/</span>
          <span style={{ color: '#003399', fontWeight: 600 }}>{category.title}</span>
        </div>

        <h1 className="hero-title" style={{ fontWeight: 700, color: '#111', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
          {category.title}
        </h1>
        <p className="hero-desc" style={{ color: '#555', fontWeight: 400, lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
          {category.description}
        </p>
      </section>

      {/* Main Content Area */}
      <section className="section-padding" style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Groups Grid */}
        {category.groups ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {category.groups.map((group, gIdx) => (
              <div key={gIdx} style={{ width: '100%' }}>
                
                {/* Group Heading */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontWeight: 400, color: '#333' }}>{group.title}</h2>
                  <p className="product-desc" style={{ color: '#777', lineHeight: 1.4, maxWidth: '600px', margin: '0 auto' }}>
                    {group.subtitle}
                  </p>
                </div>

                {/* Group Products - Compact Flex Layout */}
                <div className="product-grid">
                  {group.products.map((prod, pIdx) => (
                    <Link key={pIdx} href={`/urunler/${id}/${prod.id || prod.name.toLowerCase().replace(/\s+/g, '-')}`} className="product-card">
                      
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
        ) : id === 'guc-uniteleri' ? (
          <PowerUnitsCatalog />
        ) : (
          <div className="product-grid">
            {category.products?.map((prod, pIdx) => (
              <Link key={pIdx} href={`/urunler/${id}/${prod.id || prod.name.toLowerCase().replace(/\s+/g, '-')}`} className="product-card">
                
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
    </main>
  );
}

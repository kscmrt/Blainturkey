"use client";
import React from 'react';
import Link from 'next/link';
import { productCategories } from '../../data/productsData';

const IconMap: Record<string, string> = {
  'all': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='7' height='7'/%3E%3Crect x='14' y='3' width='7' height='7'/%3E%3Crect x='14' y='14' width='7' height='7'/%3E%3Crect x='3' y='14' width='7' height='7'/%3E%3C/svg%3E",
  'kontrol-valfleri': '/icons/icon_0.svg',
  'guc-uniteleri': '/icons/icon_1.svg',
  'guvenlik-valfleri': '/icons/icon_2.svg',
  'pompalar-motorlar': '/icons/icon_3.svg',
  'aksesuarlar': '/icons/icon_4.svg',
};

type Props = {
  activeId: string | null;
  onSelect?: (id: string | null) => void;
};

export default function CategoryNav({ activeId, onSelect }: Props) {
  const categories = [
    { id: null, title: 'Tümü' },
    ...productCategories.map(c => ({
      id: c.id,
      title: c.title
    }))
  ];

  return (
    <div style={{ position: 'sticky', top: '64px', zIndex: 90, background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .apple-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 0.75rem 2rem;
          overflow: hidden; /* Prevent scrolling */
        }
        .apple-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: none;
          padding: 0.5rem;
          transition: transform 0.2s, opacity 0.2s;
        }
        .apple-nav-item:hover {
          transform: scale(1.1);
        }
        .apple-nav-icon {
          width: 44px;
          height: 44px;
          background-color: #666;
          -webkit-mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          transition: background-color 0.2s;
        }
        .apple-nav-item.active .apple-nav-icon {
          background-color: #0066cc;
        }
        @media (max-width: 768px) {
          .apple-nav-container {
            justify-content: space-between;
            gap: 0;
            padding: 0.5rem 1rem;
            width: 100%;
          }
          .apple-nav-item {
            padding: 0.25rem;
            flex: 1; /* Distribute space evenly */
          }
          .apple-nav-icon {
            width: 38px;
            height: 38px;
          }
        }
      `}} />
      <div className="apple-nav-container">
        {categories.map((cat, idx) => {
          const isActive = activeId === cat.id;
          const iconUrl = cat.id ? IconMap[cat.id] : IconMap['all'];
          
          const content = (
            <div 
              className="apple-nav-icon" 
              title={cat.title}
              style={{ 
                WebkitMaskImage: `url("${iconUrl}")`, 
                maskImage: `url("${iconUrl}")` 
              }} 
            />
          );
          
          if (onSelect) {
            return (
              <button 
                key={idx} 
                onClick={() => onSelect(cat.id)}
                className={`apple-nav-item ${isActive ? 'active' : ''}`}
              >
                {content}
              </button>
            );
          }

          const href = cat.id ? `/urunler/${cat.id}` : '/urunler';
          return (
            <Link 
              key={idx} 
              href={href}
              className={`apple-nav-item ${isActive ? 'active' : ''}`}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

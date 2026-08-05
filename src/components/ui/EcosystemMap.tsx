"use client";
import React from 'react';
import Link from 'next/link';

export default function EcosystemMap({ activeCategory = null }: { activeCategory?: string | null }) {
  const hotspots = [
    { id: 'ev-valve', label: 'EV Valfi', top: '28%', left: '48%', width: '22%', height: '22%', href: '/urunler/kontrol-valfleri/ev-serisi', img: '/images/EV-Series-2-1024x708.png' },
    { id: 'kv-valve', label: 'KV Valfi', top: '42%', left: '30%', width: '16%', height: '16%', href: '/urunler/kontrol-valfleri/kv-serisi', img: '/images/KV-Series-1024x723.png' },
    { id: 'ev40', label: 'EV 40', top: '30%', left: '66%', width: '18%', height: '18%', href: '/urunler/kontrol-valfleri/ev40', img: '/images/EV40-1024x572.png' },
    { id: 'sev', label: 'SEV', top: '50%', left: '81%', width: '20%', height: '20%', href: '/urunler/kontrol-valfleri/sev', img: '/images/SEV-1024x819.png' },
    { id: 'hand-pump', label: 'El Pompası', top: '65%', left: '72%', width: '8%', height: '12%', href: '/urunler/aksesuarlar/el-pompasi', img: '/images/HP-867x1024.png' },
    { id: 'levelling-drive', label: 'Seviyeleme Motoru', top: '80%', left: '87%', width: '14%', height: '14%', href: '/urunler/aksesuarlar/seviyeleme-motoru', img: '/images/MD-1024x725.png' },
    { id: 'l-series', label: 'L Serisi', top: '59%', left: '35%', width: '10%', height: '12%', href: '/urunler/guvenlik-valfleri/l-serisi', img: '/images/L-series-1024x723.png' },
    { id: 'hx-mx', label: 'HX/MX', top: '61%', left: '43%', width: '5%', height: '8%', href: '/urunler/aksesuarlar/hx-mx', img: '/images/HXMX.png' },
    { id: 'ev-3-4', label: 'EV 3/4', top: '55%', left: '57%', width: '14%', height: '14%', href: '/urunler/kontrol-valfleri/ev-3-4', img: '/images/EV100-3-4-1024x783.png' },
    { id: 'ball-valve', label: 'Küresel Valf', top: '65%', left: '22%', width: '10%', height: '10%', href: '/urunler/aksesuarlar/kuresel-valf', img: '/images/BV.png' },
    { id: 'pipe-rupture', label: 'Boru Patlama Valfi', top: '80%', left: '14%', width: '8%', height: '14%', href: '/urunler/guvenlik-valfleri/boru-patlama-valfi', img: '/images/Rupture-Valve-e1777546934832-672x1024.png' },
    { id: 'sb-motor', label: 'Dalgıç Motor', top: '70%', left: '40%', width: '10%', height: '12%', href: '/urunler/pompalar-motorlar/dalgic-motor', img: '/images/SB-Motori-1024x900.png' },
    { id: 'seim-pump', label: 'Seim Pompa', top: '75%', left: '50%', width: '12%', height: '10%', href: '/urunler/pompalar-motorlar/seim-pompa', img: '/images/Pumpe-Seim-1024x896.png' },
    { id: 'tank-heater', label: 'Tank Isıtıcısı', top: '80%', left: '60%', width: '8%', height: '10%', href: '/urunler/aksesuarlar/tank-isiticisi', img: '/images/TH-1024x819.png' },
    { id: 'mrl-h', label: 'MRL-H', top: '40%', left: '50%', width: '15%', height: '15%', href: '/urunler/aksesuarlar/mrl-h', img: '/images/MRL-H-1024x849.png' },
    { id: 'gv', label: 'GV Valfi', top: '35%', left: '35%', width: '12%', height: '15%', href: '/urunler/kontrol-valfleri/gv-valfi', img: '/images/GV-1-1024x968.png' },
    { id: 'dh-dl', label: 'Basınç Şalteri', top: '0', left: '0', width: '0', height: '0', href: '/urunler/aksesuarlar/basinc-salteri', img: 'https://blain.de/wp-content/uploads/2024/02/DH-DL-e1709153847207-1-e1709202910232.png' },
    { id: 'en', label: 'Acil İndirme Valfi', top: '0', left: '0', width: '0', height: '0', href: '/urunler/aksesuarlar/acil-indirme', img: 'https://blain.de/wp-content/uploads/2024/02/EN-1.png' },
    { id: 'cx', label: 'Basınç Dengeleme', top: '0', left: '0', width: '0', height: '0', href: '/urunler/aksesuarlar/basinc-dengeleme', img: 'https://blain.de/wp-content/uploads/2024/02/CX-2.png' },
    { id: 'il10-s', label: 'iL10-S', top: '0', left: '0', width: '0', height: '0', href: '/urunler/guvenlik-valfleri/il10-s', img: 'https://blain.de/wp-content/uploads/2025/06/il10s-2-300x200.png' },
    { id: 'ksb', label: 'KSB Valfi', top: '0', left: '0', width: '0', height: '0', href: '/urunler/guvenlik-valfleri/ksb', img: 'https://blain.de/wp-content/uploads/2015/10/blain_KSB-1-2-zoll_rgb_029.jpg' },
  ];

  // Filtreleme: Eğer activeCategory varsa sadece href'i içinde o kelime geçenleri göster
  const filteredHotspots = activeCategory 
    ? hotspots.filter(spot => spot.href.includes(activeCategory))
    : hotspots;

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <style>{`
        .ecosystem-spot {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background-color: transparent;
        }
        .ecosystem-spot:hover {
          background-color: #f8f9fb;
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.03);
        }
        .valve-img-container {
          height: 85px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.8rem;
          width: 100%;
        }
        .valve-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 5px rgba(0,0,0,0.05));
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }
        .ecosystem-spot:hover .valve-img {
          transform: scale(1.1);
          filter: drop-shadow(0 8px 12px rgba(0,0,0,0.15));
        }
        .ecosystem-spot-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #555;
          transition: all 0.3s ease;
          text-align: center;
          line-height: 1.2;
        }
        .ecosystem-spot:hover .ecosystem-spot-label {
          color: #003399;
        }
      `}</style>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2.5rem',
        alignItems: 'start',
        padding: '1.5rem 0'
      }}>
        {filteredHotspots.map((spot) => (
          <Link 
            key={spot.id}
            href={spot.href}
            title={spot.label}
            className="ecosystem-spot"
          >
            <div className="valve-img-container">
              <img 
                src={spot.img} 
                alt={spot.label} 
                className="valve-img"
              />
            </div>
            <span className="ecosystem-spot-label">{spot.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

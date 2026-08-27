import React from 'react';
import Link from 'next/link';

const powerUnits = [
  { model: 'BTD-55', stock_code: '152-0055-0-0', dead_zone: 12, total_oil: 57, height: 977.5, length: 255, width: 270, min_pump: 8, max_pump: 55, min_motor: 2.2, max_motor: 5.8, img: '/1-2-Photoroom.png', type: 'home', valves: 'KV Series, EV ¾"' },
  { model: 'BTS-75', stock_code: '152-0075-0-0', dead_zone: 34, total_oil: 89, height: 885.8, length: 595, width: 344.8, min_pump: 8, max_pump: 75, min_motor: 2.2, max_motor: 7.7, img: '/1-2-Photoroom.png', type: 'home', valves: 'KV Series, EV ¾"' },
  { model: 'BTS-150', stock_code: '152-0150-0-0', dead_zone: 62, total_oil: 189, height: 1117.5, length: 750, width: 400, min_pump: 75, max_pump: 150, min_motor: 7.7, max_motor: 14.7, img: '/3-4-Photoroom.png', type: 'both' },
  { model: 'BTS-250', stock_code: '152-0250-0-0', dead_zone: 78, total_oil: 299, height: 1251, length: 880, width: 450, min_pump: 150, max_pump: 240, min_motor: 14.7, max_motor: 29.4, img: '/3-4-Photoroom.png', type: 'both' },
  { model: 'BTS-400', stock_code: '152-0400-0-0', dead_zone: 126, total_oil: 420, height: 1251, length: 1000, width: 550, min_pump: 240, max_pump: 380, min_motor: 29.7, max_motor: 44.1, img: '/5-6-7-8-Photoroom.png', type: 'goods' },
  { model: 'BTS-600', stock_code: '152-0600-0-0', dead_zone: 185, total_oil: 639, height: 1388, length: 1100, width: 650, min_pump: 380, max_pump: 500, min_motor: 44.1, max_motor: 58.8, img: '/5-6-7-8-Photoroom.png', type: 'goods' },
  { model: 'BTS-1000', stock_code: '152-1000-0-0', dead_zone: 342, total_oil: 1216, height: 1508.6, length: 1500, width: 800, min_pump: 500, max_pump: 1000, min_motor: 58.8, max_motor: 73.5, img: '/5-6-7-8-Photoroom.png', type: 'goods' },
  { model: 'BTS-1800', stock_code: '152-1800-0-1', dead_zone: 483, total_oil: 1869, height: 1656, length: 1800, width: 900, min_pump: 500, max_pump: 1200, min_motor: 58.8, max_motor: 73.5, img: '/5-6-7-8-Photoroom.png', type: 'goods' }
];

const toGal = (l: number) => Math.round(l / 3.785);
const toIn = (mm: number) => Math.round(mm / 25.4);
const toHp = (kw: number) => Math.round(kw * 1.341);

export default function PowerUnitsCatalog() {
  return (
    <div style={{ 
      background: '#FBFBFD', 
      minHeight: '100vh', 
      padding: '2rem 1rem 6rem 1rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        .pu-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          row-gap: 5.5rem;
          max-width: 1300px;
          margin: 0 auto;
        }
        @media (max-width: 1200px) {
          .pu-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .pu-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .pu-grid { grid-template-columns: 1fr; row-gap: 6rem; }
        }
        .pu-card {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .pu-card:hover {
          transform: translateY(-8px) scale(1.03);
        }
        .pu-card-inner {
          transition: box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .pu-card:hover .pu-card-inner {
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
        .data-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.4rem 0;
          border-bottom: 1px solid #F2F2F7;
        }
        .data-row-no-border {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.4rem 0 0 0;
        }
        .data-label {
          color: #666666;
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          flex-direction: column;
        }
        .data-sublabel {
          font-size: 0.65rem;
          color: #999999;
          margin-top: 1px;
        }
        .data-value {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .data-primary {
          font-weight: 600;
          color: #222222;
          font-size: 0.8rem;
          letter-spacing: -0.1px;
        }
        .data-secondary {
          font-size: 0.65rem;
          color: #999999;
          margin-top: 2px;
        }
        .valves-link {
          color: #0066CC;
          font-size: 0.8rem;
          font-weight: 500;
          text-decoration: none;
        }
        .valves-link:hover {
          text-decoration: underline;
        }
      `}} />

      <div className="pu-grid">
        {powerUnits.map((unit, index) => (
          <Link key={index} href={`/products/power-units/${unit.model.toLowerCase()}`} style={{ textDecoration: 'none' }}>
            <div className="pu-card" style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              marginTop: '110px',
              cursor: 'pointer'
            }}>
            
            <div style={{ 
              position: 'absolute',
              top: '-110px',
              left: '5%',
              right: '5%',
              height: '140px',
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'flex-end',
              zIndex: 5
            }}>
              <img 
                src={unit.img} 
                alt={unit.model} 
                style={{ 
                  maxHeight: '100%', 
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
                }} 
              />
            </div>

            <div className="pu-card-inner" style={{
              position: 'relative',
              zIndex: 10,
              background: '#FFFFFF',
              flex: 1,
              borderRadius: '12px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}>
              
              <div style={{ 
                background: '#638EB5', 
                padding: '0.8rem', 
                textAlign: 'center' 
              }}>
                <h2 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  color: '#FFFFFF',
                  margin: 0, 
                  letterSpacing: '0.5px' 
                }}>
                  {unit.model}
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1rem' }}>

                <div className="data-row">
                  <div className="data-label">Tank Hacmi</div>
                  <div className="data-value">
                    <span className="data-primary">{unit.total_oil} L</span>
                    <span className="data-secondary">{toGal(unit.total_oil)} gal</span>
                  </div>
                </div>

                <div className="data-row">
                  <div className="data-label">
                    <span>Ebat (U×G×Y)</span>
                    <span className="data-sublabel">(valfsiz)</span>
                  </div>
                  <div className="data-value">
                    <span className="data-primary">{Math.round(unit.length)}×{Math.round(unit.width)}×{Math.round(unit.height)} mm</span>
                    <span className="data-secondary">{toIn(unit.length)}×{toIn(unit.width)}×{toIn(unit.height)} in</span>
                  </div>
                </div>

                <div className="data-row">
                  <div className="data-label">Debi</div>
                  <div className="data-value">
                    <span className="data-primary">{unit.min_pump}-{unit.max_pump} l/min</span>
                    <span className="data-secondary">{toGal(unit.min_pump)}-{toGal(unit.max_pump)} gpm</span>
                  </div>
                </div>

                <div className="data-row">
                  <div className="data-label">Motor Gücü</div>
                  <div className="data-value">
                    <span className="data-primary">{unit.min_motor}-{unit.max_motor} kW</span>
                    <span className="data-secondary">{toHp(unit.min_motor)}-{toHp(unit.max_motor)} HP</span>
                  </div>
                </div>
                
                <div className="data-row" style={{ paddingBottom: '0.3rem', borderBottom: 'none' }}>
                  <div className="data-label">Valfler</div>
                  <div className="data-value">
                    <Link href="/urunler/kontrol-valfleri" className="valves-link" style={{ fontSize: '0.7rem', textDecoration: 'none' }} onClick={(e) => e.stopPropagation()}>
                      {unit.valves || 'Tüm valf tipleri'}
                    </Link>
                  </div>
                </div>

                <div className="data-row-no-border">
                  <div className="data-label">Kullanım</div>
                  <div className="data-value" style={{ flexDirection: 'row', gap: '0.3rem' }}>
                    {(unit.type === 'home' || unit.type === 'both') && (
                      <span style={{ background: '#F0F4FF', color: '#0066CC', padding: '0.15rem 0.4rem', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 500 }}>Konut</span>
                    )}
                    {(unit.type === 'goods' || unit.type === 'both') && (
                      <span style={{ background: '#FFF3E5', color: '#CC5500', padding: '0.15rem 0.4rem', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 500 }}>Yük</span>
                    )}
                  </div>
                </div>

              </div>
            </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

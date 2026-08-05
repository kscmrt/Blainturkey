"use client";
import { useState } from 'react';
import { troubleshootingData, TroubleDirection, TroubleCategory, TroubleItem, ValveGroupData } from '@/data/troubleshootingData';

export default function Troubleshooting() {
  const [activeGroup, setActiveGroup] = useState<string>("EV");
  const [activeDirection, setActiveDirection] = useState<"Up" | "Down">("Up");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(0);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const currentGroupData = troubleshootingData.find(g => g.groupName === activeGroup);
  const currentDirectionData = currentGroupData?.directions.find(d => d.direction === activeDirection);

  const handleGroupChange = (groupName: string) => {
    setActiveGroup(groupName);
    setActiveDirection("Up");
    setActiveCategoryIndex(0);
    setActiveItemIndex(null);
    setActiveVideo(null);
  };

  const handleDirectionChange = (direction: "Up" | "Down") => {
    setActiveDirection(direction);
    setActiveCategoryIndex(0);
    setActiveItemIndex(null);
    setActiveVideo(null);
  };

  const handleItemClick = (catIndex: number, itemIndex: number, videoId?: string) => {
    setActiveItemIndex(itemIndex);
    setActiveCategoryIndex(catIndex);
    if (videoId) {
      setActiveVideo(`https://www.blain.de/support/video/${videoId}-englisch-converted.mp4`);
    } else {
      setActiveVideo(null);
    }
  };

  return (
    <div className="troubleshooting-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <style>{`
        .troubleshooting-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: start;
        }
        
        /* Modern Segmented Controls (iOS Style) */
        .segmented-group {
          display: inline-flex;
          background: #e5e5ea;
          padding: 0.25rem;
          border-radius: 12px;
          gap: 0.125rem;
          width: 100%;
          max-width: 400px;
        }
        .segment-btn {
          flex: 1;
          padding: 0.5rem 1rem;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 9px;
          border: none;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          color: #8e8e93;
          background: transparent;
        }
        .segment-btn.active {
          background: white;
          color: #1c1c1e;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12), 0 3px 1px rgba(0, 0, 0, 0.04);
        }
        
        /* Direction Segmented Control */
        .dir-segmented {
          display: inline-flex;
          background: #e5e5ea;
          padding: 0.25rem;
          border-radius: 12px;
          gap: 0.125rem;
          width: 100%;
          max-width: 500px;
        }
        .dir-btn {
          flex: 1;
          padding: 0.6rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 9px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          color: #8e8e93;
          background: transparent;
        }
        .dir-btn.active-up, .dir-btn.active-down {
          background: white;
          color: #1c1c1e;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12), 0 3px 1px rgba(0, 0, 0, 0.04);
        }

        /* Mobile Adjustments */
        @media (max-width: 900px) {
          .troubleshooting-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 1.5rem;
            align-items: stretch;
          }
        }
        @media (max-width: 480px) {
          .segment-btn {
            padding: 0.6rem 0.5rem;
            font-size: 0.9rem;
          }
          .dir-btn {
            padding: 0.8rem 0.5rem;
            font-size: 0.95rem;
          }
          .accordion-title {
            font-size: 1rem !important;
            padding: 1rem !important;
          }
        @media (min-width: 901px) {
          .controls-container {
            display: flex;
            gap: 2rem;
            align-items: flex-end;
            margin-bottom: 2rem;
            background: transparent;
            padding: 0;
            border-radius: 0;
            border: none;
          }
          .control-group {
            flex: 1;
            margin-bottom: 0 !important;
            text-align: left !important;
          }
          .control-group h3 {
            margin-bottom: 0.5rem !important;
          }
        }
      `}</style>
      
      {/* Controls Area (Group + Direction) */}
      <div className="controls-container">
        {/* Valve Group Selector */}
        <div className="control-group" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="segmented-group">
              {["EV", "KV"].map(group => (
                <button 
                  key={group}
                  onClick={() => handleGroupChange(group)}
                  className={`segment-btn ${activeGroup === group ? 'active' : ''}`}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="control-group" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="dir-segmented">
              <button 
                onClick={() => handleDirectionChange("Up")}
                className={`dir-btn ${activeDirection === "Up" ? 'active-up' : ''}`}
                style={{ padding: '0.6rem', fontSize: '0.9rem' }}
              >
                YUKARI (UP)
              </button>
              <button 
                onClick={() => handleDirectionChange("Down")}
                className={`dir-btn ${activeDirection === "Down" ? 'active-down' : ''}`}
                style={{ padding: '0.6rem', fontSize: '0.9rem' }}
              >
                AŞAĞI (DOWN)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="troubleshooting-grid">
        
        {/* Left Side: Accordion Menu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {currentDirectionData?.categories.map((category, cIdx) => (
            <div key={cIdx} style={{ background: 'transparent', overflow: 'hidden', borderBottom: '1px solid #e5e5ea' }}>
              
              <button 
                onClick={() => setActiveCategoryIndex(activeCategoryIndex === cIdx ? null : cIdx)}
                className="accordion-title"
                style={{ 
                  width: '100%', 
                  padding: '1rem 0', 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  transition: 'opacity 0.2s'
                }}
              >
                {category.title}
                <span style={{ fontSize: '1.25rem', transform: activeCategoryIndex === cIdx ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', color: '#94a3b8' }}>
                  ▼
                </span>
              </button>

              {activeCategoryIndex === cIdx && (
                <div style={{ padding: '0 0 1rem 0' }}>
                  {category.items.map((item, iIdx) => {
                    const isActive = activeItemIndex === iIdx && activeCategoryIndex === cIdx;
                    return (
                      <div 
                        key={item.id} 
                        onClick={() => handleItemClick(cIdx, iIdx, item.videoId)}
                        style={{ 
                          padding: '0.875rem', 
                          marginTop: '0.5rem', 
                          borderRadius: '12px', 
                          background: isActive ? '#f5f5f7' : 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <span style={{ fontSize: '1.25rem', color: isActive ? '#0071e3' : '#a1a1a6' }}>{item.videoId ? (isActive ? '▶' : '►') : '•'}</span>
                          <div>
                            <p style={{ fontWeight: 500, color: '#1d1d1f', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</p>
                            {isActive && (
                              <div style={{ padding: '0.75rem 0', marginTop: '0.25rem' }}>
                                <p style={{ fontSize: '0.9rem', color: '#424245', lineHeight: 1.5 }}>
                                  <strong style={{ color: '#0071e3' }}>Çözüm:</strong> {item.solution}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
          {currentDirectionData?.categories.length === 0 && (
             <p style={{ color: 'var(--text-muted)' }}>Bu yönde tanımlanmış bir sorun bulunmuyor.</p>
          )}
        </div>

        {/* Right Side: Video Player */}
        <div style={{ position: 'sticky', top: '100px' }}>
          {activeVideo ? (
            <div className="animate-fade-in" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)', background: 'black' }}>
              <video 
                src={activeVideo} 
                controls 
                autoPlay
                style={{ width: '100%', display: 'block', maxHeight: '500px', backgroundColor: 'black' }}
              />
            </div>
          ) : (
            <div style={{ 
              height: '180px', 
              borderRadius: '20px', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              background: '#f5f5f7',
              color: '#86868b',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{activeGroup === 'EV4' ? '📄' : '🎥'}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#64748b' }}>
                 {activeGroup === 'EV4' ? 'Çözüm Detayları' : 'Video Görüntüleyici'}
              </h3>
              <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
                 {activeGroup === 'EV4' 
                   ? 'Bu valf grubu için metin tabanlı çözüm adımlarını okuyun.'
                   : 'Çözüm videosunu izlemek için listeden bir öğeye tıklayın.'}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

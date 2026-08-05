'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function PortalPage() {
  const [capacityType, setCapacityType] = useState<'person' | 'kg'>('person');
  const [capacityValue, setCapacityValue] = useState('');
  
  const [cabinWeight, setCabinWeight] = useState('');
  
  const [travelType, setTravelType] = useState<'stops' | 'mm'>('stops');
  const [travelValue, setTravelValue] = useState('');
  
  const [speed, setSpeed] = useState('');
  const [regulation, setRegulation] = useState<'machine' | 'en81'>('machine');
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Teklif talebiniz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçilecektir.');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'url("/images/Slide-1-1-scaled.jpg") center/cover no-repeat',
      position: 'relative',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      {/* Dark Blur Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}></div>

      {/* Modal Card */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        margin: '2rem'
      }}>
        
        {/* Header */}
        <div style={{
          backgroundColor: '#2b4478', /* Blain Blue/Navy */
          padding: '1.25rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ color: '#ffffff', margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>
            Hidrolik Sistem Teklif
          </h1>
          <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.5rem', lineHeight: 1, opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}>
            &times;
          </Link>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Kapasite */}
          <div>
            <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Kapasite</label>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.75rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: capacityType === 'person' ? '#111' : '#666', fontWeight: capacityType === 'person' ? 600 : 400 }}>
                <input type="radio" name="capacityType" checked={capacityType === 'person'} onChange={() => setCapacityType('person')} style={{ accentColor: '#2b4478' }} /> Kişi Sayısı
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: capacityType === 'kg' ? '#111' : '#666', fontWeight: capacityType === 'kg' ? 600 : 400 }}>
                <input type="radio" name="capacityType" checked={capacityType === 'kg'} onChange={() => setCapacityType('kg')} style={{ accentColor: '#2b4478' }} /> Kilogram
              </label>
            </div>
            <input 
              type="number" 
              placeholder={capacityType === 'person' ? 'Örn: 6' : 'Örn: 450'}
              value={capacityValue}
              onChange={(e) => setCapacityValue(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2b4478'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          {/* Kabin Karkas Ağırlığı */}
          <div>
            <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Kabin karkas ağırlığı (kg)</label>
            <input 
              type="number" 
              placeholder="Örn: 600"
              value={cabinWeight}
              onChange={(e) => setCabinWeight(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2b4478'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          {/* Seyir Mesafesi */}
          <div>
            <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Seyir Mesafesi</label>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.75rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: travelType === 'stops' ? '#111' : '#666', fontWeight: travelType === 'stops' ? 600 : 400 }}>
                <input type="radio" name="travelType" checked={travelType === 'stops'} onChange={() => setTravelType('stops')} style={{ accentColor: '#2b4478' }} /> Durak Sayısı
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: travelType === 'mm' ? '#111' : '#666', fontWeight: travelType === 'mm' ? 600 : 400 }}>
                <input type="radio" name="travelType" checked={travelType === 'mm'} onChange={() => setTravelType('mm')} style={{ accentColor: '#2b4478' }} /> Seyir Mesafesi (mm)
              </label>
            </div>
            <input 
              type="number" 
              placeholder={travelType === 'stops' ? 'Örn: 5' : 'Örn: 15000'}
              value={travelValue}
              onChange={(e) => setTravelValue(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2b4478'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          {/* Kabin hızı */}
          <div>
            <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Kabin hızı</label>
            <select
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                backgroundColor: '#fff',
                cursor: 'pointer',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2b4478'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            >
              <option value="" disabled>Hız seçiniz</option>
              <option value="0.15">0.15 m/s</option>
              <option value="0.30">0.30 m/s</option>
              <option value="0.40">0.40 m/s</option>
              <option value="0.63">0.63 m/s</option>
              <option value="0.80">0.80 m/s</option>
              <option value="1.00">1.00 m/s</option>
            </select>
          </div>

          {/* Uygulanacak Regülasyon */}
          <div>
            <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Uygulanacak Regülasyon</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ flex: 1, display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: regulation === 'machine' ? '#111' : '#666', fontWeight: regulation === 'machine' ? 600 : 400 }}>
                <input type="radio" name="regulation" checked={regulation === 'machine'} onChange={() => setRegulation('machine')} style={{ accentColor: '#2b4478', marginTop: '4px' }} /> 
                <span style={{ lineHeight: 1.4 }}>Makine Direktifi<br/>(2006/42/EC)</span>
              </label>
              <label style={{ flex: 1, display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: regulation === 'en81' ? '#111' : '#666', fontWeight: regulation === 'en81' ? 600 : 400 }}>
                <input type="radio" name="regulation" checked={regulation === 'en81'} onChange={() => setRegulation('en81')} style={{ accentColor: '#2b4478', marginTop: '4px' }} /> 
                <span style={{ lineHeight: 1.4 }}>TS EN 81-<br/>20/50</span>
              </label>
            </div>
          </div>

          {/* Firma adı */}
          <div>
            <label style={{ display: 'block', color: '#2b4478', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Firma adı</label>
            <input 
              type="text" 
              placeholder="Örn: ABC Asansör"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2b4478'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <button type="submit" style={{
            marginTop: '1rem',
            width: '100%',
            backgroundColor: '#2b4478',
            color: '#fff',
            padding: '1rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.05rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a2e57'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2b4478'}>
            Teklif İste
          </button>
        </form>
      </div>

    </div>
  );
}

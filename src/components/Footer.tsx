'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#fcfcfc', 
      borderTop: '1px solid #eaeaea',
      padding: '2rem', 
      marginTop: 'auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        alignItems: 'center',
        gap: '1rem',
        fontSize: '0.85rem',
        color: '#86868b'
      }}>
        
        <div>
          &copy; {new Date().getFullYear()} BLAIN HYDRAULICS GmbH. Tüm hakları saklıdır.
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ color: '#555', textDecoration: 'none', transition: 'color 0.2s' }}>İletişim</Link>
          <Link href="/updates" style={{ color: '#555', textDecoration: 'none', transition: 'color 0.2s' }}>Güncellemeler</Link>
        </div>

      </div>
    </footer>
  );
}

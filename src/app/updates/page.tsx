'use client';
import Link from 'next/link';

export default function UpdatesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        height: '40vh',
        minHeight: '300px',
        background: 'url("/images/Slide-1-1-scaled.jpg") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,51,153,0.8)' }}></div>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#fff', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Ürün Güncellemeleri
          </h1>
        </div>
      </section>

      {/* UPDATES LIST */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#393939', marginBottom: '2rem', textAlign: 'center' }}>
            En son malzeme ve donanım iyileştirmelerimizi takip edin
          </h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#1890d7', margin: '0 auto 4rem auto' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Update 1 */}
            <div style={{ padding: '2rem', border: '1px solid #e5e5e5', borderRadius: '8px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #003399' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#003399', marginBottom: '1rem' }}>
                Solenoid Bobin Güncellemesi: Yeni Kompakt Tasarım
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Aynı boyut, performans ve uyumluluk özelliklerini koruyan solenoid bobinlerimiz için yeni bir kompakt tasarım sunuyoruz. Bu güncelleme, mevcut valflerde kolay ve birebir değişim imkânı sağlamaya devam ederken termal verimliliği önemli ölçüde artırmaktadır.
              </p>
            </div>

            {/* Update 2 */}
            <div style={{ padding: '2rem', border: '1px solid #e5e5e5', borderRadius: '8px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #1890d7' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#003399', marginBottom: '1rem' }}>
                Yeni Polimer DS Diskleri
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Kirli ortamlar için artırılmış dayanıklılık ve sızdırmazlık koruması. Yeni Polimer DS diskleri, hidrolik yağdaki mikroskobik parçacıklardan kaynaklı aşınma ve yıpranmaya karşı dirençli olacak şekilde özel olarak mühendislik testlerinden geçmiştir; bu sayede EV ve KV serisi kontrol valflerimizin bakım aralıklarını ciddi oranda uzatır.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

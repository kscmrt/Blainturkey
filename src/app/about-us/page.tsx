'use client';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fcfcfc', minHeight: '100vh', paddingBottom: 0 }}>
      
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        height: '400px',
        background: 'url("/images/DJI-optimized.jpg") center/cover no-repeat',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
        {/* Dark Blue Box Overlay */}
        <div style={{ 
          backgroundColor: 'rgba(20, 40, 80, 0.75)', 
          padding: '2rem 3rem', 
          marginTop: '4rem',
          marginLeft: '8%',
          color: '#fff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 300, letterSpacing: '4px', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            BLAIN HYDRAULICS
          </h1>
          <p style={{ fontSize: '1.2rem', fontWeight: 300, letterSpacing: '2px', fontStyle: 'italic', opacity: 0.9 }}>
            1971'den Beri En Yüksek Kaliteli Valfler
          </p>
        </div>
      </section>

      {/* INTRO & VIDEO SECTION */}
      <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
        <div style={{ flex: '1 1 500px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#333', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            Hakkımızda
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#003399', fontWeight: 600, lineHeight: '1.6', marginBottom: '1.5rem' }}>
            1971'den bu yana Blain, birinci sınıf asansör kontrol valfleri tasarlama ve üretme konusunda uzmanlaşmıştır. Bu süre zarfında geliştirilen EV 100 serisi, bugün hala dünyadaki en başarılı asansör valfi olmaya devam etmektedir.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', marginBottom: '1rem' }}>
            Her yıl, Blain Hydraulics'in olağanüstü kalitesine ve güvenilirliğine inanan müşteriler tarafından yaklaşık on dört bin EV 100 valf satın alınmaktadır. Almanya'nın Heilbronn kentinde bulunan modern üretim tesisimizde yaklaşık 80 kendini adamış profesyonel istihdam edilmektedir.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#1890d7', lineHeight: '1.6', fontWeight: 600 }}>
            Ayrıca sistemlerimizin güncel kalmasını ve en son teknik standartlara uymasını sağlamak için yeni geliştirmeler ve mevcut ürünlerde iyileştirmeler üzerinde sürekli çalışıyoruz.
          </p>
        </div>
        <div style={{ flex: '1 1 500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1rem' }}>
            {/* Fake Video Player Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontSize: '0.8rem' }}>
              <span style={{ fontSize: '1.2rem' }}>▶</span>
              <span>0:00 / 2:37</span>
              <div style={{ flex: 1 }}></div>
              <span>⚙</span>
              <span>[ ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY HISTORY BANNER */}
      <section style={{ 
        background: 'linear-gradient(to right, #9bb096, #c2a17a)', 
        padding: '1rem 0',
        textAlign: 'center',
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#fff', letterSpacing: '2px', margin: 0, textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
          Şirket Tarihçesi
        </h2>
      </section>

      {/* HISTORY CONTENT */}
      <section style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        
        {/* ROY BLAIN */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem', alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 200px', textAlign: 'center' }}>
            <img src="/images/Roy8.jpg" alt="Roy W. Blain" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
            <p style={{ fontSize: '0.8rem', color: '#777', marginTop: '0.5rem', fontStyle: 'italic' }}>Roy W. Blain</p>
          </div>
          <div style={{ flex: '1 1 500px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#333', marginBottom: '1rem' }}>Roy W. Blain, Blain Hydraulics'in Kurucusu</h3>
            <p style={{ fontSize: '0.95rem', color: '#003399', fontWeight: 600, lineHeight: '1.6', marginBottom: '1rem' }}>
              Salford, Manchester'da doğan Roy W. Blain, altı yaşına kadar Ilford, Essex'te yaşadıktan sonra tekrar Manchester'a taşındı ve burada makine ve havacılık mühendisliği alanında teknik eğitimine devam etti.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', marginBottom: '1rem' }}>
              Ticaret Donanmasında iki yıl ve orduda iki yıl görev yaptıktan sonra endüstri mühendisliği alanında kariyerine devam etti ve sonunda Almanya, Fransa ve İsviçre'ye seyahat etti. 1960'ların ortalarında, İsviçre'de bir asansör şirketini yönetirken Bay Blain, hidrolik asansörler için yüksek kaliteli bileşenlere yönelik artan ihtiyacın farkına vardı.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#1890d7', fontWeight: 600, lineHeight: '1.6' }}>
              75'ten fazla ülkede müşterileri ve kurulumları bulunan Bay Blain, hidrolik asansörlerin dünya çapında standart bir çözüme dönüşmesinde hayati bir rol oynayan hidrolik asansör teknolojisinin gerçek bir öncüsüydü.
            </p>
          </div>
        </div>

        {/* ANJA BLAIN */}
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '3rem', marginBottom: '5rem', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#333', marginBottom: '1rem' }}>Anja Blain, CEO</h3>
            <p style={{ fontSize: '0.95rem', color: '#003399', fontWeight: 600, lineHeight: '1.6', marginBottom: '1rem' }}>
              Şirkete 1991 yılında katılan Anja Blain, 2005 yılında CEO oldu. Endüstriyel İşletme Yönetimi diplomaları ve asansör sektörü hakkındaki uzmanlık bilgisiyle, şirketin başarıyla yönetilmesinde önemli rol oynamıştır.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', marginBottom: '1rem' }}>
              Kendini Roy Blain'in vizyonunu korumaya adayan Anja, profesyonel başarılarını dört çocuklu gururlu bir anne olarak kişisel hayatıyla dengeliyor. Aynı zamanda çok sıkı çalışma ve kararlılığını sergileyen tutkulu bir triatlettir. Onun liderliğinde Blain Hydraulics, güçlü duruşunu sürdürerek ve babasının şirkete aşıladığı değerleri koruyarak gelişmeye devam ediyor.
            </p>
          </div>
          <div style={{ flex: '0 0 200px', textAlign: 'center' }}>
            <img src="/images/Anja-Blain-2.jpg" alt="Anja Blain" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
            <p style={{ fontSize: '0.8rem', color: '#777', marginTop: '0.5rem', fontStyle: 'italic' }}>Anja Blain</p>
          </div>
        </div>

        {/* TIMELINE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#003399', marginBottom: '0.5rem' }}>1971-1980</h4>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
              1971'den itibaren Blain, birinci sınıf asansör kontrol valfleri tasarlamaya ve üretmeye başladı. Bu dönemde geliştirilen EV 100 serisi, bugün hala dünyanın en başarılı asansör valfi konumundadır.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#003399', marginBottom: '0.5rem' }}>1981-1990</h4>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
              R10 boru patlama valfi piyasaya sürüldü ve daha sonra 1999 yılında CE uygunluk sertifikası alan ilk valf olma özelliğine kavuştu.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#003399', marginBottom: '0.5rem' }}>1991-2000</h4>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
              İhracat hacmimiz rekor seviyelere ulaşmaya başladı ve bu da şirketin erişim alanını genişletmesini ve şu anda dünya çapında 75'ten fazla ülkeye hizmet vermesini sağladı.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#003399', marginBottom: '0.5rem' }}>2001-2010</h4>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
              YASKAWA ile yapılan ortak bir girişim sayesinde EV4'ü (VVVF kontrol valfi) piyasaya sürdük.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#003399', marginBottom: '0.5rem' }}>2011-2020</h4>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
              2017 yazında Blain Hydraulics, yeni UCM-A3 çözümleri olarak entegre iL10 ve L20 valflerini piyasaya sürdü ve hidrolik asansörlerin modernizasyonu için uygun maliyetli bir seçenek sundu. 2018 itibariyla Blain Türkiye'yi kurduk.
            </p>
          </div>

        </div>

      </section>



    </div>
  );
}

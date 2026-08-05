'use client';

export default function Modernizasyon() {
  return (
    <>
      <style>{`
        .mod-page {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #333;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          box-sizing: border-box;
        }
        .mod-page * {
          box-sizing: border-box;
        }
        .mod-section {
          padding: 6rem 4rem;
          width: 100%;
        }
        .mod-hero {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4rem;
        }
        .mod-hero-col {
          flex: 1 1 400px;
          min-width: 0;
        }
        .mod-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 2rem;
          letter-spacing: -1px;
          line-height: 1.1;
        }
        .mod-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 4rem;
        }
        
        @media (max-width: 768px) {
          .mod-section {
            padding: 4rem 1.5rem;
          }
          .mod-hero {
            gap: 2rem;
          }
          .mod-hero-col {
            flex: 1 1 100%;
          }
          .mod-title {
            font-size: 2.5rem;
            word-wrap: break-word;
          }
          .mod-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>

      <div className="mod-page">
        
        {/* PROFESSIONAL HERO - EDITORIAL STYLE */}
        <section className="mod-section">
          <div className="mod-hero">
            <div className="mod-hero-col">
              <div style={{ width: '40px', height: '4px', backgroundColor: '#003399', marginBottom: '2rem' }}></div>
              <h1 className="mod-title">
                EV40 Akıllı Valf
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#555', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: 400 }}>
                Yeni EV40 akıllı valfimiz, hidrolik asansör sistemleri için akıllı telefon kontrollü, gelişmiş bir çözüm sunar.
              </p>
              <p style={{ fontSize: '1.25rem', color: '#555', lineHeight: '1.8', fontWeight: 400 }}>
                EV40'ı seçerek, hidrolik sisteminizin verimliliğini ve kullanım ömrünü optimize ederken, müşterilerinize olağanüstü bir asansör deneyimi sunabilirsiniz.
              </p>
            </div>
            
            <div className="mod-hero-col" style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/images/EV40-1024x572.png" 
                alt="EV40 Akıllı Valf" 
                style={{ width: '100%', maxWidth: '800px', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.06))' }} 
              />
            </div>
          </div>
        </section>

        {/* EDITORIAL CONTENT SECTIONS */}
        <section className="mod-section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="mod-grid">
            
            {/* Column 1 */}
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>
                Enerji Tüketimini %65'e Kadar Azaltabilir
              </h3>
              <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                En son VVVF (Değişken Voltaj Değişken Frekans) teknolojisini entegre eden EV40, enerji tüketimini %65'e kadar azaltabilir. 
              </p>
              <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8' }}>
                Ayrıca, motor-pompa kontrolü yağın ısınmasını %50'ye kadar düşürerek sistemin ömrünü uzatır ve yüksek enerji tüketen yağ soğutucularına olan ihtiyacı en aza indirir.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>
                Uygun Maliyetli ve Enerji Tasarruflu Çözüm
              </h3>
              <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                EV40 sistemi, yukarı yöndeki seyir için Yaskawa'nın L1000H veya GA700 VVVF sürücüsü ile kusursuz bir şekilde entegre olur.
              </p>
              <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8' }}>
                Aşağı yönlü seyri ise doğrudan EV40 valfinin kendisi yöneterek, uygun maliyetli ve enerji tasarruflu bir çözüm sağlar.
              </p>
            </div>

          </div>
        </section>

        <section className="mod-section" style={{ backgroundColor: '#ffffff' }}>
          <div className="mod-grid">
            
            {/* Column 1 */}
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>
                EV40'a Yükseltme Basit Bir İşlemdir
              </h3>
              <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Blain olmayan bir valf, Blain EV40 ile kolayca değiştirilebilir.
              </p>
              <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8' }}>
                Mevcut valf bir Blain EV100 ise, mevcut asansör kumanda panosunu değiştirmeye gerek kalmadan, bir eklenti (retrofit) kiti kullanılarak 10 dakikadan daha kısa bir sürede EV40'a yükseltilebilir.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>
                Kolay Kurulum ve Bakım
              </h3>
              <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                EV40 valflerinin kolay kurulumu ve bakımı, onları hem mevcut sistemlerin modernizasyonu hem de yeni kurulumlar için mükemmel bir seçim haline getirir.
              </p>
              <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8' }}>
                Kurulumu kolay olan EV40'lar; dahili aşırı yük koruması ve farklı enerji tasarrufu modları ile aşırı yük ve sıcaklık değişimleri boyunca pürüzsüz, güvenilir ve hassas bir şekilde çalışır.
              </p>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

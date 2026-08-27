'use client';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="flex flex-col bg-[#fcfcfc] min-h-screen pb-0">
      
      {/* HERO SECTION */}
      <section className="relative h-[400px] bg-[url('/images/DJI-optimized.jpg')] bg-center bg-cover bg-no-repeat flex items-start justify-start">
        {/* Dark Blue Box Overlay - Enhanced Contrast */}
        <div className="bg-slate-900/85 backdrop-blur-sm p-8 md:p-12 mt-16 ml-4 md:ml-[8%] text-white shadow-2xl rounded-sm border-l-4 border-[#1890d7] max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-3 drop-shadow-md text-white">
            BLAIN HYDRAULICS
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wider italic text-blue-100">
            1971'den Beri En Yüksek Kaliteli Valfler
          </p>
        </div>
      </section>

      {/* INTRO & VIDEO SECTION */}
      <section className="max-w-7xl mx-auto my-16 px-6 flex flex-wrap gap-12">
        <div className="flex-1 min-w-[300px] md:min-w-[500px]">
          <h2 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
            Hakkımızda
          </h2>
          <p className="text-lg text-blue-900 font-semibold leading-relaxed mb-6">
            1971'den bu yana Blain, birinci sınıf asansör kontrol valfleri tasarlama ve üretme konusunda uzmanlaşmıştır. Bu süre zarfında geliştirilen EV 100 serisi, bugün hala dünyadaki en başarılı asansör valfi olmaya devam etmektedir.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Her yıl, Blain Hydraulics'in olağanüstü kalitesine ve güvenilirliğine inanan müşteriler tarafından yaklaşık on dört bin EV 100 valf satın alınmaktadır. Almanya'nın Heilbronn kentinde bulunan modern üretim tesisimizde yaklaşık 80 kendini adamış profesyonel istihdam edilmektedir.
          </p>
          <p className="text-base text-[#1890d7] leading-relaxed font-semibold">
            Ayrıca sistemlerimizin güncel kalmasını ve en son teknik standartlara uymasını sağlamak için yeni geliştirmeler ve mevcut ürünlerde iyileştirmeler üzerinde sürekli çalışıyoruz.
          </p>
        </div>
        
        {/* Fake Video Box (Modernized) */}
        <div className="flex-1 min-w-[300px] md:min-w-[500px] flex items-center justify-center group">
          <div className="w-full aspect-video bg-gray-900 rounded-xl shadow-2xl overflow-hidden relative border border-gray-800 transition-transform duration-500 hover:scale-[1.02]">
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            
            {/* Controls */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xl cursor-pointer">▶</span>
              <span className="font-medium tracking-wide">0:00 / 2:37</span>
              <div className="flex-1 bg-gray-600 h-1 rounded-full cursor-pointer"><div className="w-0 bg-[#1890d7] h-full rounded-full"></div></div>
              <span className="cursor-pointer">⚙</span>
              <span className="cursor-pointer border border-white px-1 text-xs">[]</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY HISTORY BANNER */}
      <section className="bg-gradient-to-r from-[#9bb096] to-[#c2a17a] py-8 text-center shadow-inner">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-widest m-0 drop-shadow-md">
          Şirket Tarihçesi
        </h2>
      </section>

      {/* HISTORY CONTENT */}
      <section className="max-w-5xl mx-auto my-16 px-6">
        
        {/* ROY BLAIN */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 mb-20 items-start group">
          <div className="flex-shrink-0 w-full md:w-64 text-center">
            <div className="overflow-hidden rounded-xl shadow-lg border-2 border-gray-100">
              <img src="/images/Roy8.jpg" alt="Roy W. Blain" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="text-sm text-gray-500 mt-3 font-medium italic">Roy W. Blain</p>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Roy W. Blain, Blain Hydraulics'in Kurucusu</h3>
            <p className="text-base text-blue-900 font-semibold leading-relaxed mb-4">
              Salford, Manchester'da doğan Roy W. Blain, altı yaşına kadar Ilford, Essex'te yaşadıktan sonra tekrar Manchester'a taşındı ve burada makine ve havacılık mühendisliği alanında teknik eğitimine devam etti.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Ticaret Donanmasında iki yıl ve orduda iki yıl görev yaptıktan sonra endüstri mühendisliği alanında kariyerine devam etti ve sonunda Almanya, Fransa ve İsviçre'ye seyahat etti. 1960'ların ortalarında, İsviçre'de bir asansör şirketini yönetirken Bay Blain, hidrolik asansörler için yüksek kaliteli bileşenlere yönelik artan ihtiyacın farkına vardı.
            </p>
            <p className="text-base text-[#1890d7] font-semibold leading-relaxed">
              75'ten fazla ülkede müşterileri ve kurulumları bulunan Bay Blain, hidrolik asansörlerin dünya çapında standart bir çözüme dönüşmesinde hayati bir rol oynayan hidrolik asansör teknolojisinin gerçek bir öncüsüydü.
            </p>
          </div>
        </div>

        {/* ANJA BLAIN */}
        <div className="flex flex-wrap-reverse md:flex-nowrap gap-8 mb-24 items-start group">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Anja Blain, CEO</h3>
            <p className="text-base text-blue-900 font-semibold leading-relaxed mb-4">
              Şirkete 1991 yılında katılan Anja Blain, 2005 yılında CEO oldu. Endüstriyel İşletme Yönetimi diplomaları ve asansör sektörü hakkındaki uzmanlık bilgisiyle, şirketin başarıyla yönetilmesinde önemli rol oynamıştır.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Kendini Roy Blain'in vizyonunu korumaya adayan Anja, profesyonel başarılarını dört çocuklu gururlu bir anne olarak kişisel hayatıyla dengeliyor. Aynı zamanda çok sıkı çalışma ve kararlılığını sergileyen tutkulu bir triatlettir. Onun liderliğinde Blain Hydraulics, güçlü duruşunu sürdürerek ve babasının şirkete aşıladığı değerleri koruyarak gelişmeye devam ediyor.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-64 text-center">
            <div className="overflow-hidden rounded-xl shadow-lg border-2 border-gray-100">
              <img src="/images/Anja-Blain-2.jpg" alt="Anja Blain" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="text-sm text-gray-500 mt-3 font-medium italic">Anja Blain</p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l-4 border-blue-100 pl-8 space-y-12 ml-4 md:ml-0">
          
          <div className="relative">
            <div className="absolute w-4 h-4 bg-[#1890d7] rounded-full -left-[42px] top-1 border-4 border-white shadow"></div>
            <h4 className="text-xl font-bold text-blue-900 mb-2">1971-1980</h4>
            <p className="text-base text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-50">
              1971'den itibaren Blain, birinci sınıf asansör kontrol valfleri tasarlamaya ve üretmeye başladı. Bu dönemde geliştirilen EV 100 serisi, bugün hala dünyanın en başarılı asansör valfi konumundadır.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute w-4 h-4 bg-[#1890d7] rounded-full -left-[42px] top-1 border-4 border-white shadow"></div>
            <h4 className="text-xl font-bold text-blue-900 mb-2">1981-1990</h4>
            <p className="text-base text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-50">
              R10 boru patlama valfi piyasaya sürüldü ve daha sonra 1999 yılında CE uygunluk sertifikası alan ilk valf olma özelliğine kavuştu.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-4 h-4 bg-[#1890d7] rounded-full -left-[42px] top-1 border-4 border-white shadow"></div>
            <h4 className="text-xl font-bold text-blue-900 mb-2">1991-2000</h4>
            <p className="text-base text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-50">
              İhracat hacmimiz rekor seviyelere ulaşmaya başladı ve bu da şirketin erişim alanını genişletmesini ve şu anda dünya çapında 75'ten fazla ülkeye hizmet vermesini sağladı.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-4 h-4 bg-[#1890d7] rounded-full -left-[42px] top-1 border-4 border-white shadow"></div>
            <h4 className="text-xl font-bold text-blue-900 mb-2">2001-2010</h4>
            <p className="text-base text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-50">
              YASKAWA ile yapılan ortak bir girişim sayesinde EV4'ü (VVVF kontrol valfi) piyasaya sürdük.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-4 h-4 bg-[#1890d7] rounded-full -left-[42px] top-1 border-4 border-white shadow"></div>
            <h4 className="text-xl font-bold text-blue-900 mb-2">2011-2020</h4>
            <p className="text-base text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-50">
              2017 yazında Blain Hydraulics, yeni UCM-A3 çözümleri olarak entegre iL10 ve L20 valflerini piyasaya sürdü ve hidrolik asansörlerin modernizasyonu için uygun maliyetli bir seçenek sundu. 2018 itibariyla Blain Türkiye'yi kurduk.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

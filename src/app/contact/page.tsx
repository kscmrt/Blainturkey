'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative h-[40vh] min-h-[300px] bg-[url('/images/Slide-4-eidte-scaled.jpg')] bg-center bg-cover bg-no-repeat flex items-center justify-center">
        {/* Adjusted the overlay to be darker and more transparent for better contrast */}
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center text-white px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-xl tracking-tight">
            Bize Ulaşın
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-light max-w-2xl mx-auto">
            Her türlü sorunuz veya teknik destek talebiniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
            Ekibimizle İletişime Geçin
          </h2>
          <div className="w-16 h-1.5 bg-[#1890d7] mx-auto rounded-full mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {/* Blain Headquarters Card */}
            <div className="group bg-white p-8 md:p-10 rounded-2xl border-t-4 border-[#003399] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-[#003399] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003399] mb-4 group-hover:text-blue-700 transition-colors">Blain Headquarters (Almanya)</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Pfaffenstrasse 1<br/>
                74078 Heilbronn<br/>
                Germany
              </p>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-semibold flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1890d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +49 7131 2821 0
                </p>
                <p className="text-lg text-gray-800 font-semibold flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1890d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@blain.de
                </p>
              </div>
            </div>

            {/* Blain Türkiye Card */}
            <div className="group bg-white p-8 md:p-10 rounded-2xl border-t-4 border-[#1890d7] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-[#1890d7] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003399] mb-4 group-hover:text-blue-700 transition-colors">Blain Türkiye</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Battalgazi, AYTOP Gıdacılar Sitesi 2G17<br/>
                34934 Sultanbeyli / İstanbul<br/>
                Türkiye
              </p>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-semibold flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1890d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (0216) 592 08 00
                </p>
                <p className="text-lg text-gray-800 font-semibold flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1890d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@blain.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

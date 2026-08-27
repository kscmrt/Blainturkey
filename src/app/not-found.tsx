import Link from 'next/link';

export const metadata = {
  title: '404 - Sayfa Bulunamadı',
  description: 'Aradığınız sayfa bulunamadı. Ana sayfaya dönün veya ürünlerimizi keşfedin.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            404
          </h1>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Sayfa Bulunamadı
        </h2>

        <p className="text-lg text-slate-300 mb-2">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>

        <p className="text-slate-400 mb-8">
          Ana sayfaya dönün veya ürünlerimizi keşfetmeye devam edin.
        </p>

      {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2"
          >
            🏠 Ana Sayfa
          </Link>
          <Link
            href="/urunler"
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2"
          >
            🛠️ Ürünler
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2"
          >
            📞 İletişim
          </Link>
        </div>

        {/* Support CTA */}
        <div className="pt-8 border-t border-slate-700">
          <p className="text-slate-400 text-sm mb-4">
            Aradığınızı bulamadınız mı?
          </p>
          <a
            href="https://wa.me/905360256494?text=Website'de%20bir%20sayfa%20bulamadım"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-semibold transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Bize Ulaşın
          </a>
        </div>
      </div>
    </main>
  );
}

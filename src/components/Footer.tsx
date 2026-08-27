import Link from 'next/link';

/* Server Component: yıl sunucuda hesaplanır, istemciye JS gitmez. */
export default function Footer() {
  return (
    <footer className="bg-[#fcfcfc] border-t border-[#eaeaea] p-8 mt-auto font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-row flex-wrap justify-between items-center gap-4 text-[0.85rem] text-[#86868b]">
        
        <div>
          &copy; {new Date().getFullYear()} BLAIN HYDRAULICS GmbH. Tüm hakları saklıdır.
        </div>

        <div className="flex gap-6 flex-wrap">
          <Link href="/contact" className="text-[#555] no-underline transition-colors duration-200 hover:text-black">İletişim</Link>
          <Link href="/updates" className="text-[#555] no-underline transition-colors duration-200 hover:text-black">Güncellemeler</Link>
        </div>

      </div>
    </footer>
  );
}

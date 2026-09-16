import os
import re

path = 'src/app/downloads/page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# I will replace the inline styled blocks with beautiful Tailwind blocks that support strict dark mode and are 100% mobile-responsive.
# Wait, rather than precise regex on 100 blocks, I will just rewrite the `return (...)` block entirely.
start = text.find('return (')
end = text.rfind(';\\n}') + 1

tailwind_return = """return (
    <div className="min-h-screen bg-steel-50 text-steel-900 dark:bg-steel-950 dark:text-steel-100 flex flex-col font-sans mb-auto">
      
      {/* HERO SECTION */}
      <section className="px-4 sm:px-8 pt-12 pb-8 w-full max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-steel-900 dark:text-white mb-4 sm:mb-6">
          Dokümanlar & Teknik İndirmeler
        </h1>
        <p className="text-base sm:text-lg text-steel-600 dark:text-steel-400 max-w-[700px] leading-relaxed">
          Blain hidrolik kontrol valfleri, güç üniteleri ve modernizasyon sistemleri için montaj kılavuzları, kataloglar, 3D CAD (.igs/.sat) çizimleri ve sertifikalar.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 pb-32">
        
        {/* SEARCH & FILTER CONTROLS */}
        <div className="flex flex-col gap-6 mb-12">
          
          {/* SEARCH INPUT BAR */}
          <div className="relative w-full max-w-[700px] mx-auto group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-400 group-focus-within:text-brand-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Valf veya dosya adı ara..."
              className="w-full rounded-2xl border border-steel-200 bg-white dark:border-steel-800 dark:bg-steel-900 px-12 py-3.5 text-steel-900 dark:text-steel-100 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 placeholder:text-steel-400 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-steel-400 hover:text-steel-600 dark:hover:text-steel-200 p-1"
                aria-label="Aramayı temizle"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            )}
          </div>

          {/* LANGUAGE TABS - CHIPS */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-steel-200 dark:border-steel-800 pb-8">
            {languages.map((lang, idx) => {
              const isActive = activeLang === lang;
              return (
                <button 
                  key={idx} 
                  onClick={() => setActiveLang(lang)}
                  className={`px-4 py-1.5 text-[0.8rem] sm:text-sm font-semibold rounded-full transition-all duration-200 border-none outline-none ${
                    isActive 
                      ? 'bg-brand-600 text-white shadow-md' 
                      : 'bg-steel-100 dark:bg-steel-800/50 text-steel-600 dark:text-steel-300 hover:bg-steel-200 dark:hover:bg-steel-800'
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>

          {/* ACTIVE STATUS BADGE */}
          <div className="flex justify-between items-center text-sm text-steel-500 dark:text-steel-400 px-2 mt-2">
            <span>Toplam <strong className="text-steel-900 dark:text-white font-bold">{totalFilesCount}</strong> doküman listeleniyor</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-brand-600 dark:text-brand-400 font-medium hover:underline"
              >
                Arama filtresini temizle
              </button>
            )}
          </div>
        </div>

        {/* CATEGORY ACCORDIONS */}
        <div className="flex flex-col">
          {filteredCategories.map((category) => {
            const isOpen = searchQuery.trim() !== "" || openCategories.includes(category.originalIndex);
            
            if (searchQuery && category.files.length === 0) return null;

            return (
              <div key={category.originalIndex} className="border-b border-steel-200 dark:border-steel-800 last:border-0">
                <button 
                  onClick={() => toggleCategory(category.originalIndex)}
                  className="w-full py-6 flex items-center justify-between text-left outline-none group bg-transparent border-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-semibold text-steel-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {category.title.replace(/^\d+\.\s*/, '')} 
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-steel-100 dark:bg-steel-800 text-steel-600 dark:text-steel-300 rounded-full">
                      {category.files.length}
                    </span>
                  </div>
                  <span className={`text-2xl font-light text-steel-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    +
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
                >
                  {category.files.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.files.map((file, fIdx) => (
                        <a 
                          key={fIdx} 
                          href={file.url} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white dark:bg-steel-900 border border-steel-200/60 dark:border-steel-800/60 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg transition-all active:scale-[0.98] group"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <svg className="w-5 h-5 flex-shrink-0 text-brand-600 dark:text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <span className="text-sm font-medium text-steel-800 dark:text-steel-200 truncate group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                              {file.name}
                            </span>
                          </div>
                          <svg className="w-4 h-4 flex-shrink-0 text-steel-400 group-hover:text-brand-500 transition-colors ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                          </svg>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="pb-8">
                      <p className="text-steel-400 dark:text-steel-500 text-sm italic">
                        Bu kategoride seçilen dilde dosya bulunmuyor.
                      </p>
                    </div>
                  )}
                  
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </div>
  );
}
"""

new_text = text[:start] + tailwind_return

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Saved.")

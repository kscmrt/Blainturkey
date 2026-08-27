'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import EcosystemMap from '../../components/ui/EcosystemMap';
import CategoryNav from '../../components/ui/CategoryNav';
import { productCategories } from '../../data/productsData';
import PowerUnitsCatalog from '../../components/products/PowerUnitsCatalog';

export default function UrunlerPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const displayedCategories = activeCategory 
    ? productCategories.filter(c => c.id === activeCategory)
    : productCategories;

  return (
    // Forced recompile to clear Next.js data cache
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sub-Navigation (Apple-Style Icons) */}
      <CategoryNav activeId={activeCategory} onSelect={setActiveCategory} />
      
      {/* Ecosystem Section - Hide if 'guc-uniteleri' since it has no map spots */}
      {activeCategory !== 'guc-uniteleri' && (
        <section className="text-center pt-8 pb-12 border-b border-[#eaeaea]">
          <EcosystemMap activeCategory={activeCategory} />
        </section>
      )}

      {/* Render Product Grids for Active Category (or all) */}
      <div className="flex flex-col gap-8 py-4">
        {displayedCategories.map((category) => (
          <section key={category.id} className="px-4 md:px-8 flex-1 max-w-[1200px] mx-auto w-full">
            {/* Category Title */}
            <div className="text-center mb-8 mt-4">
              <h1 className="text-[2rem] md:text-[2.5rem] font-semibold text-[#111] tracking-[-0.02em] mb-4">
                {category.title}
              </h1>
              <p className="text-[1rem] text-[#666] leading-relaxed max-w-[700px] mx-auto">
                {category.description}
              </p>
            </div>

            {/* Groups Grid */}
            {category.groups ? (
              <div className="flex flex-col gap-16">
                {category.groups.map((group, gIdx) => (
                  <div key={gIdx} className="w-full">
                    
                    {/* Group Heading */}
                    <div className="text-center mb-8">
                      <h2 className="text-[1.5rem] md:text-[1.8rem] font-normal text-[#333] mb-2">{group.title}</h2>
                      <p className="text-[0.75rem] md:text-[0.95rem] text-[#777] leading-relaxed max-w-[600px] mx-auto">
                        {group.subtitle}
                      </p>
                    </div>

                    {/* Group Products - Compact Flex Layout */}
                    <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 w-full">
                      {group.products.map((prod, pIdx) => (
                        <Link key={pIdx} href={`/urunler/${category.id}/${prod.id || prod.name.toLowerCase().replace(/\s+/g, '-')}`} className="md:flex-1 md:basis-[280px] md:max-w-[340px] p-4 md:p-6 bg-[#fbfbfd] rounded-2xl md:rounded-[20px] no-underline flex flex-col items-center transition-all duration-200 hover:bg-[#f5f5f7] hover:-translate-y-1">
                          
                          <div className="flex items-center justify-center w-full h-[100px] md:h-[140px] mb-4 md:mb-6">
                            <img src={prod.image || category.image} alt={prod.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                          </div>
                          
                          <div className="flex flex-col items-center text-center">
                            <h3 className="text-[0.95rem] md:text-[1.1rem] font-semibold text-[#111] mb-2 flex items-center gap-1">
                              {prod.name}
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="#003399" stroke="none"><circle cx="12" cy="12" r="10"></circle><polyline points="10 8 14 12 10 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline></svg>
                            </h3>
                            <p className="text-[0.75rem] md:text-[0.85rem] text-[#666] leading-relaxed">
                              {prod.desc}
                            </p>
                          </div>
                          
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : category.id === 'guc-uniteleri' ? (
              <PowerUnitsCatalog />
            ) : (
              <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 w-full">
                {category.products?.map((prod, pIdx) => (
                  <Link key={pIdx} href={`/urunler/${category.id}/${prod.id || prod.name.toLowerCase().replace(/\s+/g, '-')}`} className="md:flex-1 md:basis-[280px] md:max-w-[340px] p-4 md:p-6 bg-[#fbfbfd] rounded-2xl md:rounded-[20px] no-underline flex flex-col items-center transition-all duration-200 hover:bg-[#f5f5f7] hover:-translate-y-1">
                    
                    <div className="flex items-center justify-center w-full h-[100px] md:h-[140px] mb-4 md:mb-6">
                      <img src={prod.image || category.image} alt={prod.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-[0.95rem] md:text-[1.1rem] font-semibold text-[#111] mb-2 flex items-center gap-1">
                        {prod.name}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#003399" stroke="none"><circle cx="12" cy="12" r="10"></circle><polyline points="10 8 14 12 10 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline></svg>
                      </h3>
                      <p className="text-[0.75rem] md:text-[0.85rem] text-[#666] leading-relaxed">
                        {prod.desc}
                      </p>
                    </div>
                    
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}

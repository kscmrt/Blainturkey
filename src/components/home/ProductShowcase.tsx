"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type CategoryFilter = "all" | "mechanical" | "electronic" | "safety" | "power";

interface ProductCard {
  id: string;
  name: string;
  series: string;
  category: "mechanical" | "electronic" | "safety" | "power";
  categoryBadge: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  detailLink: string;
}

const PRODUCTS: ProductCard[] = [
  {
    id: "ev100",
    name: "EV Serisi Kontrol Valfleri",
    series: "Mekanik Valfler",
    category: "mechanical",
    categoryBadge: "Mekanik Valf",
    description:
      "Blain'in amiral gemisi niteliğindeki mekanik kontrol valfi serisi. Dayanıklılığı, verimliliği ve geniş ayarlanabilirlik aralığıyla bilinir, çeşitli ticari uygulamalar için uygundur.",
    image: "/images/EV-Series-2-1024x708.png",
    specs: [
      { label: "Debi", value: "10 - 1530 l/min" },
      { label: "Ölçüler", value: "¾\" - 2½\"" },
      { label: "Ayar", value: "Çift Hızlı Mekanik" },
    ],
    detailLink: "/urunler/kontrol-valfleri/ev-serisi",
  },
  {
    id: "ev40",
    name: "EV40 Akıllı Valf",
    series: "Elektronik / VVVF",
    category: "electronic",
    categoryBadge: "VVVF Akıllı",
    description:
      "Akıllı telefon kontrollü ve VVVF entegrasyonlu gelişmiş valf. Enerji tüketimini (%65'e kadar) ve yağ ısınmasını (%50'ye kadar) önemli ölçüde azaltır.",
    image: "/images/EV40-1024x572.png",
    specs: [
      { label: "Tasarruf", value: "%65'e Kadar" },
      { label: "Yağ Isısı", value: "%50'ye Kadar Düşüş" },
      { label: "Entegrasyon", value: "Yaskawa VVVF" },
    ],
    detailLink: "/urunler/kontrol-valfleri/ev40",
  },
  {
    id: "kv-serisi",
    name: "KV Serisi (KV1P / KV2S)",
    series: "Mekanik Valfler",
    category: "mechanical",
    categoryBadge: "Ev Asansörü & MRL",
    description:
      "Düşük hızlı ve ev asansörleri için tasarlanmış kompakt seri. Sağlam, kullanımı kolay ve makine dairesiz (MRL) kuyu içi kurulumları basitleştiren tasarımıyla öne çıkar.",
    image: "/images/KV-Series-1024x723.png",
    specs: [
      { label: "Debi", value: "10 - 80 l/min" },
      { label: "Uygulama", value: "Ev & Villa Asansörü" },
      { label: "Yapı", value: "Kompakt Kuyu İçi" },
    ],
    detailLink: "/urunler/kontrol-valfleri/kv-serisi",
  },
  {
    id: "sev",
    name: "SEV Senkron Valf",
    series: "Elektronik / VVVF",
    category: "electronic",
    categoryBadge: "Elektronik Sensörlü",
    description:
      "Yükten ve sıcaklıktan bağımsız, kontrollü, sessiz ve kusursuz bir sürüş konforu için elektronik sensörlerle donatılmış senkron valf.",
    image: "/images/SEV-1024x819.png",
    specs: [
      { label: "Kontrol", value: "Elektronik Sensör" },
      { label: "Sürüş", value: "Yükten Bağımsız" },
      { label: "Sıcaklık", value: "Kararlı Hız" },
    ],
    detailLink: "/urunler/kontrol-valfleri/sev",
  },
  {
    id: "l-serisi",
    name: "L Serisi (UCM / A3)",
    series: "Güvenlik Valfleri",
    category: "safety",
    categoryBadge: "EN 81-20/50 A3",
    description:
      "İstenmeyen kabin hareketlerini (UCM) önlemek için geliştirilmiş, EN 81-20/50 standartlarına (A3) tam uyumlu güvenlik valfi serisi.",
    image: "/images/L-series-1024x723.png",
    specs: [
      { label: "Standart", value: "EN 81-20 / EN 81-50" },
      { label: "Güvenlik", value: "UCM / A3 Koruması" },
      { label: "Montaj", value: "Valfe Doğrudan Flanş" },
    ],
    detailLink: "/urunler/guvenlik-valfleri/l-serisi",
  },
  {
    id: "rupture-valve",
    name: "Boru Patlama Valfi",
    series: "Güvenlik Valfleri",
    category: "safety",
    categoryBadge: "Emniyet Valfi",
    description:
      "Boru veya hortum patlaması anında sistemdeki akışı derhal keserek asansör kabininin serbest düşmesini önleyen hayati güvenlik bileşeni.",
    image: "/images/Rupture-Valve-e1777546934832-672x1024.png",
    specs: [
      { label: "Görevi", value: "Hatta Ani Kilit" },
      { label: "Güvenlik", value: "Serbest Düşme Önleme" },
      { label: "Sertifika", value: "CE Belgeli" },
    ],
    detailLink: "/urunler/guvenlik-valfleri/boru-patlama-valfi",
  },
  {
    id: "power-units",
    name: "Hidrolik Güç Üniteleri",
    series: "Güç Üniteleri",
    category: "power",
    categoryBadge: "Kompakt Tank",
    description:
      "Sessiz, yüksek verimli ve kompakt tasarımlı hidrolik güç ünitelerimiz.",
    image: "/images/PU-Main-FFF.jpg",
    specs: [
      { label: "Modeller", value: "BTD / BTS Serisi" },
      { label: "Yapı", value: "Kompakt & Sessiz" },
      { label: "Donanım", value: "Valf & Motor Entegre" },
    ],
    detailLink: "/urunler/guc-uniteleri",
  },
  {
    id: "motors-pumps",
    name: "S.B. Motorlar & Seim Pompalar",
    series: "Pompalar & Motorlar",
    category: "power",
    categoryBadge: "Tahrik Grubu",
    description:
      "Yüksek performanslı hidrolik pompalar ve uzun ömürlü dalgıç motorlar. Düşük titreşim ve gürültüye sahip vidalı pompalar.",
    image: "/images/SB-Motori-1024x900.png",
    specs: [
      { label: "Motor", value: "S.B. Dalgıç Motorlar" },
      { label: "Pompa", value: "Seim Vidalı Pompa" },
      { label: "Özellik", value: "Düşük Titreşim & Ses" },
    ],
    detailLink: "/urunler/pompalar-motorlar",
  },
];

const FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "Tüm Ürünler" },
  { id: "mechanical", label: "Mekanik Valfler" },
  { id: "electronic", label: "Elektronik / VVVF" },
  { id: "safety", label: "Güvenlik Valfleri" },
  { id: "power", label: "Güç Ünitesi & Pompa" },
];

export default function ProductShowcase() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="urun-ekosistemi" aria-labelledby="showcase-title" className="bg-white py-24 px-5 sm:px-8 dark:bg-steel-900">
      <div className="mx-auto max-w-[1280px]">
        {/* Başlık ve Filtre Başlığı */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-brand-600 dark:text-accent-400">
              ÜRÜN EKOSİSTEMİ
            </span>
            <h2 id="showcase-title" className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-steel-900 dark:text-white">
              Blain Ürün Serileri
            </h2>
            <p className="mt-3 max-w-xl text-steel-600 text-sm sm:text-base dark:text-steel-400">
              Geleneksel mekanik modellerden yenilikçi elektronik ve VVVF modellere kadar tüm hidrolik asansör kontrol valfi serimizi inceleyin.
            </p>
          </div>

          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 dark:text-accent-400"
          >
            <span>Tüm Ürün Kataloğunu Görüntüle</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Kategori Filtre Butonları */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-steel-200/80 pb-4 dark:border-steel-800">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === f.id
                  ? "bg-steel-900 text-white shadow-sm dark:bg-brand-600"
                  : "bg-steel-100/70 text-steel-700 hover:bg-steel-200/70 dark:bg-steel-800 dark:text-steel-300 dark:hover:bg-steel-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Ürün Kartları Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border border-steel-200/80 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl dark:border-steel-800 dark:bg-steel-950"
            >
              <div>
                {/* Ürün Görsel Alanı */}
                <div className="relative flex h-48 w-full items-center justify-center rounded-xl bg-steel-50/70 p-4 transition-colors group-hover:bg-brand-50/30 dark:bg-steel-900/60 dark:group-hover:bg-brand-950/40">
                  <span className="absolute top-3 left-3 rounded-md bg-white/90 border border-steel-200 px-2 py-0.5 text-[0.68rem] font-bold text-steel-700 shadow-xs dark:bg-steel-800 dark:border-steel-700 dark:text-steel-200">
                    {item.categoryBadge}
                  </span>
                  <div className="relative h-full w-full max-w-[180px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Ürün Metinleri */}
                <div className="mt-5">
                  <span className="text-[0.72rem] font-bold uppercase tracking-wider text-brand-600 dark:text-accent-400">
                    {item.series}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-steel-900 group-hover:text-brand-600 transition-colors dark:text-white dark:group-hover:text-accent-400">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-steel-600 line-clamp-3 dark:text-steel-400">
                    {item.description}
                  </p>
                </div>

                {/* Mini Metrikler */}
                <div className="mt-4 grid grid-cols-3 gap-1 border-t border-steel-100 pt-3 text-center dark:border-steel-800/80">
                  {item.specs.map((sp, idx) => (
                    <div key={idx} className="px-1">
                      <span className="block text-[0.65rem] uppercase text-steel-400 font-medium">
                        {sp.label}
                      </span>
                      <span className="mt-0.5 block text-[0.72rem] font-bold text-steel-800 truncate dark:text-steel-200">
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detay Butonu */}
              <div className="mt-5 pt-3 border-t border-steel-100 dark:border-steel-800">
                <Link
                  href={item.detailLink}
                  className="flex items-center justify-between text-xs font-bold text-brand-600 transition-colors group-hover:text-brand-700 dark:text-accent-400"
                >
                  <span>Teknik Detayları İncele</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

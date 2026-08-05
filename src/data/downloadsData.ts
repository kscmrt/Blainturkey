export interface DownloadFile {
  name: string;
  url: string;
  type?: 'pdf' | 'cad' | 'ppt';
  languages?: string[];
}

export interface DownloadCategory {
  titleEn: string;
  titleTr: string;
  files: DownloadFile[];
}

export const downloadsData: DownloadCategory[] = [
  {
    "titleEn": "1. Product Datasheets",
    "titleTr": "1. Ürün Bilgi Föyleri",
    "files": [
      {
        "name": "EV-Series",
        "url": "https://blain.de/downloadall/datenblatt/gb/ev_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH"
        ]
      },
      {
        "name": "KV-Series",
        "url": "https://blain.de/downloadall/datenblatt/gb/kv_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/gb/ev40_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV4",
        "url": "https://blain.de/downloadall/datenblatt/ev4/ev4_Handbook_en_1310-v5.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10",
        "url": "https://blain.de/downloadall/datenblatt/gb/l10_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 A",
        "url": "https://blain.de/downloadall/datenblatt/gb/l10-a_gb-de.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 D",
        "url": "https://blain.de/downloadall/datenblatt/gb/l10-d_gb-de.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "iL10-S",
        "url": "https://blain.de/downloadall/datenblatt/gb/iL10-S_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L20",
        "url": "https://blain.de/downloadall/datenblatt/gb/l20_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "GV",
        "url": "https://blain.de/downloadall/datenblatt/gb/gv_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10",
        "url": "https://blain.de/downloadall/datenblatt/gb/r10_gb-de.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "ITALIANO",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "RSL",
        "url": "https://blain.de/downloadall/datenblatt/gb/rsl_gb-de.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "HX/MX",
        "url": "https://blain.de/downloadall/datenblatt/gb/hxmx_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "BV",
        "url": "https://blain.de/downloadall/datenblatt/gb/bv_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "ITALIANO",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "TH",
        "url": "https://blain.de/downloadall/datenblatt/gb/th_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "ITALIANO",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "HP",
        "url": "https://blain.de/downloadall/datenblatt/gb/hp_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "ITALIANO",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MRL-H",
        "url": "https://blain.de/downloadall/datenblatt/gb/mrl-h_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MD",
        "url": "https://blain.de/downloadall/datenblatt/gb/md_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KSB",
        "url": "https://blain.de/downloadall/datenblatt/gb/ksb_gb-de.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "SEV 05",
        "url": "https://blain.de/downloadall/datenblatt/gb/sev-hb_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "SEV 07",
        "url": "https://blain.de/downloadall/datenblatt/gb/SEV07-SEV05-EN.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "SG A3",
        "url": "https://blain.de/downloadall/datenblatt/gb/sg-a3_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Product Catalogue",
        "url": "https://blain.de/downloadall/datenblatt/gb/blain-product-catalogue_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Additional Options",
        "url": "https://blain.de/downloadall/datenblatt/gb/optionen_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Modernisation",
        "url": "https://blain.de/downloadall/datenblatt/gb/blain-modernization_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Technical Catalogue",
        "url": "https://blain.de/downloadall/datenblatt/gb/blain-technical-catalogue_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV-Serie",
        "url": "https://blain.de/downloadall/datenblatt/de/ev_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "KV-Serie",
        "url": "https://blain.de/downloadall/datenblatt/de/kv_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/de/ev40_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "EV4",
        "url": "https://blain.de/downloadall/datenblatt/ev4/ev4_Handbook_de_1310-v5.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "L10",
        "url": "https://blain.de/downloadall/datenblatt/de/l10_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "L10 A",
        "url": "https://blain.de/downloadall/datenblatt/de/l10-a_gb-de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "L10 D",
        "url": "https://blain.de/downloadall/datenblatt/de/l10-d_gb-de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "iL10-S",
        "url": "https://blain.de/downloadall/datenblatt/de/iL10-S_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "L20",
        "url": "https://blain.de/downloadall/datenblatt/de/l20_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "GV",
        "url": "https://blain.de/downloadall/datenblatt/de/gv_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "R10",
        "url": "https://blain.de/downloadall/datenblatt/de/r10_gb-de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "RSL",
        "url": "https://blain.de/downloadall/datenblatt/de/rsl_gb-de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "HX/MX",
        "url": "https://blain.de/downloadall/datenblatt/de/hxmx_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "BV",
        "url": "https://blain.de/downloadall/datenblatt/de/bv_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "TH",
        "url": "https://blain.de/downloadall/datenblatt/de/th_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "HP",
        "url": "https://blain.de/downloadall/datenblatt/de/hp_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "MRL-H",
        "url": "https://blain.de/downloadall/datenblatt/de/mrl-h_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "MD",
        "url": "https://blain.de/downloadall/datenblatt/de/md_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "KSB",
        "url": "https://blain.de/downloadall/datenblatt/de/ksb_gb-de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "SEV 05",
        "url": "https://blain.de/downloadall/datenblatt/de/sev-hb-38-de-09.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "SEV 07",
        "url": "https://blain.de/downloadall/datenblatt/de/SEV07-SEV05-DE.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "SG A3",
        "url": "https://blain.de/downloadall/datenblatt/de/sg-a3_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "Product Catalogue",
        "url": "https://blain.de/downloadall/datenblatt/de/blain-produkt-katalog_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "Zusätzliche Optionen",
        "url": "https://blain.de/downloadall/datenblatt/de/optionen_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "Modernisierung",
        "url": "https://blain.de/downloadall/datenblatt/de/blain-modernisation_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "Technischer Katalog",
        "url": "https://blain.de/downloadall/datenblatt/de/blain-technischer-katalog_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "EV Serie",
        "url": "https://blain.de/downloadall/datenblatt/es/ev_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "KV Serie",
        "url": "https://blain.de/downloadall/datenblatt/es/kv_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/es/ev40_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "L10",
        "url": "https://blain.de/downloadall/datenblatt/es/l10_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "L20",
        "url": "https://blain.de/downloadall/datenblatt/es/l20_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "GV",
        "url": "https://blain.de/downloadall/datenblatt/es/gv_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "R10",
        "url": "https://blain.de/downloadall/datenblatt/es/r10_gb-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "RSL",
        "url": "https://blain.de/downloadall/datenblatt/es/rsl_gb-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "HX/MX",
        "url": "https://blain.de/downloadall/datenblatt/es/hxmx_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "BV",
        "url": "https://blain.de/downloadall/datenblatt/es/bv_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "TH",
        "url": "https://blain.de/downloadall/datenblatt/es/th_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "HP",
        "url": "https://blain.de/downloadall/datenblatt/es/hp_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "MRL-H",
        "url": "https://blain.de/downloadall/datenblatt/es/mrl-h_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "MD",
        "url": "https://blain.de/downloadall/datenblatt/es/md_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "Catálogo de productos",
        "url": "https://blain.de/downloadall/datenblatt/es/blain-productos-catalogo_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "Opciones Adicionales",
        "url": "https://blain.de/downloadall/datenblatt/es/optionen_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "Catálogo Técnico",
        "url": "https://blain.de/downloadall/datenblatt/es/blain-tecnico-catalogo_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "Série EV",
        "url": "https://blain.de/downloadall/datenblatt/br/ev_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "Série KV",
        "url": "https://blain.de/downloadall/datenblatt/br/kv_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "Série EV",
        "url": "https://blain.de/downloadall/datenblatt/fr/ev_fr.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "Série KV",
        "url": "https://blain.de/downloadall/datenblatt/fr/kv_fr.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "L10",
        "url": "https://blain.de/downloadall/datenblatt/fr/l10_fr.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "R10",
        "url": "https://blain.de/downloadall/datenblatt/fr/r10_gb-fr.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "HX/MX",
        "url": "https://blain.de/downloadall/datenblatt/fr/hxmx_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "BV",
        "url": "https://blain.de/downloadall/datenblatt/fr/bv_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "TH",
        "url": "https://blain.de/downloadall/datenblatt/fr/th_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "HP",
        "url": "https://blain.de/downloadall/datenblatt/fr/hp_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "Options Supplémentaires",
        "url": "https://blain.de/downloadall/datenblatt/fr/optionen_gb-de-fr-es.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "EV-Serie",
        "url": "https://blain.de/downloadall/datenblatt/it/ev_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "KV-Serie",
        "url": "https://blain.de/downloadall/datenblatt/it/kv_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "EV-Serisi",
        "url": "https://blain.de/downloadall/datenblatt/tr/ev_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "KV-Serisi",
        "url": "https://blain.de/downloadall/datenblatt/tr/kv_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/tr/ev40_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "L10",
        "url": "https://blain.de/downloadall/datenblatt/tr/l10_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "GV",
        "url": "https://blain.de/downloadall/datenblatt/tr/gv_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "R10",
        "url": "https://blain.de/downloadall/datenblatt/tr/r10_gb-tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "HX/MX",
        "url": "https://blain.de/downloadall/datenblatt/tr/hxmx_gb-de-tr-es.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "BV",
        "url": "https://blain.de/downloadall/datenblatt/tr/bv_gb-de-tr-es.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "TH",
        "url": "https://blain.de/downloadall/datenblatt/tr/th_gb-de-tr-es.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "HP",
        "url": "https://blain.de/downloadall/datenblatt/tr/hp_gb-de-tr-es.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "MRL-H",
        "url": "https://blain.de/downloadall/datenblatt/tr/mrl-h_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "MD",
        "url": "https://blain.de/downloadall/datenblatt/tr/md_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "Ürün Kataloğu",
        "url": "https://blain.de/downloadall/datenblatt/tr/blain-urun-katalogu_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "Ek Seçenekler",
        "url": "https://blain.de/downloadall/datenblatt/tr/optionen_gb-de-tr-es.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "Modernizasyon",
        "url": "https://blain.de/downloadall/datenblatt/tr/blain-modernizasyon_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "Teknik Katalog",
        "url": "https://blain.de/downloadall/datenblatt/tr/blain-teknik-katalog_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "EV-Seria",
        "url": "https://blain.de/downloadall/datenblatt/pl/ev_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "KV-Seria",
        "url": "https://blain.de/downloadall/datenblatt/pl/kv_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "L20",
        "url": "https://blain.de/downloadall/datenblatt/pl/L20_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "R10",
        "url": "https://blain.de/downloadall/datenblatt/pl/r10_gb-pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "EV-серия",
        "url": "https://blain.de/downloadall/datenblatt/ru/ev_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "KV-серия",
        "url": "https://blain.de/downloadall/datenblatt/ru/kv_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "EV系列",
        "url": "https://blain.de/downloadall/datenblatt/cn/ev_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "KV系列",
        "url": "https://blain.de/downloadall/datenblatt/cn/kv_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "سلسلة EV",
        "url": "https://blain.de/downloadall/datenblatt/ar/ev_ar.pdf",
        "type": "pdf",
        "languages": [
          "العربية"
        ]
      },
      {
        "name": "سلسلة KV",
        "url": "https://blain.de/downloadall/datenblatt/ar/kv_ar.pdf",
        "type": "pdf",
        "languages": [
          "العربية"
        ]
      },
      {
        "name": "سری EV",
        "url": "https://blain.de/downloadall/datenblatt/fa/ev_fa.pdf",
        "type": "pdf",
        "languages": [
          "فارسی"
        ]
      },
      {
        "name": "سری KV",
        "url": "https://blain.de/downloadall/datenblatt/fa/kv_fa.pdf",
        "type": "pdf",
        "languages": [
          "فارسی"
        ]
      }
    ]
  },
  {
    "titleEn": "2. Quick Adjustments",
    "titleTr": "2. Hızlı Ayarlar",
    "files": [
      {
        "name": "EV-Series",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/ev_adjust_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV 100 Quick",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/ev_quick-gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV-Series",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/kv_adjust_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV-Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/de/ev_adjust_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "EV 100",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/de/ev_quick-d.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "KV-Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/de/kv_adjust_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "EV Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/es/ev_adjust_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "EV 100",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/es/ev_quick-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "KV Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/es/kv_adjust_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "Série EV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/br/ev_adjust_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "Série KV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/br/kv_adjust_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "Série EV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/fr/ev_adjust_fr.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "Série KV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/fr/kv_adjust_fr.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "EV-Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/it/ev_adjust_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "KV-Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/it/kv_adjust_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "EV-Serisi",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/tr/ev_adjust_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "EV 100 Hızlı",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/tr/ev_quick-tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "KV-Serisi",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/tr/kv_adjust_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "EV-Seria",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/pl/ev_adjust_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "KV-Seria",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/pl/kv_adjust_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "EV-серия",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/ru/ev_adjust_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "KV-серия",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/ru/kv_adjust_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "EV系列",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/cn/ev_adjust_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "KV系列",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/cn/kv_adjust_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      }
    ]
  },
  {
    "titleEn": "3. EV40 Documentation",
    "titleTr": "3. EV40 Dokümantasyonu",
    "files": [
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/gb/ev40_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/gb/EV40_QSG-ENG.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/gb/Handbook_ENG_EV40-F.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/gb/EV40Wiring.pptx",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/de/ev40_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/de/EV40_QSG-DEU.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/de/Handbuch_DEU_EV40-F.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "EV40",
        "url": "https://blain.de/downloadall/datenblatt/es/ev40_es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      }
    ]
  },
  {
    "titleEn": "4. Maintenance",
    "titleTr": "4. Bakım",
    "files": [
      {
        "name": "EV+KV Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/blain-service-manual_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV-Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/de/ev-dichtsatz-de.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH"
        ]
      },
      {
        "name": "KV-Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/de/kv-dichtsatz-de.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH"
        ]
      },
      {
        "name": "EV Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/es/ev-dichtsatz-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "KV Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/es/kv-dichtsatz-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "Série EV+KV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/ev-dichtsatz-gb.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Série EV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/kv-dichtsatz-gb.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Série EV+KV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/fr/ev-dichtsatz-fr.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "Série EV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/fr/kv-dichtsatz-fr.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "EV-Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/it/ev-dichtsatz-it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "KV-Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/it/kv-dichtsatz-it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "EV-Serisi",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/tr/ev-dichtsatz-tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "KV-Serisi",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/tr/kv-dichtsatz-tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      }
    ]
  },
  {
    "titleEn": "5. Troubleshooting",
    "titleTr": "5. Ariza Giderme",
    "files": [
      {
        "name": "EV-Series",
        "url": "https://blain.de/downloadall/troubleshoot/ev-trouble_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "POLSKI",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV-Series",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/kv-trouble_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "PORTUGUÊS",
          "FRANÇAIS",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/sev-trouble_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV-Serie",
        "url": "https://blain.de/downloadall/troubleshoot/ev-trouble_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "KV-Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/de/kv-trouble_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/de/sev-trouble_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "EV Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/es/ev_trouble-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "KV Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/es/kv_trouble-es.pdf",
        "type": "pdf",
        "languages": [
          "ESPAÑOL"
        ]
      },
      {
        "name": "KV-Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/it/ev_trouble-it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "EV-Serisi",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/tr/ev_trouble-tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "KV-Serisi",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/tr/kv_trouble-tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "KV-Seria",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/pl/kv_trouble-pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "EV-серия",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/ru/ev_trouble-ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      }
    ]
  },
  {
    "titleEn": "6. Spare Parts",
    "titleTr": "6. Yedek Parçalar",
    "files": [
      {
        "name": "EV+KV Series",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/ev-kv-spare-parts_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV+KV Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/de/ev-kv-spare-parts_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH",
          "ESPAÑOL"
        ]
      },
      {
        "name": "Série EV+KV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/br/ev-kv-spare-parts_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "Série EV+KV",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/fr/ev-kv-spare-parts_fr.pdf",
        "type": "pdf",
        "languages": [
          "FRANÇAIS"
        ]
      },
      {
        "name": "EV+KV Serie",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/it/ev-kv-spare-parts_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "EV+KV Serisi",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/tr/ev-kv-spare-parts_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "EV+KV Seria",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/pl/ev-kv-spare-parts_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "EV+KV серия",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/ru/ev-kv-spare-parts_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "EV+KV系列",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/cn/ev-kv-spare-parts_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      }
    ]
  },
  {
    "titleEn": "7. Curves & Tables",
    "titleTr": "7. Eğriler ve Tablolar",
    "files": [
      {
        "name": "Flow-Pressure",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/Flow-Press.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Durchflussdruck",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/de/Durchflussdruck-web.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      }
    ]
  },
  {
    "titleEn": "8. Sealing Kits",
    "titleTr": "8. Conta Kitleri",
    "files": [
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/dichtsatz/OLEV0-75.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV 1½\"",
        "url": "https://blain.de/downloadall/dichtsatz/OLEV1-5.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV 2½\"",
        "url": "https://blain.de/downloadall/dichtsatz/OLEV2-5.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV ½\"",
        "url": "https://blain.de/downloadall/dichtsatz/102211_OL_KV-0_5.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "BV - Ball Valve 1½\"",
        "url": "https://blain.de/downloadall/dichtsatz/102204_BVD-1_5.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "BV - Ball Valve 2½\"",
        "url": "https://blain.de/downloadall/dichtsatz/BVD-2-5.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 ½\"",
        "url": "https://blain.de/downloadall/dichtsatz/500058_OL_L10-0_5.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 ¾\"",
        "url": "https://blain.de/downloadall/dichtsatz/500059_OL_L10-0_75.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 1½\"",
        "url": "https://blain.de/downloadall/dichtsatz/500060_OL_L10-1_5.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 2\"",
        "url": "https://blain.de/downloadall/dichtsatz/500061_OL_L10-2.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 2½\"",
        "url": "https://blain.de/downloadall/dichtsatz/500062_OL_L10-2_5.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L20",
        "url": "https://blain.de/downloadall/dichtsatz/OL20.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "HP - Hand Pump",
        "url": "https://blain.de/downloadall/dichtsatz/500057_OHP.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Flusso-Pressione",
        "url": "https://blain.de/downloadall/service-dokumente/verschiedene/gb/Flow-Press.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      }
    ]
  },
  {
    "titleEn": "9. Certificates",
    "titleTr": "9. Sertifikalar",
    "files": [
      {
        "name": "ISO 9001",
        "url": "https://blain.de/downloadall/zertifikate/ISO-9001-2015-en.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "iL10-S",
        "url": "https://blain.de/downloadall/zertifikate/UCM-Ventile_nach_Modul_IX-C2-GB.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10 - RSL",
        "url": "https://blain.de/downloadall/zertifikate/R10-RSL_nach_Modul_IX-C2-GB.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV",
        "url": "https://blain.de/downloadall/zertifikate/EV-KV-SEV5_7-EV4_40.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10",
        "url": "https://blain.de/downloadall/zertifikate/R10.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Solenoid + Coil",
        "url": "https://blain.de/downloadall/zertifikate/Magnetventile.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Power Units",
        "url": "https://blain.de/downloadall/Konform/Konform-PU-2025.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV-KV",
        "url": "https://blain.de/downloadall/Konform/Konform%20EV-KV%202020.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "BV",
        "url": "https://blain.de/downloadall/Konform/Konform BV 2016.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "H11",
        "url": "https://blain.de/downloadall/Konform/Konform H11 2016.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "HX/MX",
        "url": "https://blain.de/downloadall/Konform/Konform HX-MX 2016.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "iL10",
        "url": "https://blain.de/downloadall/Konform/Konform_iL10-S_2024.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10",
        "url": "https://blain.de/downloadall/Konform/Konform_L10.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L20",
        "url": "https://blain.de/downloadall/Konform/Konform_L20.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MD",
        "url": "https://blain.de/downloadall/Konform/Konform MD 2016.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MRL-H",
        "url": "https://blain.de/downloadall/Konform/Konform MRL-H 2020.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10",
        "url": "https://blain.de/downloadall/Konform/Konform R10 2021.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "RSL",
        "url": "https://blain.de/downloadall/Konform/Konform RSL 2021.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "TH",
        "url": "https://blain.de/downloadall/Konform/Konform TH 2016.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 ½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L10_0.5inch_GB.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 ¾\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L10_0.75inch_GB.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 1½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L10_1.5inch_GB.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 2\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L10_2inch_GB.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 2½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L10_2.5inch_GB.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "iL10-S",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/iL10-S_GB.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L20",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L20_ZertifikatUndAnhang_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10 ½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/R10_0.50zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10 ¾\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/R10_0.75zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10 1\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/R10_1.0zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10 1½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/R10_1.5zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10 2\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/R10_2.0zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10 2½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/R10_2.5zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文"
        ]
      },
      {
        "name": "R10 3\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/R10_3.0zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "RSL ¾\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/RSL_0.75zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "RSL 1\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/RSL_1zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "RSL 1½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/RSL_1.5zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "RSL 2\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/en/RSL_2zoll.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "SGA3",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/Baumusterprüfbescheinigung_TUEV-ZERT-ENA3-EN81_20_50.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10S",
        "url": "https://blain.de/downloadall/zertifikate/R10S-Attestation.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "ISO 9001",
        "url": "https://blain.de/downloadall/zertifikate/ISO-9001-2015-de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "iL10",
        "url": "https://blain.de/downloadall/zertifikate/UCM-Ventile_nach_Modul_IX-C2-DE.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "R10 - RSL",
        "url": "https://blain.de/downloadall/zertifikate/R10-RSL_nach_Modul_IX-C2-DE.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "L10 ½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L10_0.5zoll_D.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "L10 ¾\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L10_0.75zoll_D.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "L10 1½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L10_1.5zoll_D.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "L10 2\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L10_2zoll_D.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "L10 2½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/L10_2.5zoll_D.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "iL10-S",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/iL10-S_D.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "R10 ½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/R10_0.50zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "R10 ¾\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/R10_0.75zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "R10 1\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/R10_1.0zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "R10 1½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/R10_1.5zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "R10 2\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/R10_2.0zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "R10 2½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/R10_2.5zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "R10 3\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/R10_3.0zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "RSL ¾\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/RSL_0.75zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "RSL 1\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung/RSL_1zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "RSL 1½\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung//RSL_1.5zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      },
      {
        "name": "RSL 2\"",
        "url": "https://blain.de/downloadall/eg-pruefbescheinigung//RSL_2zoll.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH"
        ]
      }
    ]
  },
  {
    "titleEn": "10. Posters",
    "titleTr": "10. Afişler",
    "files": [
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-0.75-a1_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "FRANÇAIS"
        ]
      },
      {
        "name": "EV 1½\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-1.5-2.5-a1_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "FRANÇAIS",
          "ITALIANO"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a1_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "FRANÇAIS"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a4_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "FRANÇAIS"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a1_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "FRANÇAIS"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a4_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "FRANÇAIS"
        ]
      },
      {
        "name": "Products",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a1_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "FRANÇAIS"
        ]
      },
      {
        "name": "Products",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a4_gb.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "FRANÇAIS"
        ]
      },
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-0.75-a1_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH",
          "ESPAÑOL"
        ]
      },
      {
        "name": "EV 1½\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-1.5-2.5-a1_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH",
          "ESPAÑOL"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a1_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH",
          "ESPAÑOL"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a4_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH",
          "ESPAÑOL"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a1_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH",
          "ESPAÑOL"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a4_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH",
          "ESPAÑOL"
        ]
      },
      {
        "name": "Produkte",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a1_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH",
          "ESPAÑOL"
        ]
      },
      {
        "name": "Produkte",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a4_de.pdf",
        "type": "pdf",
        "languages": [
          "DEUTSCH",
          "ESPAÑOL"
        ]
      },
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-0.75-a1_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "EV 1½\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-1.5-2.5-a1_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a1_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a4_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a1_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a4_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "Produtos",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a1_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "Produtos",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a4_br.pdf",
        "type": "pdf",
        "languages": [
          "PORTUGUÊS"
        ]
      },
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-0.75-a1_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a1_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a4_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a1_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a4_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "Prodotti",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a1_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "Prodotti",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a4_it.pdf",
        "type": "pdf",
        "languages": [
          "ITALIANO"
        ]
      },
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-0.75-a1_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "EV 1½\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-1.5-2.5-a1_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a1_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a4_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a1_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a4_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "Ürünler",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a1_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "Ürünler",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a4_tr.pdf",
        "type": "pdf",
        "languages": [
          "TÜRKÇE"
        ]
      },
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-0.75-a1_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "EV 1½\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-1.5-2.5-a1_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a1_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a4_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a1_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a4_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "Products",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a1_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "Products",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a4_pl.pdf",
        "type": "pdf",
        "languages": [
          "POLSKI"
        ]
      },
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-0.75-a1_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "EV 1½\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-1.5-2.5-a1_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a1_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a4_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a1_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a4_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "Продукты",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a1_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "Продукты",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a4_ru.pdf",
        "type": "pdf",
        "languages": [
          "РУССКИЙ"
        ]
      },
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-0.75-a1_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "EV 1½\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-1.5-2.5-a1_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a1_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a4_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a1_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a4_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "产品",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a1_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "产品",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a4_cn.pdf",
        "type": "pdf",
        "languages": [
          "中文"
        ]
      },
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-0.75-a1_ar.pdf",
        "type": "pdf",
        "languages": [
          "العربية"
        ]
      },
      {
        "name": "EV 1½\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-1.5-2.5-a1_ar.pdf",
        "type": "pdf",
        "languages": [
          "العربية"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a1_ar.pdf",
        "type": "pdf",
        "languages": [
          "العربية"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a4_ar.pdf",
        "type": "pdf",
        "languages": [
          "العربية"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a1_ar.pdf",
        "type": "pdf",
        "languages": [
          "العربية"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a4_ar.pdf",
        "type": "pdf",
        "languages": [
          "العربية"
        ]
      },
      {
        "name": "المنتجات",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a1_ar.pdf",
        "type": "pdf",
        "languages": [
          "العربية"
        ]
      },
      {
        "name": "المنتجات",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a4_ar.pdf",
        "type": "pdf",
        "languages": [
          "العربية"
        ]
      },
      {
        "name": "EV ¾\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-0.75-a1_fa.pdf",
        "type": "pdf",
        "languages": [
          "فارسی"
        ]
      },
      {
        "name": "EV 1½\"",
        "url": "https://blain.de/downloadall/poster/EV/PDF/ev-1.5-2.5-a1_fa.pdf",
        "type": "pdf",
        "languages": [
          "فارسی"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a1_fa.pdf",
        "type": "pdf",
        "languages": [
          "فارسی"
        ]
      },
      {
        "name": "KV",
        "url": "https://blain.de/downloadall/poster/KV/PDF/kv-a4_fa.pdf",
        "type": "pdf",
        "languages": [
          "فارسی"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a1_fa.pdf",
        "type": "pdf",
        "languages": [
          "فارسی"
        ]
      },
      {
        "name": "SEV",
        "url": "https://blain.de/downloadall/poster/SEV/PDF/sev-a4_fa.pdf",
        "type": "pdf",
        "languages": [
          "فارسی"
        ]
      },
      {
        "name": "محصولات",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a1_fa.pdf",
        "type": "pdf",
        "languages": [
          "فارسی"
        ]
      },
      {
        "name": "محصولات",
        "url": "https://blain.de/downloadall/poster/Produkte/PDF/prod-a4_fa.pdf",
        "type": "pdf",
        "languages": [
          "فارسی"
        ]
      }
    ]
  },
  {
    "titleEn": "11. CAD",
    "titleTr": "11. CAD",
    "files": [
      {
        "name": "EV0 ¾\"",
        "url": "https://blain.de/downloadall/cad/EV0_0_75.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV0 1½\"-2\"",
        "url": "https://blain.de/downloadall/cad/EV0_1.5_2.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV1 ¾\"",
        "url": "https://blain.de/downloadall/cad/EV1_0_75.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV1 1½\"-2\"",
        "url": "https://blain.de/downloadall/cad/EV1_1.5_2.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV4 ¾\"",
        "url": "https://blain.de/downloadall/cad/EV4_0_75.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV4 1½\" 110VAC",
        "url": "https://blain.de/downloadall/cad/1-5-EV44110VAC-EV4-Valve.IGS",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV10 ¾\"",
        "url": "https://blain.de/downloadall/cad/EV10_0_75.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV10 1½\"-2\"",
        "url": "https://blain.de/downloadall/cad/EV10_1.5_2.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 ¾\"",
        "url": "https://blain.de/downloadall/cad/EV100_3_4.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 ¾\"",
        "url": "https://blain.de/downloadall/cad/EV100_3_4.sat",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 1½\"-2\"",
        "url": "https://blain.de/downloadall/cad/EV100_1.5_2.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 1½\"-2\"",
        "url": "https://blain.de/downloadall/cad/EV100_1.5_2.sat",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 2½\"",
        "url": "https://blain.de/downloadall/cad/EV100_2_5.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 2½\"",
        "url": "https://blain.de/downloadall/cad/EV100_2_5.sat",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV 1P",
        "url": "https://blain.de/downloadall/cad/KV1P.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV 1P",
        "url": "https://blain.de/downloadall/cad/KV1P.sat",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV 1S",
        "url": "https://blain.de/downloadall/cad/KV1S.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV 1S",
        "url": "https://blain.de/downloadall/cad/KV1S.sat",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV 2P",
        "url": "https://blain.de/downloadall/cad/KV2P.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV 2P",
        "url": "https://blain.de/downloadall/cad/KV2P.sat",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV 2S",
        "url": "https://blain.de/downloadall/cad/KV2S.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV 2S",
        "url": "https://blain.de/downloadall/cad/KV2S.sat",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 ½\"",
        "url": "https://blain.de/downloadall/cad/L_10_0_5.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 ¾\"",
        "url": "https://blain.de/downloadall/cad/L_10_075.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 1½\"",
        "url": "https://blain.de/downloadall/cad/L_10_1_5.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 2\"",
        "url": "https://blain.de/downloadall/cad/L10_2.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 2½\"",
        "url": "https://blain.de/downloadall/cad/L10_25.sat",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "L10 1½\" 110VAC - Door Lock",
        "url": "https://blain.de/downloadall/cad/1-5-L10110VAC-LK-Door-Lock-Valve.IGS",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10 1½\"",
        "url": "https://blain.de/downloadall/cad/1-5-R10A-2-Rupture-valve.IGS",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "R10 3\"",
        "url": "https://blain.de/downloadall/cad/R10_3.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "SEV 1½\"-2\"",
        "url": "https://blain.de/downloadall/cad/SEV1_5-2.IGS",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Ball Valve ¾\"",
        "url": "https://blain.de/downloadall/cad/Ball_Valve_075.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "Ball Valve 1½\"",
        "url": "https://blain.de/downloadall/cad/Ball_Valve_1_5.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "1½\" BV A+A Ball Valve",
        "url": "https://blain.de/downloadall/cad/1-5-BV-A-A-Ball-Valve.IGS",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MD 0103",
        "url": "https://blain.de/downloadall/cad/MD_0103.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MD 0205",
        "url": "https://blain.de/downloadall/cad/MD_0205.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MD 0411",
        "url": "https://blain.de/downloadall/cad/MD_0411.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MD 0611",
        "url": "https://blain.de/downloadall/cad/MD_0611.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MD 1022",
        "url": "https://blain.de/downloadall/cad/MD_1022.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MD 1535",
        "url": "https://blain.de/downloadall/cad/MD_1535.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "MD 2450",
        "url": "https://blain.de/downloadall/cad/MD_2450.igs",
        "type": "cad",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 ¾\"",
        "url": "https://blain.de/downloadall/cad/EV100_3_4_lochbild.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 1½\"-2\"",
        "url": "https://blain.de/downloadall/cad/EV100_1.5_2_lochbild.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 2½\"",
        "url": "https://blain.de/downloadall/cad/EV100_2_5_lochbild.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "SEV 1½\"",
        "url": "https://blain.de/downloadall/cad/SEV-1_5_Lochbild.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV1P",
        "url": "https://blain.de/downloadall/cad/KV1P_HX_BV_KS_H_lochbild.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV2S",
        "url": "https://blain.de/downloadall/cad/KV2S_BV_KS_H_lochbild.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 ¾\" Flow Guide",
        "url": "https://blain.de/downloadall/cad/Flow_guide_0.75.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "EV100 1½\"-2\" Flow Guide",
        "url": "https://blain.de/downloadall/cad/Flow_guide_1.5-2.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV1 Flow Guide",
        "url": "https://blain.de/downloadall/cad/Flow_guide_KV1.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      },
      {
        "name": "KV2 Flow Guide",
        "url": "https://blain.de/downloadall/cad/Flow_guide_KV2.pdf",
        "type": "pdf",
        "languages": [
          "ENGLISH",
          "DEUTSCH",
          "ESPAÑOL",
          "PORTUGUÊS",
          "FRANÇAIS",
          "ITALIANO",
          "TÜRKÇE",
          "POLSKI",
          "РУССКИЙ",
          "中文",
          "العربية",
          "فارسی"
        ]
      }
    ]
  }
];
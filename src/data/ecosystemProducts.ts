export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductMatrixItem {
  name: string;
  desc?: string;
  inch?: string;
  flow?: string;
  pressure?: string;
  upSpeed?: string;
  downSpeed?: string;
  upStop?: string;
  oilVolume?: string;
  dimensions?: string;
  img: string;
}

export interface ProductDownload {
  title: string;
  url: string;
  type: 'pdf' | 'dwg' | 'cert';
}

export interface ProductDetail {
  slug: string;
  categorySlug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  mainImage: string;
  imageGallery?: string[];
  features: ProductFeature[];
  matrix?: ProductMatrixItem[];
  downloads: ProductDownload[];
  youtubeVideoId?: string;
}

export const ecosystemProducts: ProductDetail[] = [
  {
    slug: 'ev-serisi',
    categorySlug: 'kontrol-valfleri',
    title: 'EV Serisi Kontrol Valfleri',
    subtitle: 'Hidrolik Asansörler İçin Geleneksel ve Güvenilir Çözüm',
    description: '50 yılı aşkın süredir EV asansör kontrol valflerimiz zorlu koşullarda dayanıklı, verimli ve güvenilir asansör performansı sunmaktadır. En geniş ayarlanabilirlik aralığına sahip olan ticari EV serimiz, hidrolik asansör pazarında dünya standartlarını belirlemektedir.',
    longDescription: '50 yılı aşkın süredir amiral gemimiz olan EV serisi asansör kontrol valfleri, asansör endüstrisinde dayanıklılık, verimlilik ve performans standartlarını belirlemektedir. Kolay kurulumu ile tanınan EV valfleri, zorlu yük ve sıcaklık koşullarında dahi pürüzsüz ve güvenilir bir çalışma sergileyerek yolcular için güvenli ve konforlu bir seyahat sağlar.\n\nEV serisi; operasyonel gereksinimlere göre uyarlanmış EV0, EV1, EV10 ve EV100 olmak üzere dört temel modelden oluşur. Tüm modeller, kullanıcıların aşağı yönde hem tam hız hem de yavaşlama (seviyeleme) hızlarını ayarlayabilmelerine olanak tanıyan özelleştirilebilir çift hızlı iniş kontrolü sunar. Modeller arasındaki temel fark, kalkış hızlarının ve geçişlerin ayarlanabilirlik derecesidir.\n\nValflerimiz 3/4” ile 2.5” arası bağlantı ölçülerinde üretilmekte olup, en küçük modelde 10-125 l/min, en büyük modelde ise 500-1530 l/min debi aralığına sahiptir. Geniş ürün yelpazemiz sayesinde çok çeşitli asansör konfigürasyonlarında kusursuz uyum ve üstün mühendislik deneyimi elde edebilirsiniz.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/EV-Series-2-1024x708.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/09/EV100-3-4.png","https://blain.de/wp-content/uploads/2024/09/ev100-1_5.png","https://blain.de/wp-content/uploads/2024/06/EV100_25-small.webp","https://blain.de/wp-content/uploads/2024/06/EV_EN.svg"],
    features: [
      { title: 'Yüksek Uyumluluk', description: 'Geniş sıcaklık ve basınç aralıklarında sorunsuz çalışır.' },
      { title: 'Kolay Ayarlanabilirlik', description: 'Tüm valfler sahada kolayca mekanik olarak ayarlanabilir.' },
      { title: 'Dayanıklılık', description: 'Alman mühendisliği ile uzun ömürlü ve zorlu koşullara dayanıklı yapı.' }
    ],
    matrix: [
      { name: 'EV 100', inch: '3/4" - 2 1/2"', flow: '10-800 l/min', pressure: '8-100 bar', upSpeed: 'Pürüzsüz kalkış', downSpeed: 'Hassas duruş', upStop: 'Var (Ayarlanabilir)', oilVolume: 'Maks 70°C / 25-60 cSt', dimensions: '5 - 14 kg', img: 'https://blain.de/wp-content/uploads/2024/06/EV100_25-small.webp' },
      { name: 'EV 10', inch: '3/4" - 2"', flow: '10-800 l/min', pressure: '8-100 bar', upSpeed: 'Tek hız', downSpeed: 'Çift hız', upStop: 'Yok', oilVolume: 'Maks 70°C / 25-60 cSt', dimensions: '5 - 10 kg', img: 'https://blain.de/wp-content/uploads/2024/03/EV1.png' }
    ],
  },
  {
    slug: 'kv-serisi',
    categorySlug: 'kontrol-valfleri',
    title: 'KV Serisi Kontrol Valfleri',
    subtitle: 'Yavaş ve Ev Asansörleri İçin Kompakt Çözüm',
    description: 'KV serisi valfler, yük asansörleri ve daha küçük endüstriyel uygulamalar gibi hidrolik kaldırma sistemleri için güvenilir ve verimli kontrol sağlar. 5-80 l/dakika akış aralığı ile her iki yönde de tutarlı hız sunar.',
    longDescription: 'KV serisi valfler, yük asansörleri ve daha küçük endüstriyel uygulamalar gibi hidrolik kaldırma sistemleri için güvenilir ve verimli kontrol sağlar. 5-80 l/dakika akış aralığı ile her iki yönde de tutarlı hız sunar ve minimum bakımla uzun ömürlü kullanım garantiler.\n\nBlain KV Serisi, küçük ev asansörleri ve konut tipi asansörler gibi sistemler için özel olarak tasarlanmış yüksek kaliteli kontrol valfleri sunar. Düşük yük uygulamaları için dizayn edilen bu valfler, hem yukarı hem de aşağı yönlü hareketlerde tutarlı bir hız sağlayarak güvenilir performans sergiler.\n\nSeri, belirli operasyonel ihtiyaçları karşılamak üzere tasarlanmış dört model içerir: KV1P, KV1S, KV2P ve KV2S. KV1P ve KV1S modelleri, ayarlanabilir yukarı duruş özelliği (up-stop) gerektirmeyen standart uygulamalar için donatılırken; KV2P ve KV2S modelleri daha hassas kontrol için ayarlanabilir hız ve duruş özellikleriyle ek esneklik sağlar.\n\nTüm KV serisi valflerimiz, uluslararası güvenlik standartlarını aşacak düzeyde üretilmekte olup dünya çapında hidrolik asansör sistemleri için güvenilir bir tercih konumundadır.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/KV-Series-1024x723.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2023/10/kv1pdone.png","https://blain.de/wp-content/uploads/2015/10/blain_KV1-S_rgb_032_transparent.png","https://blain.de/wp-content/uploads/2024/02/KV2P.png","https://blain.de/wp-content/uploads/2024/02/KV2S.png","https://blain.de/wp-content/uploads/2024/06/KV_EN.svg"],
    features: [
      { title: 'Kompakt Tasarım', description: 'Dar makine daireleri ve ev asansörleri için ideal boyut.' },
      { title: 'Düşük Debi Kontrolü', description: '5-80 l/min gibi düşük debilerde bile yüksek stabilite.' }
    ],
    matrix: [
      { name: 'KV1P', inch: '1/2"', flow: '5-80 l/min', pressure: '8-100 bar', upSpeed: '1↑ 0.16 m/s', downSpeed: '1↓ 0.16 m/s', upStop: 'Yok', img: 'https://blain.de/wp-content/uploads/2023/10/kv1pdone.png' },
      { name: 'KV1S', inch: '1/2"', flow: '5-80 l/min', pressure: '8-100 bar', upSpeed: '1↑ 0.16 m/s', downSpeed: '1↓ 0.16 m/s', upStop: 'Var', img: 'https://blain.de/wp-content/uploads/2015/10/blain_KV1-S_rgb_032_transparent.png' },
      { name: 'KV2P', inch: '1/2"', flow: '5-80 l/min', pressure: '8-100 bar', upSpeed: '1↑ 0.16 m/s', downSpeed: '2↓ 1 m/s', upStop: 'Yok', img: 'https://blain.de/wp-content/uploads/2024/02/KV2P.png' },
      { name: 'KV2S', inch: '1/2"', flow: '5-80 l/min', pressure: '8-100 bar', upSpeed: '1↑ 0.16 m/s', downSpeed: '2↓ 1 m/s', upStop: 'Var', img: 'https://blain.de/wp-content/uploads/2024/02/KV2S.png' }
    ],
  },
  {
    slug: 'ev40',
    categorySlug: 'kontrol-valfleri',
    title: 'EV40 İnverter (VVVF) Valf',
    subtitle: 'Yüksek Enerji Tasarrufu ve Seyir Konforu',
    description: 'EV40, hidrolik asansörler için özel olarak tasarlanmış bir inverter (VVVF) valf sistemidir. Yağ sıcaklığındaki değişikliklerden bağımsız olarak mükemmel ve pürüzsüz bir sürüş deneyimi sunarken %60\'a varan enerji tasarrufu sağlar.',
    longDescription: 'Yaskawa L1000H inverter sürücüsü ile entegre çalışan EV40 akıllı valf sistemi, asansör performansında devrim yaratarak klasik valflere kıyasla %65\'e kadar daha az enerji harcar ve yağ ısınmasını %50 oranında azaltır. Sistem, sıcaklık veya yük değişikliklerine bakılmaksızın her zaman son derece yumuşak bir sürüş ve duruş konforu sunar.\n\nEV40, akıllı telefon üzerinden Wi-Fi bağlantısı ile kolayca kontrol edilebilir ve asansörün seyir eğrileri uygulama üzerinden milimetrik olarak programlanabilir. İster yeni kurulumlar ister modernizasyon projeleri olsun, hidrolik asansör sistemlerini bir üst seviyeye taşıyan inovatif bir Alman mühendisliği harikasıdır.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/EV40-1024x572.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/06/EV40-Large-Corr-1024x575.png","https://blain.de/wp-content/uploads/2024/06/EV40-large-1024x623.png","https://blain.de/wp-content/uploads/2024/03/paneldone-1-1024x605.png"],
    features: [
      { title: 'Enerji Tasarrufu', description: 'Klasik valflere göre motor gücünü optimize ederek devasa enerji tasarrufu sağlar.' },
      { title: 'Sıcaklık Bağımsızlığı', description: 'Soğuk veya sıcak yağda her zaman sabit kalkış ve duruş mesafesi.' }
    ],
  },
  {
    slug: 'sev',
    categorySlug: 'kontrol-valfleri',
    title: 'SEV Sensörlü Valf Sistemi',
    subtitle: 'Elektronik Kapalı Çevrim Kontrolü',
    description: 'SEV (Sensored Elevator Valve), üzerinde bulunan hassas sensörler sayesinde kabin yükü ve yağ sıcaklığındaki tüm değişimleri anında algılayıp kendini ayarlayan yeni nesil bir elektronik valftir.',
    longDescription: 'SEV valfi, akış, basınç ve sıcaklığı ölçen gelişmiş bir sensör dizisini entegre ederek hidrolik asansörlerin seviyesini yukarı taşır. Bu sensörler, asansörün çalışmasını optimize etmek için birlikte çalışır ve yolcular için hassas, konforlu bir sürüş deneyimi sağlar. SEV valfi; pürüzsüz hızlanma, yumuşak duruşlar ve tutarlı bir hız sunarak yük ve yağ sıcaklığındaki değişimlerle ustalıkla başa çıkar. Ayrıca yerleşik türbülans baskılayıcılar sessiz bir çalışma için gürültü ve titreşimi en aza indirir.\n\nValf, Wi-Fi üzerinden bir akıllı telefona bağlanarak programlama ve ayarlama işlemlerini son derece kolaylaştırır. Sezgisel arayüzü sayesinde müşterilerin bireysel tercihlerine göre özelleştirme yapılmasına olanak tanır ve her sürüşün özel ihtiyaçlara göre uyarlanmasını sağlar. Kendi kendine kapanan manuel indirme (kurtarma) özelliği, güç kesintisi durumunda manuel kontrole olanak tanıyarak güvenliği artırır.\n\nSEV valfi, hidrolik sistemin temizliğini ve uzun ömürlülüğünü destekleyen kendi kendini temizleyen pilot ve ana hat filtreleri içerir. %100 sürekli çalışma uyumlu bobinleri (solenoid), aşırı ısınma riski olmadan güvenilir çalışma sağlar. Bu gelişmiş valf, sadece asansör sisteminin genel performansını artırmakla kalmaz, aynı zamanda bakım ve optimizasyon süreçlerini de kolaylaştırır.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/SEV-1024x819.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/02/SEV-1-1024x529.png"],
    features: [
      { title: 'Yük Bağımsızlığı', description: 'Boş veya dolu kabinde milimetrik aynı seviyede duruş.' },
      { title: 'Akıllı Öğrenme', description: 'Kendi kendine kalibrasyon yapabilen akıllı anakart mimarisi.' }
    ],
  },
  {
    slug: 'el-pompasi',
    categorySlug: 'aksesuarlar',
    title: 'Acil Durum El Pompası (HP)',
    subtitle: 'Güvenli Kurtarma ve Bakım İşlemleri İçin',
    description: 'Elektrik kesintilerinde veya acil durumlarda asansör kabinini en yakın kata kadar kaldırmak için kullanılan güvenilir bir el pompasıdır. Tüm güç ünitelerine kolayca entegre edilebilir.',
    longDescription: 'HP el pompası; hidrolik asansörlerin acil durum operasyonları, basınç testleri ve bakım işlemleri için özel olarak tasarlanmıştır. Güç kesintileri sırasında veya bakım görevleri yerine getirilirken asansörün yukarı yönde manuel olarak kontrol edilmesine (kurtarılmasına) olanak tanır.\n\nBasınç tahliye valfi ile donatılmış olan pompa, sisteme aşırı basınç uygulanmasını önleyerek ek bir güvenlik katmanı sağlar. El pompası her strokta 13 cm³ yağ basma kapasitesine sahiptir.\n\nEsnek kurulum için hem yandan montajlı hem de taban plakalı modelleri mevcuttur. Ek olarak, talep üzerine entegre silindir basınç tahliye valfi de sunulmaktadır.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/HP-867x1024.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/02/HP-1-748x1024.png"],
    features: [
      { title: 'Yüksek Basınç Kapasitesi', description: 'Küçük fiziksel güçle yüksek basınç üretebilme.' },
      { title: 'Kolay Montaj', description: 'Kompakt yapısı sayesinde her tanka veya valfe bağlanabilir.' }
    ],
  },
  {
    slug: 'seviyeleme-motoru',
    categorySlug: 'aksesuarlar',
    title: 'Micro Levelling Drive (MD)',
    subtitle: 'Hassas Seviyeleme İçin Mini Güç Ünitesi',
    description: 'Asansör kabininin kat hizasında çok uzun süre beklemesi gereken durumlarda (hastaneler, yük asansörleri) ana motoru çalıştırmadan milimetrik seviyeleme (re-levelling) yapan mikro motordur.',
    longDescription: 'MD (Micro Drive) seviyeleme motoru, hem hidrolik hem de traksiyonlu asansör sistemleri için uygun, hassas ve verimli bir kat hizalama çözümüdür. Genel performansı, güvenliği ve kullanıcı deneyimini önemli ölçüde artırır:\n\nYüksek Seviyeleme Hassasiyeti: MD motoru, kabini kat hizasında ±5 mm hassasiyetle konumlandırır, doğru hizalamayı garanti eder ve yolcuların kabine girip çıkarken takılma veya düşme riskini azaltır.\n\nDaha Kısa Katlar Arası Seyahat Süresi: Kesin ve hassas seviyeleme sağlayarak, ana seyir hızının 10 cm/s\'ye kadar artırılmasına olanak tanır, böylece genel verimliliği artırır.\n\nSessiz Çalışma: Olağanüstü sessiz yapısı sayesinde hastaneler, konutlar veya gece kullanımı için mükemmel bir uyum sağlar.\n\nHidrolik Asansörler İçin Kullanım: İnce seviyeleme (re-levelling) ünitesi, enerji verimli ve sessiz çalışan bir motor-pompa-valf grubu kullanarak asansörün duruş pozisyonunu optimize eder. Ünite yağın aşırı ısınmasını önler. Ana sistemin mevcut yağ tankını kullandığı için ekstra bir yağ kaynağına ihtiyaç duymaz.\n\nTraksiyonlu (Halatlı) Asansörler İçin Kullanım: MD seviyeleme motoru halatlı asansörlerde de tam kat hizalaması için ayrı bir çözüm sunar. Halat süspansiyonuna entegre edilen küçük bir silindir, ana motoru (makineyi) devreye sokmadan kabinin milimetrik olarak yukarı veya aşağı hareket ettirilmesine olanak tanır.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/MD-1024x725.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/02/MD-1-1024x598.png","https://blain.de/wp-content/uploads/2024/06/MD_EN.svg"],
    features: [
      { title: 'Sessiz Çalışma', description: 'Bina sakinlerini rahatsız etmeyen fısıltı kadar sessiz çalışma.' },
      { title: 'Bağımsız Sistem', description: 'Ana güç ünitesine entegre veya bağımsız olarak çalışabilir.' }
    ],
  },
  {
    slug: 'l-serisi',
    categorySlug: 'guvenlik-valfleri',
    title: 'L Serisi UCM Güvenlik Valfleri',
    subtitle: 'İstenmeyen Kabin Hareketlerine Karşı Kesin Çözüm',
    description: 'EN 81-20/50 A3 standartlarına tam uyumlu olan L serisi (L10, L20) güvenlik valfleri, kapılar açıkken oluşabilecek istenmeyen kabin hareketlerini (UCM) mekanik ve elektriksel olarak anında kilitler.',
    longDescription: 'L10 UCM valfi, hidrolik asansörlerde istenmeyen kabin hareketlerini (UCM) önleyen selonoid kontrollü, A3 sertifikalı bir güvenlik cihazıdır. Kabin yukarı doğru seyahat ederken yağın güç ünitesinden silindire serbestçe akmasına izin verir; ancak selonoid valfe enerji geldiğinde ters akışı (aşağı yönlü) tamamen bloke eder. Bu özellik, asansörün istenmeyen şekilde aşağı kaymasını engeller ve ana kontrol valfinin güvenlik mekanizmalarını tamamlar.\n\nL10 ayrıca silindir ile kontrol valfi arasındaki yağın sıkışabilirliğinden kaynaklanan hafif kabin düşmelerine karşı da koruma sağlar. L10 doğrudan silindire monte edilerek maksimum güvenlik elde edilebilir.\n\nPalangalı hidrolik sistemler (örneğin 2:1 askı sistemleri) için isteğe bağlı olarak sunulan LK Piston Güvenlik Sistemi (veya Gevşek Halat Valfi) ekstra bir güvenlik katmanı ekler. Bu sistem, asansör kabini tamponlara oturduğunda veya mekanik bir engele takıldığında pistonu durdurur, halatların gevşemesini (slack rope) engelleyerek genel güvenliği önemli ölçüde artırır.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/L-series-1024x723.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2023/10/L10-forweb-1024x211.png","https://blain.de/wp-content/uploads/2024/06/L10_EN.svg"],
    features: [
      { title: 'A3 Sertifikası', description: 'TÜV onaylı ve EN 81-20/50 tam uyumlu güvenlik kilidi.' },
      { title: 'Hızlı Reaksiyon', description: 'Milisaniyeler içinde tepki vererek kabini olduğu yere sabitler.' }
    ],
  },
  {
    slug: 'hx-mx',
    categorySlug: 'aksesuarlar',
    title: 'Patlamaya Karşı Korumalı (Ex-Proof) Bobinler (HX/MX)',
    subtitle: 'Tehlikeli Madde Sahaları İçin Yüksek Güvenlik',
    description: 'Kimyasal tesisler, madenler, petrol rafineleri gibi patlayıcı gazların veya tozların bulunabileceği tehlikeli (ATEX) ortamlarda kullanılmak üzere özel tasarlanmış patlamaya dayanıklı (Ex-Proof) selonoid bobinlerdir.',
    longDescription: 'HX ve MX indirme (down) valflerimiz, kontrollü indirme ve boru patlama valflerinin güvenilir bir şekilde test edilmesini sağlamak üzere hidrolik asansör sistemleri için özel olarak tasarlanmıştır. Ayarlanabilir aşağı hız özellikleriyle, HX ve MX valfleri iniş sürecinin hassas bir şekilde kontrol edilmesini garanti ederek hem rutin operasyonlar hem de emniyet (paraşüt) testleri için ideal hale gelir.\n\nHX Valfleri: HX valfleri, ayarlanabilir aşağı hız ayarına sahip manuel kontrollü (elle açılan) indirme valfleridir. Bırakıldıklarında otomatik olarak kapanırlar. Bu valfler acil durum manuel indirmeleri (kurtarma) için uygundur ve asansörü aşırı hıza çıkararak boru patlama valfini test etmek için ana EV kontrol valfiyle birlikte kullanılabilir. Kontrol butonunun veya kolunun bırakılması valfi anında kapatır ve operasyon sırasında maksimum güvenlik sağlar.\n\nMX Valfleri: MX valfleri; ivmelenme, iniş hızı ve yavaşlaması ayarlanabilen bobin (solenoid) kontrollü indirme valfleridir. Asansör bakım ve revizyon (inspection) sürüşleri için idealdir. EV valfi ile birlikte kullanıldığında ekstra yavaş bir iniş hızı sağlayarak son derece hassas kat duruşlarını garanti eder.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/HXMX.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/04/hxmx.png"],
    features: [
      { title: 'ATEX Onaylı', description: 'Zorlu endüstriyel ortamlarda çalışmak için uluslararası sertifikasyon.' },
      { title: 'Su ve Toz Geçirmezlik', description: 'IP67 ve üzeri yalıtım standartlarına sahiptir.' }
    ],
  },
  {
    slug: 'ev-3-4',
    categorySlug: 'kontrol-valfleri',
    title: 'EV 3/4" Kontrol Valfi',
    subtitle: 'Orta Boyutlu Projeler İçin Optimum Akış',
    description: 'EV 100 serisinin en popüler ara boyutlarından biri olan EV 3/4" (Çeyrek), özellikle standart konut ve 4-6 katlı binalardaki hidrolik asansör projeleri için optimum debi ve basınç regülasyonu sunar.',
    longDescription: 'EV 3/4", kompakt gövdesiyle sınırlı alanlarda bile mükemmel performans gösterecek şekilde dizayn edilmiştir. Piyasada en sık karşılaşılan 4-6 duraklı yolcu asansörleri için ideal olan 3/4 inç çapı, kurulum kolaylığı ve yüksek verim dengesi sağlar.\n\nBlain EV100 serisinin kanıtlanmış Alman kalitesini taşıyan bu valf, her iki yönde de sarsıntısız bir seyahat sunarken; kolay ve hızlı mekanik ayarlanabilirliği ile saha ekiplerinin favorisidir.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/EV100-3-4-1024x783.png',
    features: [
      { title: 'Kompakt Gövde', description: 'Yer tasarrufu sağlayan monoblok döküm gövde.' },
      { title: 'Standart Uyum', description: 'Diğer tüm Blain valfleriyle aynı ayar mantığına sahiptir.' }
    ],
  },
  {
    slug: 'kuresel-valf',
    categorySlug: 'aksesuarlar',
    title: 'Yüksek Basınç Küresel Valf (Ball Valve)',
    subtitle: 'Tam Geçişli ve Güvenli Kapatma',
    description: 'Güç ünitesi ile piston arasındaki hidrolik hattı bakım veya onarım durumlarında güvenli bir şekilde kesmek için tasarlanmış yüksek basınçlı, tam geçişli (full-bore) küresel vanalardır.',
    longDescription: 'Küresel vanamız, kontrol valfini silindir hattından güvenli bir şekilde ayırmak için güvenilir bir yol sunarak bakım ve onarımların kolayca yapılabilmesini sağlar. 100 bar\'a kadar çalışma basıncı ve 1600 l/dakika\'ya kadar akış hızlarıyla başa çıkabilme yeteneğine sahiptir.\n\nAcil durumlarda, küresel vana sızıntıları kontrol altına almak, basıncı düzenlemek, acil kapatma işlemlerini gerçekleştirmek ve elektrik kesintileri sırasında hidrolik akışı denetlemek için hızlı ve güvenilir bir mekanizma sunar.\n\nBakım veya onarım sırasında BV küresel vanası, teknisyenlerin kontrolsüz sıvı akışı veya basınç birikimi riski olmadan görevlerini güvenle yerine getirmelerini sağlar, böylece arıza süresini en aza indirir ve iş akışı verimliliğini korur.\n\nYüksek mukavemetli alüminyumdan üretilmiş gövdesi, mükemmel dayanıklılık ve korozyon koruması sunarak sistemin uzun vadeli güvenilirliğini garanti eder. Çeşitli boyut ve bağlantı tiplerinde mevcut olup, mevcut sistemlere sorunsuzca entegre edilebilir.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/BV.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/06/BV-2-1024x640.png","https://blain.de/wp-content/uploads/2024/06/BV_EN.svg","https://blain.de/wp-content/uploads/2024/06/BV-edit3-2-1.svg"],
    features: [
      { title: 'Tam Geçişli', description: 'Yağ akışında hiçbir kısıtlama veya basınç düşümü yaratmaz.' },
      { title: 'Kolay Kilitlenebilir', description: 'Güvenlik için asma kilit takılabilir tasarıma sahiptir.' }
    ],
  },
  {
    slug: 'boru-patlama-valfi',
    categorySlug: 'guvenlik-valfleri',
    title: 'Boru Patlama Valfi (Rupture Valve)',
    subtitle: 'Serbest Düşüşe Karşı Ani Fren',
    description: 'Silindir girişine doğrudan monte edilen bu valf, hidrolik hortumun veya borunun patlaması durumunda aşağı yönlü aşırı akışı anında algılayarak kabinin serbest düşmesini tamamen engeller.',
    longDescription: 'R10 boru patlama valfi, hidrolik asansörlerde boru patlamalarına ve aşırı aşağı yönlü hızlara karşı koruma sağlamak üzere tasarlanmış hayati bir güvenlik bileşenidir. Ana silindir hattında bir basınç düşüşü veya aşırı akış algılandığında valf anında kapanarak asansörü güvenli ve sarsıntısız bir şekilde durdurur.\n\nÇok yönlü kurulum seçenekleri, R10 valfinin silindir üzerine herhangi bir pozisyonda monte edilmesine olanak tanır. Geniş bağlantı tipleri ve diş boyutları sayesinde çeşitli hidrolik sistemlere kolayca entegre edilebilir.\n\nBoru patlamalarına karşı optimum koruma sağlamak için valf, üst kısmında bulunan ayar vidası kullanılarak farklı debilere (akış hızlarına) göre hassas bir şekilde kalibre edilebilir.\n\nR10 boru patlama valfi, EN 81 ve ASME yönergeleriyle tam uyumlu olup, asansör güvenliği için dünya çapında güvenilir bir tercihtir.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/Rupture-Valve-e1777546934832-672x1024.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/06/R10large.webp","https://blain.de/wp-content/uploads/2024/06/r10-tech-EN.svg","https://blain.de/wp-content/uploads/2024/06/R10_EN.svg"],
    features: [
      { title: 'Hızlı Kapanma', description: 'Belirlenen akış hızının %30 üstüne çıkıldığında anında kapanır.' },
      { title: 'Mekanik Güvenlik', description: 'Hiçbir elektrik bağlantısı gerektirmeyen tamamen hidromekanik güvenlik.' }
    ],
  },
  {
    slug: 'dalgic-motor',
    categorySlug: 'pompalar-motorlar',
    title: 'S.B. Dalgıç Motorlar',
    subtitle: 'Yağ İçi Çalışmaya Uygun Sessiz Motorlar',
    description: 'Doğrudan hidrolik yağın içerisine (tankın dibine) monte edilen yüksek teknolojili dalgıç motorlardır. Yağ ile soğutuldukları için harici bir fana ihtiyaç duymazlar ve son derece sessiz çalışırlar.',
    longDescription: 'Dalgıç pompalar ve motorlar, asansör güç ünitesinin (power unit) temel bileşenleridir. Hidrolik asansör endüstrisi için en yüksek kaliteli ve uzun ömürlü ürünler üreten dünyaca ünlü SEIM ve S.B. MOTORI markaları ile ortaklık yapıyoruz. Resmi bir distribütör olarak, anında teslimata hazır geniş bir ürün yelpazesini stoklarımızda bulunduruyoruz.\n\nKapsamlı pompa ve motor seçeneklerimiz, tüm standart asansör gereksinimlerini karşılayarak yüksek verimlilik ve dayanıklılık sağlar.\n\nİtalyan üretici SEIM, sessiz ve yüksek verimli ürünleri sayesinde hidrolik pompa ve tahrik teknolojisi sektöründe son 50 yıldır pazar lideridir. Ürettikleri özel vidalı pompalar (screw pumps), hidrolik asansör sistemlerinde dalgıç (yağ içi) uygulamalar için özel olarak tasarlanmıştır.\n\nAğır yükler ve elektriksel hatalara karşı koruma sağlayan dalgıç motorlarımız ise, bakım gerektirmeyen uzun ömürlü bir operasyon sunar. 1972\'de İtalya\'nın Milano kentinde kurulan S.B. Lift Motori, yarım asrı aşkın uzmanlığıyla asansör endüstrisi için birinci sınıf elektrik motorları üretmektedir.\n\nSEIM pompalar ve S.B. dalgıç motorlar tamamen yağın (hidrolik sıvısının) içine daldırılmış şekilde çalışır. Bu eşsiz yapı, mükemmel bir soğutma ve doğal yağlama sağlayarak aşırı ısınma riski olmadan en ağır yüklerin dahi kolayca kaldırılmasına olanak tanır. Yağ bazlı yalıtım ayrıca elektriksel arızalara karşı maksimum koruma sağlayarak asansör operasyonlarını her zaman güvende tutar.\n\nBlain Hydraulics olarak, kullandığımız tüm dalgıç motorların hidrolik pompalarla mükemmel bir şekilde eşleştirilmesini sağlıyoruz. Bu optimize edilmiş uyum, sistemin en yüksek güvenilirlik ve sıfır titreşimle çalışmasını garanti eder.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/SB-Motori-1024x900.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2023/10/seim-1.png","https://blain.de/wp-content/uploads/2023/11/sbmotori-2.png","https://blain.de/wp-content/uploads/2023/11/seimset-1024x329.png","https://blain.de/wp-content/uploads/2023/10/seim-logo-1024x261.png","https://blain.de/wp-content/uploads/2023/11/sbmotori-1-1024x629.png"],
    features: [
      { title: 'Mükemmel Soğutma', description: 'Yağ içinde çalıştığı için ısınma problemi sıfıra yakındır.' },
      { title: 'Düşük Ses Seviyesi', description: 'Klasik dış motorlara göre çok daha düşük dB seviyeleri.' }
    ],
  },
  {
    slug: 'seim-pompa',
    categorySlug: 'pompalar-motorlar',
    title: 'Seim Vidalı Pompalar',
    subtitle: 'Titreşimsiz ve Kesintisiz Yağ Akışı',
    description: 'Dünyaca ünlü Seim markasının hidrolik asansörler için özel ürettiği üç vidalı (screw) pompalardır. Klasik dişli pompalara kıyasla yağ akışında nabız (pulsation) yaratmaz, kabinde sıfır titreşim sağlar.',
    longDescription: 'Dalgıç pompalar ve motorlar, asansör güç ünitesinin (power unit) temel bileşenleridir. Hidrolik asansör endüstrisi için en yüksek kaliteli ve uzun ömürlü ürünler üreten dünyaca ünlü SEIM ve S.B. MOTORI markaları ile ortaklık yapıyoruz. Resmi bir distribütör olarak, anında teslimata hazır geniş bir ürün yelpazesini stoklarımızda bulunduruyoruz.\n\nKapsamlı pompa ve motor seçeneklerimiz, tüm standart asansör gereksinimlerini karşılayarak yüksek verimlilik ve dayanıklılık sağlar.\n\nİtalyan üretici SEIM, sessiz ve yüksek verimli ürünleri sayesinde hidrolik pompa ve tahrik teknolojisi sektöründe son 50 yıldır pazar lideridir. Ürettikleri özel vidalı pompalar (screw pumps), hidrolik asansör sistemlerinde dalgıç (yağ içi) uygulamalar için özel olarak tasarlanmıştır.\n\nAğır yükler ve elektriksel hatalara karşı koruma sağlayan dalgıç motorlarımız ise, bakım gerektirmeyen uzun ömürlü bir operasyon sunar. 1972\'de İtalya\'nın Milano kentinde kurulan S.B. Lift Motori, yarım asrı aşkın uzmanlığıyla asansör endüstrisi için birinci sınıf elektrik motorları üretmektedir.\n\nSEIM pompalar ve S.B. dalgıç motorlar tamamen yağın (hidrolik sıvısının) içine daldırılmış şekilde çalışır. Bu eşsiz yapı, mükemmel bir soğutma ve doğal yağlama sağlayarak aşırı ısınma riski olmadan en ağır yüklerin dahi kolayca kaldırılmasına olanak tanır. Yağ bazlı yalıtım ayrıca elektriksel arızalara karşı maksimum koruma sağlayarak asansör operasyonlarını her zaman güvende tutar.\n\nBlain Hydraulics olarak, kullandığımız tüm dalgıç motorların hidrolik pompalarla mükemmel bir şekilde eşleştirilmesini sağlıyoruz. Bu optimize edilmiş uyum, sistemin en yüksek güvenilirlik ve sıfır titreşimle çalışmasını garanti eder.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/Pumpe-Seim-1024x896.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2023/10/seim-1.png","https://blain.de/wp-content/uploads/2023/11/sbmotori-2.png","https://blain.de/wp-content/uploads/2023/11/seimset-1024x329.png","https://blain.de/wp-content/uploads/2023/10/seim-logo-1024x261.png","https://blain.de/wp-content/uploads/2023/11/sbmotori-1-1024x629.png"],
    features: [
      { title: 'Titreşimsiz (Pulsations-free)', description: 'Kabin içerisine yansıyan mekanik titreşimleri tamamen yok eder.' },
      { title: 'Uzun Ömür', description: 'Sürtünmesi azaltılmış vida tasarımı ile yıllarca sorunsuz çalışma.' }
    ],
  },
  {
    slug: 'tank-isiticisi',
    categorySlug: 'aksesuarlar',
    title: 'Tank Isıtıcısı (TH)',
    subtitle: 'Soğuk İklimler İçin Sabit Vizkosite',
    description: 'Kış aylarında veya soğuk bölgelerde hidrolik yağın donmasını, katılaşmasını veya viskozitesinin (akışkanlığının) bozulmasını önlemek için tank içerisine yerleştirilen termostatlı ısıtıcı dirençtir.',
    longDescription: 'Tank ısıtıcısı (TH), hidrolik yağ sıcaklığının optimum çalışma aralığının altına düşebileceği daha soğuk iklimlerde veya dış mekan asansör kuyularında hayati bir rol oynar. Isıtıcı ünitesi, yağ sıcaklığını sürekli olarak +15°C ile +35°C (seçilen modele bağlı olarak) arasında tutmaya yardımcı olarak asansör valfleri için tutarlı ve ideal bir viskozite (akışkanlık) sağlar. Bu özellik sadece sürüş konforunu artırmakla kalmaz, aynı zamanda yağın oksidasyonunu ve erken bozulmasını önler.\n\nYağ ısıtıcısının bir diğer önemli yönü ise, asansör sistemini yoğunlaşma (terleme) problemlerinden korumasıdır. Ani sıcaklık dalgalanmaları tank içerisinde terlemeye yol açabilir, bu da suyun hidrolik sıvıya karışmasına neden olur. Hidrolik sistemdeki su, korozyona (paslanmaya) sebep olur ve birçok bileşenin (valf, pompa, piston vb.) ömrünü önemli ölçüde kısaltır.\n\nOtomatik termostatlı tank ısıtıcımız, bu tür sıcaklık dalgalanmalarını önleyerek asansör sisteminin uzun vadeli korunmasına ve operasyonel güvenliğine büyük katkı sağlar.\n\nYağ ısıtıcısı, yaklaşık 500 litreye kadar yağ kapasitesine sahip tanklar için ideal bir şekilde tasarlanmıştır.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/04/TH-1024x819.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/02/TH-1024x997.png","https://blain.de/wp-content/uploads/2024/06/TH_EN.svg"],
    features: [
      { title: 'Otomatik Termostat', description: 'Yağ sıcaklığı 15°C altına düştüğünde devreye girer, 25°C\'de kapanır.' },
      { title: 'Enerji Tasarruflu', description: 'Sadece ihtiyaç anında kısa süreli çalışır.' }
    ],
  },
  {
    slug: 'mrl-h',
    categorySlug: 'guc-uniteleri',
    title: 'MRL-H (Makine Dairesiz Hidrolik)',
    subtitle: 'Yer Tasarrufu Sağlayan Entegre Çözüm',
    description: 'Geleneksel bir makine dairesi gerektirmeyen (Machine Room-Less) modern projeler için tasarlanmıştır. Valf, motor, pompa ve tank çok küçük bir kabin (cabinet) içerisine entegre edilmiştir.',
    longDescription: 'Makine dairesiz (MRL) hidrolik asansörler için özel olarak tasarlanan MRL-H ünitesi, bakım ve acil kurtarma prosedürlerini son derece güvenli ve kolay hale getiren bir çözümdür. Bu kompakt, hepsi bir arada kontrol bloğu; teknisyenlerin asansör kuyusuna (şafta) girmesine gerek kalmadan tüm uzaktan bakım ve test işlemlerinin pano (kabin) içerisinden verimli bir şekilde yapılmasına olanak tanır.\n\nBu özel hidrolik kontrol paneli, yerden tasarruf sağlayan kompakt bir tasarımda kapsamlı bir asansör bakım çözümü sunmak üzere birlikte çalışır.\n\nMRL-H ünitesi, asansörün ana tahrik ünitesinden (güç ünitesi) yatay olarak 6 metreye ve dikey olarak 5 metreye kadar uzaklıklarda kullanılabilen son derece esnek kurulum seçenekleri sunar. Bu eşsiz uyarlanabilirlik, onu çok çeşitli makine dairesiz asansör konfigürasyonları ve zorlu mimari yapılar için son derece uygun hale getirir.\n\nMRL-H, talep üzerine eksiksiz bir kurulum paketi için gerekli tüm tesisat (boru/hortum) ve ek aksesuarlarla birlikte anahtar teslim olarak tedarik edilebilir.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/05/MRL-H-1024x849.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/02/MRL-Hnoshade-3-1024x804.png","https://blain.de/wp-content/uploads/2024/06/MRLH_EN.svg"],
    features: [
      { title: 'Minimum Alan İhtiyacı', description: 'Sadece bir gardırop boyutunda yer kaplayarak makine dairesi alanından tasarruf sağlar.' },
      { title: 'Uzaktan Test İmkanı', description: 'Kapı kilidi, aşırı yük ve UCM testleri kuyuya girmeden panodan yapılabilir.' }
    ],
  },
  {
    slug: 'gv-valfi',
    categorySlug: 'kontrol-valfleri',
    title: 'GV Kontrol Valfleri',
    subtitle: 'Araç Park Sistemleri ve Ağır Yük İçin',
    description: 'Standart insan asansörlerinden ziyade, yüksek tonajlı yük asansörleri, dev araç park sistemleri (car parking) ve hidrolik kaldırma platformları için özel olarak tasarlanmış ağır iş (Heavy Duty) kontrol valfleridir.',
    longDescription: 'GV kontrol valfi serisi; çok yüksek tonajlı hidrolik otopark (araç) sistemleri, devasa kaldırma platformları, monşarj (yemek) asansörleri ve dev kargo (yük) asansörleri için tasarlanmış, ağır iş koşullarına dayanıklı çok yönlü bir çözümdür. Sabit ve güçlü bir kaldırma hızı ile ayarlanabilir, sarsıntısız bir indirme hızı sunarak çok çeşitli ağır yük uygulamaları için optimum performans sağlar.\n\nGV kontrol valfleri; maksimum sistem koruması ve yüksek güvenilirlik sağlamak için entegre bir çek valf, basınç tahliye (emniyet) valfi ve acil durum manuel indirme (kurtarma) bloğu ile donatılmış olarak gelir. En zorlu koşullar altında bile asansörün güvenle çalışmasını garanti eder.\n\nValfin özel kapatma işlevi, pompa ile silindir arasındaki aşırı yüksek debilerde (akışlarda) bile hassas akış kontrolü sağlar. Sistem gereksinimlerine göre çeşitli boru (hortum) kalınlıklarına uyum sağlayabilen 3/8" inç silindir ve tank bağlantısına sahip olup; pompalara bağlanmak için 1/4", 3/8" ve 1/2" gibi değişken montaj seçenekleri sunar.\n\nBu sağlam mimari, GV valflerini 10 tondan fazla yük kaldıran otopark sistemleri veya sanayi tipi ağır yük asansörleri için endüstri standardı ve en çok güvenilen çözüm haline getirmektedir.',
    mainImage: 'https://blain.de/wp-content/uploads/2026/05/GV-1-1024x968.png',
    imageGallery: ["https://blain.de/wp-content/uploads/2024/06/GV_EN.svg","https://blain.de/wp-content/uploads/2023/10/GV-web2-1-300x276.png","https://blain.de/wp-content/uploads/2023/10/carport-3-1024x480.jpg","https://blain.de/wp-content/uploads/2024/02/GV.svg"],
    features: [
      { title: 'Yüksek Basınç Dayanımı', description: 'Ağır tonajlar altındaki şok dalgalarına karşı ekstra güçlendirilmiş yapı.' },
      { title: 'Büyük Çap Seçenekleri', description: 'Büyük silindirlerin hızlı dolumu için 2" ve üzeri devasa geçiş çapları.' }
    ],
  },
  {
    slug: 'pu-serisi',
    categorySlug: 'guc-uniteleri',
    title: 'PU Serisi Güç Üniteleri',
    subtitle: 'Sessiz, Düşük Titreşimli ve Yüksek Verimli',
    description: 'PU serisi hidrolik asansör güç üniteleri; Blain kontrol valfleri, S.B. dalgıç motorlar ve SEIM vidalı pompaların mükemmel uyumuyla üretilmiştir. 60 litreden 750 litreye kadar farklı tank kapasiteleriyle hem ev asansörleri hem de ağır yük asansörleri için ideal çözümler sunar.',
    mainImage: 'https://blain.de/wp-content/uploads/2024/08/Blain-Hydraulics-Products.jpg',
    features: [
      { title: 'Düşük Ses Seviyesi', description: 'Yağ içi dalgıç motor ve özel tasarım tank yapısı sayesinde fısıltı kadar sessiz.' },
      { title: 'Tak-Çalıştır Modülerlik', description: 'Tüm valf ayarları fabrikada yapılmış olarak sahaya gönderilir.' }
    ],
    matrix: [
      { name: 'PU 60', desc: 'Alan kısıtlaması olan ev tipi uygulamalar için kompakt ve verimli.', oilVolume: '60 L / 15 gal', dimensions: '630x400x700 mm', flow: '35 l/min', img: 'https://blain.de/wp-content/uploads/2025/06/PU60.png' },
      { name: 'PU 150', desc: 'Ev ve yük asansörleri için çok yönlü, dayanıklı bir iş atı.', oilVolume: '150 L / 39 gal', dimensions: '860x400x950 mm', flow: '125 l/min', img: 'https://blain.de/wp-content/uploads/2025/06/PU150.png' },
      { name: 'PU 250', desc: 'Orta yükler ve güvenilir günlük operasyonlar için verimli çözüm.', oilVolume: '250 L / 66 gal', dimensions: '860x500x1170 mm', flow: '300 l/min', img: 'https://blain.de/wp-content/uploads/2025/06/PU250.png' },
      { name: 'PU 350', desc: 'Büyük ölçekli, yüksek kapasiteli asansör sistemleri için ağır hizmet çözümü.', oilVolume: '350 L / 92 gal', dimensions: '1060x540x1250 mm', flow: '450 l/min', img: 'https://blain.de/wp-content/uploads/2025/06/PU350.png' },
      { name: 'PU 500', desc: 'Yüksek trafikli ticari binalar ve hastaneler için tasarlanmış sağlam yapı.', oilVolume: '500 L / 132 gal', dimensions: '1250x650x1350 mm', flow: '650 l/min', img: 'https://blain.de/wp-content/uploads/2025/06/PU500.png' },
      { name: 'PU 750', desc: 'Endüstriyel asansörler ve en ağır yükler için maksimum güç ve hacim.', oilVolume: '750 L / 198 gal', dimensions: '1500x700x1450 mm', flow: '900 l/min', img: 'https://blain.de/wp-content/uploads/2025/06/PU750.png' }
    ],
  },
  {
    slug: 'basinc-salteri',
    categorySlug: 'aksesuarlar',
    title: 'DH / DL Basınç Şalterleri',
    subtitle: 'Aşırı Yük ve Minimum Basınç İzleme',
    description: 'Sistem basıncındaki normal dışı sapmaları anında bildirerek güvenliği artıran izleme ünitesi. Asansörün yük kapasitesinin aşılmasını önlemek (aşırı yük) veya hidrolik devredeki kaçakları tespit etmek için kullanılır.',
    longDescription: 'DH (Yüksek Basınç) ve DL (Düşük Basınç) şalterleri, hidrolik asansör sistemlerinde güvenlik ve koruma sağlamak için kritik öneme sahip aksesuarlardır.\n\nDH Yüksek Basınç Şalteri, genellikle aşırı yük sensörü (overload) olarak kullanılır. Asansör kabinine belirlenen taşıma kapasitesinin üzerinde bir yük bindiğinde, hidrolik sistemdeki basınç artışını anında algılar ve asansör kontrol panosuna sinyal göndererek hareketin durdurulmasını sağlar.\n\nDL Düşük Basınç Şalteri ise, sistemdeki basıncın tehlikeli seviyelere düşmesini (örneğin aşırı kaçak veya boru sızıntısı durumları) algılar. \n\nHer iki şalter de dayanıklı ve uzun ömürlü yapıları sayesinde zorlu çevre koşullarında bile yüksek doğrulukla çalışır. Blain kontrol valfleri veya güç üniteleri üzerine doğrudan monte edilebilir şekilde tasarlanmıştır.',
    mainImage: 'https://blain.de/wp-content/uploads/2024/02/DH-DL-e1709153847207-1-e1709202910232.png',
    features: [
      { title: 'Hassas Ayar', description: 'İstenilen basınç sınırlarına göre kolayca mekanik kalibrasyon yapılabilir.' },
      { title: 'Kolay Entegrasyon', description: 'Ana kontrol valfine ek bağlantı gerektirmeden monte edilebilir.' }
    ],
  },
  {
    slug: 'acil-indirme',
    categorySlug: 'aksesuarlar',
    title: 'EN Acil İndirme Valfi',
    subtitle: 'Elektrik Kesintisinde Güvenli Tahliye',
    description: 'Elektrik kesintisi durumunda asansör kabininin güvenli şekilde tahliyesini (aşağı indirilmesini) sağlayan acil durum ünitesi.',
    longDescription: 'EN acil indirme valfi, binalarda yaşanan ani elektrik kesintilerinde asansör kabininde kalan yolcuların güvenli bir şekilde tahliye edilebilmesi (en yakın kata inebilmesi) için geliştirilmiş kritik bir güvenlik donanımıdır.\n\nNormal şebeke elektriği kesildiğinde, kontrol panosundaki 12V DC veya 24V DC gibi düşük kapasiteli acil durum aküleri (veya UPS) devreye girerek EN valfinin bobinine enerji gönderir. Bu enerji valfi yavaşça açar ve hidrolik sıvının tanka geri dönmesine izin vererek kabinin yerçekimi etkisiyle aşağı yönlü hareketini başlatır.\n\nEN valfi, ana valfin aşağı yönlü akış regülasyon özelliklerini kullanarak inişin yumuşak ve tamamen kontrollü bir hızda gerçekleşmesini sağlar. Tüm Blain EV ve KV serisi kontrol valfleriyle uyumlu olup sistemlere kolayca eklenebilir.',
    mainImage: 'https://blain.de/wp-content/uploads/2024/02/EN-1.png',
    features: [
      { title: 'Düşük Voltaj Uyumluluğu', description: '12V veya 24V DC gibi standart UPS aküleriyle sorunsuz çalışır.' },
      { title: 'Kontrollü İniş', description: 'Acil durum sürüşünde sarsıntısız ve yumuşak hız regülasyonu.' }
    ],
  },
  {
    slug: 'basinc-dengeleme',
    categorySlug: 'aksesuarlar',
    title: 'CX Basınç Dengeleme Valfi',
    subtitle: 'Değişken Yüklerde Sabit İniş Hızı',
    description: 'Ağır yük altında veya değişken kabin ağırlıklarında bile aşağı yönlü seyir hızını sabit tutarak sürüş konforunu ve kararlılığı maksimize eden basınç kompanzasyon (dengeleme) valfidir.',
    longDescription: 'CX (Pressure Compensated Down Valve), özellikle mekanik valflerin (KV serisi gibi) kullanıldığı veya yüksek basınç dalgalanmalarının beklendiği hidrolik sistemlerde aşağı yön hızını sabitlemek için geliştirilmiştir.\n\nGeleneksel valflerde kabin içerisindeki yük arttıkça aşağı yöndeki iniş hızı bir miktar artabilir. CX basınç dengeleme valfi, silindirden gelen basınç değişimlerini anında mekanik olarak algılar ve valfin geçiş kesitini daraltıp genişleterek akış hızını (debisini) dengeler.\n\nBu sayede asansör kabini boş da olsa, tam kapasite dolu da olsa aynı aşağı iniş hızında hareket eder. Hem sürüş konforunu artırır hem de asansörün kat seviyelerine her zaman aynı zamanlamada ve milimetrik doğrulukta ulaşmasını garanti eder.',
    mainImage: 'https://blain.de/wp-content/uploads/2024/02/CX-2.png',
    features: [
      { title: 'Sabit Hız Garantisi', description: 'Yükten bağımsız olarak daima aynı iniş hızını sağlar.' },
      { title: 'Konforlu Sürüş', description: 'Değişken ağırlıklarda ani hızlanmaları önleyerek yolcu konforunu korur.' }
    ],
  },
  {
    slug: 'il10-s',
    categorySlug: 'guvenlik-valfleri',
    title: 'iL10-S Akıllı UCM Valfi',
    subtitle: 'İstenmeyen Hareketlere Karşı Akıllı Koruma',
    description: 'EN 81-20/50 standartlarıyla uyumlu, asansör kapıları açıkken oluşabilecek istenmeyen aşağı yönlü kabin hareketlerini (UCM) algılayıp önleyen akıllı elektronik güvenlik valfidir.',
    longDescription: 'iL10-S (Intelligent L10), klasik mekanik L10 güvenlik valfinin en güncel ve akıllı elektronik versiyonudur. Asansör kapıları açıkken (yolcu iniş-binişi esnasında) kabinde meydana gelebilecek herhangi bir sızıntı veya aşağı yönlü kayma durumunda saniyeden çok daha kısa bir sürede tepki vererek sistemi mekanik olarak kilitler.\n\nAkıllı özellikleri sayesinde valf, kendi kendini sürekli test eder (self-monitoring) ve herhangi bir arıza, bobin sorunu veya sensör hatası durumunda ana kumanda panosuna hata kodları gönderir.\n\niL10-S valfi, silindir üzerine doğrudan veya ana hat üzerine kolayca monte edilebilir. Yüksek teknoloji ürünü mikroişlemcili kontrol kartı ile donatılmış olup asansör güvenliğini en üst seviyeye taşır.',
    mainImage: 'https://blain.de/wp-content/uploads/2025/06/il10s-2-300x200.png',
    features: [
      { title: 'Sürekli Öz Denetim (Self-test)', description: 'Akıllı devreleri ile sürekli olarak çalışabilirliğini kontrol eder.' },
      { title: 'UCM Sertifikasyonu', description: 'TÜV onaylı, modern asansör güvenlik direktiflerine tam uyumlu yapı.' }
    ],
  },
  {
    slug: 'ksb',
    categorySlug: 'guvenlik-valfleri',
    title: 'KSB Gevşek Halat Valfi',
    subtitle: 'Palangalı (2:1 vb.) Sistemlerde Güvenlik',
    description: 'Mevcut hidrolik sistemlerde veya yeni kurulumlarda halat gevşemesini (slack rope) algılayıp önleyen, asansör kabininin askıda kalarak halatların boşalmasını engelleyen hayati bir güvenlik donanımıdır.',
    longDescription: 'KSB (Piston Safety System), özellikle 2:1 askı oranına sahip hidrolik asansörlerde kullanılan palanga (makara) sistemleri için tasarlanmış özel bir mekanik güvenlik valfidir.\n\nAsansör kabini aşağı yönde hareket ederken bir engele (kuyu içi donanımlar, tamponlar vs.) takılırsa, kabin aşağı inemez ancak piston inmeye devam edebilir. Bu durum çelik halatların gevşemesine, makaralardan çıkmasına veya kopmasına yol açarak ölümcül kazalara sebep olabilir (kabin engelden kurtulup aniden düştüğünde).\n\nKSB valfi, pistonun iniş hareketini doğrudan halatlardaki gerilime (tansiyona) bağlar. Halatlarda herhangi bir gevşeme tespit edildiği anda KSB valfi otomatik ve hidromekanik olarak piston içerisindeki yağ boşalmasını keser. Böylece piston olduğu yerde kilitlenir, halatlar gevşemez ve sistem tamamen emniyete alınmış olur.',
    mainImage: 'https://blain.de/wp-content/uploads/2015/10/blain_KSB-1-2-zoll_rgb_029.jpg',
    features: [
      { title: 'Mekanik Koruma', description: 'Elektriksel bir bağlantı gerektirmez, %100 mekanik prensiplerle çalışır.' },
      { title: 'Erken Algılama', description: 'Halat gevşemeye başladığı ilk anda devreyi kilitler.' }
    ],
  }
];

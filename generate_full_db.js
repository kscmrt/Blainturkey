const fs = require('fs');

const fullData = [
  {
    groupName: "EV",
    directions: [
      {
        direction: "Up",
        categories: [
          {
            title: "Yukarı Kalkış Yok (Kabin Katta Bekliyor)",
            items: [
              { id: "1", title: "Test: 5 nolu ayarı tamamen içeri çevirin.", solution: "Eğer asansör yukarı hareket ederse sorun A bobinindedir.", videoId: "EVH1A" },
              { id: "2", title: "A Bobinine enerji gelmiyor veya voltaj çok düşük.", solution: "Elektrik bağlantılarını kontrol edin.", videoId: "EVH1B" },
              { id: "3", title: "A Bobini valf tüpü yeterince sıkılmamış.", solution: "A Bobini valf tüpünü sıkın.", videoId: "EVH1C" },
              { id: "4", title: "A Bobini: İğne veya yuva kirli/hasarlı.", solution: "İğne ve yuvayı temizleyin veya değiştirin.", videoId: "EVH1D" },
              { id: "5", title: "2 nolu ayar (yukarı ivmelenme) çok fazla kapatılmış.", solution: "2 nolu ayarı dışa doğru açın.", videoId: "EVH1E" },
              { id: "6", title: "1 nolu ayar çok fazla açık. Yeterli pilot basıncı yok.", solution: "Bypass basıncını ayarlayın.", videoId: "EVH1F" },
              { id: "7", title: "S Emniyet valfi basıncı çok düşük ayarlanmış.", solution: "Emniyet valfini daha yüksek bir değere ayarlayın.", videoId: "EVH1G" },
              { id: "8", title: "8 nolu ayar tamamen kapalı (kabin tamponda oturuyor).", solution: "8 nolu ayarı açın.", videoId: "EVH1H" },
              { id: "9", title: "U Bypass akış yönlendiricisi çok büyük.", solution: "Daha küçük bir bypass yönlendiricisi takın.", videoId: "EVH1I" },
              { id: "10", title: "Pompa ters yönde çalışıyor.", solution: "Motor yönünü kontrol edin.", videoId: "EVH1J" },
              { id: "11", title: "Pompa bağlantı flanşında aşırı kaçak var.", solution: "Pompa bağlantısını sızdırmaz hale getirin.", videoId: "EVH1K" },
              { id: "12", title: "Pompa kapasitesi yetersiz veya gövdede çatlak var.", solution: "Pompayı değiştirin.", videoId: "EVH1L" },
              { id: "13", title: "Motor arızalı veya kontaktör çekmiyor.", solution: "Motoru ve panodaki kontaktörleri test edin.", videoId: "EVH1M" }
            ]
          },
          {
            title: "Yukarı Kalkış Var, Fakat Tam Hıza Geçmiyor",
            items: [
              { id: "14", title: "Test: 3 nolu ayarı tamamen içeri çevirin.", solution: "Asansör tam hıza geçerse sorun B bobinindedir.", videoId: "EVH2A" },
              { id: "15", title: "B Bobinine enerji gelmiyor veya voltaj düşük.", solution: "B Bobini bağlantılarını kontrol edin.", videoId: "EVH2B" },
              { id: "16", title: "B Bobini tüpü yeterince sıkılmamış.", solution: "B Bobini tüpünü sıkın.", videoId: "EVH2C" },
              { id: "17", title: "Bypass pistonu takılı kalmış veya kirli.", solution: "Pistonu çıkarıp temizleyin.", videoId: "EVH2D" },
              { id: "18", title: "Pompa bağlantı flanşında aşırı kaçak var.", solution: "Pompa bağlantısını kontrol edin.", videoId: "EVH1K" },
              { id: "19", title: "Pompa kapasitesi yetersiz veya basınç düşüyor.", solution: "Pompayı veya motoru kontrol edin.", videoId: "EVH1L" }
            ]
          },
          {
            title: "Yukarı Kalkış Çok Sert (Vuruntulu)",
            items: [
              { id: "20", title: "1 nolu ayar çok fazla kapatılmış.", solution: "1 nolu ayarı gevşetin.", videoId: "EVH3A" },
              { id: "21", title: "2 nolu ayar çok fazla açılmış.", solution: "2 nolu ayarı kısın.", videoId: "EVH3B" },
              { id: "22", title: "U Bypass yönlendiricisi çok küçük.", solution: "Daha büyük bypass yönlendiricisi takın.", videoId: "EVH3C" },
              { id: "23", title: "Valf bloğunda hava kalmış.", solution: "Sistemin havasını alın.", videoId: "EVH3D" },
              { id: "24", title: "Yıldız-Üçgen geçiş süresi çok uzun.", solution: "Zaman rölesinden süreyi kısaltın (0.2s - 0.3s).", videoId: "EVH3E" },
              { id: "25", title: "Motor kalkış torku yetersiz.", solution: "Motor voltajını ve bağlantılarını kontrol edin.", videoId: "EVH3F" }
            ]
          },
          {
            title: "Katta Yavaşlama Hızına Geçmiyor",
            items: [
              { id: "26", title: "B Bobininin enerjisi kesilmiyor.", solution: "Elektrik panosundan sinyalleri kontrol edin.", videoId: "EVH4A" },
              { id: "27", title: "3 nolu ayar çok fazla kapatılmış.", solution: "3 nolu ayarı bir miktar açın.", videoId: "EVH4B" },
              { id: "28", title: "X filtre süzgeci veya B bobini iğnesi tıkanmış.", solution: "Süzgeci ve iğne yuvasını temizleyin.", videoId: "EVH4C" }
            ]
          },
          {
            title: "Seviyeleme (Yavaş Hız) Çok Hızlı",
            items: [
              { id: "29", title: "4 nolu ayar çok fazla açılmış.", solution: "4 nolu ayarı kısarak seviyeleme hızını düşürün.", videoId: "EVH5" }
            ]
          },
          {
            title: "Katta Durdurma Gecikiyor (Katı Geçiyor)",
            items: [
              { id: "30", title: "A Bobininin enerjisi çok geç kesiliyor.", solution: "Kesici şalter mesafesini veya gecikme parametrelerini ayarlayın.", videoId: "EVH6A" },
              { id: "31", title: "5 nolu ayar (Yumuşak Duruş) çok fazla kapatılmış.", solution: "5 nolu ayarı dışa doğru açın.", videoId: "EVH6B" },
              { id: "32", title: "Asansör kılavuz raylarında veya kabinde aşırı sürtünme var.", solution: "Rayları yağlayın, patenleri kontrol edin.", videoId: "EVH6C" },
              { id: "33", title: "Silindir yağ sızdırıyor veya paraşüt freni sürtüyor.", solution: "Mekanik parçaları ve keçeleri kontrol edin.", videoId: "EVH6D" }
            ]
          },
          {
            title: "El Pompası Sorunları (Hand Pump)",
            items: [
              { id: "34", title: "El pompası basınç üretmiyor veya yağ basmıyor.", solution: "H valfini kapatın, yağ seviyesini kontrol edin ve pompanın havasını alın.", videoId: "EVH7A" },
              { id: "35", title: "El pompası çok sert veya zor basılıyor.", solution: "Emniyet valfini veya H valfi geçişlerini kontrol edin.", videoId: "EVH7B" }
            ]
          },
          {
            title: "Küresel Vana / Acil Durum (Diğer)",
            items: [
              { id: "36", title: "Kabin kalkıştan sonra hafifçe çöküyor.", solution: "Küresel vanayı kontrol edin.", videoId: "EVH8A" },
              { id: "37", title: "Pompa çalışırken yağ sıcaklığı çok çabuk artıyor.", solution: "Bypass ayarlarını kontrol edin.", videoId: "EVH8B" },
              { id: "38", title: "Yağ köpürüyor veya aşırı ses var.", solution: "Yağ deposundaki filtreyi veya yağ miktarını kontrol edin.", videoId: "EVH8C" }
            ]
          }
        ]
      },
      {
        direction: "Down",
        categories: [
          {
            title: "Aşağı Kalkış Yok (Kabin Katta Bekliyor)",
            items: [
              { id: "40", title: "C Bobinine veya D Bobinine enerji gelmiyor.", solution: "Elektrik sistemini ve bobin voltajlarını kontrol edin.", videoId: "EVS1A" },
              { id: "41", title: "C Bobini tüpü yeterince sıkılmamış.", solution: "C Bobini tüpünü sıkın.", videoId: "EVS1B" },
              { id: "42", title: "C Bobini: iğne veya yuva kirli.", solution: "İğne ve yuvayı temizleyin.", videoId: "EVS1C" },
              { id: "43", title: "D Bobini valfi tam açılmıyor (Sadece EV100).", solution: "D bobinini kontrol edin.", videoId: "EVS1D" },
              { id: "44", title: "7 nolu ayar tamamen kapatılmış.", solution: "7 nolu ayarı dışa doğru açın.", videoId: "EVS1E" }
            ]
          },
          {
            title: "Aşağı Kalkış Sert veya Gecikmeli",
            items: [
              { id: "45", title: "8 nolu ayar çok fazla kapatılmış.", solution: "8 nolu ayarı açın.", videoId: "EVS2A" },
              { id: "46", title: "D Bobini çok geç açılıyor veya takılıyor.", solution: "D bobinini temizleyin.", videoId: "EVS2B" },
              { id: "47", title: "Sıcaklık veya yağ vizkozitesi çok düşük (yağ çok soğuk).", solution: "Tank ısıtıcısı kullanın veya 8 nolu ayarı açın.", videoId: "EVS2C" },
              { id: "48", title: "Kabin çok hafif veya sürtünme fazla.", solution: "Kılavuz rayları ve sürtünme noktalarını yağlayın.", videoId: "EVS2D" }
            ]
          },
          {
            title: "Aşağı Tam Hız Çok Yavaş",
            items: [
              { id: "49", title: "7 nolu ayar çok fazla kapatılmış.", solution: "7 nolu ayarı dışa doğru çevirin.", videoId: "EVS3A" },
              { id: "50", title: "D Bobini tam açmıyor.", solution: "D bobini iğnesini kontrol edin.", videoId: "EVS3B" },
              { id: "51", title: "Z süzgeci veya D bobini filtresi tıkalı.", solution: "Filtreleri söküp temizleyin.", videoId: "EVS3C" },
              { id: "52", title: "Kabin çok hafif veya yağ soğuk.", solution: "Keçeleri ve yağı kontrol edin.", videoId: "EVS3D" }
            ]
          },
          {
            title: "Aşağı Yavaşlama Hızına Geçmiyor",
            items: [
              { id: "53", title: "C Bobininin enerjisi kesilmiyor.", solution: "Elektrik sinyalini kontrol edin.", videoId: "EVS4A" },
              { id: "54", title: "C Bobini iğnesi veya valfi açık kalmış (kir/partikül).", solution: "C bobini valfini temizleyin.", videoId: "EVS4B" }
            ]
          },
          {
            title: "Aşağı Seviyeleme (Yavaş Hız) Yok",
            items: [
              { id: "55", title: "9 nolu ayar tamamen kapatılmış.", solution: "9 nolu ayarı açın.", videoId: "EVS5A" },
              { id: "56", title: "C bobini ve D bobini sinyalleri ters bağlanmış.", solution: "Bağlantıları düzeltin.", videoId: "EVS5B" }
            ]
          },
          {
            title: "Acil İndirme Sorunları (Manual Lowering)",
            items: [
              { id: "57", title: "Kırmızı butona (Manuel indirme) basıldığında asansör inmiyor.", solution: "Acil indirme valfi iğnesini temizleyin veya değiştirin.", videoId: "EVS6A" },
              { id: "58", title: "Acil indirme hızı çok yavaş.", solution: "Valfi saat yönünün tersine çevirerek açın.", videoId: "EVS6B" },
              { id: "59", title: "Acil indirme butonu takılı kalıyor.", solution: "Yayı ve butonu kontrol edin, temizleyin.", videoId: "EVS6C" }
            ]
          },
          {
            title: "Kabin Durduğu Yerde Çöküyor (Sızıntı)",
            items: [
              { id: "60", title: "Silindir sızıntı yapıyor.", solution: "Silindir keçelerini kontrol edin.", videoId: "EVS7A" },
              { id: "61", title: "Manuel indirme valfi tam kapanmamış.", solution: "Kırmızı butonu sıkın.", videoId: "EVS7B" },
              { id: "62", title: "Aşağı valfi sızdırıyor (Ana valf O-Ring).", solution: "Valfi söküp temizleyin veya contayı değiştirin.", videoId: "EVS7C" },
              { id: "63", title: "Emniyet valfi sızdırıyor.", solution: "Emniyet valfini kontrol edin.", videoId: "EVS7D" },
              { id: "64", title: "El pompası çek valfi sızdırıyor.", solution: "El pompasını onarın.", videoId: "EVS7E" },
              { id: "65", title: "Boru veya rakor bağlantılarında sızıntı.", solution: "Tüm hidrolik bağlantıları sıkın.", videoId: "EVS7F" },
              { id: "66", title: "Boru patlak valfi sızdırıyor.", solution: "Valfi kontrol edip değiştirin.", videoId: "EVS7G" }
            ]
          }
        ]
      }
    ]
  },
  {
    groupName: "EV4",
    directions: [
      {
        direction: "Up",
        categories: [
          {
            title: "Yukarı Kalkış Yok (Kabin Katta Bekliyor)",
            items: [
              { id: "101", title: "Düşük emniyet valfi basıncı ayarı.", solution: "Ayarı artırın (bkz. sayfa 9)." },
              { id: "102", title: "Motor yüksüz akımı (E2-03) ayarı çok yüksek.", solution: "Yüksüz akım ayarını düzeltin (bkz. sayfa 23)." },
              { id: "103", title: "V/f parametre ayarları (E1-08 & E1-10) hatalı.", solution: "E1-08 ve E1-10 ayarlarını düşürün." },
              { id: "104", title: "Asansör aşırı yüklü.", solution: "Yükü azaltın." },
              { id: "105", title: "C1-03 süresi çok kısa.", solution: "C1-03 süresini artırın." },
              { id: "106", title: "Sıcaklık dönüştürücüsü bağlantılarında hata veya yetersiz güç kaynağı.", solution: "Bağlantıları düzeltin veya güç kaynağını değiştirin (12Vdc - 35Vdc)." }
            ]
          },
          {
            title: "Yukarı Kalkış Var, Fakat Tam Hıza Geçmiyor",
            items: [
              { id: "107", title: "Tork kazancı (P8-02) çok düşük.", solution: "P8-02 ayarını kademeli olarak %10 artırın." },
              { id: "108", title: "Tork referans değeri çok yüksek (hatalı boş kabin tanıtımı).", solution: "Boş kabin tanıtımını (teach run) tekrarlayın veya P3-10'u %10 azaltın." },
              { id: "109", title: "Sürücü aşırı yüklü ve aşırı yük fonksiyon ayarları hatalı.", solution: "L3-01=1 olarak ayarlayın. Yükü sınırlayın veya daha büyük sürücü seçin." },
              { id: "110", title: "Pompa aşınmış.", solution: "Pompayı değiştirin." },
              { id: "111", title: "Düşük motor performansı.", solution: "Hızı düşürün, yükü sınırlayın veya motoru değiştirin." }
            ]
          },
          {
            title: "Yukarı Kalkış Çok Sert (Vuruntulu)",
            items: [
              { id: "112", title: "Hatalı sıcaklık ölçümü.", solution: "Sıcaklık sensörü kurulumunu kontrol edin. Dönüştürücüde güç olduğundan emin olun." },
              { id: "113", title: "Yanlış sıcaklık referansı (P3-16).", solution: "Sıcaklık referansını (P3-16) kontrol edin ve gerçek olanla (U7-02) karşılaştırın." },
              { id: "114", title: "Pompa aşınmış.", solution: "Pompayı değiştirin." },
              { id: "115", title: "İnvertör frekansı uygun değil.", solution: "Frekans parametrelerini (P3-01 vb.) kontrol edin." }
            ]
          },
          {
            title: "Katta Yavaşlama Hızına Geçmiyor",
            items: [
              { id: "116", title: "Düşük kalkış bekleme süresi (P6-02).", solution: "Kalkış bekleme süresini (P6-02) artırın." },
              { id: "117", title: "Çok yüksek sızıntı frekansı.", solution: "Sızıntı frekansını (P3-07) %20 azaltın." },
              { id: "118", title: "Çok küçük kalkış rampa süresi.", solution: "Kalkış rampa süresini (P6-01) 0.5Hz kademelerle artırın." },
              { id: "119", title: "C2-01 süresi çok kısa.", solution: "C2-01 süresini artırın." }
            ]
          },
          {
            title: "Seviyeleme (Yavaş Hız) Çok Hızlı",
            items: [
              { id: "120", title: "Motor kontaktörleri çok erken açılıyor.", solution: "Motor kontaktörlerinin açılma süresini yaklaşık 1 saniye geciktirin." },
              { id: "121", title: "Base block sinyali çok erken kapanıyor.", solution: "Base block sinyali kapanma süresini yaklaşık 1 saniye geciktirin." },
              { id: "122", title: "Rampa süresi çok kısa.", solution: "C1-04 süresini artırın." },
              { id: "123", title: "Seviyeleme mesafesi yok.", solution: "C1-02 veya C2-03 ve C2-04 yavaşlama parametrelerini azaltın." }
            ]
          }
        ]
      },
      {
        direction: "Down",
        categories: [
          {
            title: "Aşağı Kalkış Yok",
            items: [
              { id: "129", title: "Sıcaklık dönüştürücüsüne giden güç bağlantısı kopuk.", solution: "Güç bağlantısını düzeltin." },
              { id: "130", title: "Sıcaklık dönüştürücüsünün kablolaması yanlış.", solution: "Kablolamayı düzeltin (Bkz. Sayfa 14)." }
            ]
          },
          {
            title: "Aşağı Kalkış Var, Fakat Tam Hız Yok",
            items: [
              { id: "131", title: "Seviyeleme toparlanma üst limiti (P7-05) seviyeleme hızından (P3-04) düşük.", solution: "P7-05 parametresini artırın veya P3-04 > 20Hz olduğunda seviyeleme hızını düşürün." }
            ]
          },
          {
            title: "Aşağı Kalkış Çok Sert",
            items: [
              { id: "132", title: "Hız frekansı referanslarını kontrol edin.", solution: "P3-01 > P3-02 > P3-03 > P3-04 olduğundan emin olun." },
              { id: "133", title: "Sıcaklık dönüştürücüsü yanlış bağlanmış.", solution: "Bağlantıyı düzeltin ve tanıma sürüşünü tekrarlayın." }
            ]
          }
        ]
      }
    ]
  },
  {
    groupName: "KV",
    directions: [
      {
        direction: "Up",
        categories: [
          {
            title: "Yukarı Kalkış Yok (Kabin Katta Bekliyor)",
            items: [
              { id: "201", title: "KV1S ve KV2S için test: 5 nolu ayarı sonuna kadar içeri çevirin.", solution: "Eğer asansör yukarı hareket ederse sorun A bobinindedir.", videoId: "EH1AA" },
              { id: "202", title: "A Bobinine enerji gelmiyor veya voltaj çok düşük.", solution: "Elektrik sistemini kontrol edin.", videoId: "EH1A" },
              { id: "203", title: "A Bobini valf tüpü tam sıkılmamış.", solution: "A Bobini valf tüpünü sıkın.", videoId: "EH1B" },
              { id: "204", title: "A Bobini: İğne ve yuva arasında kir veya hasar var.", solution: "İğne ve yuvayı temizleyin veya değiştirin.", videoId: "EH1C" },
              { id: "205", title: "Bypass valfi deliği tıkalı.", solution: "Bypass valfini (U) temizleyin veya değiştirin.", videoId: "EH1D" },
              { id: "206", title: "1 nolu ayar çok fazla açık. Yeterli pilot basıncı yok (minimum 5 bar).", solution: "Pompa çalışırken 1 nolu ayarı içeri çevirin veya daha küçük bir akış yönlendiricisi takın.", videoId: "EH1E" },
              { id: "207", title: "S Emniyet valfi basıncı çok düşük ayarlanmış.", solution: "Emniyet valfini daha yüksek bir basınca ayarlayın.", videoId: "EH1F" },
              { id: "208", title: "Kirlenme nedeniyle 7 veya 9 nolu aşağı valfleri açık kalmış.", solution: "7 ve 9 nolu valfleri temizleyin veya değiştirin. D bobinini temizleyin.", videoId: "EH1G" },
              { id: "209", title: "Pompa ters yönde çalışıyor.", solution: "Motor yönünü kontrol edin ve pompayı doğru kurun.", videoId: "EH1H" },
              { id: "210", title: "Pompa bağlantı flanşında aşırı sızıntı var.", solution: "Pompa bağlantısını sızdırmaz hale getirin." },
              { id: "211", title: "Pompa yetersiz, aşınmış veya gövdesinde çatlak var.", solution: "Daha büyük bir pompa seçin veya pompayı değiştirin." }
            ]
          },
          {
            title: "Yukarı Kalkış Var, Fakat Tam Hıza Geçmiyor",
            items: [
              { id: "212", title: "1 nolu ayar çok fazla içeri çevrilmiş.", solution: "1 nolu ayarı dışa doğru açın." },
              { id: "213", title: "Bypass akış yönlendiricisi (U) çok küçük (yuvalar dar).", solution: "Daha geniş yuvalı bir akış yönlendiricisi ile değiştirin.", videoId: "EH2A" },
              { id: "214", title: "Yıldız-üçgen motor geçiş süresi çok uzun.", solution: "0.2-0.3 saniye yeterlidir.", videoId: "EH2B" },
              { id: "215", title: "Bypass valfi üzerindeki (UO) O-ring sızdırıyor.", solution: "O-Ring'i değiştirin.", videoId: "EH2C" }
            ]
          },
          {
            title: "Yukarı Kalkış Çok Sert (Vuruntulu)",
            items: [
              { id: "216", title: "A Bobininin enerjisi çok geç kesiliyor.", solution: "Gecikme rölesini veya pano ayarını kontrol edin." },
              { id: "217", title: "5 nolu ayar (Yumuşak Duruş) yeterince açık değil.", solution: "Dışa doğru daha fazla açın." },
              { id: "218", title: "1 nolu Bypass ayarı yeterince açık değil.", solution: "1 nolu ayarı iki tur daha dışa açın.", videoId: "EH3A" }
            ]
          },
          {
            title: "Katta Yavaşlama Hızına Geçmiyor",
            items: [
              { id: "219", title: "1 nolu ayar çok fazla içeri çevrilmiş.", solution: "1 nolu ayarı dışa doğru açın.", videoId: "EH3B" }
            ]
          },
          {
            title: "Seviyeleme (Yavaş Hız) Çok Hızlı",
            items: [
              { id: "220", title: "Bypass pistonu kapanmıyor. Piston deliğinde kir var.", solution: "Bypass piston deliğindeki kiri temizleyin veya pistonu değiştirin.", videoId: "EH3D" }
            ]
          }
        ]
      },
      {
        direction: "Down",
        categories: [
          {
            title: "Aşağı Kalkış Yok",
            items: [
              { id: "221", title: "D Bobinine enerji gelmiyor veya voltaj çok düşük.", solution: "Manyetik çekimi kontrol etmek için bobini kaldırın." },
              { id: "222", title: "6 nolu ayar çok fazla içeri çevrilmiş.", solution: "6 nolu ayarı dışa açın." },
              { id: "223", title: "Aşağı valfindeki XO O-ring'i sızdırıyor.", solution: "XO O-ring'ini değiştirin.", videoId: "EH2B" }
            ]
          },
          {
            title: "Aşağı Tam Hız Yok",
            items: [
              { id: "224", title: "C Bobinine enerji gelmiyor veya voltaj düşük.", solution: "Manyetik çekimi kontrol edin.", videoId: "EH4B" },
              { id: "225", title: "7 nolu ayar (Aşağı tam hız) çok fazla içeri çevrilmiş.", solution: "7 nolu ayarı dışa doğru açın.", videoId: "EH3D" }
            ]
          },
          {
            title: "Aşağı Seviyeleme Yok. Kabin Kattan Önce Duruyor.",
            items: [
              { id: "226", title: "C ve D bobinleri ters bağlanmış.", solution: "C ve D bobinlerinin yerini değiştirin.", videoId: "EH4D" },
              { id: "227", title: "9 nolu ayar (Aşağı yavaşlama hızı) çok fazla içeri çevrilmiş.", solution: "9 nolu ayarı dışa açın.", videoId: "EH1A" }
            ]
          },
          {
            title: "Aşağı Seviyeleme Yok. Kabin Katı Geçiyor.",
            items: [
              { id: "228", title: "Aşağı akış yönlendiricisi çok küçük (yuvalar dar).", solution: "Akış yönlendiricisini bir büyük boy ile değiştirin.", videoId: "EH5B" },
              { id: "229", title: "Aşağı seviyeleme hızı (9) çok hızlı.", solution: "Hızı 0.05 m/s'ye ayarlayın.", videoId: "EH5C" },
              { id: "230", title: "D Bobini valfi iğneden sızdırıyor.", solution: "İğne ve yuvayı temizleyin veya değiştirin.", videoId: "EH4D-5D" }
            ]
          },
          {
            title: "Asansör Hızla Çöküyor (Sadece Tam Hız)",
            items: [
              { id: "231", title: "N6, S6, XO, VO, WO veya HO noktalarında sızıntı.", solution: "Sırayla değiştirin ve test edin.", videoId: "EH3C" }
            ]
          }
        ]
      }
    ]
  }
];

const fileContent = `export interface TroubleItem {
  id: string;
  title: string;
  solution: string;
  videoId?: string;
}

export interface TroubleCategory {
  title: string;
  items: TroubleItem[];
}

export interface TroubleDirection {
  direction: "Up" | "Down";
  categories: TroubleCategory[];
}

export interface ValveGroupData {
  groupName: string;
  directions: TroubleDirection[];
}

export const troubleshootingData: ValveGroupData[] = ${JSON.stringify(fullData, null, 4)};
`;

fs.writeFileSync('src/data/troubleshootingData.ts', fileContent);
console.log('Successfully wrote full DB!');

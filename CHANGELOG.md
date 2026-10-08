# Değişiklik Günlüğü (Changelog)

Bu projedeki tüm önemli değişiklikler bu dosyada belgelenmektedir.

Format, [Keep a Changelog](https://keepachangelog.com/tr/1.0.0/) standardına dayanmakta olup, [SemVer](https://semver.org/lang/tr/) (Anlamsal Sürümleme) kurallarını takip eder.

## [0.4.4] - 2026-10-08

### Eklendi & Tasarım Güncellemeleri
- **Toptan Bakliyat & Kuruyemiş Kartlarına Ürün Görselleri Eklendi (`index.html`, `_taslak_ana-sayfa.html`, `css/style.css`):**
  - "Toptan Kuru Bakliyat Çeşitlerimiz" bölümündeki 7 karta yüksek çözünürlüklü, stüdyo kalitesinde gerçekçi ürün görselleri entegre edildi:
    - *Kırmızı Mercimek*, *Yeşil & Sarı Mercimek*, *Koçbaşı Toptan Nohut*, *Kuru Fasulye Çeşitleri*, *Baldo & Osmancık Pirinç*, *Gaziantep Bulgur Çeşitleri*, *Barbunya, Mısır & Buğday*.
  - "Toptan Kuruyemiş & Endüstriyel Çeşitlerimiz" bölümündeki 7 karta aynı estetik ve yüksek çözünürlük standartlarında ürün fotoğrafları eklendi:
    - *Kavrulmuş Antep Fıstığı*, *Baklavalık Boz İç Fıstık*, *Çiğ & Kıyılmış Antep Fıstığı*, *İç Fındık Çeşitleri*, *Ceviz & Badem İçi*, *Kayısı & Kuru İncir*, *Kuru Üzüm, Çekirdek & Diğer*.
  - Kart yapısı `.prod-media` görsel alanı ve `.prod-card-body` bilgi alanı olarak modernize edildi; hafif hover zoom (mikro etkileşim), yumuşatılmış köşe radyusu ve gölge derinliğiyle premium vitrin görünümü sağlandı.

---

## [0.4.3] - 2026-10-08

### Kaldırılanlar & Güncellemeler
- **Toptan Satış Uyarı Kutusu Kaldırıldı (`index.html`, `_taslak_ana-sayfa.html`):**
  - "Biz Toptancıyız — Perakende Satışımız Bulunmamaktadır!" başlıklı büyük uyarı alanı kaldırıldı; kurumsal bölüm doğrudan "Hizmet Verdiğimiz Kurumsal Alanlar" vitriniyle sade ve şık bir akışa kavuşturuldu.
- **İnşaat Projeleri Lokasyonları Ulusal Ölçeğe Taşındı (`index.html`, `_taslak_ana-sayfa.html`):**
  - Projelerin tümünde yer alan tek tip Gaziantep odaklı yerel konumlandırma (Şehitkamil, Emek, Kızılhisar) kaldırıldı.
  - Firma genel merkezine ve Türkiye geneli mühendislik vizyonuna uygun olarak projeler metropol ve stratejik lokasyonlara dağıtıldı:
    - **1. Proje:** Çankaya Prestij Konutları & Kuleleri (`Çankaya / Ankara`)
    - **2. Proje:** Ataşehir Finans Ticaret Merkezi & Plaza (`Ataşehir / İstanbul`)
    - **3. Proje:** Nilüfer Vadi Konakları & Kuleleri (`Nilüfer / Bursa`)
    - **4. Proje:** Marmara Lojistik & Depo Kompleksi (`Gebze / Kocaeli`)

---

## [0.4.2] - 2026-10-08

### Düzeltmeler & Sadeleştirme
- **Yatay Taşma ve Sağa Kayma Sorunu Giderildi (`index.html`, `_taslak_ana-sayfa.html`, `css/style.css`):**
  - Sektörler, inşaat projeleri, kurumsal alanlar ve ürün kataloglarındaki kapsayıcılarda sehven kullanılan `header-inner` flex sınıfları standart blok container olan `site-container` ile değiştirildi. İçeriklerin yan yana taşması engellendi.
  - `html` ve `body` öğelerine `overflow-x: hidden` ve `max-width: 100%` uygulanarak sayfanın sağa doğru kayması tamamen çözüldü.
- **Kart Detayları ve İkonlar Temizlendi (`index.html`, `_taslak_ana-sayfa.html`, `css/style.css`):**
  - Faaliyet alanları sektör kartlarındaki ikon kutucukları ve "Projeleri İncele →" vb. yönlendirme linkleri kaldırıldı; kartlar sade, kurumsal ve şık bir tipografik yapıya kavuşturuldu.
  - "Hizmet Verdiğimiz Kurumsal Alanlar" kartlarındaki ikonlar ve toptan uyarı kutusundaki bina ikonu temizlendi.

---

## [0.4.1] - 2026-10-08

### Kaldırılanlar & Sadeleştirme
- **Kurumsal Teklif Talep Formu (RFQ) Kaldırıldı (`index.html`, `_taslak_ana-sayfa.html`):**
  - Sayfadaki form alanı ve ilgili RFQ bölümü tamamen kaldırıldı; menü ve aksiyon yönlendirmeleri kurumsal iletişim ve konum bölümüne (`#konum`) bağlandı.
- **Tüm Emojiler Kaldırıldı ve Vektörel SVG İkonlara Dönüştürüldü (`index.html`, `_taslak_ana-sayfa.html`, `css/style.css`, `js/site.js`):**
  - Üst bilgilendirme şeridi, sektör kartları, inşaat projeleri konum/özellik etiketleri, kurumsal alan kartları, kalite sertifikaları ve altbilgi üzerindeki tüm emojiler temizlendi.
  - Sektör kartları ve kurumsal alanlar için kurumsal kimliğe uygun ince çizgili vektörel SVG ikonlar entegre edildi.
  - Panoya kopyalama bildirimindeki sembol temizlendi.
- **Toptan Ürün Kataloğu Sadeleştirildi (`index.html`, `_taslak_ana-sayfa.html`, `css/style.css`):**
  - Kategori başlıklarındaki koli, çuval ve ambalaj rozetleri kaldırıldı.
  - Ürün kartlarındaki aşırı teknik özellikler (çatlak oranı, rutubet, kalibre detayları, elek ölçüleri), uzun metinler ve alt ambalaj etiketleri temizlendi.
  - Bakliyat ve kuruyemiş çeşitleri, gereksiz şişirme olmadan ana ürün gruplarını zengin bir şekilde temsil eden sade, kurumsal ve okunabilir kartlara dönüştürüldü.

---

## [0.4.0] - 2026-10-08

### Eklenenler
- **Büyük İnşaat & Taahhüt Sektörü Vitrini (`index.html`, `css/style.css`):**
  - Firma bünyesine yüksek katlı rezidans, konut ve ticari plaza projelerini kapsayan İnşaat & Taahhüt bölümü entegre edildi.
  - Mert Güllüoğlu İnşaat ve KDL Group görsel konseptlerine uygun olarak İbrahimli Prestij Konutları (28.500 m²), Emek Bulvar Plaza (15.200 m²), Kızılhisar Vadi Konakları (19.400 m²) ve Başpınar OSB Lojistik Kompleksi (35.000 m²) proje kartları ve teknik metrikleri yerleştirildi.
  - Şantiye mimari planı ve güvenlik baretli taahhüt bannerı ile yüksek çözünürlüklü kule & plaza görselleri eklendi (`images/insaat-kule.jpg`, `images/insaat-plaza.jpg`, `images/insaat-rezidans.jpg`, `images/insaat-santiye.jpg`).
- **Kurumsal & Toptan Odaklı Konumlandırma ("Perakende Satışımız Yoktur"):**
  - Sayfanın en üstüne ve altbilgisine dikkat çeken kurumsal bilgilendirme şeridi eklendi: *"Firmamız Toptan Satış ve Kurumsal Taahhüt odaklıdır. Perakende satışımız yoktur."*
  - Kamu Kurumları, Askeri Birlikler, Hastane & Üniversite Yemekhaneleri, Şantiyeler, Oteller ve İmalatçılara özel kurumsal çözüm ortaklığı bölümü eklendi.
  - 25 Kg lamine çuval, 50 Kg jüt çuval, 1.000 Kg Big-Bag ve paletli tır bazlı sevkiyat standartları ile endüstriyel lojistik deposu görseli (`images/toptan-depo.jpg`) sisteme dahil edildi.
- **Zenginleştirilmiş & Çeşitlendirilmiş Ürün Kataloğu:**
  - **Toptan Kuru Bakliyat:** Gaziantep Yerli Futbol Kırmızı Mercimek, Yaprak Mercimek, Yozgat Yeşil Mercimek (8mm), Koçbaşı Toptan Nohut (9mm & 10mm Mega), Karaman Dermason Fasulye (8-9mm), Coğrafi İşaretli İspir Şeker Fasulyesi, Gönen Baldo Pirinç (1. Grup), Trakya Osmancık Pirinç, İthal Basmati Pirinç, Taş Değirmen İri Bulgur, Köftelik Esmer & Sarı Simit Bulguru, Horoz Barbunya, Cin Mısır ve Aşurelik Buğday.
  - **Toptan Kuruyemiş:** Gaziantep Duble Boz Kavrulmuş Anaçatlak Antep Fıstığı, Erken Hasat Baklavalık Kuşboku Yeşil İç Fıstık, Meverdi Kırmızı İç Fıstık, File & Pirinç Fıstık, Siirt Tipi İri Anaçatlak Fıstık, Giresun Tombul Yağlı İç Fındık (13-15mm), Ekstra Kelebek Beyaz Ceviz İçi, Çeyrek Sanayi Cevizi, Datça & Nonpareil Badem İçi, W240/W320 Fırınlanmış Kaju, Malatya Jumbo Günkurusu Kayısı, Aydın Dağ İnciri Naturel Jumbo, Kilis Karası Kuru Üzüm, Ürgüp Kabak Çekirdeği ve Tavşanlı Leblebi.
- **Kurumsal Fiyat Teklifi Talep Formu (RFQ):**
  - Kurumların tonajlı bakliyat, kuruyemiş ve inşaat projeleri için doğrudan resmi proforma talep edebileceği B2B teklif formu yerleştirildi.
- **Uluslararası Kalite & Akreditasyon Standartları:**
  - ISO 22000:2018, ISO 9001:2015, TSE Uygunluk ve Parti Analiz Raporları rozetleri eklendi.

---

## [0.3.0] - 2026-10-07

### Eklenenler
- **Ana Sayfa Canlı Yayına Alındı (`index.html`):**
  - Taslak aşamasındaki kurumsal web sitesi `index.html` olarak ana sayfada yayına alındı.
  - Önceki yapım aşaması sayfası `yapim-asamasinda.html` olarak arşivlendi ve `/yapim-asamasinda` rotasına bağlandı.
- **Kurumsal İletişim E-postası:**
  - Sayfa altbilgisine (Footer) ve Schema.org yapısal verisine `info@antepliveyselusta.com` e-posta adresi entegre edildi.
- **Vektörel Marka Logosu (`images/logo-emblem.svg`):**
  - Başlıkta (Header) ve altbilgide (Footer) kullanılmak üzere dairesel altın mühür dokulu VU logo amblemi eklendi.

### Geliştirilenler
- **Mobil Deneyim ve Ergonomi (Responsive UX):**
  - Mobil menü (Hamburger) ekran genişliğine yayılan akıcı bir açılır panele dönüştürüldü, dokunma alanları büyütüldü ve dışarı tıklamayla kapanma özelliği eklendi.
  - "Konum & Ulaşım" aksiyon butonları (Yol Tarifi Al, Google Haritalar, Adresi Kopyala) mobilde tek sütun tam genişlik olarak düzenlenerek kullanım kolaylaştırıldı.

---

## [0.2.0] - 2026-10-05

### Eklenenler
- **"Site Yapım Aşamasındadır" (Under Construction) Yayını (`index.html`, `css/style.css`):**
  - Alan adına gelen ziyaretçileri karşılayan, marka kimliğine tam uyumlu "Sitemiz Yapım Aşamasındadır" vitrini hazırlandı.
  - Canlı pulsing rozet ile Çankaya'daki fiziki dükkânın açık ve hizmette olduğu vurgulandı.
  - Açık adres, Google Maps yol tarifi, tek tıkla adres kopyalama ve anlık toast bildirimi eklendi.
  - WhatsApp hızlı sipariş ve iletişim bağlantısı entegre edildi.
  - Kuru bakliyat, taze kuruyemiş ve esnaf ahlakını tanıtan 3 önizleme vitrin kartı yerleştirildi.
  - Dükkân sahibinin ve geliştiricinin hazırlanan ana sayfayı tek tıkla görebilmesi için önizleme bağlantısı (`ana-sayfa.html`) sağlandı.
- **Ana Sayfa Koruması (`ana-sayfa.html`):**
  - Daha önce hazırlanan eksiksiz web sitesi (`index.html`) hiçbir kayıp olmadan `ana-sayfa.html` olarak arşivlendi ve erişilebilir tutuldu.
- **Railway ve Üretim Sunucusu Yapılandırması (`server.js`, `package.json`, `Procfile`):**
  - Harici paket bağımlılığı gerektirmeyen (zero-dependency) saf Node.js HTTP statik dosya sunucusu kodlandı.
  - Railway `$PORT` ortam değişkeni, health check (`/health`), MIME tipleri ve statik dosya önbellekleme (Cache-Control) destekleri eklendi.
  - `/ana-sayfa`, `/anasayfa` ve `/preview` URL yönlendirmeleri tanımlandı.
- **GitHub Versiyon Kontrolü:**
  - Proje Git versiyon kontrolüne alındı ve `https://github.com/yilmazgorkem/antepli-veysel-usta` reposuna aktarıldı.
- **Fiziksel Konum, İnteraktif Harita ve Adres Aksiyonları (`index.html`, `css/style.css`, `js/site.js`):**
  - Dükkânın fiziksel açık adresi sisteme entegre edildi: `Büyükesat Mahallesi, Mahatma Gandhi Caddesi, No: 68/8, 06680 Çankaya / Ankara`.
  - Editoryal tasarıma uygun, altın dokulu kenarlıklara sahip iki sütunlu "Konum & Ulaşım" vitrini kurgulandı.
  - Ziyaretçilerin tek tıkla navigasyona geçmesi için "Yol Tarifi Al" (Google Haritalar API) ve "Google Haritalar" dış bağlantıları eklendi.
  - JavaScript destekli, panoya kopyalama ve anlık durum bildirimi ("Adres Kopyalandı ✓") sunan "Adresi Kopyala" butonu geliştirildi.
  - Açık kaynaklı, gizlilik dostu ve hafif OpenStreetMap interaktif harita çerçevesi dükkân koordinatları (`39.89155, 32.87547`) ile sayfaya gömüldü.
  - Arama motoru optimizasyonu (Local SEO) için Schema.org `Store` verisine `PostalAddress` ve `GeoCoordinates` alanları eklendi.
  - Sayfa altbilgisine (`.site-footer`) dükkânın tam açık adresi yerleştirildi.

### Eklenecekler
- Dükkân içi genel görünüm fotoğrafı (`images/dukkan.jpg`).
- WhatsApp üzerinden doğrudan esnafa ulaşma ve hızlı sipariş hattı butonu.
- Ürün gramaj ve çeşitlilik bilgilerini içeren genişletilmiş liste.

### Değiştirilenler
- **Minimalist "Sitemiz Yapım Aşamasındadır" Görünümü (`index.html`):**
  - Kullanıcı talebi doğrultusunda açılış sayfası yalnızca dikey ve yatay olarak ortalanmış "Sitemiz Yapım Aşamasındadır" metnini içerecek şekilde sadeleştirildi. Tüm ekstra bileşenler kaldırıldı; marka kimliğine özgü Cormorant Garamond tipografisi ve sıcak kâğıt arka plan tonu korundu.
- **Hero Başlık Tipografisi ve Satır Yüksekliği (`ana-sayfa.html`, `css/style.css`):**
  - Ana vitrin başlığı marka kimliğine uygun olarak "Antepli" ve "Veysel Usta" (`Antepli<br />Veysel Usta`) şeklinde iki satıra ayrıldı.
  - Serif yazı tipindeki (Cormorant Garamond) "p" harfinin kuyruğu (descender) ile "l" harfinin üst uzantısının (ascender) birbirine temas etmesini önlemek amacıyla `h1` için `line-height: 1.16` tanımlanarak harfler arası nefes alanı açıldı.

---

## [0.1.0] - 2026-10-05

### Eklenenler
- **İlk Taslak ve Sayfa İskeleti (`index.html`):**
  - Antepli Veysel Usta dükkân kimliği için tek sayfalık (single-page) semantik HTML5 yapısı kuruldu.
  - "Hoş Geldiniz" Hero vitrin alanı, dükkânın üç hali bilgi bandı, "Tezgâhta" ürün kartları, "Hakkımızda" hikâye anlatımı ve "Konum" bölümleri hazırlandı.
  - SEO uyumlu meta başlıkları, meta açıklaması ve Google için Schema.org `Store` JSON-LD yapısal verisi tanımlandı.
  - Klavye kullanıcıları için `#icerik` atlama bağlantısı (`skip-link`) eklendi.
- **Tasarım Sistemi ve Stil Sayfası (`css/style.css`):**
  - Geleneksel çarşı dokusunu yansıtan renk paleti oluşturuldu (terakota, derin mürekkep, kâğıt, zeytin ve pirinç sarısı).
  - Google Fonts üzerinden Cormorant Garamond, Outfit ve Caveat yazı tipleri projeye dahil edildi.
  - Masaüstü, tablet ve mobil cihazlar için esnek Grid ve Flexbox düzenleri kurgulandı.
  - Dükkân mühür rozeti (`.seal`) ve passe-partout fotoğraf çerçevesi (`.mat`) stilleri kodlandı.
- **İnteraktif Script ve Dinamik Görsel Motoru (`js/site.js`):**
  - Mobil cihazlarda ekran alanını verimli kullanan açılır/kapanır navigasyon menüsü (`.nav-toggle`) kodlandı.
  - `data-photo` özniteliği üzerinden asenkron çalışan, çoklu format uzantılarını (`.jpg`, `.jpeg`, `.png`, `.webp`) sırayla deneyen akıllı görsel yükleyici geliştirildi.
  - Fotoğraf henüz eklenmemişse şık bir monogram (`VU`, `B`, `K`, `AV`) ve dosya ipucu sunan dinamik fallback yapısı entegre edildi.
- **Görsel Varlıklar ve Favicon (`images/`, `favicon.svg`):**
  - Proje köküne SVG formatında vektörel dükkân monogram favicon'u (`favicon.svg`) eklendi.
  - Dükkânın vitrin (`images/vitrin.jpg`), kuru bakliyat (`images/bakliyat.jpg`) ve kuruyemiş (`images/kuruyemis.jpg`) gerçek fotoğrafları projeye bağlandı.
- **Dokümantasyon:**
  - Kapsamlı proje rehberi ve geliştirici kılavuzu (`README.md`) hazırlandı.
  - Proje sürüm takip günlüğü (`CHANGELOG.md`) başlatıldı.

### Değiştirilenler / Düzeltilenler
- **Görsel İsimlendirme ve Uyumluluk Optimizasyonu:**
  - `images/` dizinine eklenen dosyalardaki boşluklu (`kuru bakliyat.jpg`) ve Türkçe karakterli (`kuruyemiş.jpg`) isimlendirmeler, tüm statik sunucular ve Linux tabanlı CDN ortamları ile tam uyumlu olacak biçimde standart `bakliyat.jpg` ve `kuruyemis.jpg` olarak kopyalandı ve `site.js` arama sırasıyla eşleştirildi.
  - Vitrin, bakliyat ve kuruyemiş kartlarının görselleri başarıyla tezgâhta yerini aldı.

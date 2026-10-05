# Değişiklik Günlüğü (Changelog)

Bu projedeki tüm önemli değişiklikler bu dosyada belgelenmektedir.

Format, [Keep a Changelog](https://keepachangelog.com/tr/1.0.0/) standardına dayanmakta olup, [SemVer](https://semver.org/lang/tr/) (Anlamsal Sürümleme) kurallarını takip eder.

---

## [Yayınlanmamış] - [Unreleased]

### Eklenenler
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
- **Hero Başlık Tipografisi ve Satır Yüksekliği (`index.html`, `css/style.css`):**
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

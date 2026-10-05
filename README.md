# Antepli Veysel Usta — Kuru Bakliyat ve Kuruyemiş

Antepli Veysel Usta kuru bakliyat ve kuruyemiş dükkânı için hazırlanmış, geleneksel esnaf sıcaklığını modern ve zarif bir editoryal tasarım diliyle buluşturan kurumsal web sitesi.

---

## 📌 İçindekiler

- [Öne Çıkan Özellikler](#-öne-çıkan-özellikler)
- [Tasarım ve Tipografi Felsefesi](#-tasarım-ve-tipografi-felsefesi)
- [Dizin ve Dosya Yapısı](#-dizin-ve-dosya-yapısı)
- [Görsel Sistemi ve Dosya Standartları](#-görsel-sistemi-ve-dosya-standartları)
- [Yerel Geliştirme (Local Development)](#-yerel-geliştirme-local-development)
- [Canlıya Alma ve Dağıtım (Deployment)](#-canlıya-alma-ve-dağıtım-deployment)
- [SEO ve Yapısal Veri (Schema.org)](#-seo-ve-yapısal-veri-schemaorg)
- [Yol Haritası (Roadmap)](#-yol-haritası-roadmap)

---

## ✨ Öne Çıkan Özellikler

- **Sıfır Bağımlılık (Zero-Dependency):** Harici kütüphane veya ağır framework'ler içermez; saf HTML5, modern Vanilla CSS ve hafif JavaScript ile ışık hızında yüklenir.
- **Duyarlı (Responsive) Tasarım:** Masaüstü, tablet ve mobil cihaz ekranlarında kusursuz hiyerarşi ve düzen.
- **Akıllı Görsel Yükleyici:** `data-photo` özniteliği ile görselleri kademeli olarak dener (`.jpg`, `.jpeg`, `.png`, `.webp`). Henüz görseli bulunmayan alanlar için zarif monogram yedekler (fallback badge) gösterir.
- **Erişilebilirlik ve Semantik Yapı:** Doğru başlık hiyerarşisi (`h1`-`h3`), klavye erişimi için atlama bağlantısı (`skip-link`), `aria-expanded` ile desteklenen mobil menü.
- **SEO Uyumlu:** Açıklayıcı meta etiketleri, tema rengi (`theme-color`) ve Schema.org uyumlu yapılandırılmış veri entegrasyonu.

---

## 🎨 Tasarım ve Tipografi Felsefesi

Sitenin görsel dili, kuru bakliyat çuvallarının, kavrulmuş kuruyemiş tezgâhlarının ve Antep çarşı esnafının samimi dokusundan ilham alır:

- **Renk Paleti:**
  - **Mürekkep (`--ink`):** Derin kahve tonu (`#2c1c12`)
  - **Terakota (`--terracotta`):** Sıcak toprak/kiremit kırmızısı (`#9a3f28`)
  - **Krem & Kâğıt (`--cream`, `--paper`):** Göz yormayan doğal fon (`#f6f0e6`, `#fbf7f1`)
  - **Zeytin (`--olive`):** Doğallığı simgeleyen koyu zeytin yeşili (`#3f4a2e`)
  - **Altın (`--gold`, `--gold-soft`):** Antik pirinç terazi ve mühür dokunuşları (`#a68448`, `#d7c4a0`)
- **Tipografi:**
  - *Başlıklar ve Vurgular:* **Cormorant Garamond** (Klasik editoryal zarafet)
  - *Gövde Metinleri:* **Outfit** (Yüksek okunabilirlik sunan modern sans-serif)
  - *Samimi Notlar:* **Caveat** (El yazısı dokusu)

---

## 📁 Dizin ve Dosya Yapısı

```plaintext
antepli veysel usta/
├── index.html          # Sayfa iskeleti, semantik bölümler ve yapısal veri
├── favicon.svg         # Vektörel monogram (VU) dükkân ikonu
├── README.md           # Proje tanıtımı ve geliştirici kılavuzu
├── CHANGELOG.md        # Sürüm ve değişiklik geçmişi
├── css/
│   └── style.css       # Tasarım sistemi, CSS değişkenleri, responsive ızgara
├── js/
│   └── site.js         # Mobil menü kontrolü ve akıllı görsel yükleme motoru
└── images/             # Dükkân ve ürün fotoğrafları
    ├── vitrin.jpg      # Tezgâh/vitrin ana dikey görseli (Hero alanı)
    ├── bakliyat.jpg    # Kuru bakliyat kartı fotoğrafı
    ├── kuruyemis.jpg   # Kuruyemiş kartı fotoğrafı
    └── dukkan.jpg      # (Opsiyonel / Hakkımızda bölümü dükkân fotoğrafı)
```

---

## 🖼 Görsel Sistemi ve Dosya Standartları

Sitedeki fotoğraf çerçeveleri (`.shot`), `js/site.js` içerisindeki dinamik yükleyici ile çalışır:

1. **İsimlendirme ve Eşleşme:**
   - Hero tezgâh fotoğrafı: `images/vitrin.jpg` (`data-photo="images/vitrin"`)
   - Bakliyat kartı: `images/bakliyat.jpg` (`data-photo="images/bakliyat"`)
   - Kuruyemiş kartı: `images/kuruyemis.jpg` (`data-photo="images/kuruyemis"`)
   - Dükkân içi fotoğrafı: `images/dukkan.jpg` (`data-photo="images/dukkan"`)

2. **Otomatik Uzantı Çözümleme:**
   Görsel yükleyici sırasıyla `.jpg` ➔ `.jpeg` ➔ `.png` ➔ `.webp` uzantılarını test eder. Görsel bulunduğunda çerçeveye `has-photo` sınıfı eklenir ve fotoğraf yumuşak bir biçimde tezgâha yerleşir.

3. **Yedek Kart (Placeholder Fallback):**
   Eğer görsel henüz yüklenmemişse (örneğin henüz çekilmemiş bir `dukkan.jpg` için), kullanıcıya kırık görsel ikonu yerine şık bir monogram (`VU`, `B`, `K`, `AV`) ve dosya ipucu içeren özel çerçeve gösterilir.

> [!TIP]
> **Web Standartları Uyarısı:** Görselleri `images/` klasörüne eklerken dosya adlarında boşluk veya Türkçe karakter (ör. `ş`, `ı`, `ğ`) kullanmamak, tüm statik web sunucularında (Linux/CDN/Pages) bağlantı kopmalarını önler. Örn: `kuruyemis.jpg` ve `bakliyat.jpg`.

---

## 🚀 Yerel Geliştirme (Local Development)

Projeyi bilgisayarınızda çalıştırmak için herhangi bir derleme aracına (build tool) ihtiyaç yoktur.

### Yöntem 1: Python ile Basit Sunucu (Önerilen)
Terminali proje kök dizininde açın ve çalıştırın:
```bash
python3 -m http.server 8000
```
Tarayıcınızda açın: `http://localhost:8000`

### Yöntem 2: Node.js / npx serve
```bash
npx serve .
```

### Yöntem 3: Doğrudan Tarayıcıda Açma
Doğrudan `index.html` dosyasını favori tarayıcınızla açabilirsiniz (Görsel asenkron isteklerinin sorunsuz çalışması için yerel bir HTTP sunucusu üzerinden açılması tavsiye edilir).

---

## 🌐 Canlıya Alma ve Dağıtım (Deployment)

Proje tamamen statik olduğu için dilediğiniz platformda ücretsiz ve tek tıkla yayınlanabilir:

- **GitHub Pages:** Depoyu GitHub'a yükleyip *Settings > Pages* altından ana dalı (`main`) seçerek anında yayına alabilirsiniz.
- **Cloudflare Pages / Vercel / Netlify:** Proje klasörünü sürükleyip bırakarak veya git deposunu bağlayarak sıfır konfigürasyon ile yayına alabilirsiniz.
- **Geleneksel Hosting (cPanel / Nginx / Apache):** Klasördeki tüm dosyaları sunucunuzun `public_html` dizinine yüklemeniz yeterlidir.

---

## 🔍 SEO ve Yapısal Veri (Schema.org)

`index.html` içerisinde arama motorlarının (Google, Yandex vb.) dükkânı yerel işletme olarak doğru tanıması ve yerel aramalarda (Local SEO) öne çıkması için Schema.org `Store` formatında JSON-LD yapısal verisi bulunmaktadır:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Antepli Veysel Usta",
  "url": "https://antepliveyselusta.com",
  "description": "Kuru bakliyat ve kuruyemiş dükkânı.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mahatma Gandhi Caddesi No:68/8",
    "addressLocality": "Çankaya",
    "addressRegion": "Ankara",
    "postalCode": "06680",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.89155,
    "longitude": 32.87547
  }
}
</script>
```

---

## 🗺 Yol Haritası (Roadmap)

- [x] Temel sayfa düzeni, renk paleti ve tipografik kimlik
- [x] Dinamik görsel yükleyici ve tezgâh kartları
- [x] Tezgâh, bakliyat ve kuruyemiş orijinal fotoğraflarının entegrasyonu
- [x] Konum bölümüne tam açık adres, yol tarifi ve harita entegrasyonu (Büyükesat Mah. Mahatma Gandhi Cad. No:68/8, Çankaya/Ankara)
- [x] Tek tıkla adres kopyalama ve doğrudan harita navigasyon bağlantıları
- [ ] Dükkân içi (`images/dukkan.jpg`) fotoğrafının temini ve yerleştirilmesi
- [ ] Hızlı sipariş ve iletişim için doğrudan WhatsApp yönlendirme butonu
- [ ] Güncel bakliyat & kuruyemiş ürün ve fiyat listesi modülü

# Antepli Veysel Usta — İnşaat, Taahhüt ve Kurumsal Toptan Tedarik

Antepli Veysel Usta kurumsal kimliği için hazırlanmış; büyük ölçekli inşaat ve taahhüt projeleri ile kamu kurumları, yemekhaneler, oteller ve endüstriyel üretim tesislerine yönelik toptan kuru bakliyat ve kuruyemiş tedariğini sunan prestijli kurumsal web sitesi.

> [!IMPORTANT]
> **Kurumsal Satış Politikası:** Firma **yalnızca B2B (Kurumsal Toptan Satış ve Taahhüt)** odaklıdır. Bireysel perakende satış yapılmamaktadır.

---

## 📌 İçindekiler

- [Öne Çıkan Özellikler](#-öne-çıkan-özellikler)
- [Tasarım ve Tipografi Felsefesi](#-tasarım-ve-tipografi-felsefesi)
- [Dizin ve Dosya Yapısı](#-dizin-ve-dosya-yapısı)
- [Görsel ve Medya Sistemi](#-görsel-ve-medya-sistemi)
- [Yerel Geliştirme (Local Development)](#-yerel-geliştirme-local-development)
- [Canlıya Alma ve Dağıtım (Deployment)](#-canlıya-alma-ve-dağıtım-deployment)
- [SEO ve Yapısal Veri (Schema.org)](#-seo-ve-yapısal-veri-schemaorg)
- [Yol Haritası (Roadmap)](#-yol-haritası-roadmap)

---

## ✨ Öne Çıkan Özellikler

- **Çift Odaklı Kurumsal Yapı:**
  - **Büyük İnşaat & Taahhüt Projeleri:** Yüksek katlı iş merkezleri, rezidanslar, plazalar ve ağır lojistik kompleksleri içeren mimari vitrin galerisi.
  - **Kurumsal Toptan Gıda Tedariği:** Fabrikalar, yemek sanayileri ve kamu kurumları için tonajlı kuru bakliyat ve endüstriyel kuruyemiş sevkiyatı.
- **Zenginleştirilmiş Ürün Kataloğu:** 14 farklı stüdyo kalitesinde ürün kartı (Kırmızı/Yeşil mercimek, nohut, fasulye, pirinç, Antep fıstığı çeşitleri, fındık, ceviz, kuru meyveler vb.).
- **Toptan Sevkiyat & Ambalajlama Standartları:** 25 Kg lamine çuval, 50 Kg jüt/PP çuval, 1.000 Kg big-bag ve paletli tır sevkiyatı lojistik göstergeleri.
- **Sıfır Bağımlılık (Zero-Dependency) & Yüksek Performans:** Ağır JavaScript kütüphanelerine ihtiyaç duyulmaz; saf HTML5, Vanilla CSS ve hafif JavaScript ile milisaniyeler içinde yüklenir.
- **Yerleşik Node.js Sunucusu:** Railway, Render ve bulut platformları için sıfır bağımlılıklı yerel HTTP sunucusu (`server.js`), sağlık kontrolü (`/health`) ve otomatik mime-type yönetimi.
- **Tam Duyarlı (Responsive) Tasarım:** Masaüstü, tablet ve mobil cihaz ekranlarında kusursuz hiyerarşi, dengeli tipografi ve akıcı kullanıcı deneyimi.
- **Erişilebilirlik ve Semantik Standartlar:** Atlama bağlantısı (`skip-link`), semantik HTML5 etiketleri (`<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`) ve mobil menü için ARIA desteği.

---

## 🎨 Tasarım ve Tipografi Felsefesi

Sitenin görsel dili, Gaziantep esnaf kültürünün köklü güvenini modern mimari disiplin ve editoryal kurumsal zarafetle birleştirir:

- **Renk Paleti:**
  - **Mürekkep (`--ink`):** Derin kahve tonu (`#2c1c12`, `#24160e`)
  - **Terakota (`--terracotta`):** Sıcak toprak/kiremit kırmızısı (`#9a3f28`)
  - **Krem & Kâğıt (`--cream`, `--paper`):** Göz yormayan doğal arka plan dokusu (`#f6f0e6`, `#fbf7f1`)
  - **Zeytin (`--olive`):** Doğallık ve bereketi simgeleyen zeytin yeşili (`#3f4a2e`)
  - **Altın (`--gold`, `--gold-soft`):** Prestijli pirinç ve mühür dokunuşları (`#a68448`, `#d7c4a0`)
- **Tipografi:**
  - *Başlıklar ve Vurgular:* **Cormorant Garamond** (Klasik editoryal zarafet ve güven)
  - *Gövde Metinleri:* **Outfit** (Yüksek okunabilirlik sunan çağdaş sans-serif)
  - *Kurumsal İmzalar:* **Caveat** (Zanaatkâr dokunuşu)

---

## 📁 Dizin ve Dosya Yapısı

```plaintext
antepli veysel usta/
├── index.html                 # Canlı ana sayfa (İnşaat, taahhüt ve toptan tedarik vitrini)
├── _taslak_ana-sayfa.html     # Ana sayfa yedek/geliştirme şablonu
├── yapim-asamasinda.html     # Bakım/yapım aşamasında bilgilendirme sayfası
├── server.js                  # Bağımsız Node.js statik web ve sağlık kontrol sunucusu
├── Procfile                   # Bulut dağıtım (Railway/Heroku) proses tanımlayıcısı
├── package.json               # Node.js motor gereksinimleri ve başlangıç komutları
├── favicon.svg                # Vektörel monogram (VU) amblemi
├── README.md                  # Proje tanıtımı ve geliştirici kılavuzu
├── CHANGELOG.md               # Sürüm ve değişiklik günlüğü
├── css/
│   └── style.css              # Tasarım sistemi, responsive kurallar, mimari ve ürün ızgaraları
├── js/
│   └── site.js                # Mobil navigasyon kontrolü, History API ve pürüzsüz kaydırma motoru
└── images/                    # Yüksek çözünürlüklü medya arşivi
    ├── logo-emblem.svg        # Vektörel kurumsal logo amblemi
    ├── insaat-kule.jpg        # Prestij Konut & Kule projesi fotoğrafı
    ├── insaat-plaza.jpg       # İş Merkezi & Plaza projesi fotoğrafı
    ├── insaat-rezidans.jpg    # Vadi Konakları & Rezidans projesi fotoğrafı
    ├── insaat-santiye.jpg     # Ağır Şantiye & Taahhüt projesi fotoğrafı
    ├── toptan-depo.jpg        # Toptan gıda lojistik deposu görseli
    ├── vitrin.jpg             # Kurumsal kahraman alanı vitrin fotoğrafı
    ├── bakliyat.jpg           # Toptan kuru bakliyat genel görseli
    ├── kuruyemis.jpg          # Toptan kuruyemiş genel görseli
    └── [ürün fotoğrafları]     # 14 adet stüdyo ürün fotoğrafı (.jpg)
```

---

## 🖼 Görsel ve Medya Sistemi

Sitedeki tüm görseller yüksek çözünürlükte optimize edilmiştir:

1. **İnşaat & Taahhüt Portföyü:**
   - `images/insaat-kule.jpg`: Kule ve prestij konut projeleri
   - `images/insaat-plaza.jpg`: Finans merkezi ve plaza projeleri (`object-position: center top` hizalamalı)
   - `images/insaat-rezidans.jpg`: Karma yaşam ve vadi rezidansları
   - `images/insaat-santiye.jpg`: Ağır şantiye, lojistik ve fabrika taahhütleri

2. **Toptan Ürün Kataloğu (14 Çeşit):**
   - **Bakliyat:** `kirmizi-mercimek.jpg`, `yesil-sari-mercimek.jpg`, `kocbasi-nohut.jpg`, `kuru-fasulye.jpg`, `baldo-pirinc.jpg`, `gaziantep-bulgur.jpg`, `barbunya-misir-bugday.jpg`
   - **Kuruyemiş:** `kavrulmus-antep-fistigi.jpg`, `boz-ic-fistik.jpg`, `cig-kiyilmis-fistik.jpg`, `ic-findik.jpg`, `ceviz-badem-ici.jpg`, `kayisi-kuru-incir.jpg`, `kuru-uzum-cekirdek.jpg`

3. **Lojistik ve Tesis Görselleri:**
   - `images/toptan-depo.jpg`: Endüstriyel gıda saklama ve paketleme tesisi
   - `images/vitrin.jpg`: Kurumsal giriş vitrini

---

## 🚀 Yerel Geliştirme (Local Development)

Proje herhangi bir derleme aracına (Webpack, Vite vb.) ihtiyaç duymadan çalışır.

### Yöntem 1: Yerleşik Node.js Sunucusu (Önerilen)
Node.js ortamında doğrudan yerleşik sunucuyu çalıştırabilirsiniz:
```bash
npm start
# veya: node server.js
```
Tarayıcınızda açın: `http://localhost:8080`

### Yöntem 2: Python ile Hızlı Sunucu
```bash
python3 -m http.server 8000
```
Tarayıcınızda açın: `http://localhost:8000`

### Yöntem 3: Doğrudan Tarayıcıda Açma
Doğrudan `index.html` dosyasına çift tıklayarak favori tarayıcınızda görüntüleyebilirsiniz.

---

## 🌐 Canlıya Alma ve Dağıtım (Deployment)

Proje hem modern PaaS/IaaS platformlarında hem de geleneksel statik barındırma alanlarında sorunsuz çalışır:

- **Railway / Render:**
  - Depo bağlandığında `Procfile` veya `npm start` komutu otomatik algılanır.
  - `/health` ve `/healthz` uç noktaları sayesinde sağlık kontrolleri anında doğrulanır.
- **Cloudflare Pages / Vercel / Netlify / GitHub Pages:**
  - Proje kök dizini doğrudan yayınlanabilir; ek ayar gerektirmez.
- **Geleneksel Hosting (cPanel / Apache / Nginx):**
  - Dosyaların tamamını sunucunuzun `public_html` dizinine yüklemeniz yeterlidir.

---

## 🔍 SEO ve Yapısal Veri (Schema.org)

`index.html` içerisinde arama motorlarının (Google, Yandex vb.) firmayı ana yüklenici ve toptan tedarikçi olarak dizine eklemesi için Schema.org `GeneralContractor` standardında JSON-LD yapısal verisi bulunmaktadır:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Antepli Veysel Usta — İnşaat, Taahhüt ve Toptan Tedarik",
  "url": "https://antepliveyselusta.com",
  "description": "Büyük ölçekli konut ve ticari inşaat taahhüt projeleri ile kurumsal toptan kuru bakliyat ve kuruyemiş tedariği.",
  "email": "info@antepliveyselusta.com",
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

- [x] Temel sayfa düzeni, renk paleti ve tipografik kurumsal kimlik
- [x] Büyük İnşaat & Taahhüt Projeleri vitrini (Kule, Plaza, Rezidans, Şantiye)
- [x] Kurumsal Toptan Gıda ve Sevkiyat Standartları (Çuval, Big-Bag, Paletli Tır akışı)
- [x] Toptan Kuru Bakliyat ve Kuruyemiş derin ürün katalogları (14 stüdyo fotoğrafı)
- [x] Kalite, hijyen ve gıda güvenliği standartları (ISO 9001, ISO 22000, Helal Sertifikası)
- [x] Temiz URL yapısı, logo bağlantısının `/#ust` çapasından arındırılması ve History API entegrasyonu
- [x] Üst bildirim şeridi ve mobil ekran optimizasyonları
- [x] Proje kartlarının minimalist mimari fotoğraf galerisine dönüştürülmesi
- [x] Kurumsal metrik kutuları CSS hizalama ve merkezleme iyileştirmeleri
- [ ] Kurumsal toptan teklif talep formu (Online RFQ modülü)
- [ ] İndirilebilir PDF ürün kataloğu ve teknik şartname dökümanları

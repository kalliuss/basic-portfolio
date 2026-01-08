# Portfolio Website - Kaan Bilgili

A modern, responsive portfolio website showcasing skills, experience, and projects. Built with vanilla web technologies and enhanced with AI assistance.

[YouTube-video](https://youtu.be/EkpK0CF1juI)
## 🌐 Languages / Diller

- [English](#english)
- [Türkçe](#türkçe)

---

## English

### 📋 Project Overview

This is a single-page portfolio website featuring a clean, modern design with dark/light mode toggle, interactive skill icons, and an automated project slider. The project was developed using vanilla HTML, CSS, and JavaScript, with design assistance from AI through Cursor IDE's vibe coding feature.

### 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with preference saved in localStorage
- **Interactive Skills Section**: Animated skill icons with hover effects and tooltips
- **Project Slider**: Automated carousel displaying projects with manual navigation controls
- **Smooth Animations**: GPU-accelerated animations for optimal performance
- **Performance Optimized**: Optimized for fast loading and smooth scrolling

### 🛠️ Technologies Used

#### Core Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with Flexbox, animations, and responsive design
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity

#### External Libraries (CDN)
- **Bootstrap 5.3.8**: CSS framework for grid system and utilities
- **Font Awesome 5.2.0**: Icon library for social media and technology icons

#### Web APIs
- **LocalStorage API**: For saving theme preferences
- **DOM API**: For DOM manipulation and event handling

### 📁 Project Structure

```
basic-portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── img/                # Image assets
    ├── habit-project.png
    ├── java.png
    ├── sas-logo.png
    └── todo-app.png
```

### 🎨 Design & Development Process

#### AI-Assisted Development

This project was developed with the assistance of **Cursor IDE** and its **vibe coding** feature, which allowed for:

- **Visual Design Iteration**: The entire visual design was created and refined through AI-powered suggestions in Cursor
- **Code Generation**: CSS styling, JavaScript functionality, and HTML structure were generated with AI assistance
- **Performance Optimization**: AI helped identify and fix performance issues, including:
  - Removing heavy backdrop-filter effects
  - Implementing GPU acceleration
  - Optimizing scroll performance
  - Adding CSS containment for better rendering

#### Development Workflow

1. **Initial Setup**: Basic HTML structure created
2. **AI-Assisted Design**: Used Cursor's vibe coding to generate and refine CSS styles
3. **Interactive Features**: JavaScript functionality added with AI suggestions
4. **Performance Tuning**: AI-assisted optimization for smooth scrolling and fast loading
5. **Code Organization**: CSS extracted to separate file for better maintainability

### 📝 File Descriptions

- **index.html**: Main HTML structure with semantic markup
- **styles.css**: Complete CSS stylesheet including:
  - Layout and responsive design
  - Dark mode styles
  - Animations and transitions
  - Skill icons styling
- **script.js**: JavaScript functionality including:
  - Project slider/carousel logic
  - Dark/light mode toggle
  - Event handlers

### 🎯 Key Features Explained

#### Dark/Light Mode
- Toggle button in bottom-right corner
- Preference saved in browser's localStorage
- Smooth transition between themes

#### Project Slider
- Automatically cycles through projects every 5 seconds
- Manual navigation with arrow buttons
- Pauses on hover

#### Skills Section
- Interactive icons with hover animations
- Tooltips showing technology names
- Color-coded icons for each technology

### 🔧 Customization

#### Changing Colors
Edit the color variables in `styles.css`:
- Primary color: `#667eea`
- Secondary color: `#764ba2`
- Dark mode background: `#1a202c`

#### Adding Projects
Edit the `cards` array in `script.js`:
```javascript
const cards = [
    {
        name: "Project Name",
        image: "img/project-image.png",
        link: "https://github.com/username/project"
    },
    // Add more projects...
];
```

#### Adding Skills
Add new skill items in `index.html` within the `.skills-container`:
```html
<div class="skill-item skillname" data-tooltip="Skill Name">
    <i class="fab fa-icon-class"></i>
    <span>Skill Name</span>
</div>
```

### 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 📄 License

This project is open source and available for personal use.

### 👤 Author

**Kaan Bilgili**
- Email: kalliusdev@gmail.com
- GitHub: [@kalliuss](https://github.com/kalliuss)
- LinkedIn: [Hüseyin Kaan Bilgili](https://www.linkedin.com/in/hüseyin-kaan-bilgili-34b9592a4)

---

## Türkçe

### 📋 Proje Özeti

Bu, temiz ve modern bir tasarıma sahip, karanlık/aydınlık mod geçişi, etkileşimli yetenek ikonları ve otomatik proje kaydırması içeren tek sayfalık bir portföy web sitesidir. Proje, vanilla HTML, CSS ve JavaScript kullanılarak geliştirilmiş olup, görsel tasarım Cursor IDE'nin vibe coding özelliği ile yapay zeka yardımıyla yapılmıştır.

### 🚀 Özellikler

- **Responsive Tasarım**: Tüm cihazlarda çalışan tam responsive düzen
- **Karanlık/Aydınlık Mod**: LocalStorage'da tercih kaydedilen tema geçişi
- **Etkileşimli Yetenekler Bölümü**: Hover efektleri ve tooltip'lerle animasyonlu yetenek ikonları
- **Proje Kaydırması**: Manuel navigasyon kontrolleriyle otomatik proje gösterimi
- **Akıcı Animasyonlar**: Optimal performans için GPU hızlandırmalı animasyonlar
- **Performans Optimizasyonu**: Hızlı yükleme ve akıcı kaydırma için optimize edilmiş

### 🛠️ Kullanılan Teknolojiler

#### Temel Teknolojiler
- **HTML5**: Semantik işaretleme ve yapı
- **CSS3**: Flexbox, animasyonlar ve responsive tasarım ile özel stillendirme
- **JavaScript (ES6+)**: Etkileşim için vanilla JavaScript

#### Harici Kütüphaneler (CDN)
- **Bootstrap 5.3.8**: Grid sistemi ve yardımcı sınıflar için CSS framework
- **Font Awesome 5.2.0**: Sosyal medya ve teknoloji ikonları için ikon kütüphanesi

#### Web API'leri
- **LocalStorage API**: Tema tercihlerini kaydetmek için
- **DOM API**: DOM manipülasyonu ve event handling için

### 📁 Proje Yapısı

```
basic-portfolio/
├── index.html          # Ana HTML dosyası
├── styles.css          # Tüm CSS stilleri
├── script.js           # JavaScript fonksiyonları
├── README.md           # Proje dokümantasyonu
└── img/                # Görsel dosyalar
    ├── habit-project.png
    ├── java.png
    ├── sas-logo.png
    └── todo-app.png
```

### 🎨 Tasarım & Geliştirme Süreci

#### Yapay Zeka Destekli Geliştirme

Bu proje **Cursor IDE** ve **vibe coding** özelliği ile yapay zeka yardımıyla geliştirilmiştir:

- **Görsel Tasarım İterasyonu**: Tüm görsel tasarım, Cursor'da yapay zeka destekli önerilerle oluşturuldu ve geliştirildi
- **Kod Üretimi**: CSS stillendirme, JavaScript fonksiyonları ve HTML yapısı yapay zeka yardımıyla oluşturuldu
- **Performans Optimizasyonu**: Yapay zeka performans sorunlarını tespit etmeye ve düzeltmeye yardımcı oldu:
  - Ağır backdrop-filter efektlerinin kaldırılması
  - GPU hızlandırmasının uygulanması
  - Scroll performansının optimize edilmesi
  - Daha iyi render için CSS containment eklenmesi

#### Geliştirme İş Akışı

1. **İlk Kurulum**: Temel HTML yapısı oluşturuldu
2. **Yapay Zeka Destekli Tasarım**: CSS stillerini oluşturmak ve geliştirmek için Cursor'un vibe coding özelliği kullanıldı
3. **Etkileşimli Özellikler**: Yapay zeka önerileriyle JavaScript fonksiyonları eklendi
4. **Performans Ayarlaması**: Akıcı kaydırma ve hızlı yükleme için yapay zeka destekli optimizasyon
5. **Kod Organizasyonu**: Daha iyi bakım için CSS ayrı dosyaya çıkarıldı

### 📝 Dosya Açıklamaları

- **index.html**: Semantik işaretleme ile ana HTML yapısı
- **styles.css**: Tüm CSS stilleri içeren dosya:
  - Düzen ve responsive tasarım
  - Karanlık mod stilleri
  - Animasyonlar ve geçişler
  - Yetenek ikonları stillendirmesi
- **script.js**: JavaScript fonksiyonları:
  - Proje kaydırması/kaydırma mantığı
  - Karanlık/aydınlık mod geçişi
  - Event handler'lar

### 🎯 Temel Özellikler Açıklaması

#### Karanlık/Aydınlık Mod
- Sağ alt köşede geçiş butonu
- Tercih tarayıcının localStorage'ında kaydedilir
- Temalar arasında akıcı geçiş

#### Proje Kaydırması
- Her 5 saniyede bir projeleri otomatik olarak döngüye alır
- Ok butonlarıyla manuel navigasyon
- Hover'da duraklatma

#### Yetenekler Bölümü
- Hover animasyonlarıyla etkileşimli ikonlar
- Teknoloji isimlerini gösteren tooltip'ler
- Her teknoloji için renk kodlu ikonlar

### 🔧 Özelleştirme

#### Renkleri Değiştirme
`styles.css` dosyasındaki renk değişkenlerini düzenleyin:
- Birincil renk: `#667eea`
- İkincil renk: `#764ba2`
- Karanlık mod arka planı: `#1a202c`

#### Proje Ekleme
`script.js` dosyasındaki `cards` dizisini düzenleyin:
```javascript
const cards = [
    {
        name: "Proje Adı",
        image: "img/proje-gorseli.png",
        link: "https://github.com/kullaniciadi/proje"
    },
    // Daha fazla proje ekleyin...
];
```

#### Yetenek Ekleme
`index.html` dosyasındaki `.skills-container` içine yeni yetenek öğeleri ekleyin:
```html
<div class="skill-item yetenekadi" data-tooltip="Yetenek Adı">
    <i class="fab fa-ikon-sinifi"></i>
    <span>Yetenek Adı</span>
</div>
```

### 📱 Tarayıcı Desteği

- Chrome (en son sürüm)
- Firefox (en son sürüm)
- Safari (en son sürüm)
- Edge (en son sürüm)

### 📄 Lisans

Bu proje açık kaynaklıdır ve kişisel kullanım için kullanılabilir.

### 👤 Yazar

**Kaan Bilgili**
- E-posta: kalliusdev@gmail.com
- GitHub: [@kalliuss](https://github.com/kalliuss)
- LinkedIn: [Hüseyin Kaan Bilgili](https://www.linkedin.com/in/hüseyin-kaan-bilgili-34b9592a4)

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen pull request göndermeden önce değişikliklerinizi açıklayan bir issue oluşturun.

## 📞 İletişim

Sorularınız veya önerileriniz için lütfen iletişime geçin.

---

**Not**: Bu proje, modern web teknolojileri ve yapay zeka destekli geliştirme araçları kullanılarak oluşturulmuştur. Tüm tasarım ve kod yapısı Cursor IDE'nin vibe coding özelliği ile optimize edilmiştir.





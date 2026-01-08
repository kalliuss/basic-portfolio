const cards = [
    {
        name: "Habit Tracker v1",
        image: "img/habit-project.png",
        link: "https://github.com/kalliuss/HabitTrack.JS-v1"
    },
    {
        name: "My-Sas-Documents",
        image: "img/sas-logo.png",
        link: "https://github.com/kalliuss/My-SaS-Documents"
    },
    {
        name: "Todo-App",
        image: "img/todo-app.png",
        link: "https://github.com/kalliuss/todo-app"
    },
    {
        name: "MyJavaProjects",
        image: "img/java.png",
        link: "https://github.com/kalliuss/myJavaProjects"
    }
];

let index = 0;
const slideCount = cards.length;
let interval = null;
const settings = {
    duration: 5000, // String yerine number
    random: false
};

// DOM elementlerini cache'le
const cardTitle = document.querySelector(".card-title");
const cardImage = document.querySelector(".card-img-top");
const cardLink = document.querySelector(".card-link");
const arrowLeft = document.querySelector(".fa-arrow-circle-left");
const arrowRight = document.querySelector(".fa-arrow-circle-right");
const arrowIcons = document.querySelectorAll(".fas");

// Sayfa yüklendiğinde başlat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init(settings));
} else {
    init(settings);
}

// Sol ok butonu
arrowLeft.addEventListener("click", function() {
    clearInterval(interval);
    index--;
    showSlide(index);
    init(settings);
});

// Sağ ok butonu
arrowRight.addEventListener("click", function() {
    clearInterval(interval);
    index++;
    showSlide(index);
    init(settings);
});

// Hover için tek bir event listener (daha performanslı)
arrowIcons.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
        clearInterval(interval);
    });
    
    item.addEventListener("mouseleave", function() {
        init(settings);
    });
});

function init(s) {
    // Önceki interval'i temizle (memory leak önleme)
    if (interval !== null) {
        clearInterval(interval);
    }

    interval = setInterval(function() {
        if (settings.random) {
            // Random index
            let prev = index;
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index === prev);
        } else {
            // Artan index
            index++;
            if (index >= slideCount) {
                index = 0;
            }
        }
        showSlide(index);
    }, s.duration);
}

function showSlide(i) {
    // Index sınırlarını kontrol et
    if (i < 0) {
        index = slideCount - 1;
    } else if (i >= slideCount) {
        index = 0;
    } else {
        index = i;
    }

    // DOM güncellemeleri (tek seferde)
    if (cardTitle) cardTitle.textContent = cards[index].name;
    if (cardImage) {
        cardImage.setAttribute("src", cards[index].image);
        cardImage.setAttribute("alt", cards[index].name);
    }
    if (cardLink) cardLink.setAttribute("href", cards[index].link);
}

// ============================================
// Dark/Light Mode Toggle Fonksiyonu
// ============================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// LocalStorage'dan tema tercihini yükle
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Tema değiştirme fonksiyonu
function toggleTheme() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Sayfa yüklendiğinde tema tercihini uygula
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTheme);
} else {
    loadTheme();
}

// Toggle butonuna event listener ekle
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

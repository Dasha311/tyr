document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        ru: {
            about: "О туре",
            tours: "Расписание туров",
            booking: "Бронирование",
            location: "Как нас найти",
            aboutTitle: "О ТУРЕ",
            aboutText: "Погрузитесь в первобытную казахскую степь, живите в юртах и готовьте еду на костре. Испытайте настоящую жизнь кочевников! Мы обещаем только незабываемые эмоции.",
            toursTitle: "РАСПИСАНИЕ ТУРОВ",
            bookingTitle: "Бронирование",
            labelName: "Имя:",
            labelEmail: "Email:",
            labelTour: "Выберите тур:",
            submit: "Отправить заявку",
            tour1: "1-дневный тур",
            tour3: "3-дневный тур",
            tour5: "5-дневный тур"
        },
        en: {
            about: "About the Tour",
            tours: "Tour Schedule",
            booking: "Booking",
            location: "How to Find Us",
            aboutTitle: "ABOUT THE TOUR",
            aboutText: "Immerse yourself in the primordial Kazakh steppe, live in yurts, and cook on an open fire. Experience the true life of nomads! We promise only unforgettable emotions.",
            toursTitle: "TOUR SCHEDULE",
            bookingTitle: "Booking",
            labelName: "Name:",
            labelEmail: "Email:",
            labelTour: "Choose a tour:",
            submit: "Submit Application",
            tour1: "1-day tour",
            tour3: "3-day tour",
            tour5: "5-day tour"
        },
        kz: {
            about: "Тур туралы",
            tours: "Турлар кестесі",
            booking: "Брондау",
            location: "Қалай табамыз",
            aboutTitle: "ТУР ТУРАЛЫ",
            aboutText: "Ежелгі қазақ даласына сүңгіп, киіз үйлерде тұрып, ашық отта тамақ пісіріңіз. Көшпенділердің нағыз өмірін сезініңіз! Біз тек ұмытылмас эмоциялар уәде етеміз.",
            toursTitle: "ТУРЛАР КЕСТЕСІ",
            bookingTitle: "Брондау",
            labelName: "Аты:",
            labelEmail: "Email:",
            labelTour: "Турды таңдаңыз:",
            submit: "Өтінімді жіберу",
            tour1: "1-күндік тур",
            tour3: "3-күндік тур",
            tour5: "5-күндік тур"
        }
    };

    const elementsToTranslate = document.querySelectorAll("[data-lang-key]");
    const languageButtons = document.querySelectorAll(".language-switcher button");

    languageButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedLang = button.getAttribute("data-lang");
            languageButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            translatePage(selectedLang);
        });
    });

    function translatePage(language) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute("data-lang-key");
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }

    const anchors = document.querySelectorAll('a[href^="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetID = this.getAttribute("href");
            const targetSection = document.querySelector(targetID);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
});
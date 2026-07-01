const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// 點選選單後自動收起
const menuLinks = document.querySelectorAll(".mobile-menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
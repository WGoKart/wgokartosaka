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

gsap.registerPlugin(ScrollTrigger);

function scrollReveal(trigger, selector, options = {}) {
    const {
        fromX = 0,
        fromY = 0,
        opacity = true,
        scale = 1,
        blur = 0
    } = options;
    gsap.set(selector, {
        x: fromX,
        y: fromY,
        opacity: opacity ? 0 : 1,
        scale,
        filter: `blur(${blur}px)`
    });
    ScrollTrigger.create({
        trigger: trigger,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        onUpdate: (self) => {
            const p = self.progress;
            gsap.set(selector, {
                x: fromX * (1 - p),
                y: fromY * (1 - p),
                opacity: opacity ? p : 1,
                scale: scale + (1 - scale) * p,
                filter: `blur(${blur * (1 - p)}px)`
            });
        }
    });
}

function scrollFade(trigger, selector, options = {}) {
    const {
        x = 0,
        y = 0,
        opacity = true,
        scale = 1
    } = options;
    ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(selector, {
                x: progress * x,
                y: progress * y,
                opacity: opacity ? 1 - progress : 1,
                scale: 1 - (1 - scale) * progress
            });
        }
    });
}

/* Home */
gsap.from(".home h1", {
    y: 80,
    opacity: 0,
    duration: 1
});

gsap.from(".home p", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.3
});

gsap.from(".book-btn", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.6
});

scrollFade("#home",  ".home h1", { y: 500 });
scrollFade("#home",  ".home p", { y: 100 });
scrollFade("#home",  ".book-btn", { y: 200 });


/* Tours */
gsap.from("#tours",{
    y:100,
    opacity:0,

    scrollTrigger:{
        trigger:"#tours",

        start:"top 80%",
        end:"top 40%",

        scrub:true
    }
});

scrollReveal("#tours", "#tours .tour-card:nth-child(1)", {
    fromX: 200,
    blur: 8,
    scale: 0.9
});
scrollReveal("#tours", "#tours .tour-card:nth-child(2)", {
    fromX: 500,
    blur: 8,
    scale: 0.9
});
scrollReveal("#tours", "#tours .tour-card:nth-child(3)", {
    fromX: 1000,
    blur: 8,
    scale: 0.9
});

scrollFade("#tours",  ".tour-card:nth-child(1)", { x: -200 });
scrollFade("#tours",  ".tour-card:nth-child(2)", { x: -200 });
scrollFade("#tours",  ".tour-card:nth-child(3)", { x: -200 });

/* Requirement */
gsap.from("#requirement",{
    y:100,
    opacity:0,

    scrollTrigger:{
        trigger:"#requirement",

        start:"top 80%",
        end:"top 40%",

        scrub:true
    }
});

/* Pricing */
gsap.from("#pricing",{
    y:100,
    opacity:0,

    scrollTrigger:{
        trigger:"#pricing",

        start:"top 80%",
        end:"top 40%",

        scrub:true
    }
});

/* Access */
gsap.from("#access",{
    y:100,
    opacity:0,

    scrollTrigger:{
        trigger:"#access",

        start:"top 80%",
        end:"top 40%",

        scrub:true
    }
});

/* FAQ */
gsap.from("#faq",{
    y:100,
    opacity:0,

    scrollTrigger:{
        trigger:"#faq",

        start:"top 80%",
        end:"top 40%",

        scrub:true
    }
});

/* About */
gsap.from("#about",{
    y:100,
    opacity:0,

    scrollTrigger:{
        trigger:"#about",

        start:"top 80%",
        end:"top 40%",

        scrub:true
    }
});


const pricingSwiper = new Swiper(".pricingSwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide:2,
    loop: true,
    grabCursor: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    speed: 600,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 180,
        modifier: 1,
        scale: 0.85,
        slideShadows: false
        
    }
});
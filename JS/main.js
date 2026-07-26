

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
        const icon = themeToggle.querySelector("i");
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
    }
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            icon.classList.remove("bi-moon-fill");
            icon.classList.add("bi-sun-fill");

        } else {

            localStorage.setItem("theme", "light");

            icon.classList.remove("bi-sun-fill");
            icon.classList.add("bi-moon-fill");
        }

    });

}



const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

if(menuToggle){

    menuToggle.addEventListener("click", () =>{

        navMenu.classList.toggle("show");

    });

}

const backToTop = document.getElementById("backToTop");

if(backToTop){

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 300){
            backToTop.style.display="flex";
        }else{
            backToTop.style.display="none";
        }

    });

    backToTop.addEventListener("click", ()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

const year = document.getElementById("year");

if(year){
    year.textContent = new Date().getFullYear();
}

const countdown = document.getElementById("countdown");

if(countdown){

    const targetDate = new Date("December 10, 2026 09:00:00").getTime();

    function updateCountdown(){

        const now = new Date().getTime();

        const distance = targetDate - now;

        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
        const seconds = Math.floor((distance%(1000*60))/1000);

        document.getElementById("days").textContent=days;
        document.getElementById("hours").textContent=hours;
        document.getElementById("minutes").textContent=minutes;
        document.getElementById("seconds").textContent=seconds;

    }

    updateCountdown();

    setInterval(updateCountdown,1000);

}
const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            count += increment;

            if(count < target){

                counter.textContent = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.textContent = target;

            }

        };

        updateCounter();

    });

};

if(counters.length > 0){

    const chiffres = document.querySelector(".chiffres");

    const observer = new IntersectionObserver((entries)=>{

        if(entries[0].isIntersecting){

            startCounters();

            observer.disconnect();

        }

    });

    observer.observe(chiffres);

}

/*FILTRE INTERVENANTS*/

const filterButtons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".speaker-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if(filter === "all" || card.dataset.category === filter){

                card.classList.remove("hide");
                card.classList.add("show");

            }else{

                card.classList.remove("show");
                card.classList.add("hide");

            }

        });

    });

});

/*ONGLETS PROGRAMME*/

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        // Retirer la classe active
        tabs.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        // Activer l'onglet sélectionné
        tab.classList.add("active");
        tabContents[index].classList.add("active");

    });

});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;
        const top = reveal.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            reveal.classList.add("active");
        }

    });

});
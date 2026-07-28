// programme-onglets
// const themeToggle = document.getElementById("theme-toggle"); veut dire que l'on récupère l'élément HTML avec l'id "theme-toggle" et on le stocke dans la variable themeToggle
const themeToggle = document.getElementById("theme-toggle");
// if (localStorage.getItem("theme") === "dark") { veut dire que si le thème est sombre, alors on ajoute la classe "dark-mode" au body
if (localStorage.getItem("theme") === "dark") {
    // document.body.classList.add("dark-mode"); veut dire que l'on ajoute la classe "dark-mode" au body pour appliquer le thème sombre
    document.body.classList.add("dark-mode");
// const icon = themeToggle.querySelector("i"); verifier si themeToggle existe avant de l'utiliser
    if (themeToggle) {
        const icon = themeToggle.querySelector("i");
        // icon.classList.remove("bi-moon-fill"); veut dire que l'icône de la lune soit supprimée lorsque le thème est sombre
        icon.classList.remove("bi-moon-fill");
        // icon.classList.add("bi-sun-fill"); veut dire que l'icône du soleil soit affichée lorsque le thème est sombre
        icon.classList.add("bi-sun-fill");
    }
}
// veux dire que si le thème est clair, alors on supprime la classe "dark-mode" du body
if (themeToggle) {
// themeToggle.addEventListener("click", () => { veut dire que lorsque l'on clique sur l'élément HTML avec l'id "theme-toggle", on exécute la fonction qui suit
    themeToggle.addEventListener("click", () => {
// document.body.classList.toggle("dark-mode"); veut dire que l'on ajoute ou supprime la classe "dark-mode" du body pour appliquer le thème sombre ou clair
        document.body.classList.toggle("dark-mode");
// const icon = themeToggle.querySelector("i"); veut dire que l'on récupère l'élément HTML "i" qui est enfant de "theme-toggle" et on le stocke dans la variable icon
        const icon = themeToggle.querySelector("i");
// veux dire que si le body contient la classe "dark-mode", alors on stocke le thème sombre dans le localStorage
        if (document.body.classList.contains("dark-mode")) {
// veut dire que si le body contient la classe "dark-mode", alors on stocke le thème sombre dans le localStorage
            localStorage.setItem("theme", "dark");
 // icon.classList.remove("bi-moon-fill"); veut dire que l'icône de la lune soit supprimée lorsque le thème est sombre
            icon.classList.remove("bi-moon-fill");
  // icon.classList.add("bi-sun-fill"); veut dire que l'icône du soleil soit affichée lorsque le thème est sombre           
            icon.classList.add("bi-sun-fill");

        } else {
// veut dire que si le body ne contient pas la classe "dark-mode", alors on stocke le thème clair dans le localStorage
            localStorage.setItem("theme", "light");
// icon.classList.remove("bi-sun-fill"); veut dire que l'icône du soleil soit supprimée lorsque le thème est clair
            icon.classList.remove("bi-sun-fill");
            // icon.classList.add("bi-moon-fill"); veut dire que l'icône de la lune soit affichée lorsque le thème est clair
            icon.classList.add("bi-moon-fill");
        }

    });

}

// const menuToggle = document.getElementById("menu-toggle"); veut dire que l'on récupère l'élément HTML avec l'id "menu-toggle" et on le stocke dans la variable menuToggle
const menuToggle = document.getElementById("menu-toggle");
// const navMenu = document.querySelector("nav ul"); veut dire que l'on récupère l'élément HTML "ul" qui est enfant de "nav" et on le stocke dans la variable navMenu
const navMenu = document.querySelector("nav ul");

if(menuToggle){
// menuToggle.addEventListener("click", () =>{ veut dire que lorsque l'on clique sur l'élément HTML avec l'id "menu-toggle", on exécute la fonction qui suit
    menuToggle.addEventListener("click", () =>{
// veux dire que l'on affiche ou cache le menu
        navMenu.classList.toggle("show");

    });

}
// const backToTop = document.getElementById("backToTop"); veut dire que l'on récupère l'élément HTML avec l'id "backToTop" et on le stocke dans la variable backToTop
const backToTop = document.getElementById("backToTop");

if(backToTop){
// window.addEventListener("scroll", ()=>{ veut dire que lorsque l'on fait défiler la page, on exécute la fonction qui suit
    window.addEventListener("scroll", ()=>{
// veux dire que si la position de défilement est supérieure à 300 pixels, alors on affiche le bouton "Retour en haut"
        if(window.scrollY > 300){
            backToTop.classList.add("show");
            // backToTop.style.display="flex"; veut dire que l'on affiche le bouton "Retour en haut" en utilisant la propriété CSS "display" avec la valeur "flex"
        }else{
            // backToTop.style.display="none"; veut dire que l'on cache le bouton "Retour en haut" en utilisant la propriété CSS "display" avec la valeur "none"
            backToTop.classList.remove("show");
        }

    });
// veux dire que lorsque l'on clique sur le bouton "Retour en haut", on fait défiler la page vers le haut de manière fluide
    backToTop.addEventListener("click", ()=>{
// window.scrollTo({ top:0, behavior:"smooth" }); veut dire que l'on fait défiler la page vers le haut de manière fluide en utilisant la méthode "scrollTo" avec les paramètres "top" et "behavior"
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}
// const year = document.getElementById("year"); veut dire que l'on récupère l'élément HTML avec l'id "year" et on le stocke dans la variable year
const year = document.getElementById("year");
// year.textContent = new Date().getFullYear(); veut dire que l'on affiche l'année en cours dans l'élément HTML avec l'id "year"
if(year){
    year.textContent = new Date().getFullYear();
}
// const countdown = document.getElementById("countdown"); veut dire que l'on récupère l'élément HTML avec l'id "countdown" et on le stocke dans la variable countdown
const countdown = document.getElementById("countdown");

if(countdown){
// const targetDate = new Date("December 10, 2026 09:00:00").getTime(); veut dire que l'on définit la date cible pour le compte à rebours et on la convertit en millisecondes depuis le 1er janvier 1970
    const targetDate = new Date("December 10, 2026 09:00:00").getTime();
// veux dire que l'on met à jour le compte à rebours toutes les secondes en utilisant la fonction setInterval
    function updateCountdown(){
// const now = new Date().getTime(); veut dire que l'on récupère la date et l'heure actuelles en millisecondes depuis le 1er janvier 1970
        const now = new Date().getTime();
// const distance = targetDate - now; veut dire que l'on calcule la distance entre la date cible et la date actuelle en millisecondes
        const distance = targetDate - now;
// const days = Math.floor(distance/(1000*60*60*24)); veut dire que l'on calcule le nombre de jours restants en divisant la distance par le nombre de millisecondes dans un jour et en arrondissant à l'entier inférieur
        const days = Math.floor(distance/(1000*60*60*24));
        // const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60)); veut dire que l'on calcule le nombre d'heures restantes en divisant la distance par le nombre de millisecondes dans une heure et en arrondissant à l'entier inférieur
        const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        // const minutes = Math.floor((distance%(1000*60*60))/(1000*60)); veut dire que l'on calcule le nombre de minutes restantes en divisant la distance par le nombre de millisecondes dans une minute et en arrondissant à l'entier inférieur
        const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
        // const seconds = Math.floor((distance%(1000*60))/1000); veut dire que l'on calcule le nombre de secondes restantes en divisant la distance par le nombre de millisecondes dans une seconde et en arrondissant à l'entier inférieur
        const seconds = Math.floor((distance%(1000*60))/1000);
// veux dire que l'on affiche les valeurs dans les éléments HTML correspondants
        document.getElementById("days").textContent=days;
        // document.getElementById("hours").textContent=hours; veut dire que l'on affiche le nombre d'heures restantes dans l'élément HTML avec l'id "hours"
        document.getElementById("hours").textContent=hours;
        // document.getElementById("minutes").textContent=minutes; veut dire que l'on affiche le nombre de minutes restantes dans l'élément HTML avec l'id "minutes"
        document.getElementById("minutes").textContent=minutes;
        // document.getElementById("seconds").textContent=seconds; veut dire que l'on affiche le nombre de secondes restantes dans l'élément HTML avec l'id "seconds"
        document.getElementById("seconds").textContent=seconds;

    }
// veux dire que l'on met à jour le compte à rebours immédiatement
    updateCountdown();
// veux dire que l'on met à jour le compte à rebours toutes les secondes en utilisant la fonction setInterval
    setInterval(updateCountdown,1000);

}
// const counters = document.querySelectorAll(".counter"); veut dire que l'on récupère tous les éléments HTML avec la classe "counter" et on les stocke dans la variable counters
const counters = document.querySelectorAll(".counter");
// const startCounters = () => { veut dire que l'on définit une fonction qui démarre les compteurs
const startCounters = () => {
// counters.forEach(counter => { veut dire que l'on parcourt tous les éléments HTML correspondants aux compteurs et on exécute la fonction qui suit pour chaque compteur
    counters.forEach(counter => {
// const target = +counter.dataset.target; veut dire que l'on récupère la valeur du attribut data-target du compteur
        const target = +counter.dataset.target;
// let count = 0; veut dire que l'on initialise la variable count à 0
        let count = 0;
// const increment = target / 100; veut dire que l'on calcule l'incrément pour chaque mise à jour du compteur
        const increment = target / 100;
// const updateCounter = () => { veut dire que l'on définit une fonction qui met à jour le compteur
        const updateCounter = () => {
// count += increment; veut dire que l'on ajoute l'incrément à la variable count
            count += increment;
// if(count < target){ veut dire que si la variable count est inférieure à la variable target, alors on met à jour le compteur et on appelle la fonction updateCounter() à nouveau
            if(count < target){
// counter.textContent = Math.ceil(count); veut dire que l'on affiche la valeur arrondie de la variable count dans l'élément HTML correspondant au compteur
                counter.textContent = Math.ceil(count);
// counter.textContent = Math.ceil(count); veut dire que l'on affiche la valeur arrondie de la variable count dans l'élément HTML correspondant au compteur
                requestAnimationFrame(updateCounter);

            }else{
// counter.textContent = target; veut dire que l'on affiche la valeur de la variable target dans l'élément HTML correspondant au compteur
                counter.textContent = target;

            }

        };
// veux dire que l'on appelle la fonction updateCounter() pour démarrer le compteur
        updateCounter();

    });

};
// veux dire que l'on démarre les compteurs si des éléments avec la classe "counter" sont présents
if(counters.length > 0){
// const chiffres = document.querySelector(".chiffres"); veut dire que l'on récupère l'élément HTML avec la classe "chiffres" et on le stocke dans la variable chiffres
    const chiffres = document.querySelector(".chiffres");
// const observer = new IntersectionObserver((entries)=>{ veut dire que l'on crée un nouvel objet IntersectionObserver qui observe les intersections entre l'élément chiffres et la fenêtre d'affichage
    const observer = new IntersectionObserver((entries)=>{
// if(entries[0].isIntersecting){ veut dire que si l'élément chiffres est visible dans la fenêtre d'affichage, alors on démarre les compteurs et on arrête l'observation
        if(entries[0].isIntersecting){
// startCounters(); veut dire que l'on appelle la fonction startCounters() pour démarrer les compteurs
            startCounters();
// observer.disconnect(); veut dire que l'on arrête l'observation de l'élément chiffres pour éviter de redémarrer les compteurs à chaque fois que l'élément devient visible
            observer.disconnect();

        }

    });
// observer.observe(chiffres); veut dire que l'on commence à observer l'élément chiffres pour détecter quand il devient visible dans la fenêtre d'affichage
    observer.observe(chiffres);

}

/*FILTRE INTERVENANTS*/
// const filterButtons = document.querySelectorAll(".filter-buttons button"); veut dire que l'on récupère tous les éléments HTML avec la classe "filter-buttons" et on les stocke dans la variable filterButtons
const filterButtons = document.querySelectorAll(".filter-buttons button");
// const cards = document.querySelectorAll(".speaker-card"); veut dire que l'on récupère tous les éléments HTML avec la classe "speaker-card" et on les stocke dans la variable cards
const cards = document.querySelectorAll(".speaker-card");
// filterButtons.forEach(button => { veut dire que l'on parcourt tous les éléments HTML correspondants aux boutons de filtre et on exécute la fonction qui suit pour chaque bouton
filterButtons.forEach(button => {
// button.addEventListener("click", () => { veut dire que lorsque l'on clique sur un bouton de filtre, on exécute la fonction qui suit
    button.addEventListener("click", () => {
// retirer la classe "active" de tous les boutons de filtre
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // filterbuttons.forEach(btn => btn.classList.remove("active")); veut dire que l'on parcourt tous les éléments HTML correspondants aux boutons de filtre et on supprime la classe "active" de chacun d'eux
        button.classList.add("active");
// const filter = button.dataset.filter; veut dire que l'on récupère la valeur du attribut data-filter du bouton
        const filter = button.dataset.filter;
// cards.forEach(card => { veut dire que l'on parcourt tous les éléments HTML correspondants aux cartes et on exécute la fonction qui suit pour chaque carte
        cards.forEach(card => {
// if(filter === "all" || card.dataset.category === filter){ veut dire que si le filtre est "all" ou si la catégorie de la carte correspond au filtre, alors on affiche la carte
            if(filter === "all" || card.dataset.category === filter){
// card.classList.remove("hide"); veut dire que l'on supprime la classe "hide" de l'élément HTML correspondant à la carte
                card.classList.remove("hide");
                // card.classList.add("show"); veut dire que l'on ajoute la classe "show" à l'élément HTML correspondant à la carte
                card.classList.add("show");

            }else{
// card.classList.remove("show"); veut dire que l'on supprime la classe "show" de l'élément HTML correspondant à la carte
                card.classList.remove("show");
                // card.classList.add("hide"); veut dire que l'on ajoute la classe "hide" à l'élément HTML correspondant à la carte
                card.classList.add("hide");

            }

        });

    });

});

/*ONGLETS PROGRAMME*/
// const tabs = document.querySelectorAll(".tab"); veut dire que l'on récupère tous les éléments HTML avec la classe "tab" et on les stocke dans la variable tabs
const tabs = document.querySelectorAll(".tab");
// const tabContents = document.querySelectorAll(".tab-content"); veut dire que l'on récupère tous les éléments HTML avec la classe "tab-content" et on les stocke dans la variable tabContents
const tabContents = document.querySelectorAll(".tab-content");
// tabs.forEach(tab => tab.classList.remove("active")); veut dire que l'on retire la classe "active" de tous les éléments HTML correspondants aux onglets
tabs.forEach((tab, index) => {
// veux dire que lorsque l'on clique sur un onglet, on exécute la fonction qui suit
    tab.addEventListener("click", () => {

        // Retirer la classe active
        tabs.forEach(btn => btn.classList.remove("active"));
        // tabContents.forEach(content => content.classList.remove("active")); veut dire que l'on retire la classe "active" de tous les éléments HTML correspondants aux onglets
        tabContents.forEach(content => content.classList.remove("active"));

        // Activer l'onglet sélectionné
        tab.classList.add("active");
        // tabContents[index].classList.add("active"); veut dire que l'on ajoute la classe "active" à l'élément HTML correspondant à l'onglet sélectionné
        tabContents[index].classList.add("active");

    });

});
// const reveals = document.querySelectorAll(".reveal"); veut dire que l'on récupère tous les éléments HTML avec la classe "reveal" et on les stocke dans la variable reveals
const reveals = document.querySelectorAll(".reveal");
// window.addEventListener("scroll", () => { veut dire que lorsque l'on fait défiler la page, on exécute la fonction qui suit
window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {
// const windowHeight = window.innerHeight; veut dire que l'on récupère la hauteur de la fenêtre du navigateur
        const windowHeight = window.innerHeight;
        // const top = reveal.getBoundingClientRect().top; veut dire que l'on récupère la position de l'élément par rapport à la fenêtre
        const top = reveal.getBoundingClientRect().top;
// veut dire que si la position de l'élément est inférieure à la hauteur de la fenêtre moins 100 pixels, alors on ajoute la classe "active" à l'élément
        if(top < windowHeight - 100){
            reveal.classList.add("active");
        }

    });

});
/*******************************************   Faire apparaître la bulle de contact au clic    ***********************************************/

let icone = document.getElementById("contactPortfolio");
let bubble = document.getElementById("commentBubble");
bubble.style.display = "none"; //Il faut déclarer le style display en JS pour ne pas avoir à devoir cliquer 2 fois sur l'icone

icone.addEventListener("click", () => {
    alert("Mail: nicolas.schneider@hotmail.fr / Téléphone: 06 20 41 50 44")
});


/*************************************       Effet d'apparition de la navbar au scroll     *************************************************/
// Nous souhaitons que la navbar est un effet d'apparition en résolution téléphone, en grande résolution elle doit tout le temps être présente
const scrollNavbar = document.querySelector(".navbarPortfolio");
scrollNavbar.style.display = "none";

//Nous écountons un évènement au scroll
window.addEventListener("scroll", () => {
    const {scrollTop, clientHeight} = document.documentElement; //Nous permet de savoir à quel niveau de scroll nous nous situons

    if ((screen.width > 800) || (scrollTop > 300)) {scrollNavbar.style.display = "flex"}
        else {scrollNavbar.style.display = "none"};    
})


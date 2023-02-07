/*******************************************   Faire apparaître la bulle de contact au clic    ***********************************************/

let icone = document.getElementById("contact");
let bubble = document.getElementById("commentBubble");
bubble.style.display = "none"; //Il faut déclarer le style display en JS pour ne pas avoir à devoir cliquer 2 fois sur l'icone

icone.addEventListener("click", () => {
    if (bubble.style.display == "none") {bubble.style.display = "block"}
        else {bubble.style.display = "none"};
});


/************************************************        Effet d'apparition de la navbar au scroll     ***************************************/

const scrollNavbar = document.querySelector(".navbar");
scrollNavbar.style.display = "none";

//Nous écountons un évènement au scroll
window.addEventListener("scroll", () => {
    const {scrollTop, clientHeight} = document.documentElement; //Nous permet de savoir à quel niveau de scroll nous nous situons

    if (scrollTop > 300) {scrollNavbar.style.display = "flex"}
        else {scrollNavbar.style.display = "none"};
})


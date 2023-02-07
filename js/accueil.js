//Pour inviter l'utilisateur à se connecter sur un autre support 
let appareilSupport = document.getElementById("resolution");

if (screen.width < 769) { appareilSupport.innerText = "N'hésitez pas à également consulter ce site sur ordinateur"
} else {  appareilSupport.innerText = "N'hésitez pas à également consulter ce site sur votre téléphone"};


//Permet de passer l'introduction en cliquant sur la flèche
let arrow = document.getElementById("arrowNext");
let intro = document.getElementById("intro");

arrow.addEventListener('click', event => {intro.style.display = "none"})


//Fonction pour changer l'attribut z-index de l'image d'accueil afin que le hover de blocAccueil et portfolio fonctionne
function zIndexTime() {
    let intro = document.getElementById("intro");
    intro.style.zIndex = -1;
}

let timeZindex = setTimeout(zIndexTime, 27200);






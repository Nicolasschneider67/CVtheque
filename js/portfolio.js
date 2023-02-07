//Pour que la fonction fonctionne il faut définir un ID pour écouter l'évènement au click. Nous répétons donc la même fonction pour chaque carte avec un texte unique

//Booki
let screenBooky = document.getElementById("screenBooky");
let clickBooky = document.getElementById("clickBooky");
let tittleBooky = document.getElementById("tittleBooky");
let textPortfolioBooky = document.getElementById("textPortfolioBooky");

clickBooky.addEventListener("click", () => {
    screenBooky.classList.toggle("moove");
    tittleBooky.classList.toggle("moove");
    textPortfolioBooky.classList.toggle("moove");
});


//OhmyFood
let screenFood = document.getElementById("screenFood");
let clickFood = document.getElementById("clickFood");
let tittleFood = document.getElementById("tittleFood");
let textPortfolioFood = document.getElementById("textPortfolioFood");

clickFood.addEventListener("click", () => {
    screenFood.classList.toggle("moove");
    tittleFood.classList.toggle("moove");
    textPortfolioFood.classList.toggle("moove");
});


//laPanthere
let screenPanthere = document.getElementById("screenPanthere");
let clickPanthere = document.getElementById("clickPanthere");
let tittlePanthere = document.getElementById("tittlePanthere");
let textPortfolioPanthere = document.getElementById("textPortfolioPanthere");

clickPanthere.addEventListener("click", () => {
    screenPanthere.classList.toggle("moove");
    tittlePanthere.classList.toggle("moove");
    textPortfolioPanthere.classList.toggle("moove");
});


//Kanap
let screenKanap = document.getElementById("screenKanap");
let clickKanap = document.getElementById("clickKanap");
let tittleKanap = document.getElementById("tittleKanap");
let textPortfolioKanap = document.getElementById("textPortfolioKanap");

clickKanap.addEventListener("click", () => {
    screenKanap.classList.toggle("moove");
    tittleKanap.classList.toggle("moove");
    textPortfolioKanap.classList.toggle("moove");
});


//Sauce
let screenSauce = document.getElementById("screenSauce");
let clickSauce = document.getElementById("clickSauce");
let tittleSauce = document.getElementById("tittleSauce");
let textPortfolioSauce = document.getElementById("textPortfolioSauce");

clickSauce.addEventListener("click", () => {
    screenSauce.classList.toggle("moove");
    tittleSauce.classList.toggle("moove");
    textPortfolioSauce.classList.toggle("moove");
});


//Groupomania
let screenGroupomania = document.getElementById("screenGroupomania");
let clickGroupomania = document.getElementById("clickGroupomania");
let tittleGroupomania = document.getElementById("tittleGroupomania");
let textPortfolioGroupomania = document.getElementById("textPortfolioGroupomania");

clickGroupomania.addEventListener("click", () => {
    screenGroupomania.classList.toggle("moove");
    tittleGroupomania.classList.toggle("moove");
    textPortfolioGroupomania.classList.toggle("moove");
});

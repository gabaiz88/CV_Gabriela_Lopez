//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//funcion cambio de lenguaje
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

var language = {
    eng: {
        sobre_mi: "About me",
        saludo: "🌸 Hello! My name is Gabriela, welcome to my profile! 👋🏼",
        sobre_mi2: "🔎 On my way to becoming a Data Analyst using SQL/Excel. 📊 Data visualization with Power BI. 💻 Knowledge in Project Management, PRINCE2 Foundation Certificate. 🏦 Experience in Financial Services and Banking Industry.",
    },
    es: {
        sobre_mi: "Sobre mí",
        saludo: "🌸 Hola! Me llamo Gabriela, bienvenid@ a mi perfil! 👋🏼",
        sobre_mi2: "🔎 En camino a convertirme en Analista de Datos utilizando SQL/ Excel. 📊 Visualización de datos con Power BI. 💻 Conocimientos en Project Management, PRINCE2 Foundation Certificate. 🏦 Experiencia en Servicios Financieros e Industria Bancaria.",
    },
}

if (window.location.hash) {
    if (window.location.hash == "#es") {
      sobre_mi.textContent = language.es.sobre_mi;
      saludo.textContent = language.es.saludo;
      sobre_mi2.textContent = language.es.sobre_mi2;
    } else if (window.location.hash == "#eng") {
      sobre_mi.textContent = language.eng.sobre_mi;
      saludo.textContent = language.eng.saludo;
      sobre_mi2.textContent = language.eng.sobre_mi2;
    }
} 
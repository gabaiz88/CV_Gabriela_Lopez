//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
  if (menu_visible == false) {
    //si esta oculto
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}

//funcion cambio de lenguaje
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

//pasando todo a ingles
var language = {
  eng: {
    menu_inicio: "Start",
    menu_sobre_mi: "About me",
    menu_proyectos: "Projects",
    menu_resumen: "Summary",
    menu_contacto: "Contact me",
    sobre_mi: "About me",
    saludo: "🌸 Hello! My name is Gabriela, welcome to my profile! 👋🏼",
    sobre_mi2:
      "🔎 On my way to becoming a Data Analyst using SQL/Excel. 📊 Data visualization with Power BI. 💻 Knowledge in Project Management, PRINCE2 Foundation Certificate. 🏦 Experience in Financial Services and Banking Industry.",
    titulo_proyectos: "Projects",
    titulo_google: "Google Data Analytics Professional Certificate",
    titulo_educacion: "Education",
    titulo_laboral: "Work Experience",
    titulo_experiencia1: "Summary",
    titulo_experiencia2: "Knowledge and Work Experience",
    titulo_contacto: "Contact me",
    cert_google:
      "Through this program, I gain knowledge in key areas, including: Data Analysis fundamentals, Statistical Analysis, Data driven decision making, Data preparation, data communication skills; and different tools, such as: Microsoft Power BI, Spreadsheets, SQL, Tableau, R.",
    coder:
      "I acquired general concepts of databases to work on Relational Databases. I also incorporated SQL, design and development of dashboards with Power BI, using DAX (Data Analysis Expressions), M Language and Power Query.",
    prince:
      "Through PRINCE2®, the world's leading project management method, I incorporated the latest processes, tools, and technologies to stay ahead of the curve. PRINCE2 Foundation provided me with the theoretical knowledge of how to plan, manage and deliver projects from start to finish.",
    cargo_marktel_1: "Back Office Assistant with Data Analysis Responsibilities (Client: MÁSMÓVIL)",
    cargo_marktel_2: "Customer Service Representative (Client: MÁSMÓVIL)",
    cargo_credicoop: "Bank Teller and Customer Service Representative",
    tiempo_marktel_1: "6 months",
    tiempo_marktel_2: "6 months",
    tiempo_credicoop: "6 years",
    exp_marktel_1: "Using tools such as Excel to carry out the daily cleaning of the work team's databases, in addition to preparing detailed reports that included data on the most frequent discounts, the percentage of retained clients and the recurring reasons for requesting termination of service.",
    exp_marktel_2: "Proactively answering incoming calls, identifying sales opportunities, and successfully closing deals. Clearly presenting the company's products and services, emphasizing their benefits and relevant features. Assessing customer needs during calls and offer appropriate solutions.",
    exp_credicoop: "Entering transactions into the system in a timely manner, complying with the established circuits. Carrying out the counting of the cash register, guaranteeing compliance with security regulations. Controlling the deposits and payments made through ATM, as well as counting and control of the ATM. Providing account services to customers by receiving deposits and load payments, cashing checks, and issuing savings withdrawals.",
    boton_descarga: "Download certificate",
    boton_descarga2: "Download certificate",
  },
};

if (window.location.hash) {
  if (window.location.hash == "#eng") {
    menu_inicio.textContent = language.eng.menu_inicio;
    menu_sobre_mi.textContent = language.eng.menu_sobre_mi;
    menu_proyectos.textContent = language.eng.menu_proyectos;
    menu_resumen.textContent = language.eng.menu_resumen;
    menu_contacto.textContent = language.eng.menu_contacto;
    sobre_mi.textContent = language.eng.sobre_mi;
    saludo.textContent = language.eng.saludo;
    sobre_mi2.textContent = language.eng.sobre_mi2;
    titulo_proyectos.textContent = language.eng.titulo_proyectos;
    titulo_google.textContent = language.eng.titulo_google;
    titulo_educacion.textContent = language.eng.titulo_educacion;
    titulo_laboral.textContent = language.eng.titulo_laboral;
    titulo_experiencia1.textContent = language.eng.titulo_experiencia1;
    titulo_experiencia2.textContent = language.eng.titulo_experiencia2;
    titulo_contacto.textContent = language.eng.titulo_contacto;
    cert_google.textContent = language.eng.cert_google;
    coder.textContent = language.eng.coder;
    prince.textContent = language.eng.prince;
    tiempo_marktel_1.textContent = language.eng.tiempo_marktel_1;
    tiempo_marktel_2.textContent = language.eng.tiempo_marktel_2;
    tiempo_credicoop.textContent = language.eng.tiempo_credicoop;
    cargo_marktel_1.textContent = language.eng.cargo_marktel_1;
    cargo_marktel_2.textContent = language.eng.cargo_marktel_2;
    cargo_credicoop.textContent = language.eng.cargo_credicoop;
    exp_marktel_1.textContent = language.eng.exp_marktel_1;
    exp_marktel_2.textContent = language.eng.exp_marktel_2;
    exp_credicoop.textContent = language.eng.exp_credicoop;
    boton_descarga.textContent = language.eng.boton_descarga;
    boton_descarga2.textContent = language.eng.boton_descarga2;
  }
}


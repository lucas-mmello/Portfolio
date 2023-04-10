let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
ScrollReveal({ distance: "80px", duration: 2000, delay: 200 });

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// botão ler mais

const btnLerMais = document.querySelectorAll(".ler");

btnLerMais.forEach((btn) => {
  btn.addEventListener("click", function () {
    const divMais = this.closest(".services-box").nextElementSibling;
    const boxes = document.querySelectorAll(".services-box");

    boxes.forEach((box) => {
      box.style.display = "none";
    });

    divMais.style.display = "block";
  });
});

// botão fechar

const btnFechar = document.querySelectorAll(".fechar");

btnFechar.forEach((btn) => {
  btn.addEventListener("click", function (ev) {
    ev.preventDefault();
    const boxes = document.querySelectorAll(".services-box");

    boxes.forEach((box) => {
      box.style.display = "unset";
    });

    const divMais = this.closest(".services-box-mais");
    divMais.style.display = "none";
  });
});

// Altera os temas claro e escuro e as imagens

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const themeImage = document.getElementById("theme-image");
const sobreImage = document.getElementById("sobre-image");
const logoLink = document.querySelector(".logo");
const logoImg = logoLink.querySelector("img");
const iconTheme = document.querySelector("#theme-icon");

//<i class='bx bx-moon' ></i>
//bx bx-sun

themeToggle.addEventListener("click", (e) => {
  e.preventDefault();
  root.classList.toggle("light");
  if (iconTheme.classList.contains("bx-moon")) {
    iconTheme.classList.remove("bx-moon");
    iconTheme.classList.add("bx-sun");
  } else {
    iconTheme.classList.remove("bx-sun");
    iconTheme.classList.add("bx-moon");
  }
  themeImage.src = root.classList.contains("light")
    ? "./images/My project-4.png"
    : "./images/My project-1.png";
  sobreImage.src = root.classList.contains("light")
    ? "./images/My project-3.png"
    : "./images/My_project-2.png";
  logoImg.src = root.classList.contains("light")
    ? "./images/logo-light.png"
    : "./images/logo-dark.png";
});

//links girando ao clicar

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
  link.addEventListener("click", function (ev) {
    var button = ev.target;
    button.classList.add("rotate");

    setTimeout(function () {
      button.classList.remove("rotate");
    }, 1400);
  });
});

// pegando os dados do database.json

const divPortfolioContainer = document.querySelector(".portfolio-container");
const btnVerMais = document.querySelector("#ver-mais");
let projetos = [];
let indiceProximoProjeto = 0;
let projad = 0; // contador para saber quantos projetos tem na tela

async function carregarDados() {
  try {
    const response = await fetch("./database/database.json");
    const dados = await response.json();
    projetos = dados.projetos;
    projetos.reverse();
    console.log(projetos);
    criarProjetos(projetos.slice(0, 3));
    console.log(projetos);
  } catch (erro) {
    console.log(erro);
  }
}

function criarProjetos(listaProjetos) {
  listaProjetos.forEach((projeto) => {
    const divProjeto = document.createElement("div");
    divProjeto.classList.add("portfolio-box");

    const imgProjeto = document.createElement("img");
    imgProjeto.src = projeto.imagem;
    imgProjeto.alt = "Imagem Portfolio";
    divProjeto.appendChild(imgProjeto);
    const span = document.createElement("span");
    span.classList += "ativo";
    span.textContent = "Clique para saber mais!";
    divProjeto.appendChild(span);

    const divProjetoLayer = document.createElement("div");
    divProjetoLayer.classList.add("portfolio-layer");

    const h4Projeto = document.createElement("h4");
    h4Projeto.textContent = projeto.h4;
    divProjetoLayer.appendChild(h4Projeto);

    const pProjeto = document.createElement("p");
    pProjeto.textContent = projeto.p;
    divProjetoLayer.appendChild(pProjeto);

    const aProjeto = document.createElement("a");
    aProjeto.href = projeto.href;
    aProjeto.target = "_blank";

    const iProjeto = document.createElement("i");
    iProjeto.classList.add("bx", "bx-link-external");
    aProjeto.appendChild(iProjeto);

    divProjetoLayer.appendChild(aProjeto);
    divProjeto.appendChild(divProjetoLayer);

    divPortfolioContainer.appendChild(divProjeto);
    indiceProximoProjeto++;
    projad++;
    console.log(projad);
  });
}

btnVerMais.addEventListener("click", () => {
  if (indiceProximoProjeto < projetos.length) {
    const listaProjetos = projetos.slice(
      indiceProximoProjeto,
      indiceProximoProjeto + 3
    );
    criarProjetos(listaProjetos);
  }
  if (indiceProximoProjeto >= projetos.length) {
    btnVerMais.disabled = true;
    btnVerMais.style.display = "none";
  }
  btnVerMenos.style.display = "flex";
});

//botão ver menos

const btnVerMenos = document.querySelector("#ver-menos");
btnVerMenos.addEventListener("click", () => {
  let qtdeProjetosRemover;
  switch (projad) {
    case 3:
      qtdeProjetosRemover = 0;
      break;
    case 4:
      qtdeProjetosRemover = 1;
      break;
    case 5:
      qtdeProjetosRemover = 2;
      break;
    default:
      qtdeProjetosRemover = 3;
  }
  for (let i = 0; i < qtdeProjetosRemover; i++) {
    divPortfolioContainer.removeChild(divPortfolioContainer.lastElementChild);
    indiceProximoProjeto--;
    projad--;
  }

  if (projad === 3) {
    btnVerMenos.style.display = "none";
  }

  btnVerMais.disabled = false;
  btnVerMais.style.display = "flex";
});
carregarDados();

// animação da logo

const logo = document.querySelector(".logo img");
const animationDuration = 4000; // 4 segundos (corresponde à duração da animação definida em CSS)
const delay = 4000; // 2 segundos de atraso entre as iterações

logo.addEventListener("animationiteration", () => {
  // Pausa a animação
  logo.style.animationPlayState = "paused";

  // Aguarda o tempo de atraso
  setTimeout(() => {
    // Reinicia a animação após o atraso
    logo.style.animationPlayState = "running";
  }, delay);
});

// animação portfolio box

let portfolioPrimeiraVez = 0;
const projetosLink = document.querySelector(".projeto");

// Função para verificar se o elemento foi adicionado à DOM
function verificarElementoAdicionado() {
  const portfolioBoxes = document.querySelectorAll(".portfolio-box");
  if (
    projetosLink.classList.contains("active") &&
    portfolioPrimeiraVez === 0 &&
    portfolioBoxes.length > 0
  ) {
    portfolioBoxes.forEach((box) => {
      box.classList.add(
        "animate__animated",
        "animate__pulse",
        "animate__delay-3s"
      );
      console.log(portfolioBoxes);
    });
    portfolioPrimeiraVez = 1;
  } else {
    // Aguarda 500ms e verifica novamente
    setTimeout(verificarElementoAdicionado, 500);
  }
}

// Inicializa a verificação
verificarElementoAdicionado();

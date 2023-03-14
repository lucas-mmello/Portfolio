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
ScrollReveal({  distance: "80px", duration: 2000, delay: 200 });

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Seleciona todos os botões com o id "ler"
const botoes = document.querySelectorAll("#ler");

// Percorre todos os botões
botoes.forEach((botao) => {
  // Adiciona um ouvinte de eventos de clique ao botão
  botao.addEventListener("click", () => {
    // Encontra a div pai do botão clicado
    const divPai = botao.closest(".services-box");

    // Seleciona o elemento filho com o id "dialog"
    const dialogFilho = divPai.querySelector("dialog");
    dialogFilho.classList.add("ativa");

    // Abre a caixa de diálogo
    dialogFilho.showModal();
  });
});

// Seleciona o botão "Fechar"
const botaoFechar = document.querySelector("#fechar");

// Seleciona a caixa de diálogo correspondente
const dialogo = document.querySelector("dialog");

// Adiciona um ouvinte de eventos de clique ao botão "Fechar"
botaoFechar.addEventListener("click", () => {
  // Fecha a caixa de diálogo
  dialogo.classList.remove("ativa");
  dialogo.close();
});

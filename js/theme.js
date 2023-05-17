// tema selecionado
(function () {
  const theme = localStorage.getItem("theme");
  const root = document.documentElement;
  const content = document.getElementById("body");
  // Obtém a URL atual
  const currentPage = window.location.pathname;

  if (theme === "light") {
    root.classList.add("light");

    // Verifica se está na página desejada
    if (currentPage === "/portfolio.html") {
      const themeImage = document.getElementById("theme-image");
      const sobreImage = document.getElementById("sobre-image");
      const logoLink = document.querySelector(".logo");
      const logoImg = logoLink.querySelector("img");
      const iconTheme = document.querySelector("#theme-icon");
      // Código a ser executado apenas na página desejada
      if (theme === "light") {
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
    }
  }

  content.classList.remove("hidden");
})();

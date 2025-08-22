// CARREGAMENTO DE MENU
// Pego o elemento com ID "nav" e usando innerHTML carrega o Menu em todas as páginas que possuem esse "ID"
// O HTML do Menu é definido como uma string e atribuído ao innerHTML do elemento
const menu = document.getElementById("nav");

menu.innerHTML = `
    <button id="btnOpenMenu">
      <img src="./assets/openMenu.svg" alt="Open Menu" />
    </button>
    <button id="btnCloseMenu" class="hide">
      <img src="./assets/closeMenu.svg" alt="Close Menu" />
    </button>
    <nav>
      <a href="index.html" data-link>Sobre mim</a>
      <a href="portfolio.html" data-link>Portfólio</a>
      <a href="formacao.html" data-link>Formação</a>
      <a href="contato.html" data-link>Contato</a>
    </nav>
`;

// MENU MOBILE
// Aqui fiz um menu responsivo onde o usuário pode abrir e fechar o menu
// Obtenho aqui as referências para os botões de abrir e fechar menu
const openMenu = document.getElementById("btnOpenMenu");
const closeMenu = document.getElementById("btnCloseMenu");
const nav = document.getElementsByTagName("nav")[0];

// funções de abrir e fechar menu
// Através da classe css "hide" controlo qual botão está visível
// Função para fechar o menu
closeMenu.addEventListener("click", () => {
  closeMenu.classList.add("hide");
  openMenu.classList.remove("hide");
  nav.classList.remove("show");
});

// função para abrir o menu
openMenu.addEventListener("click", () => {
  openMenu.classList.add("hide");
  closeMenu.classList.remove("hide");
  nav.classList.add("show");
});

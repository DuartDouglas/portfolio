// CARREGAMENTO DE MENU
// Pega o elemento com ID "nav" e carrega o Menu dinamicamente usando innerHTML
// O HTML do Menu é definido como uma string e atribuído ao innerHTML do elemento
const menu = document.getElementById("nav");

menu.innerHTML = `
  <nav>
    <a href="index.html" data-link>Sobre mim</a>
     <a href="portfolio.html" data-link>Portfólio</a>
    <a href="formacao.html" data-link>Formação</a>
    <a href="contato.html" data-link>Contato</a>
  </nav>
`;

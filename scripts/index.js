// CARREGAMENTO DE MENU
// Pega o elemento com ID "nav" e carrega o Menu dinamicamente usando innerHTML
// O HTML do Menu é definido como uma string e atribuído ao innerHTML do elemento
const menu = document.getElementById("nav");

menu.innerHTML = `
  <nav>
    <a href="index.html" data-link>Home</a>
    <a href="about.html" data-link>Sobre</a>
    <a href="contact.html" data-link>Contato</a>
  </nav>
`;


function mobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function evento() {
  document.querySelector(".evento").click();
  document.getElementById('resposta').innerHTML = 'Você selecionou: "Meus Eventos"'
}

function usuarios() {
  document.querySelector(".usuarios").click();
  document.getElementById('resposta').innerHTML = 'Você selecionou: "Usuários"'
}

function relatorios() {
  document.querySelector(".relatorios").click();
  document.getElementById('resposta').innerHTML = 'Você selecionou: "Relatórios"'
}
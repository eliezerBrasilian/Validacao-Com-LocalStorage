const login = localStorage.getItem("InputDoLogin");
localStorage.getItem("InputDaSenha");

document.getElementById("login-do-usuario").innerHTML =
  "Seja, bem vindo: " + login;

document.getElementById("botaoSair").addEventListener("click", function () {
  localStorage.removeItem("InputDoLogin");
  localStorage.removeItem("InputDaSenha");
  location.href = "../index.html";
});

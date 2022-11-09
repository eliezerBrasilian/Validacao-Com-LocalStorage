document.getElementById("forms").addEventListener("submit", function (evento) {
  evento.preventDefault();

  //required
  //document.getElementById("login").setAttribute("required");

  const InputDoLogin = document.getElementById("login");
  const InputDaSenha = document.getElementById("senha");

  localStorage.setItem("InputDoLogin", InputDoLogin.value);
  localStorage.setItem("InputDaSenha", InputDaSenha.value);

  acessaPaginaPrincipal();
});

function acessaPaginaPrincipal() {
  location.href = "./paginas/paginaPrincipal.html";
}

const InputDoLogin = localStorage.getItem("InputDoLogin");
const InputDaSenha = localStorage.getItem("InputDaSenha");

if (InputDoLogin != null && InputDaSenha != null) acessaPaginaPrincipal();

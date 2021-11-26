/* Case Sensitive
    
    por Tag: getElementByTagName()
    por Id: getElementById()
    por Nome: getElementsByName()
    por Classe: getElementsByClassName()
    por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido!";
    txtNome.style.color = "red";
    txtNome.style.fontSize = "15px";
  } else {
    txtNome.innerHTML = "Nome válido!";
    txtNome.style.color = "green";
    txtNome.style.fontSize = "15px";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido!";
    txtEmail.style.color = "red";
    txtEmail.style.fontSize = "15px";
  } else {
    txtEmail.innerHTML = "E-mail válido!";
    txtEmail.style.color = "green";
    txtEmail.style.fontSize = "15px";
    emailOk = true;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");
  if (assunto.value.length > 500) {
    txtAssunto.innerHTML =
      "O texto é muito grande, digite no máximo 100 caracteres!";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
    txtAssunto.style.fontSize = "15px";
  } else {
    /*txtAssunto.innerHTML = "Texto de assunto válido!";
    txtAssunto.style.color = "green";*/
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!!");
  } else {
    alert("Preencha o formulário corretamente antes de enviar...");
  }
}

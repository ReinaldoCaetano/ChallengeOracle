function criptografar() {
  var input = document.getElementById("input").value;
  
  if (input.trim() === "") {
      exibirAlerta("O campo de entrada está vazio. Por favor, preencha-o antes de criptografar.");
      return;
  }
  
  var output = criptografarTexto(input);
  document.getElementById("output").value = output;
  removerImagemDeFundo("mensagem"); 
  ocultarElementos("msg");
  mostrarBotaoCopiar();
}

function descriptografar() {
  var input = document.getElementById("input").value;
  
  if (input.trim() === "") {
      exibirAlerta("Nenhuma mensagem encontrada. Por favor, preencha-o antes de descriptografar.");
      return;
  }
  
  var output = descriptografarTexto(input);
  document.getElementById("output").value = output;
  removerImagemDeFundo("mensagem");
  ocultarElementos("msg");
  mostrarBotaoCopiar();
}
function copiarTexto() {
  var output = document.getElementById("output");
  output.select();
  output.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand("copy");
  exibirAlerta("Texto copiado: " + output.value);
}

function criptografarTexto(texto) {
  var criptografado = texto.replace(/e/g, "enter")
                           .replace(/i/g, "imes")
                           .replace(/a/g, "ai")
                           .replace(/o/g, "ober")
                           .replace(/u/g, "ufat");
  return criptografado;
}

function descriptografarTexto(texto) {
  var descriptografado = texto.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
  return descriptografado;
}

function removerImagemDeFundo(classe) {
  var elementos = document.getElementsByClassName(classe);

  for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.backgroundImage = "none";
  }
}

function mostrarBotaoCopiar() {
  var botao = document.getElementById("copiar");
  botao.style.display = "block";
}

function ocultarElementos(classe) {
  var elementos = document.getElementsByClassName(classe);

  for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.display = "none";
  }
}
function exibirAlerta(mensagem) {
  var alertaDiv = document.createElement("div");
  alertaDiv.innerText = mensagem;
  alertaDiv.classList.add("alerta");
  document.body.appendChild(alertaDiv);

  setTimeout(function() {
      alertaDiv.style.opacity = "0";
      setTimeout(function() {
          alertaDiv.remove();
      }, 300);
  }, 3000);
}
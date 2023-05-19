function criptografar() {
    var input = document.getElementById("input").value;
    var output = criptografarTexto(input);
    document.getElementById("output").value = output;
    removerImagemDeFundo("mensagem"); 
    mostrarBotaoCopiar();
}

function descriptografar() {
    var input = document.getElementById("input").value;
    var output = descriptografarTexto(input);
    document.getElementById("output").value = output;
    removerImagemDeFundo("mensagem");
    mostrarBotaoCopiar();

}

function copiarTexto() {
    var output = document.getElementById("output");
    output.select();
    output.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Texto copiado: " + output.value);
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
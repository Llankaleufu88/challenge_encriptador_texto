function encriptar() {
    var texto = document.querySelector("#texto").value;
    var textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.querySelector(".mensaje-encriptado #titulo-mensaje").textContent = "Mensaje encriptado:";
    document.querySelector(".mensaje-encriptado #parrafo").textContent = textoCifrado;
}

function desencriptar() {
    var texto = document.querySelector("#texto").value;
    var textoDesencriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.querySelector(".mensaje-encriptado #titulo-mensaje").textContent = "Mensaje desencriptado:";
    document.querySelector(".mensaje-encriptado #parrafo").textContent = textoDesencriptado;
}

var botonEncriptar = document.querySelector(".btn-encriptar");
botonEncriptar.addEventListener("click", encriptar);

var botonDesencriptar = document.querySelector(".btn-desencriptar");
botonDesencriptar.addEventListener("click", desencriptar);

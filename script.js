const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".texto-mostrado");
const animation = document.querySelector(".salida-text", "texto-mostrado");
const areaResultado = document.querySelector(".area-resultado");
const verResultado = document.querySelector(".resultado");
const imagen = document.querySelector(".imagen");
const imagen1 = document.querySelector(".imagen1");
const button = document.getElementById("btn-encriptar");
const button1 = document.getElementById("btn-desencriptar");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



textArea.addEventListener('input', function () {
   if (textArea.value.trim() !== "") {
      button.disabled = false;
      button1.disabled = false;
   } else  {
      button.disabled = true;
      button1.disabled = true;
   }
   
});


function btnEncriptar() {
   button1.disabled = true;
   button.disabled = true;
   areaResultado.classList.add("ver-texto");
   const textoEncriptado = encriptar(textArea.value);
   mensaje.textContent = textoEncriptado;
   animation.classList.add("animacion");
   verResultado.classList.remove("ver-texto");
   imagen1.classList.add("ver-texto");
   textArea.value = "";  

}

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringEncriptado = stringEncriptado;

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
   }
   
   return stringEncriptado;
   
}



function btnDesencriptar() {
   button.disabled = true;
   button1.disabled = true;
   areaResultado.classList.add("ver-texto");     
   const textoDesencriptado = desencriptar(textArea.value);
   imagen.classList.add("ver-texto");
   imagen1.classList.remove("ver-texto");
   mensaje.textContent = textoDesencriptado;
   textArea.value = "";  
   verResultado.classList.remove("ver-texto");
   
  }


function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
   stringDesencriptado = stringDesencriptado;
   

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado;
}

function copia() {
  let content = document.querySelector(".texto-mostrado");

  navigator.clipboard.writeText(content.innerHTML);
  document.querySelector(".text-area").value = " ";
  location.reload();
}


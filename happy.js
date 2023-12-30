document.addEventListener("DOMContentLoaded", function () {
    var carta = document.querySelector('.cartao');
    var dentroDaCarta = carta.querySelector('.interno');
    var msgnniver = dentroDaCarta.querySelector('#mensagemAniversario');
    var trasDoUrso = document.querySelector('.tras')
  
    var originalGradient = "linear-gradient(to right, #08d6ed, #8a2be2, #ff69b4)";
  
    carta.addEventListener('mouseover', function () {
      dentroDaCarta.style.background = "#967bb6";
      
      msgnniver.style.color = "white";
      msgnniver.style.transform = "scale(1.5)"; 
      msgnniver.style.margin = "3rem 3rem 21rem";
      msgnniver.style.left = "10%"; 
      msgnniver.style.transition = "left 2s"; 
    });
  
    carta.addEventListener('mouseout', function () {
      dentroDaCarta.style.background = originalGradient;
      
      msgnniver.textContent = "";
      msgnniver.style.color = "white";
      msgnniver.style.left = "0";
      msgnniver.style.transition = "left 0s"; 
    });
  });
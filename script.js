document.addEventListener("DOMContentLoaded", function() {
    var text = "Welcome Princess(isha) 🌙";
    var index = 0;
    var speed = 100; 
    var delay = 2000;
    function type() {
      if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        setTimeout(redirect, delay);
      }
    }
  
    function redirect() {
      window.location.href = "images.html";
    }
  
    type();
  });
  

  window.onload = function() {
    let audio1 = new Audio("aud.mp3");
    audio1.play();
  }

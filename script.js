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

  var video = document.getElementById('myVideo');
        var image = document.getElementById('myImage');
        var imageSources = ["images/1.jpg", "images/2.jpg", "images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpeg"]; 
        var currentIndex = 0;

        video.addEventListener('ended', function() {
            video.style.display = 'none'; 
            image.style.display = 'block'; 
            displayNextImage();
        });

        function displayNextImage() {
            if (currentIndex < imageSources.length) {
                image.src = imageSources[currentIndex];
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            setTimeout(displayNextImage, 2000); 

        }
var navbar = document.getElementById("navbar");
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("sticky");
  } else {
    navbar.classList.add("sticky");
  }
  
  prevScrollPos = currentScrollPos;
};

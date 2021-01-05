// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navigation").style.height = "12vh";
    document.getElementById("herotext").style.display= "none";
} else {
    document.getElementById("navigation").style.height = "20vh";
    document.getElementById("herotext").style.display= "inline-block";
    document.getElementById("logotext").style.textAlign= "center";

  }
}
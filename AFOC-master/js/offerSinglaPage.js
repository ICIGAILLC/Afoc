/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].class = dots[i].class.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
 // dots[slideIndex-1].class += " active";
}
/******************************************************************/




var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var slideId = ["mySlides", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6",
"mySlides7","mySlides8","mySlides9","mySlides10","mySlides11","mySlides12","mySlides13","mySlides14",
"mySlides15","mySlides16","mySlides17","mySlides18","mySlides19","mySlides20","mySlides21","mySlides22",
"mySlides23","mySlides24","mySlides25","mySlides26","mySlides27","mySlides28","mySlides29","mySlides30"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
showSlides(1, 16);
showSlides(1, 16);
showSlides(1, 17);
showSlides(1, 18);
showSlides(1, 19);
showSlides(1, 20);
showSlides(1, 21);
showSlides(1, 22);
showSlides(1, 23);
showSlides(1, 24);
showSlides(1, 25);
showSlides(1, 26);
showSlides(1, 27);
showSlides(1, 28);
showSlides(1, 29);




function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
/*
function currentSlide(n) {
  showSlides(slideIndex = n);
}*/

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
 // var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
  //dots[slideIndex[no]-1].className += " active";
}
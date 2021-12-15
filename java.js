var myVar = setInterval(myTimer, 1000);
var n ;
var s;
function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  s = d.getSeconds();
  n = d.getHours();
  console.log(n)
  var x = document.body;
  
  if (s == 0 || s == 15 || s == 30 || s == 45) {
    x.style.backgroundImage = "url(img/closed.PNG)"
  }
  else {
  if ( n === 0) { x.style.backgroundImage = "url(img/closed.PNG)"}
  if ( n === 1) { x.style.backgroundImage = "url(img/closed.PNG)"}
  if ( n === 2) { x.style.backgroundImage = "url(img/closed.PNG)"}
  if ( n === 3) { x.style.backgroundImage = "url(img/closed.PNG)"}
  if ( n === 4) { x.style.backgroundImage = "url(img/closed.PNG)"}
  if ( n === 5) { x.style.backgroundImage = "url(img/closed.PNG)"}
  if ( n === 6) { x.style.backgroundImage = "url(img/closing3.PNG)"}
  if ( n === 7) { x.style.backgroundImage = "url(img/closing3.PNG)"}
  if ( n === 8) { x.style.backgroundImage = "url(img/closing3.PNG)"}
  if ( n === 9) { x.style.backgroundImage = "url(img/closing2.PNG)"}
  if ( n === 10) { x.style.backgroundImage = "url(img/closing2.PNG)"}
  if ( n === 11) { x.style.backgroundImage = "url(img/closing2.PNG)"}
  if ( n === 12) { x.style.backgroundImage = "url(img/open.PNG)"}
  if ( n === 13) { x.style.backgroundImage = "url(img/open.PNG)"}
  if ( n === 14) { x.style.backgroundImage = "url(img/open.PNG)"}
  if ( n === 15) { x.style.backgroundImage = "url(img/open.PNG)"}
  if ( n === 16) { x.style.backgroundImage = "url(img/closing2.PNG)"}
  if ( n === 17) { x.style.backgroundImage = "url(img/closing2.PNG)"}
  if ( n === 18) { x.style.backgroundImage = "url(img/closing2.PNG)"}
  if ( n === 19) { x.style.backgroundImage = "url(img/closing2.PNG)"}
  if ( n === 20) { x.style.backgroundImage = "url(img/closing3.PNG)"}
  if ( n === 21) { x.style.backgroundImage = "url(img/closing3.PNG)"}
  if ( n === 22) { x.style.backgroundImage = "url(img/closing3.PNG)"}
  if ( n === 23) { x.style.backgroundImage = "url(img/closing3.PNG)"}

  }
}
// document.addEventListener('mousemove', e => {

// if ( n === 6 || n === 7 || n === 8 || n === 9 || n === 10 || n === 11 || n === 12 || n === 13 || n === 14 || n === 15 || n === 16 || n === 17 || n === 18 || n === 19 || n === 20 || n === 21 || n === 22 || n === 23) {
//     var image = document.createElement("img");
//     image.src = "img/pupil.PNG";
//     eye = document.querySelector('.pupil').appendChild(image);
//     mousex = e.clientX;
//     mousey = e.clientY;
//     eye.style.top = (mousey - 125) + "px";
//     eye.style.left = (mousex - 125) + "px";
//     console.log(mousex,mousey);
//     eye.style.display = "block";
    
//   }
// })
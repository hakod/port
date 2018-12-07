window.addEventListener("load", function(){
  var load = document.getElementsByClassName("load")[0];
  document.body.removeChild(load);
  window.onscroll = function() {myFunction()}
var about = document.getElementsByClassName("about")[0]
var projects = document.getElementsByClassName("projects")[0]
var contact = document.getElementsByClassName("contact")[0]
var nav = document.getElementById("navi");

var sc = nav.offsetTop;

function getP(e){
  let x = 0;
  let xx = e.offsetTop + e.offsetHeight;
  while (e) {
    x += (e.offsetTop - e.scrollTop + e.clientTop)
    e = e.offsetParent
  }
  return {x: x, xx: xx}
}
function myFunction(){  
    console.log(window.scrollY+90, getP(about))
  if (window.scrollY+90 >= getP(about).x) {
    document.querySelectorAll("a[href='#about']")[0].style.color = '#9abbcc'
    nav.style.position = 'fixed'
    nav.style.lineHeight = '3'
    nav.style.backgroundColor = '#224a54'
  } else {
    document.querySelectorAll("a[href='#about']")[0].style.color = 'white'
    nav.style.position = 'absolute'
    nav.style.lineHeight = '5'
    nav.style.backgroundColor = 'transparent'
  }   
  if (window.scrollY+90 >= getP(projects).x) {
    document.querySelectorAll("a[href='#projects']")[0].style.color = '#9abbcc'
    document.querySelectorAll("a[href='#about']")[0].style.color = 'white'
  } else {
    document.querySelectorAll("a[href='#projects']")[0].style.color = 'white'
  }   
  if (window.scrollY+90 >= getP(contact).x) {
    document.querySelectorAll("a[href='#contact']")[0].style.color = '#9abbcc'
    document.querySelectorAll("a[href='#projects']")[0].style.color = 'white'
    document.querySelectorAll("a[href='#about']")[0].style.color = 'white'
  } else {
    document.querySelectorAll("a[href='#contact']")[0].style.color = 'white'
  }   
}
})


window.removeEventListener("load", function(){
  var load = document.getElementsByClassName("load")[0];
  document.body.removeChild(load);

})


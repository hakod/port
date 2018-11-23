window.addEventListener("load", function(){
  var load = document.getElementsByClassName("load")[0]
  document.body.removeChild(load)
})

window.onscroll = function() {myFunction()}
var about = document.getElementsByClassName("about")[0]
var projects = document.getElementsByClassName("projects")[0]
var contact = document.getElementsByClassName("contact")[0]
var nav = document.getElementsByClassName("navi")[0]

var sc = nav.offsetTop;


function getP(el){
  let x = 0;
  let xx = el.offsetTop + el.offsetHeight;
  while (el) {
    x += (el.offsetTop - el.scrollTop + el.clientTop)
    el = el.offsetParent
  }
  return {x: x, xx: xx}
}


function myFunction(){
  if (window.scrollY >= sc) {
    nav.style.position = 'fixed'
    nav.style.top = 0;
    nav.style.left = 0;
  } else {
    nav.style.position = 'absolute'
  }
  if (window.scrollY+500 >= getP(about).x){  
    document.getElementsByClassName("text")[0].style.animation = 'fade .8s ease-in';
    document.getElementsByClassName("text")[0].style.animationFillMode = 'forwards';
  }
  if (window.scrollY+500 >= getP(document.getElementsByClassName("flex")[0]).x){  
    document.getElementsByClassName("flex")[0].style.animation = 'move 1s ease-out';    
    document.getElementsByClassName("flex")[0].style.animationFillMode = 'forwards';
  }
  if (window.scrollY+500 >= getP(document.getElementsByClassName("containpro")[0]).x){  
    document.getElementsByClassName("containpro")[0].style.animation = 'fade .8s ease-in';    
    document.getElementsByClassName("containpro")[0].style.animationFillMode = 'forwards';
  }
  if (window.scrollY+90 >= getP(about).x) {
    document.querySelectorAll("a[href='#about']")[0].style.color = '#c0fcad'
  } else {
    document.querySelectorAll("a[href='#about']")[0].style.color = 'white'
  }   
  if (window.scrollY+90 >= getP(projects).x) {
    document.querySelectorAll("a[href='#projects']")[0].style.color = '#c0fcad'
    document.querySelectorAll("a[href='#about']")[0].style.color = 'white'
  } else {
    document.querySelectorAll("a[href='#projects']")[0].style.color = 'white'
  }   
  if (window.scrollY+90 >= getP(contact).x) {
    document.querySelectorAll("a[href='#contact']")[0].style.color = '#c0fcad'
    document.querySelectorAll("a[href='#projects']")[0].style.color = 'white'
    document.querySelectorAll("a[href='#about']")[0].style.color = 'white'
  } else {
    document.querySelectorAll("a[href='#contact']")[0].style.color = 'white'
  }   
}

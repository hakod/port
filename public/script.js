

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

setInterval(function(){console.log(window.scrollY+sc, getP(about))},(3000))
function myFunction(){
  if (window.scrollY >= sc) {
    nav.style.position = 'fixed'
    nav.style.top = 0;
    nav.style.left = 0;
  } else {
    nav.style.position = 'absolute'
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

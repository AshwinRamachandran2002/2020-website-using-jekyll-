var but = document.getElementById("gototop");
var and= document.getElementsByClassName("top-link")
var i=1

if(i==1){
  and[0].style.visibilty = "hidden";
    and[0].style.opacity="0";
    i=2

}


const scrollFunc = () => {
  
  let y = window.scrollY;
  
  if (y > 0) {
    and[0].style.visibilty = "visible";
    and[0].style.opacity ="1";
  } else {
    and[0].style.visibilty = "hidden";
    and[0].style.opacity="0";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    
    window.scrollTo(0, c - c / 10);
  }
};

but.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}


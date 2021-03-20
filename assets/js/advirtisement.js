var sccroll=document.getElementsByClassName("onscroll");
var anad= document.getElementById("mas");
var cat= document.getElementById("sam");
var img = document.getElementsByClassName('alt');
var span = document.getElementsByClassName("close");
setTimeout(function disppopup  () {
   
    sccroll[0].style.display = "block";
    
    span[img.length-1].onclick = () => {
        sccroll[0].style.display = "none";
    }
    
      window.onclick = function(event) {
        if (event.target == sccroll[0]) {
          sccroll[0].style.display = "none";
        }
      }
     
          
              anad.onclick = () => {
              sccroll[0].style.display = "none";
                                  }
              cat.onclick = () => {
                  location.href="second.html";
              }
  
},30000)
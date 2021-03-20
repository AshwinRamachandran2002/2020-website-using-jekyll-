var modal = document.getElementsByClassName('Modal');
var img = document.getElementsByClassName('alt');
var span = document.getElementsByClassName("close");

var j=0
for(let i=0;i< (img.length-1);i++)
{
img[i+1].onclick =() => {
    modal[i].style.display = "block";
    span[i].onclick = () => {
        modal[i].style.display = "none";
    }
      window.onclick = function(event) {
        if (event.target == modal[i]) {
          modal[i].style.display = "none";
        }
      }



    }

  }
  
  
 

  


  
var a= document.getElementsByClassName("modalhead");
var b=document.getElementsByTagName("h2");
var c=document.getElementsByClassName("Img")
var j=5
$(".Img").wrap('<div class="alt-wrap"/>')
$(".Img").each(function() {
					
    $(this).after('<p class="alt">' + b[j].innerHTML + '</p>')
  	j++})
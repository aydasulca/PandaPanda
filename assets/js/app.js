var restaurarImg= document.getElementById('restaurar');
var img3= document.getElementsByClassName('panda');
var img= document.getElementsByClassName('img-panda');
var extincion = document.getElementById('extincion');


restaurarImg.onclick=function(){
var img= document.getElementsByClassName('img-panda');
for (var i = 0; i < img.length; i++) {
  if(img[i].style.display === 'none'){
        img[i].style.display = 'inline-block';
  }
 }
}

extincion.onclick=function(){
  var textIz= document.getElementById('texto-izquierda');
  if(textIz.style.display === 'none'){
      textIz.style.display = 'inline-block';
  }else {
    textIz.style.display = 'none';
  }
}

var origen= document.getElementById('origen');
origen.onclick=function(){
  var textDe=document.getElementById('texto-derecha');
  if(textDe.style.display === 'none'){
    textDe.style.display = 'inline-block';
  }else {
    textDe.style.display = 'none';
  }
}

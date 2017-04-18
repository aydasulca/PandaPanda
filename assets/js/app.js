var restaurarImg= document.getElementById('restaurar');
restaurarImg.onclick=function(){
var img= document.getElementsByClassName('img-panda');
for (var i = 0; i < img.length; i++) {
  if(img[i].style.display === 'none'){
        img[i].style.display = 'inline-block';
  }
 }
}

var extincion = document.getElementById('extincion');
extincion.onclick=function(){
  var textDe= document.getElementById('texto-derecha');
  if(textDe.style.visibility === 'visible'){
      textDe.style.visibility = 'hidden';
  }else{
    textDe.style.visibility = 'visible';
  }
}


var origen= document.getElementById('origen');
origen.onclick=function(){
  var textIz=document.getElementById('texto-izquierda');
  if(textIz.style.visibility == 'visible'){
    textIz.style.visibility = 'hidden';
  }else {
    textIz.style.visibility = 'visible';
  }
}

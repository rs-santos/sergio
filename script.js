function mostrar() {
  var input = document. querySelector("#email");
  var emailv = input.value;
  var input2 = document. querySelector("#senha");
  var senhav = input2.value;
  if(emailv.length > 0){
    if(senhav.length > 0){
      element = document.querySelector('.link');
      element.style.visibility = 'visible';
    }else{

    }
  }else{
  }
}
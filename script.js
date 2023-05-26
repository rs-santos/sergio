// var btn = document.querySelector('#botao');
//      var container = document.querySelector('.login .fieldset form .link');
//
 //     btn.addEventListener('click', function(){
        
 //       if(container.style.display === 'block'){
 //         container.style.display = 'none';
 //       }else{( container.style.display = 'block');}
  //    });

  $('button').on('click',function(){
    $('#link').show(); // aparece o div
    window.open(seulink,'_blank'); // abre nova janela
});
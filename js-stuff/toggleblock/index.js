let button = document.querySelector('#button');
let container = document.querySelector('.wrapper')
let textToHide = document.querySelector('.list');



button.addEventListener('click', ()=> {
   
    
    if(container.classList.contains('open')){
        container.scrollHeight = `${textToHide.scrollHeight}px`;
        container.classList.remove('open');
        container.style.height = '0px';
        container.style.transition = '';
        container.style.transition = 'height 1000s linear';
    }
    else{
        container.classList.add('open');
        container.style.height = 'auto';
        container.style.transition = '';
        container.style.transition = 'height 1000s linear';
    }
})

// $(function() {
//     var b = $("#button");
//     var w = $("#wrapper");
//     var l = $("#list");
    
//     w.height(l.outerHeight(true));
  
//     b.click(function() {
    
//       if(w.hasClass('open')) {
//         w.removeClass('open');
//         w.height(0);
//       } else {
//         w.addClass('open');
//         w.height(l.outerHeight(true));
//       }
    
//     });
//   });
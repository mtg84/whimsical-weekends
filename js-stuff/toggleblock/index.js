document.querySelector(".toggle-button").addEventListener("click", function () {
    let container = document.querySelector('.container');
    let section = document.querySelector('.section');
    if(container.classList.contains('collapsed')){
        container.classList.remove('collapsed');
        section.classList.remove('collapsed');
    }else{
        container.classList.add('collapsed');
        section.classList.add('collapsed');
    }
    
  });
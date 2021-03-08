function clock(){
    
    const clock = document.querySelector('#clock');
    
    return setInterval( () => {
        let date = new Date();
        let tick = date.toLocaleTimeString();
        clock.textContent = tick;
    }, 1000);


}

clock();
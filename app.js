const div = document.createElement('div');
div.className = 'time';
document.querySelector('.container-clock').appendChild(div);

const showClock = () => {
    
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();    
    
    let timeNro = `${hours}:${minutes}:${seconds}`;
    div.innerHTML = timeNro;    
    
        
}

showClock()

setInterval(showClock, 1000)





const showClock = () => {
    
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`

      
}

showClock()



setInterval(showClock, 1000)
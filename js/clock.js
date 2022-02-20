const clock = document.querySelector("h2#clock");

// interval = 매2초 매5초 매1분마다..등등
// timeout like timer..?
//padStart stringㅇㅔ 쓸 수 있는 
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
    
}

getClock();
setInterval(getClock, 1000);
// setInterval(sayHello, 5000);
//setTimeout(sayHello, 5000); 
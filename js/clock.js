const clock = document.querySelector('.clock');


function getTime1(){
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerHTML = year + '-' + (month<10 ? '0' + month : month) + '-' + date + '<br>' + (hour<10 ? '0' + hour : hour) +":" + (minutes<10 ? '0' + minutes : minutes) + ":"+ (seconds<10 ? '0' + seconds : seconds);
}


function init(){
    setInterval(getTime1, 1000);
}

init();
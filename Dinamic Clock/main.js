function clock(){

    let date = new Date()
    let hours = date.getHours();
    let munites = date.getMinutes();
    let soucend = date.getSeconds();

    if(hours < 10){
        hours = "0" + hours
    }
    if(munites < 10){
        munites = "0" + munites
    } 
    if(soucend < 10){
        soucend = "0" + soucend
    }

    document.getElementById('clock').textContent = hours + ":" + munites + ":" + soucend;
}



    
window.onload = function(){
    setInterval(clock,500)
}

let ele = document.querySelector('.count-down');
let time = 10 ;

let main = setInterval(function(){

    countDown()
},1000);

function countDown(){

    let menites = Math.floor(time / 60);

        if(time < 10){
        menites = "0" + menites
    }

    let secound = time % 60

        if(time < 10){
        secound = "0" + secound
    }

    ele.innerHTML = menites + ":" + secound;
    if(time > 0){
        time -= 1 ;

    }else {

        clearTimeout(main);
        ele.innerHTML = 'Done'
    }

}
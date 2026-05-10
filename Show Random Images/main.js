let ele = document.getElementById('img');
let imges = ['01.png','02.jpeg','03.jpg','04.jpg','05.jpg','06.jpg'];

function randomImage (ele,imges){
    setInterval(function(){

        let randomNum = Math.floor(Math.random() * imges.length);

        ele.src =imges[randomNum];
        console.log(randomNum)
    },2000)
}
randomImage(ele,imges)
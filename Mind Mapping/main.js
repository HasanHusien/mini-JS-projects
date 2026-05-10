    let coundiv = document.querySelector('.count span'),
    bullets = document.querySelector('.bullets'),
    spans = document.querySelector('.bullets .spans'),
    quizArea = document.querySelector('.quiz-area'),
    answersArea = document.querySelector('.answers-area'),
    submitButton = document.querySelector('.submit-button'),
    resultsContent = document.querySelector('.results'),
    countdownElement = document.querySelector('.countdown');

    // extra var
    let currentIndext = 0;
    let rightAnswers = 0;
    let conunDownIntrval ;

    function getObject(){
    let myRequist = new XMLHttpRequest()

    myRequist.onreadystatechange = function(){

    if(this.readyState === 4 && this.status === 200 ){

    let MyRequiseObject = JSON.parse(this.responseText),
        
    myRequiesCount = MyRequiseObject.length;

    // create bulltes function
    creatBullets(myRequiesCount);

    // add questions function
    addQuistions(MyRequiseObject[currentIndext] , myRequiesCount);

    //  countdown function 
    countdown(5,myRequiesCount);

    submitButton.onclick = () => {

    let theRightAnswer = MyRequiseObject[currentIndext].right_answer

    currentIndext++

    // check answer is true or false function
    checkAswer(theRightAnswer, myRequiesCount)

    // remove element
    quizArea.innerHTML = '';
    answersArea.innerHTML = '';

    //add questions function
    addQuistions(MyRequiseObject[currentIndext] , myRequiesCount)

    // set class active on it  function
    handelSpans()

    clearInterval(conunDownIntrval)
    //  countdown function 
    countdown(5,myRequiesCount);

    // for show results function
    showResults(myRequiesCount)
    }
    };
    };
    myRequist.open("Get","Quiz_mapping.json",true);
    myRequist.send();
    };
    //main functions
    getObject();

    function creatBullets(num) {

    coundiv.innerHTML = num
    for(let i =0; i < num; i++){

    let BulletsText = document.createElement('span');

    spans.appendChild(BulletsText);

    if(i == 0){
        BulletsText.className = 'on';
    };
        };
    };

    function addQuistions(obj , count){

    if (currentIndext < count){
    // About H2
    let h2Title = document.createElement('h2'),

    textTitle = document.createTextNode(obj.title)

    h2Title.appendChild(textTitle)

    quizArea.appendChild(h2Title)

    // creat anwser

    for(let i = 1; i <= 4;i++){

    // answer div
    let mainDiv = document.createElement('div');
    mainDiv.className = 'answer';

    // input radio
    let inp = document.createElement('input');
    inp.id = `answer_${i}`
    inp.type = 'radio';
    inp.name = 'qustion'
    inp.dataset.answer = obj[`answer_${i}`]

    // make first checked
    if(i == 1){
        inp.checked = true  };
    // Creat label 
        
    let label = document.createElement('label');

    label.htmlFor = `answer_${i}`

    let labelText = document.createTextNode(obj[`answer_${i}`])

    label.appendChild(labelText)

    mainDiv.appendChild(inp);

    mainDiv.appendChild(label)

    answersArea.appendChild(mainDiv)
}};
};
    function checkAswer(rAnswer , count){

    let Answers = document.getElementsByName('qustion');

    let choosenAnswer;

    for(let i =0; i < Answers.length; i++){

        if(Answers[i].checked) {

        choosenAnswer = Answers[i].dataset.answer;
        }}

    if(rAnswer === choosenAnswer){
        rightAnswers++
        console.log('right Answer');
    }}
    function handelSpans(){
    let AllSpans = document.querySelectorAll('.bullets .spans span');
    let AllSpansArr = Array.from(AllSpans);

    AllSpansArr.forEach((span, index) =>{

    if(currentIndext === index){

    span.className = 'on';
    };
    });
};
    function showResults(count){

    let results ;

    if(currentIndext === count){
    answersArea.remove();
    quizArea.remove();
    bullets.remove();
    submitButton.remove();

    if(currentIndext > (count / 2) && rightAnswers < count){

    results = `<span class=good>good</span>, ${rightAnswers} From ${count}`;

    }else if (rightAnswers == count) {
        results = `<span class=perfect>perfect</span> All Your answers is right`;

    }else {
        results = `<span class=bad> bad </span> ${rightAnswers} From ${count}`;
    }
    resultsContent.innerHTML = results;
    resultsContent.style.padding = '10px';
    resultsContent.style.backgroundColor = 'white';
    }}
    function countdown(duration, count){

    if(currentIndext < count){
    let munites , suconds

    conunDownIntrval = setInterval(function(){

    munites =parseInt (duration / 60);
    suconds = parseInt (duration % 60);

    munites = munites < 10 ? '0' + munites: munites;
    suconds = suconds < 10 ? '0' + suconds: suconds;

    countdownElement.innerHTML = `${munites} : ${suconds}`

    if(--duration <0){
        clearInterval(conunDownIntrval)
        submitButton.click()
    }
    },1000)
    }
}
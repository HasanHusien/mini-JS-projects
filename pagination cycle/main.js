let slideImage = Array.from(document.querySelectorAll('.slide-container img'));
let slidCount = slideImage.length;

// Set Current Slide
let CurrentSlide = 1;

// Slide Number Element
let slideNumber = document.querySelector('.slide-num');


// next and prev button
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('per') ;


// Handle Click On Next And Prev
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// Create main ul
let ulElement = document.createElement('ul');

// Set Id 
ulElement.setAttribute('id','ul-list');

// Create Liste Based on Slide count
for(let i =1; i <= slidCount; i++){

    // create lis
    let ulItems = document.createElement('li');

    // set Atrubutes
    ulItems.setAttribute('data-info', i );

    // set Content On li
    ulItems.appendChild(document.createTextNode(i))

    // append Sons On Peran
    ulElement.appendChild(ulItems);

}
let indcators = document.querySelector('.indcators').appendChild(ulElement);


// get new ul element
let newUlCreated = document.getElementById('ul-list');

// get ul array
let ulItemRorRemove = Array.from(document.querySelectorAll('#ul-list li'));


for(let i=0; i < ulItemRorRemove.length; i++){

    ulItemRorRemove[i].onclick = function(){

        CurrentSlide = parseInt(this.getAttribute('data-info'));

        checker()
    }
}

// turn on checker function
checker()

// next Slide Function 
function nextSlide(){
    if(nextBtn.classList.contains('disable')){
        return false
    }else
    
    CurrentSlide++

    checker()

};
//previouse Slide Function 
function prevSlide(){

    if(prevBtn.classList.contains('disable')){
        return false
    }else
    
    CurrentSlide--

    checker()
    

};

// make cheker Fumcktion for add active class
function checker(){

    // set the slide num
    slideNumber.textContent = 'slide # ' + (CurrentSlide) + ' of ' + (slidCount);

    // turn on removeActive function
        removeAllActive()

    // set active class on image
    slideImage[CurrentSlide - 1].classList.add('active');

    // set active class on lis
    newUlCreated.children[CurrentSlide - 1].classList.add('active');

    // if was first lis
    if(CurrentSlide == 1){

        // set diable class if was first
        prevBtn.classList.add('disable');
    }else {
        prevBtn.classList.remove('disable');
    }

    // if was last lis
    if(CurrentSlide == slidCount){

        // set diable class if was last
        nextBtn.classList.add('disable');
    }else {
        nextBtn.classList.remove('disable');

    }

}
function removeAllActive(){

// remove active from All image
slideImage.forEach(function(img){

    img.classList.remove('active');

    })
    // remaove classes From All lis
    ulItemRorRemove.forEach(function (bullets){

    bullets.classList.remove('active');
    })
}


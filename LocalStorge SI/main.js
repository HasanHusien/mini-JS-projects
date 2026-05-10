

let ele = document.querySelectorAll('.color-swtich li');
let classes = [];

// get from localstorge whene reload
document.body.classList.add(localStorage.getItem('Our-style') || 'red');

for(let i= 0; i < ele.length; i++){
    // set data color in arr
    classes.push(ele[i].getAttribute('data-color'));
    ele[i].addEventListener("click", function(){

        // remove
        document.body.classList.remove(...classes);
        // add
        document.body.classList.add(this.getAttribute('data-color'));
        // set in localstroge
        localStorage.setItem('Our-style',this.getAttribute('data-color'));

    },false);
};
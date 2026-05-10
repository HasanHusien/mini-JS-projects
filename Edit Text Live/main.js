let title = document.getElementById('title');
let content = document.getElementById('content');
let titleLive = document.getElementById('title-live');
let contentLive = document.getElementById('content-live');

title.onkeyup = function(){
    titleLive.textContent = this.value;
}
content.onkeyup = function(){
    contentLive.textContent = this.value;
}

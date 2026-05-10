let input = document.querySelector('.inp-repo'),
    btn = document.querySelector('.btn-repo'),
    container = document.querySelector('.info');


    btn.onclick = function (){
        getrepo()
    }

    function getrepo(){

        if(input.value == '') {

        container.innerHTML = `<span>Please right your User Name</span>`
    }
    else {
        fetch('https://jsonplaceholder.typicode.com/posts')

        .then((resolv)=> resolv.json())

        .then((repo) => {

            container.innerHTML = ''

            repo.forEach(rep =>{

                let maindiv = document.createElement('div'),

                    divtext = document.createTextNode(rep.title)

                    maindiv.appendChild(divtext)

                    let spanid = document.createElement('span'),

                        spantext = document.createTextNode(rep.id);

                        spanid.appendChild(spantext);

                        maindiv.appendChild(spanid);

                        maindiv.className = 'repo-box'

                    container.appendChild(maindiv)

            })
        })
    }
    }
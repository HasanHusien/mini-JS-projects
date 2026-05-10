let inp = document.querySelector('.head input'),
    btnRepo = document.querySelector('.btn-repo'),
    info = document.querySelector('.info');

    btnRepo.onclick = function (){
        getRepo()
    }
    function getRepo(){

        if(inp.value ==''){
            info.innerHTML = `<span> Pleace right Repoes UserName. </span>`;
        }
        else {
            fetch(`https://api.github.com/users/${inp.value}/repos`)
            .then((repo) => repo.json())

            .then((repoes)=> { 

                // For Be Empty
                info.innerHTML = ''

                // Loop on repo
                repoes.forEach(rep => {

                    // crerat maindiv
                    let MainDiv = document.createElement('div'),

                        repoName = document.createTextNode(rep.name);

                        MainDiv.appendChild(repoName);

                            let SpanStars = document.createElement('span'),

                                spanTetx = document.createTextNode(`Stars ${rep.stargazers_count}`);

                                SpanStars.appendChild(spanTetx);

                                MainDiv.appendChild(SpanStars)

                                let theUrl = document.createElement('a'),

                            urlText = document.createTextNode('Visit');
                            
                            theUrl.appendChild(urlText);

                            theUrl.href = `https://github.com/${inp.value}/${rep.name}`

                            theUrl.setAttribute('target','_blank');

                            MainDiv.appendChild(theUrl)

                                MainDiv.className = 'repo-box'

                                info.appendChild(MainDiv);

                })
                    
            })
        }
    }


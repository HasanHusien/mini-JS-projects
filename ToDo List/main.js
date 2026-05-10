// Etting varibles
let inp = document.querySelector('.add-task input');
let btnPluse = document.querySelector('.add-task .plus');
let taskContent = document.querySelector('.tasks-content');
let tasksCount = document.querySelector('.tasks-count span');
let tasksComplated = document.querySelector('.tasks-complate span');



window.onload = function() {
    inp.focus()
}

btnPluse.onclick = function(){
        if(inp.value === ''){

    Swal.fire({
    title: "This Empty Value",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Add it !"
    }).then((result) => {
    if (result.isConfirmed) {
    Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
});
}
});
    }
    else {

        let noShow = document.querySelector('.tasks-content .no-tasks');

        if(document.body.contains(document.querySelector('.no-tasks'))){

        noShow.remove()


        }
        // creat main span
        let mainspan = document.createElement('span');

        // creat del span
        let deleteSpan = document.createElement('span');

        // creat text for main span
        let spanText = document.createTextNode(inp.value);

        // create text for del btn
        let deleteText = document.createTextNode('Delete');

        // append cheldern
        mainspan.appendChild(spanText);
        // the class name
        mainspan.className = 'task-box';

        deleteSpan.appendChild(deleteText);
        deleteSpan.className = 'delete'

        // append del into main span
        mainspan.appendChild(deleteSpan);

        // apend into container
        taskContent.appendChild(mainspan);


        inp.value = '';

        inp.focus();



        CounAndComplat();


    }
}


document.addEventListener('click',function(e){

    if(e.target.className == 'delete'){

        e.target.parentNode.remove()

        if(taskContent.childElementCount == 0){

            CreatNoTasks()
        }
    }

    if(e.target.classList.contains('task-box')){

        e.target.classList.toggle('finished')
    }

    CounAndComplat()

})

function CreatNoTasks(){

    let msgSpan = document.createElement('span');

    let msgSpanText = document.createTextNode('Its Zero Tasks For Show');

    msgSpan.appendChild(msgSpanText);

    msgSpan.className = 'no-tasks';

    taskContent.appendChild(msgSpan)
}



function CounAndComplat(){

    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    tasksComplated.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}

const todoContainer=document.querySelector(".todo-container")
const todoList=[]
export function addToDo(){
    createDOMForm()
}
export function createNewDiv(){
    console.log(document.querySelector("#date").value)
    const selectedRadio = document.querySelector('input[name="difficulty"]:checked');
    if (document.querySelector('input[name="difficulty"]:checked')&&document.querySelector("#date").value && document.querySelector("#toDoName").value ){
        todoList.push({
            name:document.querySelector("#toDoName").value,
            date:document.querySelector("#date").value,
            difficulty:document.querySelector('input[name="difficulty"]:checked')
        })
    }
    console.log(todoList)
    createDOMDiv()
}
function createDOMForm(){
    const form =`        <form action="" method="post">
            <label for="toDoName">What is your To do Name ?</label>
            <input type="text" name="toDoName" id="toDoName" required>
            <label for="date">What is your deadline?</label>
            <input type="date" name="date" id="date" required>
            <label for="easy">Easy</label>
            <input type="radio" name="difficulty" id="easy" >
            <label for="medium">Medium</label>
            <input type="radio" name="difficulty" id="medium">
            <label for="hard">Hard</label>
            <input type="radio" name="difficulty" id="hard">
            <input type="button" value="Finish" id="submitButton">
        </form>`
        todoContainer.innerHTML=form
        const submit=document.querySelector("#submitButton")
        submit.addEventListener("click",createNewDiv)
}
function createDOMDiv(){
    let htmlString = ``
    for (let index = 0; index < todoList.length; index++) {
        htmlString+=`        <div class="list-container" id="list-container${index}">
            <div class="delete" id="delete${index}">X</div>
            <div class="name">${todoList[index].name}</div>
            <div class="date">${todoList[index].date}</div>
            <div class="dif">${todoList[index].difficulty.id}</div>
            <label for="done">did yo do this ?</label>
            <input type="checkbox" name="done" class="done" id="done${index}">
        </div>`
    }
    todoContainer.innerHTML=htmlString
    for (let index = 0; index < todoList.length; index++) {
        const deleter=document.querySelector(`#delete${index}`)
        const cont=document.querySelector(`#list-container${index}`)
        deleter.addEventListener("click",function () {
            cont.remove()
        })
    }
}

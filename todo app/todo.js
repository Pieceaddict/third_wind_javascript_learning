const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem('todos'));
if(todos){
    todos.forEach(todo =>{
        addtodo(todo);
    })
}



form.addEventListener('submit', (e) => {
    console.log("why");
    e.preventDefault();
   addtodo();
})

function addtodo(todo){
    let todotext = input.value;
  if(todo){
    todotext = todo.text;
  }

    if(todotext){
           const todoEl = document.createElement('li');
           if(todo && todo.completed){
            todoEl.classList.add('completed');
           }
           todoEl.innerText = todotext;
          
          todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle("completed");
            updateLs();
          })
        //   on right click remove todo
          todoEl.addEventListener('contextmenu',(e)=>{
           e.preventDefault();
           todoEl.remove();
           updateLs();
          })

           todosUL.appendChild(todoEl);

           input.value ='';
           updateLs();
    }     
}
function updateLs(){
    const todosEl = document.querySelectorAll('li');
    const todos = [];

    todosEl.forEach((todoEl) =>{
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed'),

        });

    })
    localStorage.setItem("todos",JSON.stringify(todos));

}




const start = document.querySelector(".btn");
const hider = document.querySelector(".fa-x");
const taskContainer = document.querySelector(".taskContainer");
const listContainer = document.querySelector(".listContainer");
const inputbox = document.querySelector(".input");
const addTaskButton = document.querySelector(".addTask");



        start.addEventListener("click", showTaskPage);
        hider.addEventListener("click", showHomePage);
        
        function showTaskPage() {
            taskContainer.style.width = "293px";
        }
        
        function showHomePage() {
            taskContainer.style.width = "0";
        }





addTaskButton.addEventListener("click" , () =>{

});

        // <ol class="listContainer">
        //     <li>working on project</li>
        //     <li>working on project</li>
        //     <li id="done">working on project</li>
        // </ol>
        

    addTaskButton.addEventListener("click" , () =>{
    if(inputbox.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputbox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
       if (e.target.id === 'done') {
        e.target.id = ''; // Removng the ID
            } 
            else {
                e.target.id = 'done'; // Adding the ID
            }
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


// local storage

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();















// const homePage = document.querySelector(".home");
// const taskPage = document.querySelector(".taskContainer");
// const goToTaskPage = document.querySelector(".btn")
// const goToHomePage = document.querySelector(".fa-x");
// const taskList = document.querySelector(".listContainer"); 
// const newTaskInput = document.querySelector(".input");
// const addTaskButton = document.querySelector(".addbtn");


//         // Check if there are tasks stored in the browser's localStorage
//         const storedTasks = localStorage.getItem("tasks");
//         if (storedTasks) {
//             const tasks = JSON.parse(storedTasks);
//             if (tasks.length > 0) {
//                 showTaskPage();
//                 tasks.forEach(task => addTaskToPage(task));
//             }
//         }

//         goToTaskPage.addEventListener("click", showTaskPage);
//         goToHomePage.addEventListener("click", showHomePage);
        
//         function showTaskPage() {
//             taskPage.style.width = "293px";
//         }
        
//         function showHomePage() {
//             taskPage.style.width = "0";
//         }
        
//         addTaskButton.addEventListener("click", addTask);

//         function addTask() {
//             const taskText = newTaskInput.value.trim();
//             if (taskText === "") {
//                 alert("You must write something!");
//             }
//             else{
//                 const taskItem = document.createElement("li");
//                 taskItem.innerText = newTaskInput.value;
//                 taskList.appendChild(taskItem);

//                 let span =document.createElement("span");
//                 span.innerHTML = "\u00d7";
//                 taskItem.appendChild(span);
//                 newTaskInput.value = "";
//                 saveTask(taskText);
//             }
//         }
//         function saveTask(taskText) {
//             let tasks = [];
//             const storedTasks = localStorage.getItem("tasks");
//             if (storedTasks) {
//                 tasks = JSON.parse(storedTasks);
//             }
//             tasks.push(taskText);
//             localStorage.setItem("tasks", JSON.stringify(tasks));
//         }



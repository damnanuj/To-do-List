



const start = document.querySelector(".btn");
const hider = document.querySelector(".fa-x");
const taskContainer = document.querySelector(".taskContainer");
const listContainer = document.querySelector(".listContainer");
const inputbox = document.querySelector(".input");
const addTaskButton = document.querySelector(".addTask");



// if all task removed page will return to homepage automatically
        function olHasChildren(ol) {
            return ol.querySelector("li") !== null;
        }


        function showPageBasedOnTasks() {     //page view
            if (olHasChildren(listContainer)) {
                showTaskPage(); // Show the task container
            } else {
                showHomePage(); // Show the home page
            }
        }
        document.addEventListener("DOMContentLoaded", () => {
            showPageBasedOnTasks(); //when the page loads
        });


        start.addEventListener("click", showTaskPage);
        hider.addEventListener("click", showHomePage);
        
        function showTaskPage() {
            taskContainer.style.width = "293px";
        }
        function showHomePage() {
            taskContainer.style.width = "0";
        }

    addTaskButton.addEventListener("click" , () =>{
    if(inputbox.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputbox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";  //xmark code
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
    showPageBasedOnTasks();
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
        showPageBasedOnTasks();
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




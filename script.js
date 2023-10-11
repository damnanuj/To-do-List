




// js


const start = document.querySelector(".btn");
const hider = document.querySelector(".fa-x");

const taskContainer = document.querySelector(".taskContainer");
const listContainer = document.querySelector(".listContainer");
const inputbox = document.querySelector(".input");

const blurEffect =  document.getElementById("blurBackground");

// addbtn.addEventListener("click", () => {
//     inputbox.classList.add("inputVisible")
//     blurEffect.style.display = "block";
// });
start.addEventListener("click", () => {
    // lists.style.display = "block";
    taskContainer.classList.add("liststyle");
});

hider.addEventListener("click", () => {
    taskContainer.classList.remove("liststyle");
});


// <ol class="tasksContainer">
//    <li>working on project</li>
//    <li>working on project</li>
//    <li id="done">working on project</li>
// </ol>



function addTask(){
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
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
       if (e.target.id === 'done') {
        e.target.id = ''; // Remove the ID
            } 
            else {
                e.target.id = 'done'; // Add the ID
            }
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();




const start = document.querySelector(".btn");
const hider = document.querySelector(".fa-x");
const taskContainer = document.querySelector(".taskContainer");
const listContainer = document.querySelector(".listContainer");
const inputbox = document.querySelector(".input");

start.addEventListener("click", () => {
    // lists.style.display = "block";
    taskContainer.classList.add("liststyle");
});

hider.addEventListener("click", () => {
    taskContainer.classList.remove("liststyle");
});


        // <ol class="listContainer">
        //     <li>working on project</li>
        //     <li>working on project</li>
        //     <li class="done">working on project</li>
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
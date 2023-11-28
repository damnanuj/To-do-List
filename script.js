



const start = document.querySelector(".btn");
const taskContainer = document.querySelector(".taskContainer");
const listContainer = document.querySelector(".listContainer");
const inputbox = document.querySelector(".input");
const addTaskButton = document.querySelector(".addTask");
const backPage = document.querySelector(".fa-circle-chevron-left");
const resetList = document.querySelector(".fa-trash-can");



resetList.addEventListener('click', function() {    //reset button ->
    const confirmed = confirm('Are you sure you want to clear the list?');
    if (confirmed) {
        listContainer.innerHTML = '';                    //OL tag innerhtml empty 
        localStorage.clear();                           //clear the localstorage 
        showHomePage();                                //and back to homepage
      }
    
  });


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
        backPage.addEventListener("click", showHomePage);
        
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
        let editRemove = document.createElement("div");
        editRemove.classList.add("editRemove");
       
        let span1 =document.createElement("span");
        span1.innerHTML = `<i id="edit" class="fa-solid fa-pen-to-square edit"></i>`;  //edit code
        let span =document.createElement("span");
        
        span.innerHTML = '<i id="delete" class="fa-solid fa-trash"></i>';  //delete code
        editRemove.appendChild(span1);
        editRemove.appendChild(span);


        li.appendChild(editRemove);
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
    else if(e.target.id === "delete"){
        e.target.parentElement.parentElement.parentElement.remove();   
        //parent of i = span, parent of span = (editRemove div) and its parent is  Li
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






// js


const addbtn = document.querySelector(".button");
const inputbox = document.querySelector(".input-row");
const hider =document.getElementById("blurBackground");
const lists = document.querySelector(".ListArea");
const blurEffect =  document.getElementById("blurBackground");

// addbtn.addEventListener("click", () => {
//     inputbox.classList.add("inputVisible")
//     blurEffect.style.display = "block";
// });
addbtn.addEventListener("click", () => {
    // lists.style.display = "block";
    lists.style.width= "293px";;
});

// hider.addEventListener("click", () => {
//     inputbox.classList.remove("inputVisible")
//     blurEffect.style.display = "none";
// })





// js


const addbtn = document.querySelector(".button");
const inputbox = document.querySelector(".input-row");
const hider =document.getElementById("blurBackground");
const blurEffect =  document.getElementById("blurBackground");

addbtn.addEventListener("click", () => {
    inputbox.classList.add("inputVisible")
    blurEffect.style.display = "block";
});

hider.addEventListener("click", () => {
    inputbox.classList.remove("inputVisible")
    blurEffect.style.display = "none";
})
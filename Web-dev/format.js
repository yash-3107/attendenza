
let btn = document.querySelector("#btn");
btn.addEventListener("click",create);



function create(){
    let added_courses = document.querySelector("#added_courses");
    let newbie = document.createElement("div");
    
    
    let data = prompt("Enter the name of course you want to add:");
    newbie.textContent = data.toUpperCase();
    added_courses.appendChild(newbie);
    let trash = document.createElement("i");
    
    trash.className = "fa-solid fa-trash";
    newbie.appendChild(trash);
    newbie.addEventListener("dblclick",() =>{rename(newbie,trash)})
    trash.addEventListener("click",() =>{deleteCourse(newbie)});
}

function deleteCourse(newbie)
{
    newbie.remove();
   
}

function rename(newbie,trash){
    let data = prompt("Assign a new name:");
    newbie.textContent = data.toUpperCase();
    newbie.appendChild(trash);
}
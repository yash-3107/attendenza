let btn = document.querySelector("#btn");
let newbie;
let added_course;
//to create new courses and add them
btn.addEventListener("click",create);
function create(){
    let data = prompt("Enter the course name you want to add:");
     newbie = document.createElement("div");
     newbie.textContent = data.toUpperCase();
    let div = document.querySelector("#added_courses");
    div.appendChild(newbie);

    //for creating icon
    let trash = document.createElement("i");
    trash.className = "fa-solid fa-trash";
    newbie.appendChild(trash);

    //for deleting
    trash.addEventListener("click",deleteCourse);
     
    //for renaming purposes
    newbie.addEventListener("dblclick",rename);

}

//to rename the courses
function rename(){
      let data = prompt("wanna rename?Add new name:");
      newbie.textContent = data.toUpperCase();
      let trash = document.createElement("i");
    trash.className = "fa-solid fa-trash";
    newbie.appendChild(trash);
    trash.addEventListener("click",deleteCourse);

}
//to delete a course
function deleteCourse(){
    newbie.remove();

}
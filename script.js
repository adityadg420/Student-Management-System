let students = [];

function addStudent(){

let name = document.getElementById("name").value;
let id = document.getElementById("id").value;

let student = {name,id};

students.push(student);

displayStudents();
}

function displayStudents(){

let list = document.getElementById("studentList");
list.innerHTML="";

students.forEach(s=>{
let li = document.createElement("li");
li.textContent = s.name + " - " + s.id;
list.appendChild(li);
});

}

function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name==="" || email===""){
alert("Please fill all fields");
return false;
}

alert("Form Submitted Successfully");
return true;
}
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    error.innerHTML = "";

    if (username === "") {
        error.innerHTML = "Please enter your username.";
        return;
    }

    if (email === "") {
        error.innerHTML = "Please enter your email.";
        return;
    }

    if (!email.includes("@")) {
        error.innerHTML = "Please enter a valid email.";
        return;
    }

    if (password.length < 6) {
        error.innerHTML = "Password must be at least 6 characters.";
        return;
    }

    alert("Login Successful!");

    window.location.href = "dashboard.html";
});
function searchStudent() {
    let input = document.getElementById("searchInput").value.toUpperCase();
    let table = document.getElementById("studentTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let text = td.textContent || td.innerText;
            tr[i].style.display = text.toUpperCase().indexOf(input) > -1 ? "" : "none";
        }
    }
}

function filterStudents() {
    let filter = document.getElementById("filterStatus").value;
    let table = document.getElementById("studentTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let grade = tr[i].getElementsByTagName("td")[3].innerHTML;

        if (filter === "all" || grade === filter) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
function updateDashboard() {

const table = document.getElementById("studentTable");

const rows = table.getElementsByTagName("tr");

let total = rows.length - 1;
let passed = 0;
let failed = 0;
let totalMarks = 0;

for(let i=1;i<rows.length;i++){

let marks = parseInt(rows[i].cells[3].innerHTML);
let status = rows[i].cells[4].innerHTML;

totalMarks += marks;

if(status=="Pass"){
passed++;
}else{
failed++;
}

}

document.getElementById("totalStudents").innerHTML = total;

document.getElementById("passedStudents").innerHTML = passed;

document.getElementById("failedStudents").innerHTML = failed;

document.getElementById("averageMarks").innerHTML =
Math.round(totalMarks/total) + "%";

}

updateDashboard();
let bouton = document.getElementById("bouton");
let liste = document.getElementById('liste');

bouton.onclick = valid;

let id = 0;
let tasks = [];

function valid(){
    let mission = document.getElementById("mission").value;
    document.getElementById("mission").value = null;
    liste = document.getElementById('liste');
    const newDiv = document.createElement('li');
    newDiv.setAttribute("id", "task" + id);
    newDiv.textContent = mission;
    liste.appendChild(newDiv);
    
    const newBtn = document.createElement('button');
    newBtn.setAttribute("id", "taskbtn" + id);
    newBtn.textContent = "finito";
    newBtn.addEventListener("click", function() {
        //liste.removeChild(newDiv);
        //liste.removeChild(newBtn);
        newDiv.classList.add("line-through");
    })
    liste.appendChild(newBtn);

    id ++;
}

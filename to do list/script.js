let bouton = document.getElementById("bouton");
let liste = document.getElementById('liste');

bouton.onclick = valid;

let id = 0;
let tasks = [];

function valid(){
    tasks.push(document.getElementById("mission").value);
    document.getElementById("mission").value = null;
    id ++;
    alert(tasks)
}

for (let index = 0; index < tasks.length; index++) {
    const list = tasks[index];
    const newDiv = document.createElement('div');
    newDiv.setAttribute("id", "task" + index);
    newDiv.textContent = mission;
    liste.appendChild(newDiv);
    
}


    const newDiv = document.createElement('div');
    newDiv.setAttribute("id", "task" + id);
    newDiv.textContent = mission;
    liste.appendChild(newDiv);
    
    const newBtn = document.createElement('button');
    newBtn.setAttribute("id", "taskbtn" + id);
    newBtn.textContent = "finito";
    liste.appendChild(newBtn);

document.getElementById("task" + (id - 1))
let bouton = document.getElementById("bouton");
let liste = document.getElementById('liste');

bouton.onclick = valid;

function valid(){
    let mission = document.getElementById("mission").value;
    if (mission != "") {
        document.getElementById("mission").value = null;
        liste = document.getElementById('liste');
        const newTask = document.createElement('li');
        newTask.setAttribute("class", "task");
        newTask.textContent = mission;
        liste.appendChild(newTask);
        
        const newBtn = document.createElement('button');
        newBtn.setAttribute("class", "taskbtn");
        newBtn.textContent = "Terminé";
        newBtn.addEventListener("click", function() {
            if (newTask.classList.contains("line-through")) {
                liste.removeChild(newTask);
                liste.removeChild(newBtn);
            }
            else {
                newTask.classList.add("line-through");
                newBtn.textContent = "Effacer";
            }
        })
        liste.appendChild(newBtn);
    }
}

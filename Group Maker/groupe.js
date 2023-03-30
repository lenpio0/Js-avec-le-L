let jambon = document.getElementById("bouton");
let liste = document.getElementById("list");
let make = document.getElementById("bouton2")

let names = [];

jambon.onclick = addName;

function addName(){
    let blaze = document.getElementById("nom").value;
    document.getElementById("nom").value = null;
    const nouvelleDiv = document.createElement('div');
    nouvelleDiv.textContent = blaze;
    liste.appendChild(nouvelleDiv);
    names.push([blaze]);
    
    
}

make.onclick = associate 

function groupe(){
    let levles = Math.floor(Math.random() * names.length);
    return levles
}

function associate(){
    let tab2 = [];
    let suite = names[groupe()];
    if (tab2.length < 2){
        tab2.push([suite]);
    }
    else {}
    alert(tab2); 
    
}
let button = document.getElementById("button");
let citation = document.getElementById("citation");
let auteur = document.getElementById("auteur");

button.onclick = btn;

function btn() {
    let quote = Math.floor(Math.random() * 7);
    switch (quote){
        case 0:
            citation.innerHTML = "«Ta mère c'est de l'or, ne la fais pas pleurer pour de l'argent.»"
            auteur.innerHTML = "Jul"
            break;
        case 1:
            citation.innerHTML = "«Nage droit devant toi, nage droit devant toi !»"
            auteur.innerHTML = "Dory"
            break;
        case 2:
            citation.innerHTML = "«Eat some chocolate chocolate chip !»"
            auteur.innerHTML = "Joe Biden"
            break;
        case 3:
            citation.innerHTML = "«Yo tout le monde c'est Squeezie !»"
            auteur.innerHTML = "Squeezie"
            break;
        case 4:
            citation.innerHTML = "«Rien n'est plus semblable à l'identique que ce qui est pareil à la même chose.»"
            auteur.innerHTML = "Pierre Dac"
            break;
        case 5:
            citation.innerHTML = "«T'es sérieux toi ?»"
            auteur.innerHTML = "Clément de Sousa"
            break;
        case 6:
            citation.innerHTML = "«Ne vois pas ça comme un gros mur, mais comme un escalier.»"
            auteur.innerHTML = "L'autre Clément"
            break;
        }
    }

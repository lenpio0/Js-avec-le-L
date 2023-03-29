let button = document.getElementById("button");
let citation = document.getElementById("citation");

button.onclick = btn;

function btn() {
    let quote = Math.floor(Math.random() * 7);
    switch (quote){
        case 0:
            citation.innerHTML = "« Ta mère c'est de l'or, ne la fais pas pleurer pour de l'argent. » Le J"
            break;
        case 1:
            citation.innerHTML = "« Nage droit devant toi, nage droit devant toi » Dory "
            break;
        case 2:
            citation.innerHTML = "« Eat some chocolate chocolate chip» Joe Biden"
            break;
        case 3:
            citation.innerHTML = "« Yo tout le monde c'est Squeezie» Squeezie"
            break;
        case 4:
            citation.innerHTML = "«Rien n'est plus semblable à l'identique que ce qui est pareil à la même chose» Pierre Dac"
            break;
        case 5:
            citation.innerHTML = " «T'es sérieux toi ?» Clément Da Silva"
            break;
        case 6:
            citation.innerHTML = "«Ne vois pas ça comme un gros mur, mais comme un escalier.»"
            auteur.innerHTML = "L'autre Clément"
            break;
        }
    }

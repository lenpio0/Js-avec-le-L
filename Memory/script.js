let carte1 = document.getElementById('carte1');
let carte2 = document.getElementById('carte2');
let carte3 = document.getElementById('carte3');
let carte4 = document.getElementById('carte4');
let carte5 = document.getElementById('carte5');
let carte6 = document.getElementById('carte6');
let carte7 = document.getElementById('carte7');
let carte8 = document.getElementById('carte8');
let startBtn = document.getElementById('start');
let wall = document.getElementById('wall');
let win = document.getElementById('win');

let pioche1 = 0;
let pioche2 = 0;
let removedCard = 0;

carte1.onclick = card1;
carte2.onclick = card2;
carte3.onclick = card3;
carte4.onclick = card4;
carte5.onclick = card5;
carte6.onclick = card6;
carte7.onclick = card7;
carte8.onclick = card8;
startBtn.onclick = start;

let cartes = [carte1, carte2, carte3, carte4, carte5, carte6, carte7, carte8];

function start() {
    startBtn.classList.add('hidden');
    carte1.classList.remove('hidden');
    carte2.classList.remove('hidden');
    carte3.classList.remove('hidden');
    carte4.classList.remove('hidden');
    carte5.classList.remove('hidden');
    carte6.classList.remove('hidden');
    carte7.classList.remove('hidden');
    carte8.classList.remove('hidden');
    randomOrder(); 
    cartes.forEach(function(carte) {
        check = [];
        let order = Math.floor(Math.random() * 8);
        if (check.includes(order) == false) {
            check.push(order);
            carte.classList.add('order-' + order);
        }
        else {
             do {
                order = Math.floor(Math.random() * 8);
                if (check.includes(order) == false) {
                    check.push(order);
                    carte.classList.add('order-' + order);
                }      
            }while (check.includes(order))
        }
    })   
}

function restart() {
    carte1.onclick = card1;
    carte2.onclick = card2;
    carte3.onclick = card3;
    carte4.onclick = card4;
    carte5.onclick = card5;
    carte6.onclick = card6;
    carte7.onclick = card7;
    carte8.onclick = card8;
    pioche1 = 0;
    pioche2 = 0;
    startBtn.classList.remove('hidden');
    carte1.classList.add('hidden', 'bg-none');
    carte1.classList.remove('bg-[url(images/spidermacron.webp)]')
    carte2.classList.add('hidden', 'bg-none');
    carte2.classList.remove('bg-[url(images/spidermacron.webp)]')
    carte3.classList.add('hidden', 'bg-none');
    carte3.classList.remove('bg-[url(images/drake_en_mode_donuts.webp)]')
    carte4.classList.add('hidden', 'bg-none');
    carte4.classList.remove('bg-[url(images/drake_en_mode_donuts.webp)]')
    carte5.classList.add('hidden', 'bg-none');
    carte5.classList.remove('bg-[url(images/finn_jake_hood.webp)]')
    carte6.classList.add('hidden', 'bg-none');
    carte6.classList.remove('bg-[url(images/finn_jake_hood.webp)]')
    carte7.classList.add('hidden', 'bg-none');
    carte7.classList.remove('bg-[url(images/mickauto.webp)]')
    carte8.classList.add('hidden', 'bg-none');
    carte8.classList.remove('bg-[url(images/mickauto.webp)]')
    carte1.classList.replace('border-green-600', 'border-black');
    carte2.classList.replace('border-green-600', 'border-black');
    carte3.classList.replace('border-green-600', 'border-black');
    carte4.classList.replace('border-green-600', 'border-black');
    carte5.classList.replace('border-green-600', 'border-black');
    carte6.classList.replace('border-green-600', 'border-black');
    carte7.classList.replace('border-green-600', 'border-black');
    carte8.classList.replace('border-green-600', 'border-black');
    win.classList.add('hidden');
}

function randomOrder() {

}

function resetCard1() {
    carte1.onclick = card1;
}

function resetCard2() {
    carte2.onclick = card2;
}

function resetCard3() {
    carte3.onclick = card3;
}

function resetCard4() {
    carte4.onclick = card4;
}

function resetCard5() {
    carte5.onclick = card5;
}

function resetCard6() {
    carte6.onclick = card6;
}

function resetCard7() {
    carte7.onclick = card7;
}

function resetCard8() {
    carte8.onclick = card8;
}

function nextTurn() {
    wall.classList.remove('hidden');
    setTimeout(function() {
        wall.classList.add('hidden');
    }, 600)
    if (carte1.onclick == null) {
        carte1.classList.remove("border-red-600");
        carte1.classList.add("border-green-600");
    }
    else if (carte1.onclick != null) {
        setTimeout(function() {
            carte1.classList.remove("border-red-600", "bg-[url(images/spidermacron.webp)]");
            carte1.classList.add("border-black", "bg-none");
        }, 600);
    }    
    if (carte2.onclick == null) {
        carte2.classList.remove("border-red-600");
        carte2.classList.add("border-green-600");
    }
    else if (carte2.onclick != null) {
        setTimeout(function() {
            carte2.classList.remove("border-red-600", "bg-[url(images/spidermacron.webp)]");
            carte2.classList.add("border-black", "bg-none");
        }, 600);
    }
    if (carte3.onclick == null) {
        carte3.classList.remove("border-red-600");
        carte3.classList.add("border-green-600");
    }
    else if (carte3.onclick != null) {
        setTimeout(function() {
            carte3.classList.remove("border-red-600", "bg-[url(images/drake_en_mode_donuts.webp)]");
            carte3.classList.add("border-black", "bg-none");
        }, 600);
    }
    if (carte4.onclick == null) {
        carte4.classList.remove("border-red-600");
        carte4.classList.add("border-green-600");
    }
    else if (carte4.onclick != null) {
        setTimeout(function() {
            carte4.classList.remove("border-red-600", "bg-[url(images/drake_en_mode_donuts.webp)]");
            carte4.classList.add("border-black", "bg-none");
        }, 600);
    }
    if (carte5.onclick == null) {
        carte5.classList.remove("border-red-600");
        carte5.classList.add("border-green-600");
    }
    else if (carte5.onclick != null) {
        setTimeout(function() {
            carte5.classList.remove("border-red-600", "bg-[url(images/finn_jake_hood.webp)]");
            carte5.classList.add("border-black", "bg-none");
        }, 600);
    }
    if (carte6.onclick == null) {
        carte6.classList.remove("border-red-600");
        carte6.classList.add("border-green-600");
    }
    else if (carte6.onclick != null) {
        setTimeout(function() {
            carte6.classList.remove("border-red-600", "bg-[url(images/finn_jake_hood.webp)]");
            carte6.classList.add("border-black", "bg-none");
        }, 600);
    }
    if (carte7.onclick == null) {
        carte7.classList.remove("border-red-600");
        carte7.classList.add("border-green-600");
    }
    else if (carte7.onclick != null) {
        setTimeout(function() {
            carte7.classList.remove("border-red-600", "bg-[url(images/mickauto.webp)]");
            carte7.classList.add("border-black", "bg-none");
        }, 600);
    }
    if (carte8.onclick == null) {
        carte8.classList.remove("border-red-600");
        carte8.classList.add("border-green-600");
    }
    else if (carte8.onclick != null) {
        setTimeout(function() {
            carte8.classList.remove("border-red-600", "bg-[url(images/mickauto.webp)]");
            carte8.classList.add("border-black", "bg-none");
        }, 600);
    }

}

function removeCard(card) {
    pioche1 = 0;
    pioche2 = 0;
    card.onclick = null;
    if (carte1.onclick == null && carte2.onclick == null && carte3.onclick == null && carte4.onclick == null && carte5.onclick == null && carte6.onclick == null && carte7.onclick == null && carte8.onclick == null) {
        // alert('win !');
        win.classList.remove('hidden');
        setTimeout(function() {
            restart();
        }, 2000);
    }
}

function card1() {
    carte1.classList.remove("border-black", "bg-none");
    carte1.classList.add("border-red-600", "bg-[url(images/spidermacron.webp)]");
    if (pioche1 == 0) {
        pioche1 = 1;
        carte1.onclick = null;
        removedCard = resetCard1;
    }
    else if (pioche2 == 0) {
        pioche2 = 1;
        if (pioche1 != pioche2) {
            pioche1 = 0;
            pioche2 = 0;
            removedCard();
        }
        else if (pioche1 == pioche2) {
            removeCard(carte1);
        }
        nextTurn();
    }
}

function card2() {
    carte2.classList.remove("border-black", "bg-none");
    carte2.classList.add("border-red-600", "bg-[url(images/spidermacron.webp)]");
    if (pioche1 == 0) {
        pioche1 = 1;
        carte2.onclick = null;
        removedCard = resetCard2;
    }
    else if (pioche2 == 0) {
        pioche2 = 1;
        if (pioche1 != pioche2) {
            pioche1 = 0;
            pioche2 = 0;
            removedCard();
        }
        else if (pioche1 == pioche2) {
            removeCard(carte2);
        }
        nextTurn();
    }
}

function card3() {
    carte3.classList.remove("border-black", "bg-none");
    carte3.classList.add("border-red-600", "bg-[url(images/drake_en_mode_donuts.webp)]");

    if (pioche1 == 0) {
        pioche1 = 2;
        carte3.onclick = null;
        removedCard = resetCard3;
    }
    else if (pioche2 == 0) {
        pioche2 = 2;
        if (pioche1 != pioche2) {
            pioche1 = 0;
            pioche2 = 0;
            removedCard();
        }
        else if (pioche1 == pioche2) {
            removeCard(carte3);
        }
        nextTurn();
    }
}

function card4() {
    carte4.classList.remove("border-black", "bg-none");
    carte4.classList.add("border-red-600", "bg-[url(images/drake_en_mode_donuts.webp)]");

    if (pioche1 == 0) {
        pioche1 = 2;
        carte4.onclick = null;
        removedCard = resetCard4;
    }
    else if (pioche2 == 0) {
        pioche2 = 2;
        if (pioche1 != pioche2) {
            pioche1 = 0;
            pioche2 = 0;
            removedCard();
        }
        else if (pioche1 == pioche2) {
            removeCard(carte4);
        }
        nextTurn();
    }
}

function card5() {
    carte5.classList.remove("border-black", "bg-none");
    carte5.classList.add("border-red-600", "bg-[url(images/finn_jake_hood.webp)]");
    if (pioche1 == 0) {
        pioche1 = 3;
        carte5.onclick = null;
        removedCard = resetCard5;
    }
    else if (pioche2 == 0) {
        pioche2 = 3;
        if (pioche1 != pioche2) {
            pioche1 = 0;
            pioche2 = 0;
            removedCard();
        }
        else if (pioche1 == pioche2) {
            removeCard(carte5);
        }
        nextTurn();
    }
}

function card6() {
    carte6.classList.remove("border-black", "bg-none");
    carte6.classList.add("border-red-600", "bg-[url(images/finn_jake_hood.webp)]");
    if (pioche1 == 0) {
        pioche1 = 3;
        carte6.onclick = null;
        removedCard = resetCard6;
    }
    else if (pioche2 == 0) {
        pioche2 = 3;
        if (pioche1 != pioche2) {
            pioche1 = 0;
            pioche2 = 0;
            removedCard();
        }
        else if (pioche1 == pioche2) {
            removeCard(carte6);
        }
        nextTurn();
    }
}

function card7() {
    carte7.classList.remove("border-black", "bg-none");
    carte7.classList.add("border-red-600", "bg-[url(images/mickauto.webp)]");
    if (pioche1 == 0) {
        pioche1 = 4;
        carte7.onclick = null;
        removedCard = resetCard7;
    }
    else if (pioche2 == 0) {
        pioche2 = 4;
        if (pioche1 != pioche2) {
            pioche1 = 0;
            pioche2 = 0;
            removedCard();
        }
        else if (pioche1 == pioche2) {
            removeCard(carte7);
        }
        nextTurn();
    }
}

function card8() {
    carte8.classList.remove("border-black", "bg-none");
    carte8.classList.add("border-red-600", "bg-[url(images/mickauto.webp)]");
    if (pioche1 == 0) {
        pioche1 = 4;
        carte8.onclick = null
        removedCard = resetCard8;
    }
    else if (pioche2 == 0) {
        pioche2 = 4;
        if (pioche1 != pioche2) {
            pioche1 = 0;
            pioche2 = 0;
            removedCard();
        }
        else if (pioche1 == pioche2) {
            removeCard(carte8);
        }
        nextTurn();
    }
}
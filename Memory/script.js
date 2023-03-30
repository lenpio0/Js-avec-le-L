let carte1 = document.getElementById('carte1');
let carte2 = document.getElementById('carte2');
let carte3 = document.getElementById('carte3');
let carte4 = document.getElementById('carte4');
let carte5 = document.getElementById('carte5');
let carte6 = document.getElementById('carte6');
let carte7 = document.getElementById('carte7');
let carte8 = document.getElementById('carte8');

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

function removeCard(card) {
    pioche1 = 0;
    pioche2 = 0;
    card.onclick = null;
    if (carte1.onclick == null && carte2.onclick == null && carte3.onclick == null && carte4.onclick == null && carte5.onclick == null && carte6.onclick == null && carte7.onclick == null && carte8.onclick == null) {
        alert('win !');
        restart();
    }
}

function card1() {
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
    }
}

function card2() {
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
    }
}

function card3() {
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
    }
}

function card4() {
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
    }
}

function card5() {
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
    }
}

function card6() {
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
    }
}

function card7() {
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
    }
}

function card8() {
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
    }
}
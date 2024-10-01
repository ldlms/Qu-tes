"use strict";
let eleves = [
    { name: 'Alice', hasReviewed: false },
    { name: 'Bob', hasReviewed: false },
    { name: 'Charlie', hasReviewed: false },
    { name: 'David', hasReviewed: false }
];
function randomPick(eleves) {
    while (!eleves.every(eleve => eleve.hasReviewed === true)) {
        let randomNumber = Math.floor(Math.random() * eleves.length);
        if (eleves[randomNumber].hasReviewed === false) {
            eleves[randomNumber].hasReviewed = true;
            console.log(eleves[randomNumber]);
        }
    }
}
;
randomPick(eleves);

type Eleve = {
    name:string,
    hasReviewed:boolean,
}



let eleves = [
    { name: 'Alice', hasReviewed: false },
    { name: 'Bob', hasReviewed: false },
    { name: 'Charlie', hasReviewed: false },
    { name: 'David', hasReviewed: false }
];



function randomPick(eleves:Eleve[]):void{
    while(!eleves.every(eleve => eleve.hasReviewed === true)){
        let randomNumber:number = Math.floor(Math.random()*eleves.length);
        if(eleves[randomNumber].hasReviewed === false){
        eleves[randomNumber].hasReviewed = true;
        console.log(eleves[randomNumber]);
        }
    }
};

randomPick(eleves);


/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers:number[] = [1, 2, 3, 4, 5, 6];

function sumOfEvenNumbers(numbers:number[]):number{
    return numbers.filter(number => number%2 === 0).reduce((acc:number,val:number)=>acc+val,0);
    
}

// console.log(sumOfEvenNumbers(numbers));




/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2:number[] = [12, 21, 67, 36, 49, 51];

// function maxNumber(numbers:number[]):number{
//     function comparator(a:number,b:number):number{
//         return a-b;
//     }
//      numbers.sort(comparator);
//      return numbers[numbers.length-1];
// }

function maxNumber(numbers:number[]):number{
    return Math.max(...numbers);
}

console.log(maxNumber(numbers2));
function multiply(a,b){
return a*b;
}

function sum(a,b){
    return a+b;
}

function calclulator(a,b,callback){
    return callback(a,b);
}

console.log(calclulator(5,3,multiply));
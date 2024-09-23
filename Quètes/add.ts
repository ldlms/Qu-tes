function hello(name : string):void {
    console.log("Hello " + name);
}

const prenom : string = "bob";

hello(prenom);
hello(prenom + " marley");

function concat(a :string, b:string):string  {
    return a + b;
}

const wildCodeSchool : string = concat("Wild", concat("Code", "School"));
console.log(wildCodeSchool);

export{}
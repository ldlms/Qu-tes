class Person{
    private name : string;
    private age : number;

    constructor (name:string,age:number){
        this.name = name;
        this.age = age;
    }

    public tellMyName():string{
        return `i am ${this.name}`;
    }

    public tellMyAge():string{
        return `i am ${this.age} years old`;
    }


}

const personne1 = new Person('john',45);
const personne2 =  new Person('mary',35);

console.log(`hi,${personne1.tellMyName()} and ${personne1.tellMyAge()}`);
console.log(`hi,${personne2.tellMyName()} and ${personne2.tellMyAge()}`);
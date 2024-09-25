namespace User{

class User {

    public firstName:string;
    public lastName:string;
    public age:number;
    public email:string;
    public phoneNumber:string;
    public adress:Adress;

    constructor(firstName:string,lastName:string,age:number,email:string,phoneNumber:string,adress:Adress){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.adress = adress;
    }


}

class Adress{

    public street:string;
    public city:string;
    public postal:number;
    public country:string;

    constructor(street:string,city:string,postal:number,country:string){
        this.street = street;
        this.city = city;
        this.postal = postal;
        this.country = country;
    }



}

const adresse1:Adress = new Adress("3 rue des lilas","Toulouse",31400,"France");
const adresse2:Adress = new Adress("5 rue des bleuets","Castres",81300,"France");

const jean:User = new User("jean","dupont",31,"jean@gmail.com","06 76 56 45 32",adresse1);
const pierre:User = new User("pierre","palmade",56,"pierre@gmail.com","06 78 67 65 54",adresse2);

console.log(jean);
console.log(pierre);

}
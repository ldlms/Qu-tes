"use strict";
var User;
(function (User_1) {
    class User {
        constructor(firstName, lastName, age, email, phoneNumber, adress) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.adress = adress;
        }
    }
    class Adress {
        constructor(street, city, postal, country) {
            this.street = street;
            this.city = city;
            this.postal = postal;
            this.country = country;
        }
    }
    const adresse1 = new Adress("3 rue des lilas", "Toulouse", 31400, "France");
    const adresse2 = new Adress("5 rue des bleuets", "Castres", 81300, "France");
    const jean = new User("jean", "dupont", 31, "jean@gmail.com", "06 76 56 45 32", adresse1);
    const pierre = new User("pierre", "palmade", 56, "pierre@gmail.com", "06 78 67 65 54", adresse2);
    console.log(jean);
    console.log(pierre);
})(User || (User = {}));

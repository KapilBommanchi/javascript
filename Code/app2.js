// Object and its literals

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

var person = {
    firstName: "Kapil",
    lastName: "B",
    address: {
        country: "India",
        state: "Telangana",
        district: "hyd"
    }
};

console.log(person);
console.log(person.address);

console.log(person.firstName);
console.log(person.lastName);

console.log(person.address.country);


function greet(personName) {
    'use strict';
    console.log('hi ' + personName.firstName);
}

greet(person);

greet({
    firstName: "Raju",
    lastName: "G"
});


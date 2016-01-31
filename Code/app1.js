/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

// Object and the Dot(.) operator

var person = new Object();

person["firstName"] = "Kapil";
person["lastName"] = "B";

var firstNameProperty = "firstName";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();

person.address.country = "India";
person.address.state = "hyd";

console.log(person.address.country);
console.log(person["address"]["state"]);
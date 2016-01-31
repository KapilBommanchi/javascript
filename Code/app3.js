// JSON and Object Literals

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

var objectLiterals = {
    firstName: 'Kapil',
    isHeProgrammer: true
};

console.log(JSON.stringify(objectLiterals));

var jsonValue = JSON.parse('{"firstName":"Kapil", "isHeProgrammer": true}');

console.log(jsonValue);
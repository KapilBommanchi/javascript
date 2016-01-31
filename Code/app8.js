// Immediately Invoked function expression (IIFE)

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

function greet (name) {
	'use strict';
	console.log('Hello ' + name);
}

greet();

var greeting = function(name) {
	'use strict';
	console.log('Hi ' + name);
};

console.log(greeting);
console.log(greeting());

// This is called Immediately Invoked function expression
var greeting = function(name) {
	'use strict';
	return 'Hi ' + name;
}(); 

console.log(greeting); //outputs -- Hi undefined
//console.log(greeting()); // Throws error, since the function

var greeting = function(name) {
	'use strict';
	return 'Hi ' + name;
}('Kapil');

console.log(greeting);
//console.log(greeting()); // throws error

var nameOfPerson = 'John';

(function (name) {
	var check = 'From Inside of IIFE';
	console.log(check + ' ' + name);
} (nameOfPerson)); // IIFE
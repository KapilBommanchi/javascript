/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

// function factory, where it returns a function
function makeGreeting(language) {
	'use strict';
	return function (firstName, lastName) {
		if (language === 'en') {
			console.log('Hello ' + firstName + ' ' + lastName);
		}
		if (language === 'es') {
			console.log('Hola ' + firstName + ' ' + lastName);
		}
	};
	
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Kapil', 'b');
greetSpanish('Raju', 'f');
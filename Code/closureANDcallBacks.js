/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

function greetHiLater() {
	var greeting = 'Hello!';
	// this type is called as call-backs. giving a function to other functions.
	setTimeout(function() {
		console.log(greeting);
	}, 3000); // setTimeout is a javascript predefined function and 3000ms is the limit. 
	          // the inner function will execute after 3000ms
}

greetHiLater();



// e.g: callback implementation

function executeCallback(callback) {
	'use strict';
	var a = 1111;
	
	callback(); // it will execute the function which we send as a parameter while invoking
}

executeCallback(function() {
	console.log('I am inside of another function');
});

executeCallback(function() {
	alert('I am executing call back function !!');
});


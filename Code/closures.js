/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

function buildFunctions () {
	'use strict';
	var arr = [];
	var i;
	
	for (i = 0; i < 3; i++) {
		arr.push(
			function () {
				console.log(i);
			}
		);
	}
	return arr;
}


var readFun = buildFunctions(); // Invoking a function

readFun[0](); // Invoking an anonymous function inside of builFunction(); output is = 3
readFun[0](); // output = 3
readFun[2](); // output = 3

// the output is 3 because, readFun[0](), readFun[1]() and readFun[2]() are refering to 'console.log(i)'
// where the 'i' value is 3 (i=3), the 'readFun' ariable refere to the arr[f(0),f(1),f(2)] and i=3
// thats the reason we get output as 3 instead of (1, 2, and 3).


// *******  There are 2 ways to solve the above problem

// Solution - 1, using the latest feature 'let', which points to local scope

function buildFunctions1 () {
	'use strict';
	var arr = [];
	var i;
	
	for (i = 0; i < 3; i++) {
		let j = i;
		arr.push(
			function () {
				console.log(j);
			}
		);
	}
	return arr;
}


var readFun = buildFunctions1 ();

readFun[0]();
readFun[1]();
readFun[2]();


console.log('***************************');

// Solution - 2, using IIFE

function buildFunctions2 () {
	'use strict';
	var arr = [];
	var i;
	
	for (i = 0; i < 3; i++) {
		arr.push(
			(function (j) {
				return function () {
					console.log(j);
				}
			}(i))
		)
	}
	return arr;
}


var readFun = buildFunctions2 ();

readFun[0]();
readFun[1]();
readFun[2]();
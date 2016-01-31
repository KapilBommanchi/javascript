// Arrays

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

var arr = [
	1,
	false,
	{
		name: 'Samar',
		city: 'Nagpur'
	},
	// the below function is an expression
	function (name) {
		'use strict';
		console.log('Hello ' + name);
	},
	'hello'
];

// calling a funcion inside an array

arr[3](arr[2].name);
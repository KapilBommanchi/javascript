// By Value and By Reference

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

// By Value (all primitive datatypes), here it will have memory locations

var a = 3;
var b = a;

console.log(a);
console.log(b);


// By Reference (all Objects (including functions)), here it points to the same memory location

var obj = {
	sampleName: 'Raju'
};

var obj1 = obj;

console.log(obj);
console.log(obj1);


function greet(readObj) {
	'use strict';
	readObj.sampleName = 'Ravi';
}

greet(obj1);

console.log(obj);
console.log(obj1);

// special case, for creating a new memory location for previous pointing
// equals operator sets up new memory location
obj = {sampleName: 'Kapil'};

console.log(obj);
console.log(obj1);
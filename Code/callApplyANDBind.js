/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

var person = {
	firstName: 'Kapil',
	lastName: 'B',
	getfullName: function() {
		var fullName = this.firstName + ' ' + this.lastName;
		
		return fullName;
	}
}

console.log(person.getfullName());


var logName = function(lang1, lang2) {
	
	console.log('logged: ' + this.getfullName()); 
	// this throws error because when we call (logName()) 'this points to global Object/function. to remove error we have to use bind, apply or call
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-----------------------');
}

// ----------------------------  bind()  --------------------------------------------
var logPersonName = logName.bind(person); // here we are not invoking logname function instead we are using the logName object and bindind the person object to it. to say it simple bind(), will create a copy function(lang1, lang2) object.

logPersonName('en', 'es');

                      // (or)

/*var logName = function (lang1, lang2) {
	
	console.log('logged: ' + this.getfullName()); 
	// this throws error because when we call (logName()) 'this points to global Object/function. to remove error we have to use bind, apply or call
}.bind(person)();
*/

	
// ------------------------------  call()  ---------------------------------------------
	
logName.call(person, 'en', 'es'); // Unlike bind() the call() will directly executes the function function(lang1, lang2) instead creating a copy of it.
// logName.call(person(points to this keyword), 'en', 'es')



// ------------------------------- apply()  --------------------------------------------

logName.apply(person, ['en', 'es']); // it is similar to call() function but it accepts parameters in array format.




// function borrowing
// using call() and apply() we can borrow methods

var person2 = {
	firstName: 'John',
	lastName: 'Doe'
}

console.log(person.getfullName.apply(person2));




// function currying

function multiply(a, b) {
	
	return a*b;

}

var multiplyByTwo = multiply.bind(this, 2); // this step makes a copy of multiply function and setting 'a' as 2 using 'this' keyword.
/*
multiplyByTwo(b) {
var a = 2;
return a*b;
}
*/

console.log(multiplyByTwo(3)); // outputs 6

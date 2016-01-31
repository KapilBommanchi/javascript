// function and anonymous function creation

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

greet(); // These type of calling is called **hoisted (calling a function before its creation).

function greet() {
    'use strict';
    console.log('hi !!');
}

// anonymous function creation

var anonymousFun = function() {
    'use strict';
    console.log('hello !!');
}

anonymousFun();

function log(readValue) {
    console.log(readValue);
} 

log(function() {
    'use strict';
    console.log('Inside of another function');
});

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

// long running function
function waitThreeSeconds() {
    'use strict';
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {
        
    }
    console.log('finished function');
}

function clickHandler() {
    'use strict';
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');
//number string boolean object  null undefined
//bind, call, apply
//

// Examples:

// Closure:function printConsole(x) {
//     return function () {
//         console.log('I: ', x);
//     }
// }
//
// for (var i = 0; i < 10; i++) {
//     setTimeout(printConsole(i), 2000);
// }
//

var apiCall = new Promise(function(resolve, reject) {
    $.ajax({
        url: 'http://ip.jsontest.com/',
        type: 'GET',
        crossDomain: true,
        success: function(data) {
            resolve(data.ip);
        },
        error: function() {
            reject();
        }
    });
});


apiCall
    .then(function(ip) {
        console.log(`IP: ${ip}`);
    })
    .catch(function() {
        console.warn('Api call failed!');
    });
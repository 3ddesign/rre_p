var $ =  require('jquery');
var str = require('./constant');

var App = function () {
    console.log(str);
    $('body').html(str);
};

var app = new App();



// Examples:

// Closure:function printConsole(x) {
//     return function () {
//         console.log('I: ', x);
//     }
// }
//
// for (var i = 0; i < 10; i++) var {
//     setTimeout(printConsole(i), 2000);
// }
//
//
// var apiCall = new Promise(function(resolve, reject) {
//     $.ajax({
//         url: 'http://ip.jsontest.com/',
//         type: 'GET',
//         crossDomain: true,
//         success: function(data) {
//             resolve(data.ip);
//         },
//         error: function() {
//             reject();
//         }
//     });
// });
//
//
// apiCall
//     .then(function(ip) {
//         console.log(`IP: ${ip}`);
//     })
//     .catch(function() {
//         console.warn('Api call failed!');
//     });
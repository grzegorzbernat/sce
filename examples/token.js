var sce = require('..');

var uid = 'fe0a5d60';

var token;

console.log("UID: " + uid);

for (var i = 0; i < 10; i++) {
    token = sce.generateToken(uid, i);
    console.log("used: " + i + " token: " + token);
}
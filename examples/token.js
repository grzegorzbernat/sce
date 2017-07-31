var sce = require('..');

var uid = 'E63CCC50';

var token;

console.log("UID: " + uid);

for (i = 0; i < 10; i++) {
    token = sce.generateToken(uid, i);
    console.log("used: " + i + " token: " + token);
}
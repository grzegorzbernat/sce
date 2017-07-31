var sce = require('..');

var uid = 'e63ccc50';

var token;

console.log("UID: " + uid);

for (var i = 0; i < 10; i++) {
    token = sce.generateToken(uid, i);
    console.log("Used: " + i + " Token: " + token);
}
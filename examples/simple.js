var sce = require('..');

var uid = '5e0a5d60';
var text = '{"id":"","used":"","token":"","role":""}';

console.log("Source text: " + text);

var encrypted = sce.encrypt(text, uid);
console.log("Encrypted: " + encrypted);

console.log("Key: " + sce.getKey(uid));
console.log("Key length: " +sce.getKey(uid).length);
console.log("Decrypted: " + sce.decrypt(encrypted, uid));

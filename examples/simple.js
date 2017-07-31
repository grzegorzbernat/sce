var sce = require('..');

var uid = 'E63CCC50';
var text = "Ala ma kota";

var encrypted = sce.encrypt(text, uid);
console.log("Encrypted: " + encrypted);

console.log("Decrypted: " + sce.decrypt(encrypted, uid));
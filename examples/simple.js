var sce = require('..');

var uid = 'E63CCC50';
var text = "Ala ma kota";

var encrypted = sce.encrypt(text, uid);
console.log(encrypted);

console.log(sce.decrypt(encrypted, uid));
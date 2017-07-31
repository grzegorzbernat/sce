var sce = require('..');

var uid = 'E63CCC50';

var tagObject = new Object();
tagObject.name = "Jan Kowalski";
tagObject.used  = 0;
tagObject.work  = false;
tagObject.token = sce.generateToken(uid, tagObject.used);

var jsonString= JSON.stringify(tagObject);

console.log(jsonString);

var encrypted = sce.encrypt(jsonString, uid);
console.log(encrypted);
console.log(encrypted.length);
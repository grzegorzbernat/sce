var sce = require('..');

var uid = 'E63CCC50';

var tagObject = new Object();
tagObject.id = "507f191e810c19729de860ea";
tagObject.used  = 0;
tagObject.token = sce.generateToken(uid, tagObject.used);

var jsonString= JSON.stringify(tagObject);

console.log(jsonString);

var encrypted = sce.encrypt(jsonString, uid);
console.log(encrypted);
console.log(encrypted.length);
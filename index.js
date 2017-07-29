var aes256 = require('aes256');

function reverse(s) {
    return s.split("").reverse().join("");
}

function decrypt(data, uid) {
    var key = uid.substring(6, uid.length) + uid + reverse(uid) + uid.substring(0, 2);
    var cipher = aes256.createCipher(key);
    return cipher.decrypt(data);
}

function encrypt(data, uid) {
    var key = uid.substring(6, uid.length) + uid + reverse(uid) + uid.substring(0, 2);
    var cipher = aes256.createCipher(key);
    return cipher.encrypt(data);
}

module.exports = {
    decrypt: decrypt,
    encrypt: encrypt
};
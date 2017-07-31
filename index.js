var aes256 = require('aes256');

function reverse(s) {
    return s.split("").reverse().join("");
}

function decrypt(data, uid) {
    var _uid = uid.toUpperCase();
    var key = _uid.substring(6, _uid.length) + _uid + reverse(_uid) + _uid.substring(0, 2);
    var cipher = aes256.createCipher(key);
    return cipher.decrypt(data);
}

function encrypt(data, uid) {
    var _uid = uid.toUpperCase();
    var key = _uid.substring(6, _uid.length) + _uid + reverse(_uid) + _uid.substring(0, 2);
    var cipher = aes256.createCipher(key);
    return cipher.encrypt(data);
}

var randomString = function (seed) {
    var rand = require('random-seed').create(seed);
    var first = rand.string(20);
    var second = rand.string(20);
    return rand.cleanString(first) + rand.cleanString(second);
};

function generateToken(uid, used) {
    var seed = reverse((parseInt(uid.toUpperCase(), 16) + parseInt(used)).toString());
    var str = randomString(seed);
    var token = str.substring(0, 20);
    return token;
}

module.exports = {
    decrypt: decrypt,
    encrypt: encrypt,
    generateToken: generateToken
};
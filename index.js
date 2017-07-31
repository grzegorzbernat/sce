var aes256 = require('aes256');

function reverse(s) {
    return s.split("").reverse().join("");
}

function decrypt(data, uid) {
    var _uid = uid.toUpperCase();
    var key = (_uid.substring(4, _uid.length) + _uid + reverse(_uid) + _uid.substring(0, 4) + parseInt(uid.toUpperCase(), 16)).substring(0, 32);
    var cipher = aes256.createCipher(key);

    return cipher.decrypt(data);
}

function encrypt(data, uid) {
    var _uid = uid.toUpperCase();
    var key = (_uid.substring(4, _uid.length) + _uid + reverse(_uid) + _uid.substring(0, 4) + parseInt(uid.toUpperCase(), 16)).substring(0, 32);
    var cipher = aes256.createCipher(key);

    return cipher.encrypt(data);
}

function getKey(uid) {
    var _uid = uid.toUpperCase();
    var key = (_uid.substring(4, _uid.length) + _uid + reverse(_uid) + _uid.substring(0, 4) + parseInt(uid.toUpperCase(), 16)).substring(0, 32);

    return key;
}

var hashCode = function(str){
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

function generateToken(uid, used) {
    var seed = reverse((parseInt(uid.toUpperCase(), 16) + parseInt(used)).toString());
    var str = hashCode(seed);
    var token = str;
    return token;
};

module.exports = {
    decrypt: decrypt,
    encrypt: encrypt,
    generateToken: generateToken,
    getKey: getKey
};
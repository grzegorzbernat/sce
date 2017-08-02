var aesjs = require('aes-js');

function reverse(s) {
    return s.split("").reverse().join("");
}

function getKey(uid) {
    var _uid = uid.toUpperCase();
    var keyString = (_uid.substring(4, _uid.length) + _uid + reverse(_uid) + _uid.substring(0, 4) + parseInt(uid.toUpperCase(), 16)).substring(0, 32);

    var result = [];
    for (var i = 0; i < keyString.length; i++) {
        result[i] = keyString.charCodeAt(i) - 48;
    }

    return result;
}

function encrypt(data, uid) {
    var _uid = uid.toUpperCase();
    var key = getKey(_uid);

    var dataBytes = aesjs.utils.utf8.toBytes(data);

    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(dataBytes);

    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

    return encryptedHex;
}

function decrypt(data, uid) {
    var _uid = uid.toUpperCase();
    var key = getKey(_uid);

    var encryptedBytes = aesjs.utils.hex.toBytes(data);
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);

    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

    return decryptedText;
}



var hashCode = function (str) {
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
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
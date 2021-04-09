const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('private key',privateKey);
console.log('public key',publicKey);


// private key:  af58a544451f95720268be69b5c27aecc1a65e09176ab58e8b4159fd10ae4fd9
// public key:  04cc5d52f04effd195c926c7ba87aba482a23b7892ccfd05a8f0051bc1fd0319cad6952b201f96fc09f3ef799974183f27234e7fba4f8c5108a3680fd4ab1bd765
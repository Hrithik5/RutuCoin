const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('af58a544451f95720268be69b5c27aecc1a65e09176ab58e8b4159fd10ae4fd9');
const myWalletAddress = myKey.getPublic('hex');


let RutuCoin = new Blockchain();

const tnx1 = new Transaction(myWalletAddress, 'public key goes here', 10); // public key of the  reciever goes here
tnx1.signTransaction(myKey);
RutuCoin.addTransaction(tnx1);


console.log('\n Stating the mining......');
RutuCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of hrithik is ' + RutuCoin.getBalanceofAddress(myWalletAddress));

console.log('\n Stating the mining......');
RutuCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of hrithik is ' + RutuCoin.getBalanceofAddress(myWalletAddress));

console.log(RutuCoin);
const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class Transaction{
    constructor(fromAdress, toAdress, amount){
        this.fromAdress = fromAdress;
        this.toAdress = toAdress
        this.amount = amount;
    }

    calculateHash(){
        return SHA256(this.fromAdress + this.toAdress + this.amount).toString();
    }

    signTransaction(signKey){
        if(signKey.getPublic('hex') !== this.fromAdress){
            throw new Error('You cannot sign transactions for other wallets!');
        }

        const hashTx = this.calculateHash();
        const signature = signKey.sign(hashTx, 'base64');
        this.signature = signature.toDER('hex');
    }

    isValid(){
        if (this.fromAdress === null) return true;

        if(!this.signature || this.signature.length === 0){
            throw new Error('No signature provided in this transaction!');
        }

        const publicKey = ec.keyFromPublic(this.fromAdress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}


class Block{
    constructor(timestamp, transaction, previousHash = ''){
        this.timestamp = timestamp;
        this.transaction = transaction;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
        calculateHash(){
            return SHA256(
                this.index +
                this.previousHash +
                this.timestamp +
                JSON.stringify(this.transaction) + 
                this.nonce
            ).toString();
        }

        mineBlock(difficulty){
            while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join("0")){
                this.nonce++;
                this.hash = this.calculateHash();
            }
            console.log("Block mined " + this.hash);
        }

        hasValidTransaction(){
            for(const tnx of this.transactions){
                if(!tnx.isValid()){
                    return false;
                }
            }
            return true;
        }
    }

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransaction = [];
        this.miningReward  = 100;
    }

    createGenesisBlock(){
        return new Block("1/1/2021", "Hrithik Chauhan", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }
    
    minePendingTransactions(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransaction);
        block.mineBlock(this.difficulty);

        console.log("Block successfully mined!");
        this.chain.push(block);

        this.pendingTransaction = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    addTransaction(transaction){

        if(!transaction.fromAdress || !transaction.toAdress){
            throw new Error('Transactionsmust include from and to address');
        }

        if(!transaction.isValid()){
            throw new Error('Cannot add invalid transaction to chain');
        }

        this.pendingTransaction.push(transaction);
    }

    getBalanceofAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.transaction){
                if(trans.fromAdress === address){
                    balance -= trans.amount;
                }

                if(trans.toAdress === address){
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }

    isChainValid(){
        for (let index = 1; index < this.chain.length; index++) {
            const currentBlock = this.chain[index];
            const previousBlock = this.chain[index-1];

            if(!currentBlock.hasValidTransaction()){
                return false;
            }

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

module.exports.Blockchain = Blockchain;
module.exports.Transaction = Transaction;
# RUTUCOIN DOCUMENTATION

## Idea 

RutuCoin is a simple project made to understand the concepts of how  blockchain Technology works and what are the core fundamental concepts.        
I have made this project because I was very interested in cryptocurrency and always wanted to know how things actually work. So I thought why not make my own coin. So I started to research how to implement blockchain. And finally I came up with RutuCoin.
RutuCoin is a JavaScript implementation though it is originally done in solidity language who has similar syntax like JavaScript. Since I was doing for learning purpose I decided to stick with JavaScript only because I was comfortable with the language. Functionalities which I have added are block creations, making a chain of those block if blocks are valid, user can make transaction with the coins assigned to them on the mining a block. After any transactions the balance of the user is updated accordingly. Transactions is made using public and private key cryptography. And the keys are generated using Elliptic curve cryptography. After a successful transactions the block are added to the chain and the hash of the block is made using SHA256 algorithm. Also all the block contain digital signature of the owner which is calculated using the private key of the owner so other user cannot do any changes in others block. If user tries to manipulate the data in the block then the hash of the block is changed and it does not match with the hash stored in the next block, then the block is removed from the chain as it losses its credibility.

 

## What is Elliptic curve cryptography?   
Elliptic Curve Cryptography (ECC) is a key-based technique for encrypting data. ECC focuses on pairs of public and private keys for decryption and encryption of web traffic. 
Elliptic curve cryptography (ECC) is a public key encryption technique based on elliptic curve theory that can be used to create faster, smaller, and more efficient cryptographic keys. ECC generates keys through the properties of the elliptic curve equation instead of the traditional method of generation as the product of very large prime numbers.
ECC bases its approach to public key cryptographic systems on how elliptic curves are structured algebraically over finite fields. Therefore, ECC creates keys that are more difficult, mathematically, to crack. For this reason, ECC is considered to be the next generation implementation of public key cryptography and more secure than RSA.
An elliptic curve for current ECC purposes is a plane curve over a finite field which is made up of the points satisfying the equation:
y²=x³ + ax + b.
ECC can achieve the same level of security with a 164-bit key that other systems require a 1,024-bit key. Because ECC helps to establish equivalent security with lower computing power and battery resource usage, it is becoming widely used for mobile applications.
ECC, an alternative technique to RSA, is a powerful cryptography approach. It generates security between key pairs for public key encryption by using the mathematics of elliptic curves.
Elliptic curve cryptography is now used in a variety of applications: the U.S. government uses it to protect internal communications, the Tor project uses it to help assure anonymity, it is the mechanism used to prove ownership of bitcoins, it provides signatures in Apple's iMessage service, it is used to encrypt DNS information with DNS Curve, and it is the preferred method for authentication for secure web browsing over SSL/TLS.

 ## What is SHA-256 Cryptographic Hash Algorithm? 
	
A cryptographic hash (sometimes called ‘digest’) is a kind of ‘signature’ for a text or a data file. SHA-256 generates an almost-unique 256-bit (32-byte) signature for a text. See below for the source code. A hash is not ‘encryption’ – it cannot be decrypted back to the original text (it is a ‘one-way’ cryptographic function, and is a fixed size for any size of source text). This makes it suitable when it is appropriate to compare ‘hashed’ versions of texts, as opposed to decrypting the text to obtain the original version.

In cryptography, SHA-1 (Secure Hash Algorithm 1) is a cryptographic hash function which takes an input and produces a 160-bit (20-byte) hash value known as a message digest – typically rendered as a hexadecimal number, 40 digits long.

## Packages used to implement the idea
1.	Bn.js –  https://www.npmjs.com/package/bn.js?activeTab=readme 
2.	Crypto.js – https://www.npmjs.com/package/crypto-js 
3.	Elliptic.js – https://www.npmjs.com/package/elliptic
4.	Node.js(crypto) - https://nodejs.org/api/crypto.html 

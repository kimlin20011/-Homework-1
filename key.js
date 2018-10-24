// npm-library
console.log(`1. Please compare hash function and cryptographic hash function and give an example.`);
console.log(`\nhash function：\n為雜凑函數，將明文透過hash function壓縮成一段獨立的hash值，好的hash值很難與別的雜凑值有所衝突`);
console.log(`\ncryptographic hash function：\n中文名爲密碼雜凑函數，是hash function的一種，主要將明文與密碼input透過cryptographic hash function，生成message digest，使資料難以回溯 `);

const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 

console.log(`\na.`);
// privKey
const privKey = wallet.getPrivateKeyString();
//privKey=keccak256(privKey);
console.log("privKey:", privKey);
 
// pubKey
const pubKey = wallet.getPublicKeyString();
//pubKey=keccak256(pubKey);
console.log("pubKey:", pubKey);

// address
let address = wallet.getAddressString();
console.log("address:", address);

console.log(`\nb.`);
const addressBypubKey = keccak256(pubKey);
//console.log("addressBypubKey:", addressBypubKey);
console.log(`addressBypubKey: 0x${addressBypubKey.slice(-20)}`); //後面20位

console.log(`\nc.`);
keystore = wallet.toV3('nccu');
console.log(keystore);
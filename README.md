# 以太坊原理與應用開發 Homework-1
-------
## 作業描述  
(20%) 1. Please compare hash function and cryptographic hash function and give an example.  
(80%) 2. Peter is a noob in cryptocurrency and would like to get some Ethers. First step for him is to have an Ethereum account. He decides to generate an account and manages the wallet himself so he can understand the principles behind. From the class, he knows the account is created by the following steps:  
1. Create a keypair of private/public key  
2. public_key = ECDSA(private_key)  
3. public_key_hash = Keccak-256(public_key)  
4. address = '0x' + last 20 bytes of public_key_hash  
-------
## 作業執行  
1. npm install  
2. node key.js  
3. 2題的答案接在console log視窗中  

import { CryptoBlock } from "./CryptoBlock";
import { CryptoBlockChain } from "./CryptoBlockchain";

const BLOCKCHAIN_DIFFICULTY = 5

const blockchain = new CryptoBlockChain(BLOCKCHAIN_DIFFICULTY)

console.log('New Blockchain created.');

console.time('mine');
blockchain.addNewBlock(new CryptoBlock(1, new Date(), {sender: 'John', recipient: 'Jack', quantity: 50}))
blockchain.addNewBlock(new CryptoBlock(2, new Date(), {sender: 'Bob', recipient: 'Alice', quanity: 100}))
blockchain.addNewBlock(new CryptoBlock(3, new Date(), {sender: 'Clara', recipient: 'Bob', quanity: 25}))


console.log(JSON.stringify(blockchain, null, 4))

if (blockchain.checkChainValidity()) 
    console.log(`Your Blockchain is valid.`)
else
    console.log(`Your Blockchain is INVALID.`)

console.timeEnd('mine')
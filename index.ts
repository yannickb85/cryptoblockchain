import { CryptoBlock } from "./CryptoBlock";
import { CryptoBlockChain } from "./CryptoBlockchain";

const BLOCKCHAIN_DIFFICULTY = 5

const smashingCoin = new CryptoBlockChain(BLOCKCHAIN_DIFFICULTY)

console.log('New Blockchain created.');

console.time('mine');
smashingCoin.addNewBlock(new CryptoBlock(1, new Date(), {sender: 'John', recipient: 'Jack', quantity: 50}))
smashingCoin.addNewBlock(new CryptoBlock(2, new Date(), {sender: 'Bob', recipient: 'Alice', quanity: 100}))
smashingCoin.addNewBlock(new CryptoBlock(3, new Date(), {sender: 'Clara', recipient: 'Bob', quanity: 25}))


console.log(JSON.stringify(smashingCoin, null, 4))

if (smashingCoin.checkChainValidity()) 
    console.log(`Your Blockchain is valid.`)
else
    console.log(`Your Blockchain is INVALID.`)

console.timeEnd('mine')
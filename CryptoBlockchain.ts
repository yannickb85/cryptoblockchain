import { CryptoBlock } from "./CryptoBlock"

const SHA256 = require('crypto-js/sha256')

export class CryptoBlockChain {
    blockchain: Array<CryptoBlock>
    difficulty: number

    constructor(difficulty: number) {
        this.blockchain = [this.startGenesisBlock()]
        this.difficulty = difficulty
    }

    startGenesisBlock(): CryptoBlock {
        return new CryptoBlock(0, new Date(), 'Initial Block in the Chain', '0')
    }

    obtainLatestBlock(): CryptoBlock {
        return this.blockchain[this.blockchain.length-1]
    }

    addNewBlock(newBlock : CryptoBlock) {
        newBlock.precedingHash  = this.obtainLatestBlock().hash
        newBlock.proofOfWork(this.difficulty)
        this.blockchain.push(newBlock)
    }

    checkChainValidity() : boolean {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i]
            const precedingBlock = this.blockchain[i-1]

            if (currentBlock.hash !== currentBlock.computeHash())
                return false

            if (currentBlock.precedingHash !== precedingBlock.hash)
                return false
        }

        return true
    }

}
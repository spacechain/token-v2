'use strict'

const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()
const config = require('config')
let provider
if (process.env.DEPLOYMENT_ACCOUNT_KEY) {
  provider = new HDWalletProvider(
    process.env.DEPLOYMENT_ACCOUNT_KEY,
    config.provider
  )
}
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gasPrice: 150000000000,
      skipDryRun: true,
    },
    ropsten: {
      provider,
      network_id: 3,
      gas: 7000000,
      gasPrice: 5000000000, // 5 Gwei
      skipDryRun: true,
    },
    kovan: {
      provider,
      network_id: 42,
      gas: 5000000,
      gasPrice: 5000000000, // 5 Gwei
      skipDryRun: true,
    },
    mainnet: {
      provider,
      network_id: 1,
      gas: 5000000,
      gasPrice: 155000000000,
    },
  },
  compilers: {
    solc: {
      version: '^0.6.6',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200   // Optimize for how many times you intend to run the code
        }
      }
    }
  }
}

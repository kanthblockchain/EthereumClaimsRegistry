var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'YOUR WALLET KEY';   // You must place your metamask seed words here if you plan to use this on Ropsten network.

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      // host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        //return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/e3cad676e53b4505b845d1208c6f61c2")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },
    solc: {
      version: "0.5.16",
      docker: true,
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

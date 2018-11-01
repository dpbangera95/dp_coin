// var HDWalletProvider = require('truffle-hdwallet-provider');
// var mnemonic = 'six hockey sorry negative way sustain roast brisk entry knock inside dice';
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ganache: {
      host: "172.16.4.123",
      port: "7545",
      network_id: "*" // match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      // provider: function() {
      //   return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/817015c04c1b4d448df2a9619eb8e1e6")
      // },
      network_id: 4,
      gas: 4700000
    }
  }
};
  



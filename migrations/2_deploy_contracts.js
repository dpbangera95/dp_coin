var DPCoin = artifacts.require("./DPCoin.sol");
var DPCoinSale = artifacts.require("./DPCoinSale.sol");

module.exports = function(deployer) {
  deployer.deploy(DPCoin, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(DPCoinSale, DPCoin.address, tokenPrice);
  });
};

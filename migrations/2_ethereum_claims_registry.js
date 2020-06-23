var EthereumClaimsRegistry = artifacts.require("EthereumClaimsRegistry");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(EthereumClaimsRegistry);
};
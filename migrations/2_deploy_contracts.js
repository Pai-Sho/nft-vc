const TestERC1155 = artifacts.require("TestERC1155");

module.exports = function (deployer) {
  deployer.deploy(TestERC1155);
};

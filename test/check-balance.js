module.exports = async function main(callback) {
  try {
    // Retrieve and print test net accounts
    const accounts = await web3.eth.getAccounts();
    console.log("Accounts");
    console.log(accounts);

    // Retrieve and print account balances of erc20 token
    const TestERC1155 = artifacts.require("TestERC1155");
    testERC1155 = await TestERC1155.deployed();

    let erc20_ids = accounts.map((x) => 1);
    value = await testERC1155.balanceOfBatch(accounts, erc20_ids);
    console.log("ERC20 Balances");
    console.log(value);

    let nft_ids = accounts.map((x) => 0);
    value = await testERC1155.balanceOfBatch(accounts, nft_ids);
    console.log("NFT Balances");
    console.log(value);

    console.log("Transfering 1000 tokens from address 0 to address 1");
    value = await testERC1155.safeTransferFrom(
      accounts[0],
      accounts[1],
      1,
      1000,
      "0x0"
    );
    console.log(value);

    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};

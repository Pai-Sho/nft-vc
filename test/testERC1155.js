const TestERC1155 = artifacts.require("TestERC1155");

contract("TestERC1155", accounts => {
  it("should mint 1 NFT and 10**9 erc20 from first account", async () => {
    const TestERC1155Instance = await TestERC1155.deployed();
    const erc20Balance = await TestERC1155Instance.balanceOf.call(
      accounts[0],
      1
    );
    const nftBalance = await TestERC1155Instance.balanceOf.call(accounts[0], 0);

    assert.equal(
      erc20Balance.valueOf(),
      1000000000,
      "1000000000 erc20 wasn't in the first account"
    );
    assert.equal(nftBalance.valueOf(), 1, "NFT wasn't in the first account");
  });

  it("should transfer NFT from account 0 to account 3", async () => {
    const TestERC1155Instance = await TestERC1155.deployed();

    await TestERC1155Instance.safeTransferFrom(
      accounts[0],
      accounts[3],
      0,
      1,
      "0x0"
    );

    const acc0nft = await TestERC1155Instance.balanceOf.call(accounts[0], 0);
    const acc3nft = await TestERC1155Instance.balanceOf.call(accounts[3], 0);

    assert.equal(acc0nft.valueOf(), 0, "NFT was not transfered from account 0");
    assert.equal(acc3nft.valueOf(), 1, "NFT was not transfered to account 3");
  });
});

/*
module.exports = async function main (callback) {
  try {
    // Retrieve and print test net accounts
    const accounts = await web3.eth.getAccounts()
    console.log('Accounts')
    console.log(accounts)

    // Retrieve and print account balances of erc20 token
    const TestERC1155 = artifacts.require('TestERC1155')
    const testERC1155 = await TestERC1155.deployed()

    const erc20_ids = accounts.map(x => 1)
    const balances = await testERC1155.balanceOfBatch(accounts, erc20_ids)
    console.log('ERC20 Balances')
    console.log(balances)

    const nft_ids = accounts.map(x => 0)
    const nft_balances = await testERC1155.balanceOfBatch(accounts, nft_ids)
    console.log('NFT Balances')
    console.log(nft_balances)

    console.log('Transfering 1000 tokens from address 0 to address 1')
    const value = await testERC1155.safeTransferFrom(
      accounts[0],
      accounts[1],
      1,
      1000,
      '0x0'
    )
    console.log(value)

    callback(0)
  } catch (error) {
    console.error(error)
    callback(1)
  }
}
*/

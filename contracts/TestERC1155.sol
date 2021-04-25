// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract TestERC1155 is ERC1155 {
    uint256 public constant myNFT = 0;
    uint256 public constant myERC20 = 1;

    // TODO: create local test backend for metadata uri resolution
    // probably easiest with flask (separate repo?)

    // Mints an NFT and 1,000,000,000 ERC20 tokens
    constructor() ERC1155("https://localhost:3000/api/{id}.json") {
        _mint(msg.sender, myNFT, 1, "");
        _mint(msg.sender, myERC20, 10**9, "");
    }
}

const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Read/write to blockchain", () => {
  const {
    addressFactory,
    addressRouter,
    addressFrom,
    addressTo,
  } = require("../utils/AddressList");

  const { erc20ABI, factoryABI, routerABI } = require("../utils/ABIList");
  let provider,
    contractFactory,
    contractRouter,
    contractToken,
    decimals,
    amountIn,
    amountOut;

  provider = new ethers.providers.WebSocketProvider(
    "wss://eth-mainnet.g.alchemy.com/v2/G914QThfkEHS7nBZtzkbtXXeSwdneXS8"
  );

  contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);
  contractRouter = new ethers.Contract(addressRouter, routerABI, provider);
  contractToken = new ethers.Contract(addressFrom, routerABI, provider);

  it("Connects to a provider, factory, token and router", () => {
    assert(provider._isProvider);

    expect(contractFactory.address).to.equal(
      "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
    );

    expect(contractRouter.address).to.equal(
      "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
    );

    expect(contractToken.address).to.equal(
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
  });
});

const { ethers } = require("ethers");

// TESTNET PROVIDER
const providerTestnet = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/6iiqO_XZ1PYpYbFWvoXmlhyaAxkPuO_j"
);

// CREATE SIGNER
const myAddress = "0x9993E25668B9bCCCDC28C60C4172fC30bc2C7327";
const privateKey =
  "9f4b5cb4aaeb846e1f6b80df99c72d1277b4f10ca8982a0f253183353d63367d";
const walletSigner = new ethers.Wallet(privateKey, providerTestnet);

const exchangeETH = async () => {
  const sendValueHuman = "0.02";
  const gasPrice = await providerTestnet.getGasPrice();
  const nonce = 13; // web3.eth.getTransactionCount(myAddress)
  const txBuild = {
    from: myAddress, // from,
    to: "0xf531B8F309Be94191af87605CfBf600D71C2cFe0", // to (WETH onTest Network),
    value: ethers.utils.parseEther(sendValueHuman), // value,
    nonce: nonce, // nonce,
    gasLimit: 100000, // gas limit,
    gasPrice: gasPrice, // gas price
  };

  // SEND Transaction
  const txSend = await walletSigner.sendTransaction(txBuild);

  console.log("");
  console.log("TX SEND");
  console.log(txSend);
};

exchangeETH();

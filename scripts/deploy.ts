import { ethers } from "hardhat";

async function main() {
  const owners = ["0xYourAddress1", "0xYourAddress2", "0xYourAddress3"];
  const numConfirmationsRequired = 2;

  const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
  const multiSigWallet = await MultiSigWallet.deploy(owners, numConfirmationsRequired);

  await multiSigWallet.deployed();

  console.log("MultiSigWallet deployed to:", multiSigWallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

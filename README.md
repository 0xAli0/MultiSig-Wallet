# MultiSigWallet

A Solidity smart contract for a multi-signature wallet. The wallet requires multiple confirmations from owners to execute a transaction. This ensures a higher level of security for managing funds.

## Features

- Deposit funds into the wallet
- Submit a transaction
- Confirm a transaction
- Revoke a confirmation
- Execute a transaction

## Prerequisites

- Solidity ^0.8.18
- Node.js
- Hardhat (for local development and testing)

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/0xAli0/MultiSig-Wallet.git
   cd MultiSigWallet
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Usage

1. Compile the smart contract:
   ```sh
   npx hardhat compile
   ```

2. Run the tests:
   ```sh
   npx hardhat test
   ```

### Deployment

To deploy the contract, use the following script:

```javascript
const hre = require("hardhat");

async function main() {
  const owners = ["0xYourAddress1", "0xYourAddress2", "0xYourAddress3"];
  const numConfirmationsRequired = 2;

  const MultiSigWallet = await hre.ethers.getContractFactory("MultiSigWallet");
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
```

Run the deployment script:
```sh
npx hardhat run scripts/deploy.js --network yourNetwork
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

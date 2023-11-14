require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// set variables from .env file
const { RPC_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.5.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    energiMainnet: {
      chainId: 39797,
      url: String(RPC_URL || "https://nodeapi.energi.network"),
      gas: 1000000,
      gasPrice: 20000000000, // 20 GWei
      accounts: [`0x${PRIVATE_KEY}`],
    },
    energiTestnet: {
      chainId: 49797,
      url: String(RPC_URL || "https://nodeapi.test.energi.network"),
      gas: 1000000,
      gasPrice: 20000000000, // 20 GWei
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      energiTestnet: 'xxxxx-no-api-key-needed-xxxxx',
      energiMainnet: 'xxxxx-no-api-key-needed-xxxxx'
    },
    customChains: [
      {
        network: "energiMainnet",
        chainId: 39797,
        urls: {
          apiURL: "https://explorer.energi.network/api",
          browserURL: "https://explorer.energi.network"
        },
      },
      {
        network: "energiTestnet",
        chainId: 49797,
        urls: {
          apiURL: "https://explorer.test.energi.network/api",
          browserURL: "https://explorer.test.energi.network"
        },
      },
    ]
  },
};

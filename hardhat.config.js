require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
      version: "0.8.4",
      settings: {
          optimizer: {
              enabled: true,
              runs: 1000
          }
      }
  },
  networks: {
      ropsten: {
          url: process.env.ROPSTEN_URL || "",
          accounts:
              process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      },
      rinkeby: {
          url: process.env.RINKEBY_URL || "",
          accounts:
              process.env.PRIVATE_KEY_LAST !== undefined ? [process.env.PRIVATE_KEY_LAST] : [],
      },
      bsc: {
          url: process.env.BSC_URL || "",
          accounts:
              process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      },
      bsc_test: {
          url: process.env.BSC_TEST_URL || "",
          accounts:
              process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      },
  },
  gasReporter: {
      enabled: process.env.REPORT_GAS !== undefined,
      currency: "USD",
  },
  etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

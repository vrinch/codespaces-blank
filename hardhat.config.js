require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x9a2a04bc85b7129c7786614525f7b9362939f9c65812fc992c0250e9c416dd1b"],
    },
  },
};

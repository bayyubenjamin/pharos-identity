require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    pharos: {
      url: "https://testnet.dplabs-internal.com", // ganti sesuai RPC testnet Pharos
      accounts: ["process.env.PRIVATE_KEY"], // tanpa 0x
    }
  }
};

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
const url = process.env.ALCHEMY_API_URL
const private_key = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    georli:{
      url:url,
      accounts:[private_key]
    }
  }
};

const hre = require("hardhat");
let tokenCap = 500000000;
let tokenBlockReward = 50;

async function main() {
const westToken = await hre.ethers.getContractFactory("WestToken")
const deployWestToken = await westToken.deploy(tokenCap,tokenBlockReward)
console.log('deploying contract.....')
await deployWestToken.deployed()
console.log(`WestToken contract Address:${deployWestToken.address}`)
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

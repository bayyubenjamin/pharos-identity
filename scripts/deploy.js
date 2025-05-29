const { ethers } = require("hardhat");

async function main() {
  const PharosIdentity = await ethers.getContractFactory("PharosIdentity");
  const pharosIdentity = await PharosIdentity.deploy();
  await pharosIdentity.waitForDeployment();

  console.log("PharosIdentity deployed to:", pharosIdentity.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

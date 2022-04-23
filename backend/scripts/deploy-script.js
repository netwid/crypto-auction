// const ethers = require("ethers");
const hre = require("hardhat");

async function main() {

  const Auction = await hre.ethers.getContractFactory("Auction");
  const auction = await Auction.deploy();

  await auction.deployed();

  console.log('Auction contract was deployed to ', auction.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

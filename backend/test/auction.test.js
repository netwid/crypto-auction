const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Auction", () => {
    let owner;
    let bidder1;
    let bidder2;
    let auction;
    beforeEach(async () => {
        [owner, bidder1, bidder2] = await ethers.getSigners();
        const Auction = await ethers.getContractFactory("Auction", owner);
        auction = await Auction.deploy();
        await auction.deployed();
        console.log(auction.address);

    });

    it('should be deployed', async () => {
        expect(auction.address).to.be.properAddress;
    });


    it("should be creatable", async () => {
        const name = "cat";
        const descr = "nice cat";
        const imageURL = "http://cat";
        const minBid = 1488;
        const endTime = Date.now() + 300;

        await auction.startNewAuction(name, descr, imageURL, minBid, endTime);

        const auc1 = await auction.lots(0);

        expect(auc1.name).to.equal(name);
        expect(auc1.description).to.equal(descr);
        expect(auc1.imageURL).to.equal(imageURL);
        expect(auc1.owner).to.equal(owner.address);
    });


});
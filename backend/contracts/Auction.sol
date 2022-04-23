//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Auction {
    struct Lot {
        // static
        uint256 id;
        string name;
        string description;
        string imageURL;
        uint256 minimalBidIncrement;
        uint256 auctionEndTime;
        address owner;
        // state
        bool closed;
        uint256 highestBid;
        address highestBidder;
    }

    Lot[] public lots;
    uint256 counter;

    constructor(){
        counter = 0;
    }

    function getID() private returns (uint256) {
        return counter++;
    }

    function getAllLots() public view returns (Lot[] memory) {
        return lots;
    }

    function placeBid(uint256 lotId) public payable onlyLotActive(lotId) {
        Lot memory lot = lots[lotId];

        // checks
        if (lot.auctionEndTime <= block.timestamp) {
            revert("Auction has already ended");
        }

        if (lot.owner == msg.sender) {
            revert("Owner cannot bid his own auction");
        }

        uint256 newBid = msg.value;

        if (newBid <= lot.highestBid + lot.minimalBidIncrement) {
            revert("Bid is not high enough");
        }

        // changes
        address payable previousBidder = payable(lot.highestBidder);
        uint256 previousBid = lot.highestBid;

        lots[lotId].highestBid = newBid;
        lots[lotId].highestBidder = msg.sender;

        // transfer and events
        previousBidder.transfer(previousBid);
        emit LogBid(msg.sender, newBid, lot.id);
    }

    function startNewAuction(
        string memory _name,
        string memory _description,
        string memory _imageURL,
        uint256 _minimalBidIncrement,
        uint256 _auctionEndTime
    ) public onlyAfterStart(_auctionEndTime) {
        uint256 newId = getID();

        Lot memory newLot = Lot(
            newId,
            _name,
            _description,
            _imageURL,
            _minimalBidIncrement,
            _auctionEndTime,
            msg.sender,
            false,
            0,
            msg.sender
        );

        lots.push(newLot);
        emit AuctionStarted(block.timestamp, _auctionEndTime, _name);
    }

    function closeAuction(uint256 lotId) public onlyLotActive(lotId) {
        Lot memory lot = lots[lotId];

        if (lot.owner != msg.sender) {
            revert("Only owner can close auction");
        }

        if (lot.auctionEndTime > block.timestamp) {
            revert("You cannot close auction before trading ends");
        }

        lots[lotId].closed = true;
        if (lot.highestBid == 0) {
            emit EmptyAuction(lot.id);
            return;
        }

        payable(lot.owner).transfer(lot.highestBid);
        emit AuctionEnded(lot.highestBidder, lot.highestBid, lot.id);
    }

    modifier onlyLotActive(uint256 lotId) {
        require(lotId < counter, "This lot doesn't exist");
        require(
            lots[lotId].closed == false,
            "This lot has already been closed"
        );
        _;
    }

    modifier onlyAfterStart(uint256 auctionEndTime) {
        require(block.timestamp < auctionEndTime, "Incorrect time");
        _;
    }

    event LogBid(address bidder, uint256 bid, uint256 auctionId);
    event AuctionStarted(uint256 startTime, uint256 endTime, string lotName);
    event EmptyAuction(uint256 auctiodId);
    event AuctionEnded(
        address highestBidder,
        uint256 highestBid,
        uint256 auctionId
    );
}

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Auction {
    struct Lot {
        // static
        uint256 id;
        string description;
        string imageURL;
        uint256 minimalBidIncrement;
        uint256 auctionEndTime;
        address owner;
        // state
        uint256 highestBid;
        address highestBidder;
    }

    Lot[] public lots;
    uint256 counter;

    function getID() private returns (uint256) {
        return ++counter;
    }

    function getAllLots() public view returns (Lot[] memory) {
        return lots;
    }

    function placeBid(uint256 lotId) public payable onlyLotExists(lotId) {
        Lot memory lot = lots[lotId];

        // checks
        if (lot.auctionEndTime >= block.timestamp) {
            revert('Auction has already ended');
        }

        if (lot.owner == msg.sender) {
            revert('Owner cannot bid his own auction');
        }

        uint newBid = msg.value;

        if (newBid <= lot.highestBid) {
            revert('Bid is not high enough');
        }

        // changes
        address payable previousBidder = payable(lot.highestBidder);
        uint256 previousBid = lot.highestBid;

        lots[lotId].highestBid = newBid;
        lots[lotId].highestBidder = msg.sender;

        previousBidder.transfer(previousBid);
        
    }

    function startNewAuction(
        string memory _description,
        string memory _imageURL,
        uint256 _minimalBidIncrement,
        uint256 _auctionEndtime
    ) public returns (bool success) {}

    modifier onlyLotExists(uint256 lotId) {
        require(lotId <= counter && lotId != 0, "This lot doesn't exist");
        _;
    }
}

import { BigNumber } from "ethers";

export type Lot  = {
    id: BigNumber,
    name: string,
    description: string,
    imageURL: string,
    minimalBidIncrement: BigNumber,
    auctionEndTime: BigNumber,
    owner: string,
    closed: boolean,
    highestBid: BigNumber,
    highestBidder: number,
};

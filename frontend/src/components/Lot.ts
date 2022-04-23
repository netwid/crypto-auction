export type Lot  = {
    id: number,
    name: string,
    description: string,
    imageURL: string,
    minimalBidIncrement: number,
    auctionEndTime: number,
    owner: string,
    closed: boolean,
    highestBid: number,
    highestBidder: number,
};

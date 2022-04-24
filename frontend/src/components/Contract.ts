import { BigNumber, ethers } from "ethers";
import Auction from '../utils/Auction.json';
import { Lot } from "./Lot";

const contractAddress = '0xcB7A4F7027ef75617aaf948Ebe2739AE063a8A20';
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, Auction.abi, signer);

// bid amount - amount for new bid in wei
export const placeNewBid = async (lotId: BigNumber, bidAmount: number) => {
    const bidRes = await contract.placeBid(lotId, {
        value: bidAmount
    });

    await bidRes.wait();

    console.log(bidRes);
};


export const getAllLots = async (): Promise<Array<Lot>> => {
    const unformatedLots: Lot[] = await contract.getAllLots();

    const allLots: Array<Lot> = [];

    for (let lot of unformatedLots) {

        // to properly format lot info
        let formatLot: Lot = {
            id: lot.id,
            name: lot.name,
            description: lot.description,
            imageURL: lot.imageURL,
            owner: lot.owner,
            closed: lot.closed,
            highestBid: lot.highestBid,
            highestBidder: lot.highestBidder,
            minimalBidIncrement: lot.minimalBidIncrement,
            auctionEndTime: lot.auctionEndTime
        }
        allLots.push(formatLot);
    }
    //console.log(allLots);
    return allLots;
}

export const startNewAuction = async (
    name: string,
    description: string,
    imageURL: string,
    minimalBidIncrement: number,
    auctionEndTime: number) => {

    const contr = await contract.startNewAuction(name,
        description, imageURL, minimalBidIncrement, auctionEndTime);

    await contr.wait();


}

export const closeAuction = async (lotId: BigNumber) => {
    const auc = await contract.closeAuction(lotId);

    await auc.wait();

    console.log(auc);
}
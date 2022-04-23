import { ethers } from "ethers";
import { LotApi } from './LotApi';

export const buyLot = async (contract:ethers.Contract, lotId: number, bid: string) => {
    await contract.placeBid(lotId, {
        value: ethers.utils.parseEther(bid)
    })
};

export const getAllLots = async (contract:ethers.Contract): Promise<LotApi[]> => {
    return await contract.getAllLots();
}

export const startNewAuction = async (contract:ethers.Contract, name: string, description: string, imageURL: string, 
                                      minimalBidIncrement: number, auctionEndTime: number) => {
    await contract.startNewAuction(name, description, imageURL, minimalBidIncrement, auctionEndTime);
}

export const closeAuction = async (contract:ethers.Contract, lotId: number) => {
    await contract.closeAuction(lotId);
}
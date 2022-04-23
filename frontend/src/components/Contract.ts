import { ethers } from "ethers";
import { LotApi } from './LotApi';
import Auction from '../Auction.json';

const contractAddress = '';
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, Auction.abi, signer);

export const buyLot = async (lotId: number, bid: number) => {
    await contract.placeBid('1212211', {
        value: ethers.utils.parseEther('0.1')
    })
};

export const getAllLots = async (): Promise<LotApi[]> => {
    return await contract.getAllLots();
}

export const startNewAuction = async (name: string, description: string, imageURL: string, 
                                      minimalBidIncrement: number, auctionEndTime: number) => {
    await contract.startNewAuction(name, description, imageURL, minimalBidIncrement, auctionEndTime);
}

export const closeAuction = async (lotId: number) => {
    await contract.closeAuction(lotId);
}
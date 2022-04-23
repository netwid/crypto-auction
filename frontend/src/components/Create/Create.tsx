import { startNewAuction } from '../Contract';

export const Create = () => {
    const create = async () => {
        const name = prompt('Enter a name') as string;
        const description = prompt('Enter a description') as string;
        const imageURL = prompt('Enter a description)') as string; // To change
        const minimalBidIncrement = Number.parseInt(prompt('Enter a minimalBidIncrement') as string);
        const auctionEndTime = Number.parseInt(prompt('Enter a auctionEndTime') as string);

        //startNewAuction(name, description, imageURL, minimalBidIncrement, auctionEndTime);
    }

    return (
        <button onClick={create}>Create new lot</button>
    )
}
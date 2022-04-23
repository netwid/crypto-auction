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
        <div className='text-white border-white border-2 rounded-md'>
            <button className="p-1" onClick={create}>
                Create new auction +
            </button>
        </div>
    )
}
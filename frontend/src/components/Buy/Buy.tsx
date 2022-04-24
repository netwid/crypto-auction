import { BigNumber } from 'ethers';
import { useState } from 'react';
import { placeNewBid } from '../Contract';

import { LoadingButton } from '../LoadingButton/LoadingButton';

export const Buy = (props: { lotId: BigNumber }) => {
    const [bid, setBid] = useState(0);
    const [loading, setLoading] = useState(false);

    const buy = async () => {
        setLoading(true);
        await placeNewBid(props.lotId, bid);
        setLoading(false);
    }

    return (
        <div>
        <form>
            <div className='bg-white shadow-lg ml- mt-10 text-2xl border-2 p-4 border-gray-800 rounded-md'>
                <div>
                    <div className='text-indigo-600 mb-4 flex justify-center semibold-bold'>Set new bid</div>
                    <div>Minimal value: </div>
                    <div>Enter value:
                        <input
                            type="number"
                            step="0.01"
                            placeholder="0.0"
                            className="h-7 ml-7 w-60 bg-transparent border-2 border-grey"
                            style={{ border: "none", borderBottom: "2px solid #324054", outline: "0", color: "#000" }}
                            value={bid}
                            onInput={e => setBid(Number.parseFloat((e.target as HTMLInputElement).value))}
                        />
                    </div>
                </div>
                <div className='flex justify-center'>
                  
                    {loading ?
                        <LoadingButton />
                        :
                        <button
                            type="submit"
                            className="mt-6 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={buy}
                        >
                            Create bid
                        </button>
                    }

                </div>
            </div>
        </form>
        </div>
    )
}
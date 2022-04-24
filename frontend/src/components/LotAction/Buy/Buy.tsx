import { useEffect, useState } from 'react';
import { placeNewBid } from '../../Contract';

import { LoadingButton } from '../../LoadingButton/LoadingButton';
import { Lot } from '../../Lot';

export const Buy = (props: { lot: Lot }) => {
    const [bid, setBid] = useState(0);
    const [loading, setLoading] = useState(false);

    const buy = async () => {
        setLoading(true);
        await placeNewBid(props.lot.id, bid);
        setLoading(false);
    }

    useEffect(() => {
        const defaultBid: number = props.lot.highestBid.toNumber() + props.lot.minimalBidIncrement.toNumber();
        setBid(defaultBid);
    }, []);

    return (
        <div>
        <form>
            <div className='bg-white shadow-lg ml- mt-10 text-2xl border-2 p-4 border-gray-800 rounded-md'>
                <div>
                    <div className='text-indigo-600 mb-4 flex justify-center semibold-bold'>Set new bid</div>
                    <div className='ml-28'>Minimal value: {props.lot.highestBid.toNumber() + props.lot.minimalBidIncrement.toNumber()}</div>
                    <div className='ml-28'>Enter value:
                        <input
                            type="number"
                            min={props.lot.highestBid.toNumber() + props.lot.minimalBidIncrement.toNumber()}
                            step={props.lot.minimalBidIncrement.toNumber()}
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

function useRef(arg0: () => void) {
    throw new Error('Function not implemented.');
}

import { BigNumber } from "ethers";
import { useEffect, useRef, useState } from "react";
import { Lot } from '../Lot';
import { Buy } from './Buy/Buy';
import { Close } from './Close/Close';

export const LotAction = (props: { lot: Lot }) => {
    const [address, setAdrress] = useState("");

    const updateAddress = async () => {
        const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
        setAdrress(account);
    }

    useEffect(() => {
        const fetchData = async () => {
            await updateAddress();
        }

        fetchData().catch(console.error);
    }, []);

    if (props.lot.owner.toLowerCase() === address.toLowerCase()) {
        if (props.lot.auctionEndTime > (BigNumber.from(Date.now())))
            return <div>You can't buy yourself lot</div>
        else
            return <Close lotId={props.lot.id} />
    }

    if (props.lot.auctionEndTime > BigNumber.from(Date.now()))
        return <Buy lot={props.lot} />
    return <div>Auction ended</div>
}
import { useEffect, useState } from "react";

export const WalletAddress = () => {
    const [address, setAdrress] = useState("");

    const updateAddress = async () => {
        const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
        setAdrress(account.slice(2, 5) + '...' + account.slice(-3));
    }

    useEffect(() => {
        updateAddress()
    });

    return (
        <div className="pr-3">Your wallet: {address}</div>
    )
}
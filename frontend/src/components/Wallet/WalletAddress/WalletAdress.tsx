import { useEffect, useState } from "react";

export const WalletAddress = () => {
    const [address, setAdrress] = useState("");

    const updateAddress = async () => {
        const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
        setAdrress(account.slice(0,4) + "..." + account.slice(account.length - 4, account.length));
    }

    useEffect(() => {
        updateAddress()
    });

    return (
        <div className="pr-2">Address: {address}</div>
    )
}
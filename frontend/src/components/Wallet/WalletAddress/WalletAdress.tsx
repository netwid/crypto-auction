import { useState } from "react";

declare var ethereum: any

export const WalletAddress = () => {
    const [address, setAdrress] = useState("");

    const updateAddress = async () => {
        const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
        setAdrress(account);
    }

    updateAddress();

    return (
        <div>Addr: {address}</div>
    )
}
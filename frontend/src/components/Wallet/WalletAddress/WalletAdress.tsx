import { useEffect, useState } from "react";

export const WalletAddress = () => {
    const [address, setAdrress] = useState("");

    const updateAddress = async () => {
        const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
        setAdrress(account);
    }

    useEffect(() => {
        updateAddress()
    });

    return (
        <div className="pr-3">Your wallet: <a href={`https://ropsten.etherscan.io/address/${address}`}
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            target="_blank"
            rel="noreferrer">
            {address.slice(2, 5) + '...' + address.slice(-3)}
        </a></div>
    )
}
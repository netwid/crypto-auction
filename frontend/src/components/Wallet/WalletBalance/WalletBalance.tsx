import { useState, useEffect } from "react";
import { ethers } from 'ethers';

export const WalletBalance = () => {
    const [balance, setBalance] = useState("");

    const updateBalance = async () => {
        const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance).slice(0, 9));
    }

    updateBalance();

    useEffect(() => {
        const timer = setTimeout(async () => {
            await updateBalance();
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>Balance: {balance}</div>
    )
}
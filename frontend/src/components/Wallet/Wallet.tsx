import { WalletAddress } from './WalletAddress/WalletAdress';
import { WalletBalance } from './WalletBalance/WalletBalance';

export const Wallet = () => {
    return (
        <div>
            <WalletAddress />
            <WalletBalance />
        </div>
    )
}
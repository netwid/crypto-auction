import { WalletAddress } from './WalletAddress/WalletAdress';
import { WalletBalance } from './WalletBalance/WalletBalance';

export const Wallet = () => {
    return (
        <div className="absolute inset-y-0 p-2 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-white border-white border-2 rounded-md">
            <WalletAddress />
            <WalletBalance />
        </div>
    )
}
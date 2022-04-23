import { Create } from '../Create/Create';
import { Wallet } from '../Wallet/Wallet';

export const HeaderInfo = () => {
    if (!window.ethereum)
        return <div>Please install metamask</div>
    
    return (
        <div>
            <Create />
            <Wallet />
        </div>
    )
}
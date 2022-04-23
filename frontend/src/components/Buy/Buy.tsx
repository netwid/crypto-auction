import { buyLot } from '../Contract';

export const Buy = (props: {lotId: number}) => {
    const buy = async () => {
        const bid = Number.parseInt(prompt('Please enter bid') as string);
        //buyLot(props.lotId, bid);
    }

    return (
        <button onClick={buy}>Buy lot</button>
    )
}
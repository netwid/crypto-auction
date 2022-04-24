import { BigNumber } from "ethers"
import { closeAuction } from "../../Contract"

export const Close = (props: {lotId: BigNumber}) => {
    const close = async () => {
        await closeAuction(props.lotId);
    }

    return (
        <button
            type="submit"
            className="mt-6 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={close}
        >
            Create bid
        </button>
    )
} 
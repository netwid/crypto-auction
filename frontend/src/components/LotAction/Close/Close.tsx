import { BigNumber } from "ethers"
import { useState } from "react";
import React from "react";
import { closeAuction } from "../../Contract"
import { LoadingButton } from '../../LoadingButton/LoadingButton';

export const Close = (props: { lotId: BigNumber }) => {

    const [loading, setLoading] = useState(false);

    const close = async () => {
        setLoading(true);
        await closeAuction(props.lotId);
        setLoading(false);
    }

    return (
        <>
            {loading ?
                <LoadingButton />
                :
                <button
                    type="submit"
                    className="mt-6 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={close}
                >
                    Close auction
                </button>}
        </>
    )
} 
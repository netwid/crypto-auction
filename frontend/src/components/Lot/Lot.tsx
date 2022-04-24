import { useState, useEffect } from 'react';
import { Buy } from "../Buy/Buy";
import { getAllLots } from '../Contract';

export const Lot = () => {
    
    const [lots, setLots] = useState([]);

    useEffect(() => {

       const f = async () => {
           // @ts-ignore
           setLots(await getAllLots());
       }    
       f();
    }, []);

    return (
        <div>
            <div>Text</div>
            {/* <Buy lotId={123} /> */}
        </div>
    )
}
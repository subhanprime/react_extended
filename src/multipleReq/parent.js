import React, { useState } from "react";
import { useHandleMulReq } from './handleMUltiReq'
const Parent = () => {
    const [data, setData] = useState(['subhan', 'nimra', 'susan', 'Ayesha']);
    console.log(data);
    const [value,next,prev] = useHandleMulReq(data);
    console.log(value);
    return (
        <>

            <p>{value}</p>

            <button onClick={()=>next()}>Next</button>
            <button onClick={()=>prev()}>Prev</button>
        </>
    )
}

export default Parent;
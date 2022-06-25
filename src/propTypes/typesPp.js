import React from "react";
import Sofa from './products'
import { pData } from "./propData";
const PropTypes1 = () => {

    return (
        <>
            <h5>props types</h5>
            {
                pData.map((el, index) => {
                    return <Sofa {...el} />
                })
            }
        </>
    )
}

export default PropTypes1
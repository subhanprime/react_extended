import React from "react";
import { useParams } from 'react-router-dom';

const SingleLocation = ()=>{
    const na = useParams()
    return (
        <>
            <h3 >sibgle Location {na.id}</h3>
        </>
    )
}
export default SingleLocation;
import React from "react";
import { useParams } from 'react-router-dom';

const SingleGoals = () => {
    let pr = useParams()
    return (
        <>
            <h2>Single Goals {pr.id}</h2>
        </>
    )
}
export default SingleGoals;
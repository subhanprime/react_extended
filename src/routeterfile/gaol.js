import React from "react";
import { useNavigate } from 'react-router-dom';

const Goals = _ => {
    let navigate = useNavigate();
    return (
        <>
            <h3>My Goals</h3>

            <p onClick={() => navigate(`/goals/12`)}>please clik me to Navigate on route 12</p>
        </>
    )
}

export default Goals;
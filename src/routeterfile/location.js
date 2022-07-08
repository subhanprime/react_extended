import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Location = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3>Location</h3>
            <p onClick={() => navigate(`/about/location/12`)}>plese click me on Location 12</p>
            <Outlet />
        </>
    )
}

export default Location;
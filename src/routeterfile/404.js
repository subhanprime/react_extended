import React from "react";
import { useLocation } from "react-router-dom";
const Whoops404 = () => {

    let location = useLocation();
    return (
        <>
            <h3>sorry this page not exist  {location.pathname}</h3>
        </>
    )
}

export default Whoops404;
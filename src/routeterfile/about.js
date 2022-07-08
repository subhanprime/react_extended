import React from "react";
import { Outlet } from "react-router-dom";
const About = () => {
    return(
        <>
            <h3>About Js File</h3>
            <Outlet />
        </>
    )
}
export default About;
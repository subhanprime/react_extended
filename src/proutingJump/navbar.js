import React from "react";
import { Link } from "react-router-dom"
import People from './people';

const Navbar = () => {
    return (
        <>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/people">People</Link>
        </>
    )
}
export default Navbar;
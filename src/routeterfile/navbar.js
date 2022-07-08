import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <h3>Navbar</h3>
            <Link to="about">About</Link>
            <Link to="entertain">Entertain</Link>
            <Link to="goals">Goals</Link>
        </>

    )
}

export default Navbar;
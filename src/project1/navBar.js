import React from "react";
import Home from './../routeterfile/home';
import { AiOutlineHome } from 'react-icons/ai';

const NavBar = () => {
    return (
        <>
            <div id="navbar">
                <h4>Github Users</h4>
                <div id="navList">
                    <AiOutlineHome/>
                </div>
            </div>
        </>
    )
}

export default NavBar;
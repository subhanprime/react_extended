import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Home from "./home";
import About from './about';
import People from './people'
import Error from "./error";
import Navbar from "./navbar";
import Person from "./person";
const RoutJump = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <h4>Route main page</h4>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route exact path="/people" element={<People />} />
                <Route exact path="/person/:id" element={<Person />} />
                <Route exact path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutJump;
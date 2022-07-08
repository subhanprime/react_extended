import React from "react";
import Home from "./home";
import About from "./about";
import Navbar from "./navbar";
import Entertainment from "./entertain";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Goals from './gaol';
import Whoops404 from './404';
import Location from "./location";
import Service from './service';
import History from "./history";
import Linklist from "./useRoutes";

const RouterFileFn = () => {
    return (
        <>
            <Router>
                <Navbar />
                {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Navigate replace to="/goals" />}>
                        <Route path="location" element={<Location />} />
                        <Route path="service" element={<Service />} />
                        <Route path="history" element={<History />} />
                    </Route>
                    <Route path="/entertain" element={<Entertainment />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="*" element={<Whoops404 />} />
                </Routes> */}
                <Linklist/>
            </Router>
        </>
    )
}
export default RouterFileFn;
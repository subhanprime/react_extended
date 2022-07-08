import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Navbar from "./navbar";
import Entertainment from "./entertain";
import Whoops404 from './404';
import Location from "./location";
import Service from './service';
import History from "./history";
import Goals from './gaol';
import SingleGoals from './singleGoals';
import SingleLocation from './singleLocation';

const Linklist = () => {
    let element = useRoutes([
        {
            path: '/', element: <Home />
        },
        {
            path: 'about', element: <About />,

            children: [
                { path: 'location', element: <Location /> },
                { path: 'location/:id', element: <SingleLocation /> }
            ]
        },
        { path: 'goals', element: <Goals /> },
        { path: 'goals/:id', element: <SingleGoals /> },
        { path: 'entertain', element: <Entertainment /> },
        { path: '*', element: < Whoops404 /> }

    ])
    return element;
}

export default Linklist;
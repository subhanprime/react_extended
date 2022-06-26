import React from "react";
import { Link } from "react-router-dom";
import { data } from "./data";
const People = () => {
    return (
        <>
            {
                data.map((el, index) => {
                    return (

                        <div>
                            {el.id}
                            <Link to={`/person/${el.id}`}>link</Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default People;
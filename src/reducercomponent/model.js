import React, { useEffect } from "react";

const Model = ({ modelContent, closeModel }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModel();
        }, 1000)
    })
    return <>
        <p>{modelContent}</p>
    </>
}

export default Model;
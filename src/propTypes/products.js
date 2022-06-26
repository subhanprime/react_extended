import React from "react";
// import PropTypes from "prop-types";

const Sofa = ({ name, price, image }) => {

    return <>
        <div id="sofaImage">
            {/* <img src={image.url} style={{ width: '300px', height: '200px' }} /> */}
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    </>
}

export default Sofa;
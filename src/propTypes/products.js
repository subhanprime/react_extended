import React from "react";
import PropTypes from "prop-types";

const Sofa = ({ name, price, image }) => {
    // const { name, price, image } = el
    console.log('el', name, price, image);
    return <>
        <div id="sofaImage">
            {/* <img src={image.url} style={{ width: '300px', height: '200px' }} /> */}
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    </>
}

Sofa.PropTypes={
    name: PropTypes.string.isRequired,
    image:PropTypes.object.isRequired,
    price:PropTypes.number.isRequired,
}
Sofa.defaultProps={
    name:'subhan',
    price:3.99,
    image: 'https://cdn.shopify.com/s/files/1/0585/9786/7676/products/T-43-22be20f-v-surfaces_1800x1800.jpg?v=1643760508'
}
// ProductsSofa.PropTypes = {
//     name: PropTypes.toString.isRequired,
//     image:PropTypes.object.isRequired,
//     price:PropTypes.number.isRequired,
// }

export default Sofa;
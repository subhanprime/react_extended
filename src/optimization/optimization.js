import React, { useState, useEffect, useCallback, useMemo } from "react";
import { data } from "./data.js";
const calculatemaximumvalue=()=>{
    console.log('calc')
    return 13;
}
const Optimization = () => {
    const [counter, setCounter] = useState(0);
    const [cart, setCart] = useState(0);
    const expensive = useMemo(()=>calculatemaximumvalue(),[cart])
    const addToCart =useCallback( () => {
        setCart(cart + 1);
    },[cart]);
    return (
        <>
            <div className="counter">counter : {counter}</div>
            <button className="btn" onClick={() => setCounter(counter + 1)}>add me</button>
            <div className="counter"> Cart : {cart}</div>
            <div className="counter">Most Expensive : {expensive}</div>
            <div className="OuterBlock">
                <ListItme data={data} addToCart={addToCart}/>
            </div>

        </>
    )

}
const ListItme = ({ data, addToCart }) => {
    return (
        <>
            {
                data?.map((el, index) => {
                    // console.log(el);
                    return <SingleItem el={el} key={index}  addToCart = { addToCart } />
                })
            }
        </>
    )
}

const SingleItem = React.memo(
    ({ el, addToCart }) => {
        console.count('SingleItem');

        return (<>
            <div className="UserBlock">

                <span>User List</span>
                <div className="UserID">{el.id}</div>
                <div className="UserTittle">{el.title}</div>
                {/* <span className="UserBody">{el.body}</span> */}

                <button className="btn" onClick={addToCart}>Add to Cart </button>
            </div>

        </>
        )
    }
)

export default Optimization;
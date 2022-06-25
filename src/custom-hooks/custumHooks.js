import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
const url = 'https://jsonplaceholder.typicode.com/posts'
const CustumHooks = () => {
    const {loading, products} = useFetch(url)
    console.log(products);

    return <>
    <h5>Custum HOOkS</h5>
    {loading ?'loading':'data'}
    </>
}
export default CustumHooks;
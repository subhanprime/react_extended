import {useState,useEffect} from "react";

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [products, setProduct] = useState([]);

    const fetchProducts = async () => {
        console.log(url);
        const responce = await fetch(url);
        const product = await responce.json();
        setProduct(product)
        setLoading(false)
    };

    useEffect(() => {
        fetchProducts();
    }, [url]);

    return { loading, products }
}
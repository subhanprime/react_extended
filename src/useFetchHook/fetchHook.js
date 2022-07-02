
import { useState } from 'react';
import { useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoadin] = useState(true);
    const fetchFn = () => {
        console.log(url);
        fetch(url)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoadin(false))
            .catch(()=>setError(true))
    }

    useEffect(() => {
        fetchFn();
    }, [])

    return { data, loading, error }
}

export default useFetch;
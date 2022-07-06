import React, { useState, useEffect, useCallback } from "react";

const WaterFall = () => {
    const [val, setVal] = useState()
    const [markdown, setMarkdown] = useState('');
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);


    const fetchAll = useCallback(async () => {
        setLoading(true);
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(data => console.log(data));
        setLoading(false);
    }, [])


    useEffect(() => {
        fetchAll();
    }, [])

    if (loading)
        return <p>Loading ....</p>
    return <h3>Water Fall model</h3>
}

export default WaterFall;
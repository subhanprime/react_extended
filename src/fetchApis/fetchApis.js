import React, { useState, useEffect } from "react";
import { data } from './../proutingJump/data';

const FetchApis = () => {
    const [data, setData] = useState();
    const [loading, setLoadig] = useState(false);
    const [error, setError] = useState('')

console.log(data);
    useEffect(() => {
        console.log('useEffects');
        setLoadig(true);
        fetch('https://api.github.com/users/subhanprime')
            .then(responce => responce.json())
            .then(setData)
            .then(() => { setLoadig(false) })
            .catch(setError)
    }, []);
    if (error)
        return <h1>there are some thing wrong</h1>
    if (loading)
        return <h1>Loading ...</h1>
    if (data)
        return <>
            <div className="githubUser">
                <img src={data.avatar_url}/>
                <h3>{data.login}</h3>
                <h3>{data.name}</h3>
                <h3>{data.bio}</h3>
                <h3>{data.created_at}</h3>
                <h3>{data.updated_at}</h3>
                
            </div>
        </>;
    return null;


}

export default FetchApis;
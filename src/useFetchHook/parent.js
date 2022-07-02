import React from 'react'
import useFetch from './fetchHook'
let url = 'https://api.github.com/users';
const Parent = () => {
    const { data, loading, error } = useFetch(url);
    console.log(data, loading, error);
    if (loading) {
        return (
            <p>Loading ....</p>
        )
    }
    if (error) {
        return (
            <p>ERRORR.....</p>
        )
    }
    if (data) {
        return (
            <>
                {
                    data.map((el, ind) =>
                        <div>
                            <img style={{width:'100px',height:'100px',}} src={el.avatar_url}/>
                            <p>{el.login}</p>
                            <p>{el.events_url}</p>
                        </div>
                    )
                }
            </>
        )
    }
}

export default Parent
import React, { useEffect, useState } from "react";
import FakeList from "./fakeList";
import { FixedSizeList as Listin } from 'react-window'
let url = 'https://jsonplaceholder.typicode.com/photos';

const FakerPage = () => {
    const [data, setData] = useState(['czx', 'zxcz', 'xzc', 'zxc'])
    const fetchFn = async () => {
        let responce = await fetch(url);
        let data1 = await responce.json();
        setData(data1)
        console.log(data1);
    }

    const itemItrate = item => {
        return (
            <div key={item.id} className="singleFake">
                <img id="fakerImg" src={item.url} />
                <div>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                </div>
            </div>
        )
    }
    const rows = ({ index, style }) => {
        return (
            <div style={style} key={index} className="singleFake">
                <img id="fakerImg" src={data[index].url} />
                <div>
                    <p>{data[index].id}</p>
                    <p>{data[index].title}</p>
                </div>
            </div>
        )
    }
    useEffect(() => {
        fetchFn()
    }, [])
    return (
        <>
            <h4>faker page</h4>
            <FakeList data={data} itemItrate={itemItrate} />
            {/* <Listin
                height={window.innerHeight}
                width='300px'
                itemCount={data.length}
                itemSize={150}
            >
                {rows}
            </Listin> */}

        </>
    )
}

export default FakerPage;
import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { data } from "./data";
const Person = () => {
    const [name, setName] = useState('')
    const { id } = useParams()
    console.log(data[id]);
    useEffect(() => {
        setName(data[id].name)
    },[])
    return <h5>{name}</h5>
}
export default Person;
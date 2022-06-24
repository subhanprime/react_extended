import React, { useContext, useState } from "react";
import { data } from "../data";
const PersonContext = React.createContext();
const ContextPage = () => {
    const [people, setpeople] = useState(data);
    console.log(people);
    const removeItem = (a) => {
        let newPeople = people.filter(el=>el != a);
        setpeople(newPeople)
    }

    return <PersonContext.Provider value={{ people, removeItem }}>
        <span>use Context</span>
        <List people={people} />
    </PersonContext.Provider>
}

const List = () => {
    const { people } = useContext(PersonContext)
    return (
        <>
            {
                people.map((el, index) => {
                    return <SingleItem el={el} key={index} />
                })
            }
        </>
    )
    // return <SingleItem/>
}

const SingleItem = ({ el }) => {
    const { removeItem } = useContext(PersonContext)
    return <>
        <h4>{el}</h4>
        <button onClick={() => removeItem(el)}>click me</button>
    </>
}
export default ContextPage
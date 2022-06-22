import React, { useReducer, useState } from "react";
import Model from "./model";
const reducer = (state, action) => {
    console.log('hi iam reducer');
    if (action.type == "ADD_ITEM") {
        let newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            modelContent: 'model now Show',
            showModel: true,
        }
    }
    if (action.type == "CLOSE_MODEL") {
        return {
            ...state,
            modelContent: '',
            showModel: false,
        }
    }
    if (action.type == 'NO_VALUE') {
        return {
            ...state,
            modelContent: 'cant Add Empty Value',
            showModel: true,
        }
    }
    if (action.type == 'REMOVE_ITEM') {
        let newPeople = state.people.filter(el => el != action.payload)
        console.log(action.payload);
        return {
            ...state,
            people: newPeople,
            modelContent: 'remove Item succesfully',
            showModel: true,
        };
    }
}
let initailState = {
    people: [],
    modelContent: 'show Model',
    showModel: false,
}
const ReducedFn = () => {
    const [value, setValue] = useState('')
    const [state, dispatch] = useReducer(reducer, initailState)
    function handleAdd() {
        if (value != '') {
            dispatch({ type: 'ADD_ITEM', payload: value })
            setValue('');
        } else {
            dispatch({ type: 'NO_VALUE' })
        }
    }
    function closeModel() {
        dispatch({ type: 'CLOSE_MODEL' })
    }
    return <>
        <h2>Reduce Function</h2>
        {state.showModel && < Model modelContent={state.modelContent} closeModel={closeModel} />}
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => handleAdd()}>add</button>
        {
            state.people.map((el, index) => {
                return (
                    <>
                        <div key={index}>{el}</div>
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: el })}>remove</button>
                    </>
                )
            })
        }

    </>
}

export default ReducedFn
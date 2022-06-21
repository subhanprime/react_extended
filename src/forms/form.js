import React, { useState } from 'react'

const MyForms = () => {
    const [username, setUsernmae] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [people,setPeople]= useState({
        username:'',
        email:'',
        age:'',
    })
    function hadleSubmit(e) {
        e.preventDefault()
        console.log(username, email);
        setUsernmae('')
        setEmail('')
    }
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // setPeople({...people,[name]:value})
        setPeople(people=>{
            return {...people,[name]:value}
        })
    }
    return <>
        <h1>subhana ali form</h1>
        <form onSubmit={hadleSubmit}>
            <label>user name</label>
            <input id='username' name='username' type='text' value={people.username} onChange={handleChange} />
            <label>Email</label>
            <input id='email' name='email' type='email' value={people.email} onChange={handleChange} />
            <label>Age</label>
            <input id='age' name='age' type='text' value={people.age} onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    </>
}
export default MyForms
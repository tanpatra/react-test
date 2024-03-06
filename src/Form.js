import { useState, useEffect } from 'react'

const Form  = () =>{
    const [value, setValue] = useState("");

    const handleOnSubmit = () =>{
        fetch('http://localhost:8080/dummy').then( data => console.log(data))
    }

 return <div>
    <input type='text' onChange={(e)=>setValue(e.target.value)}></input>
    <input type='button' disabled={!!value} onSubmit={handleOnSubmit}>submit</input>
 </div>
}

export default Form;
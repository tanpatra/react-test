import React, { useEffect, useState } from "react";

export default function IntakeForm(props){
    const [state, setState] = useState({});
    const fieldsArray = [{ name: "Name", value: "Enter Your Name", type: "text"},{ name: "Age", value: "Enter Your Age",type:"number"},
                            { name: "Country", value: "Select Country", type:"dropdown", options: [{ name: "US", value: "United States"},{ name:"IN", value:"India"}]}];
    
    function handleFormSubmit(e){
        e.preventDefault();
        console.log(state);
    }
    function handleInputChange(e){
        //console.log(e.currentTarget.options[e.currentTarget.selectedIndex].textContent);
        //console.log(e.currentTarget.value);
        if(e.currentTarget.options){
            console.log("set country")
            setState({...state, [e.target.name]: e.currentTarget.options[e.currentTarget.selectedIndex].textContent});
        } else {
            setState({...state, [e.target.name]: e.target.value});
        }    
        //console.log(state);
    }
    useEffect( ()=>{
        //console.log(state);
    })

    return <><div></div> <form onSubmit={handleFormSubmit}>{ fieldsArray.map( obj => {
        if(obj.type === "text")
        return (<label>
            {obj.value}:
            <input type="text" name={obj.name} value={state[obj.name]} onChange={handleInputChange}/>
          </label>);
         else if(obj.type === "number")
         return ( <label>
            {obj.value}:
            <input type="number" value={state[obj.name]} name={obj.name} onChange={handleInputChange}/>
          </label>);
         else if(obj.type === "dropdown"){
             return ( <select name={obj.name} value={state[obj.name]} onChange={handleInputChange}>
                 <option key="" value="">Select Country </option>
                 {obj.options.map( options => <option key={options.name} value={options.name}>{options.value} </option>)}
              </select> );
         }
    }) } 
    <input type="submit" value="Submit" />
    </form></>;
}
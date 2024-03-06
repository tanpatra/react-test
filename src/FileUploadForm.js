import React, { useRef, useState } from "react";

export default function FileUploadForm(){
    //const fileRef = useRef();
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        //console.log(fileRef.current.files[0]);
        console.log(name);
        console.log(message)
    }

    return(<form onSubmit={handleSubmit}>
        <div id="div1">
        <input type="text" name="name" onChange={e => setName(e.currentTarget.value)}></input>
        <input type="textarea" name="message" onChange={e => setMessage(e.currentTarget.value)}></input>
        <button type="submit">Submit</button>
        </div>
    </form>);
}
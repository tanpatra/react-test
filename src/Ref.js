import { useEffect, useRef } from "react"

const Ref = () =>{
    const ref = useRef();
    const divRef = useRef();
useEffect( ()=>{
    ref.current.focus();
    divRef.current.borderColor = 'red';
},[])
    return <div ref={divRef}><input type="text" ref={ref}/></div>
}
export default Ref;
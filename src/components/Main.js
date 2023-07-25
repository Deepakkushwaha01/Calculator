import React, { useState } from 'react'


export default function Main(props) {
const[value,newvalue]=useState("");
function change(e){
newvalue(e.target.value);
}
function uppercase(){
const  x=value.toUpperCase();
newvalue(x);
props.alert("ype","working")
}
function clear(){
    newvalue("");
}
function copy(){
    navigator.clipboard.writeText(value);
}
function lower(){
    const  x=value.toLowerCase();
    newvalue(x);  
}
function space(){
const space=value.split(/[" "]+/);
newvalue(space.join(" ")); 
}
  return (
    <div className='container my-3'>
        <h1 style={{color:props.textcolor}}>Enter your text here</h1>
        <div className="mb-3">
 <textarea className="form-control" value={value} onChange={change} id="exampleFormControlTextarea1" rows="4"></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={uppercase} >UpperCase</button>
<button type="button" className="btn btn-primary mx-1" onClick={lower} >LowerCase</button>
<button type="button" className="btn btn-primary mx-1" onClick={clear} >Clear</button>
<button type="button" className="btn btn-primary mx-1" onClick={copy} >Copy</button>
<button type="button" className="btn btn-primary mx-1" onClick={space} >Clear Space</button>

    </div>
  )
}

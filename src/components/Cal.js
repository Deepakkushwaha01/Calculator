import React, { useState } from 'react'
import "./Cal.css"

export default function Cal() {

//First screen---------------------------
  const[first,newfirst]=useState("")
function value(e){
newfirst(first.concat(e.target.value))
}
//First screen End--------------------------

//Second screen-----------------------------
const[x,newx]=useState("");
const[op,newop]=useState("");
function oprator(e){
newop(e.target.value);
  newx(x.concat(first,e.target.value));
  newfirst("")
}
//Second screen End-------------------------


//Clear Button function---------------------
function clear(){
  newfirst("");
  newx("");
  newop("");
}
//Clear Button function End-----------------


//Calculation function ----------------------
function cal(){
  const z=x.slice(0,x.length-1);
 newx(x.concat(first));
const y=first;
let r;
if(op=="+"){
 r=Number(z)+Number(y);
 newfirst(r)
}
if(op=="-"){
  r=Number(z)-Number(y);
  newfirst(r)
 }
 if(op=="*"){
  r=Number(z)*Number(y);
  newfirst(r)
 }
 if(op=="/"){
  r=Number(z)/Number(y);
  newfirst(r)
 }
}
//Calculation done---------------------------

//Delete -------------------------------------
function del(){
if(first!=""){
  newfirst(first.slice(0,first.length-1))
}
else{
  newx(x.slice(0,x.length-1))
}
}
//Delete done---------------------------------
  return (
   <>
   <div className='cont'>
   <div className='upper'>
   <h3 className='first'>{x}</h3>
   <h2 className='second'>{first}</h2>
   </div>
   <div className='lower'>
   <button className='button' onClick={clear} >Clear</button>
   <button className='button' onClick={del} >Del</button>
   <button className='button' onClick={oprator} value="/">/</button>
   <button className='button' onClick={oprator} value="*">x</button>
    {/* --------------------------------------------------------------------------- */}
   <button className='button' onClick={value} value="7">7</button>
    <button className='button' onClick={value} value="8">8</button>
    <button className='button' onClick={value} value="9">9</button>
    <button className='button' onClick={oprator} value="+">+</button>
    {/* --------------------------------------------------------------------------- */}
    <button className='button' onClick={value} value="6">6</button>
    <button className='button' onClick={value} value="5">5</button>
    <button className='button' onClick={value} value="4">4</button>
    <button className='button' onClick={oprator} value="-">-</button>
    {/* --------------------------------------------------------------------------- */}
    <button className='button' onClick={value} value="1">1</button>
    <button className='button' onClick={value} value="2">2</button>
    <button className='button' onClick={value} value="3">3</button>
  
    {/* --------------------------------------------------------------------------- */}
    <button className='button equal' onClick={cal}  >=</button>
    <button className='button zero' onClick={value} value="0">0</button>
    
    {/* --------------------------------------------------------------------------- */}
   </div>
   </div>
   </>
  )
}

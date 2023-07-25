import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Main from './components/Main';
import Cal from './components/Cal';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function App() {
  //Navbar---------------------------------------------------------
  const[dark,newdark]=useState("light");
  function darkmode(){
    if(dark==="light"){
    newdark("dark");
    newtextcolor("white");
    showalert("Dark mode is Enable","Success");
    document.body.style.background="linear-gradient(to bottom, #f9544c 50%, #090c31 50%)";
    document.body.style.height="100vh";
  }
    else{
      newdark("light")
      newtextcolor("black");
      showalert("Light mode is Enable","Success")
      document.body.style.background="white";
      }
  }
//Navbar End---------------------------------------------------------

//Alert--------------------------------------------------------------
const[alert,newalert]=useState(null)
function showalert(msg,type){
  newalert({
    msg:msg,
    type:type
    })
}
setTimeout(() => {
  newalert(null)
},1000);
//Alert End----------------------------------------------------------


//convertor----------------------------------------------------------
const[textcolor,newtextcolor]=useState("black");
//Covertor done------------------------------------------------------


return (
   <>
   <BrowserRouter>
   <Navbar dark={dark} darkmode={darkmode}/>
   <Alert alert={alert}/>
    
   <div className='container my-3'>
   <Routes>
    
          <Route path="/main" element={<Main textcolor={textcolor}></Main>}>
           </Route>
          <Route path="/" element={<Cal /> }>
            </Route>
    </Routes>
        </div>
   
   </BrowserRouter>
    
   </>
  );
}

export default App;

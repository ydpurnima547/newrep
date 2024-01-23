

import {useState} from 'react';
import Nary from './Nary';
import Use from './Use';
import Home from './Home';
function App() {
  
//  useState hooks with object , hookstate defines on top level before return
  const [allvalues, setvalues] =useState({firstName:"Siya", lastname:"Singh"})
  function update(){
    console.log(allvalues)
      setvalues({...allvalues,firstName:"Mishika"})
      console.log(allvalues)
  }
    return (
      <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <h3>Firt name  {allvalues.firstName} and Last name is {allvalues.lastname}</h3>
          <button onClick={update}> update  </button>
          <Nary/>
          <Use/>
         
      </>
    )
}
export default App;     
/* 
import Obj from './Obj'; <Obj/> */
/*import React,{useEffect, useState } from 'react'; 
function App() {
const  [user ,setUser] = useState([])
useEffect(()  => { 
  fetch('/api')
.then((res) => {return res.json()})
.then((data)=>{ setUser(data.employees)})
}, [])
    user.map((value,index)=>{
return (
  <>
  <h1>Name:{value.name} email:{value.email} </h1>         
  </>
)
   }

)     
}
export default App;*/

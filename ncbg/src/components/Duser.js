import { useState } from "react"
//  useState hooks with object , hookstate defines on top level before return
function Duser() {
    const [allvalues, setvalues] =useState({firstName:"Yoshita", lastname:"Jain"})
function update(){
    setvalues({...allvalues,firstName:"mishika"})
}
  return (
    <>
    <h3>firt name is {allvalues.firstName} an last name is {allvalues.lastname}</h3>
        <button onClick={update}> update  </button>
    </>
  )
}

export default Duser;
import React from 'react'

import { Link, useNavigate} from 'react-router-dom';
 function Home() {
    const navigate = useNavigate()
    function gotoAbout(){
        navigate("/home")
    }
  return (
    <>
    <div>Home</div>
<button onClick={gotoAbout}>about</button></>
  )
}
export default Home;
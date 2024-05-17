import React, { useState } from 'react';
import Homeimg from 'D:/React/todo-app/src/images/homeimg.png'
import { Link, Outlet } from 'react-router-dom';
function Home(props) {
const[bg,setNewBg]=useState("div link button")
const changebg=()=>{
        setNewBg("button div1 link")
}


    return (
        <div className='container-fluid h-100'>
           <div className="row h-100">
            <div className="d-flex align-items-center justify-content-center h-100 col-lg-6  flex-column bg-primary">
                <h1 className='display-5 text-upper text-center text-white'>AN APP TO <br/>
                    MAKE YOUR LIFE<br/>
                    <span className='display-2 text-white'>EASY</span>
                    </h1>
                    <br />
                    <img  className="img-fluid"src={Homeimg} alt="" />
                    
            </div>
            <div className="d-flex align-items-center justify-content-center h-100  flex-column col-lg-6 ">
                <div className="card w-50 bg-light">
                <div className="card-header text-center bg-light">
                    <button className={bg} onClick={changebg} value="true">
                    <Link to='/login' className='link' name="login">Login</Link>
                    </button>

                    <button className={bg}  onClick={changebg} value="true">
                    <Link to='/register' className="link" name="register">Register</Link>
                    </button>

    
              
                

    
                    </div>
    
                    <div className="card-body">
                        <Outlet/>
                    </div>
                </div>
            </div>
            </div> 
        </div>
    );
}

export default Home;
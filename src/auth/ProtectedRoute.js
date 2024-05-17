import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const [isloggedIn,setisLoggedIn]=useState(false)
    const navigate=useNavigate();
    useEffect(() => {
        let local = localStorage.getItem("todouser");
        if (local) {
            let localuser = JSON.parse(local);
            if (localuser){
                setisLoggedIn(true)
            }
        }else{
            navigate('/login');
        }
    }, []);

    return (
    //   isloggedIn?<Outlet/>:<Navigate to ='/login'/>
     isloggedIn?<Outlet/>:" "

    );
}

export default ProtectedRoute;
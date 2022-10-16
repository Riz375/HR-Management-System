
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';



const Homepage = () =>{


    const navigate = useNavigate()

    // hook to verify is user is logged in
    useEffect(() => {
        // const navigate = useNavigate()

        const token = localStorage.getItem('token')

        if (token) {
            const user = jwtDecode(token)
            if(!user) {
                localStorage.removeItem('token')
                navigate("/login", { replace: true })
            } 
        }
// eslint-disable-next-line 
    }, [])
    return(
        <div>
            <h1>Hello Homepage</h1>
            {/* <div className="button" onClick={()=> updateUser({})}>Logout</div>  */}
        </div>
    )
}

export default Homepage



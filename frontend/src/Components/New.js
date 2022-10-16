import React, { useEffect } from "react";
// import jwt from 'jsonwebtoken';
import { useNavigate } from "react-router-dom";
// const jose = require('jose')
// import { decodeToken } from "react-jwt";
import jwtDecode from 'jwt-decode';




const Dashboard = () =>{

    const navigate = useNavigate()
    


    async function populateQuote() {
        
        const req = await fetch('http://localhost:4000/api/quote', {
            headers: 
            {'x-access-token': localStorage.getItem( 'token ')}
        })
        const data = req.json()
        console.log(data)
    }

    // hook to verify is user is logged in
    useEffect(() => {
        // const navigate = useNavigate()

        const token = localStorage.getItem('token')

        if (token) {
            const user = jwtDecode(token)
            if(!user) {
                localStorage.removeItem('token')
                navigate("/login", { replace: true })
            } else {
                populateQuote()

            }
        }
// eslint-disable-next-line 
    }, [])

    return <div>
        <h1>Hello World</h1>
        </div>
}

export default Dashboard 

// COPY &PASTE
//paste using ctrl c and paste alt z to wrap 
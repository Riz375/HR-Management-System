
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import './HomePage.css';


const Homepage = () =>{


    const navigate = useNavigate()

    // Hook to verify is user is logged in
    useEffect(() => {

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
        <div className="pageContainer">
            <div className="mainBackground">
                <div className="mainText">
                    <h1>Welcome</h1>
                    <p className="welText">Welcome to the IN4.0 Groups HR management system.</p>
                </div>
                <div>
                <a href="/profile">
                    <button className="btn">
                        My Dashboard</button>
                        </a>
                </div>

            </div>

       
            <div className="newsArticles">
                <div className="articlesBox">
                    <h2>Latest News....</h2>
                    <p className="articleNo">Article 1</p>
                </div>
                <div className="articlesBox">
                <h2>Latest News....</h2>
                    <p className="articleNo">Article 2</p>
                </div>
                
                <div className="articlesBox">
                <h2>Latest News....</h2>
                    <p className="articleNo">Article 3</p>
                </div>
            </div>

           


        </div>
    )
}

export default Homepage



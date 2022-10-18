import './Login.css';
import {useState} from 'react'
// import { useNavigate } from "react-router-dom"


const Login = ({updateUser}) =>{

    // const navigate = useNavigate()
    
   

    const[username, setUsername] = useState();
    const[password, setPassword] = useState();

        
     const addUser = async(e)=>{
            e.preventDefault();
            console.log(username, password);

            let result = await fetch("http://localhost:4000/loginpage", {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: { 'Content-Type': 'application/json'}
            });
        
            result=await result.json()
            console.log(result)
            // alert('Login succsessful')

            // 30min31s
            if(result.user){
                localStorage.setItem('token', result.user)
                // updateUser(res.res)
                alert('Login successful')
                window.location.href='/home'
                // updateUser(result.user)
            } else{
                alert('Please check your username and password')
            }
            
        }

        //  const addUser = async(e)=>{
        //     e.preventDefault();
        //     console.log(username, password);

        //     let result = await fetch("http://localhost:4000/loginpage", {
        //         method: 'POST',
        //         body: JSON.stringify({username, password}),
        //         headers: { 'Content-Type': 'application/json'}
        //     });
        
        //     result=await result.json()
        //     console.log(result)
        //     // alert('Login succsessful')

        //     // 30min31s
        //     if(result.user){
        //         localStorage.setItem('token', result.user)
        //         // updateUser(res.res)
        //         alert('Login successful')
        //         window.location.href='/new'
        //         // updateUser(res.result.user)

        //         // window.location.href = '/new'
        //     } else{
        //         alert('Please check your username and password')
        //     }
            
            
        //     }  

         

            // event.preventDefault();
        //         fetch("http://localhost:4000/loginp", {
        //         method: 'POST',
        //         body: JSON.stringify({username, password}),
        //         headers: { 'Content-Type': 'application/json'}
        //     }).then((response)=> 
        //     response.json()).then((result)=>{
        //         if(result.message === "SUCCESS") {
        //             alert("you are logged in");
        //         }else{
        //             alert("check ur login info")
        //         }
        //     })
            
        // }




//     const addUser = async(e)=>{
//         let result = await fetch("http://localhost:4000/login", {
//         method: 'POST',
//         body: JSON.stringify({username, password}),
//         headers: { 'Content-Type': 'application/json'}
//     })
//     result= await result.json
//     console.log(result)
// }
    return(
        <section>
        <div class="page-section">
            <img class="logo" src="https://in4group.co.uk/wp-content/uploads/2018/09/IN4.0_Logo_Group_Purple_RGB-1.png" alt="logo" />
        </div>

        <div class="container-form">
            <h1>Welcome Back!</h1>
            <form method="POST">
                <div class="info">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username"
                    onChange={(e)=>setUsername(e.target.value)} value={username}/>
                </div>
                <div class="info">
                    <label for="psw">Password</label>
                    <input type="text" name="password" id="pws" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </div>
                <span><input type="checkbox"/> Remember Me</span>
                <div class="info">
                
                    <input type="submit" value="LOGIN" onClick={addUser}/>
                </div>
            </form>
            {/* <div class="reset-link">
                <a href="#">Forgot Password</a>
            </div> */}

        </div>
    </section>
    )
}

export default Login;
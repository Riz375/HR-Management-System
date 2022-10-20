import './Login.css';
import {useState} from 'react'
// import { useNavigate } from "react-router-dom"


const Login = ({updateUser}) =>{

    // const navigate = useNavigate()
    
   

    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    // const[error, setError] = useState();
    const [message, setMessage] = useState(null);
 
        
     const addUser = async(e)=>{
            e.preventDefault();         // prevents default submission
            console.log(username, password);
            setMessage(true);



        try{
            let result = await fetch("http://localhost:4000/loginpage", {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: { 'Content-Type': 'application/json'}
            });
        
            result=await result.json()
            console.log(result)
          
            

            
                if(result.user){
                localStorage.setItem('token', result.user)
                // .then(setMessage(true))
                // alert('Login successful')
                window.location.href=  '/home'
                

               
            }


        } //for try
         catch(error)  {
            // setMessage(true)
        }

                }
            
               


        




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
                    onChange={(e)=>setUsername(e.target.value)} value={username}
                    
                    />
                </div>
                <div class="info">
                    <label for="psw">Password</label>
                    <input type="password" name="password" id="pws" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </div>
                <span><input type="checkbox"/> Remember Me</span>
                <div class="info">
                
                    <input type="submit" value="LOGIN" onClick={addUser}/>

                    
                </div>
            </form>

            <div>
                {message && <p className="invalidInput">Invalid username or password</p>}
            </div>

        </div>
    </section>
    )
}

export default Login;
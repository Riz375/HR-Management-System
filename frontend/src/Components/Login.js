import './Login.css';
import {useState} from 'react'


const Login = () =>{

    
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    const [message, setMessage] = useState(null);
 
        
     const loginUser = async(e)=>{
            e.preventDefault();         // prevents default submission
            console.log(username, password);
            setMessage(true);

            let result = await fetch("http://localhost:4000/loginpage", {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: { 'Content-Type': 'application/json'}
            });
        
            result=await result.json()
            console.log(result)
            alert("Login successful")
          
            if(result.user){
            localStorage.setItem('token', result.user)
            window.location.href=  '/home'
            }

        }
            
               

    return(
        <section>
        <div className="page-section">
            <img className="logo" src="https://in4group.co.uk/wp-content/uploads/2018/09/IN4.0_Logo_Group_Purple_RGB-1.png" alt="logo" />
        </div>
    
        <div className="container-form">

            <h1>Welcome Back!</h1>
            <form method="POST">
                <div className="info">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username"
                    onChange={(e)=>setUsername(e.target.value)} value={username}
                    />
                </div>
                <div className="info">
                    <label for="psw">Password</label>
                    <input type="password" name="password" id="pws" 
                    onChange={(e)=>setPassword(e.target.value)} value={password}
                    />
                </div>
                <span><input type="checkbox"/> Remember Me</span>
                <div className="info">
                    <input type="submit" value="LOGIN" onClick={loginUser}/>                    
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

import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar';
// import Departments from './Components/Departments';
import Login from './Components/Login';
// import { useEffect, useState } from 'react';
import New from './Components/New';
import HomePage from './Components/HomePage';
import Departments from './Components/Departments';
import Profile from './Components/Profile';
import Employees from './Components/Employees';
import Qualifications from './Components/Qualifications';



function App() {

//   const [user, setLoginUser] = useState({})

//   useEffect(() => {
//     setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
//   }, [])


// const updateUser = (user) => {
//   localStorage.setItem("MyUser", JSON.stringify(user))
//   setLoginUser(user)
// }

  return (
    <div>
<BrowserRouter>
<NavBar/>


<Routes>
  {/* <Route exact path='/' >
    { user && user._id ? 
    <HomePage updateUser={updateUser} /> : <Login updateUser= {updateUser} />
    }
  </Route> */}




 {/*working  */}
  {/* <Route exact path='/' 
  element={
    user && user._id ? 
    <HomePage updateUser={updateUser} /> : <Login updateUser= {updateUser} />
    } /> */}
 

 


  

  
  {/* <Route path='login'     element={<Login updateUser={updateUser} />} /> */}

  <Route exact path='/' element={<Login />} />
  <Route exact path='/new' element={<New />} />
  <Route exact path='/home' element={<HomePage />} />
  <Route exact path='/profile' element={<Profile />} />
  <Route exact path='/departments' element={<Departments />} />
  <Route exact path='/employees' element={<Employees />} />
  <Route exact path='/qualifications' element={<Qualifications />} />
  
</Routes>




{/* <Routes>
  <Route path="/" element={<HomePage/>} />
<Route exact path='/login'element={<Login/>} />
  <Route exact path='/departments'element={<Departments/>} />

<Route exact path='/new' element={<New />} />
  </Routes> */}

</BrowserRouter>
      

    </div>
  )
}

export default App;



// {/* <Routes>
//   <Route exact path='/' >
//     { user && user._id ? 
//     <HomePage updateUser={updateUser} /> : <Login updateUser= {updateUser} />
//     }
//   </Route>
//   <Route path='/login'     element={<Login updateUser={updateUser} />} />


//   <Route exact path='/new' element={<New />} />
  
// </Routes> */}
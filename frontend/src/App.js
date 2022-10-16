
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import Departments from './Components/Departments';
import Profile from './Components/Profile';
import Employees from './Components/Employees';
import Qualifications from './Components/Qualifications';



function App() {



  return (
    <div>
<BrowserRouter>
<NavBar/>


<Routes>
  
  

  <Route exact path='/' element={<Login />} />
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
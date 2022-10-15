
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import Departments from './Components/Departments';
import Login from './Components/Login';
// import { useState } from 'react';


function App() {

  // const [user, setLoginUser] = useState({})
  return (
    <div>
<BrowserRouter>
<NavBar/>

<Routes>
  {/* <Route exact path="/">
    {
      user && user._id ? <Departments setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
    }
  </Route> */}
  
  {/* <Route  path='/login'>
    <Login setLoginUser={setLoginUser}/>
  </Route> */}

<Route exact path='/login'element={<Login/>} />
  <Route exact path='/departments'element={<Departments/>} />

</Routes>
</BrowserRouter>
      

    </div>
  )
}

export default App;




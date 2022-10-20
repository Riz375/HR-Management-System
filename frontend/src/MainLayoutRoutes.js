import React from 'react';
import {Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'
// import Login from './Components/Login';
import HomePage from './Components/HomePage';
import Departments from './Components/Departments';
import Profile from './Components/Profile';
import Employees from './Components/Employees';
import Qualifications from './Components/Qualifications';


function MainRoutes() {
    return(
        
        <React.Fragment>
            <nav>
            <NavBar />
            </nav>
       

        
       
        <Routes>
      
  <Route exact path='/home' element={<HomePage />} />
  <Route exact path='/profile' element={<Profile />} />
  <Route exact path='/departments' element={<Departments />} />
  <Route exact path='/employees' element={<Employees />} />
  <Route exact path='/qualifications' element={<Qualifications />} />

        </Routes>


        <footer>
            <Footer />
        </footer>
        </React.Fragment>
        
    )
}
export default MainRoutes
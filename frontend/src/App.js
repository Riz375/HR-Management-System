
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import MainLayoutRoutes from './MainLayoutRoutes'





function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<MainLayoutRoutes />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;







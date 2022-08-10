
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login/Login";
import Orders from './components/Orders/Orders';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
       
        <Route path="/orders" element={<Orders />} />
       
      </Routes>
    </BrowserRouter>

    
  )
}

export default App;
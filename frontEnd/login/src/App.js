
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./login";
import Signup from "./signup";
import Home from "./home";
import Navbar from "./navbar";
import AddFood from "./addfood";
import Foodlist from "./foodlist";




function App() {
  return (
    <div className="App">
   {/* <LoginPage> */}

  

    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={ <LoginPage/>}/>
    <Route path="/signup" element={ <Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/addfood" element={<AddFood/>}/>
    <Route path="/food" element={<Foodlist/>}/>
   </Routes>
   </BrowserRouter> 
   
  

    </div>
  );
}

export default App;

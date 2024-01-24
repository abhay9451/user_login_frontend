import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pagess
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import signup from "./pages/signup";
const App = () =>{
return (
    <div>
    <BrowserRouter>
    <Header />
               <Routes>
               <Route exact path="/" Component={Home}/>
               <Route exact path= "/login" Component={Login}/>
               <Route  exact path = "/signup" Component={signup}/>
               </Routes>   
    </BrowserRouter>
      
    </div>
  );
}

export default App;

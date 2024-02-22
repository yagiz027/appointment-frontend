import React from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RegisterForm from "./components/authentication/RegisterForm";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/user-calendar" element={<UserPage/>}/>
        <Route path="/admin-calendar" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 
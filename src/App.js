import './App.css';
import { useState, useEffect } from 'react'
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import UserSetting from "./pages/Setting/UserSetting"
import Admin from "./pages/Admin/Admin"
import AddProduct from "./pages/Admin/AddProduct"
import Info from "./pages/Admin/Info"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {store,persistor} from "./Store/store"
import { Provider } from "react-redux";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {



  return (
    <div className="App">
      <div className="body">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/SignUp" element={<Signup />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/AddProduct" element={<AddProduct />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Info" element={<Info />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/UserSetting" element={<UserSetting />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
}

export default App;

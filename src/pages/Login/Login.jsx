import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { auth } from '../../config/db';
import {Input} from "@mui/material"
// import {User} from "../../store/userSlice"

function Login() {
  const [Email, setEmail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const SignIN = () => {

    if (Email === "admin@gmail.com") {
      navigate("/Admin")
      return;
    }

    signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/Home")

      })
      .catch((error) => {

      });
  }

  return (
    <div className="Login">



      <div className="Email" style={{ display: "flex", flexDirection: "column" }}>
        <Input type="text" className="mb-2 mt-2" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" style={{ width: "80%", marginTop: 10, }} />
        <Input type="text" className="mb-2 mt-5" onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password" style={{ width: "80%", marginTop: 10, }} />
        <Link to="SignUp" className="mt-2">If you Not Have Account</Link>
        <button onClick={SignIN} type="button" class="btn btn-primary mt-2 w-[200px] border-none bg-[#61B846] mt-2">Login</button>
      </div>
    </div>
  )
}

export default Login
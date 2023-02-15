import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { auth } from '../../config/db';
import { Box, Input, Typography } from "@mui/material"
import { User } from "../../Store/userSlice"
import { useDispatch } from 'react-redux';
import useLocalStorage from '../../hooks/useLocalStorage';



function Login() {
  const [Email, setEmail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <Box className="Login">



      <Box className="Email" style={{ display: "flex", flexDirection: "column" }}>

        <Typography varient="h3" fontWeight={900} fontSize={30} className="title">
          Sylani Welfare
        </Typography>

        <Input type="text" className="mb-2 mt-2" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" style={{ width: "80%", marginTop: 10, }} />
        <Input type="text" className="mb-2 mt-5" onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password" style={{ width: "80%", marginTop: 10, }} />
        <Link to="SignUp" className="mt-2">If you Not Have Account</Link>
        <button onClick={SignIN} type="button" class="btn btn-primary mt-2 w-[200px] border-none bg-[#61B846] mt-2">Login</button>
      </Box>
    </Box>
  )
}

export default Login
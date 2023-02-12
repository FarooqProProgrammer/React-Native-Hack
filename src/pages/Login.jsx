import React,{useState} from 'react'
import {auth} from "../config/db"
import {Link} from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom"


function Login() {
  const [Email,setEmail] = useState();
  const [password,setpassword] = useState();
  const navigate = useNavigate();

  const SignIN = ()=>{

    if(Email == "admin@gmail.com"){
      navigate("/Admin")
      return;
    }

    signInWithEmailAndPassword(auth, Email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate("/Home")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  
  return (
    <div className="Login">
                 
                <div className="Email" style={{display:"flex",flexDirection:"column"}}>
                        <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" style={{width:"80%",marginTop: 10,}} />
                        <input type="text" onChange={(e)=> setpassword(e.target.value)} placeholder="Enter Password" style={{width:"80%",marginTop: 10,}}/>
                        <Link to="SignUp">If you Not Have Account</Link>
                        <button onClick={SignIN} type="button" class="btn btn-primary mt-2">Login</button>                                        
                </div>
    </div>
  )
}

export default Login
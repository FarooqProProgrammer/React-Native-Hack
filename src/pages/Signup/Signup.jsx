import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/db"
import { setDoc, doc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import "./Signup.css"

function Signup() {
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const AddItem = () => {
    console.log(Email);
    console.log(password)
    createUserWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Add(user.uid)

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  async function Add(id) {
    await setDoc(doc(db, "UsersDis", id), {
      name: Name,
      Contact: Contact,
      Email: Email
    });
    console.log("Signp");
    navigate("/")
  }
  return (
    <div className="Login">

      <div className="Register" style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" className="mb-2 mt-2" onChange={(e) => setName(e.target.value)} placeholder="Enter User Name" style={{ width: "80%", marginTop: 10, }} />
        <input type="text" className="mb-2 mt-5" onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact" style={{ width: "80%", marginTop: 10, }} />
        <input type="text" className="mb-2 mt-5" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" style={{ width: "80%", marginTop: 10, }} />
        <input type="text" className="mb-2 mt-5" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" style={{ width: "80%", marginTop: 10, }} />
        <Link to="/">If you Have Account</Link>

        <button onClick={AddItem} type="button" class="btn btn-primary w-[200px] border-none bg-[#61B846]  mt-2">Register</button>
      </div>
    </div>
  )
}

export default Signup
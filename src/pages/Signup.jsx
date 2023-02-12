import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db} from "../config/db"
import {setDoc,doc} from "firebase/firestore"
import {useNavigate} from "react-router-dom"

function Signup() {
  const [Name,setName] = useState("");
  const [Contact,setContact] = useState("");
  const [Email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  
  const AddItem = ()=>{
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

  async function Add(id){
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
                 
                <div className="Register" style={{display:"flex",flexDirection:"column"}}>
                        <input type="text" onChange={(e)=> setName(e.target.value)} placeholder="Enter User Name" style={{width:"80%",marginTop: 10,}} />
                        <input type="text" onChange={(e)=> setContact(e.target.value)} placeholder="Enter Contact" style={{width:"80%",marginTop: 10,}} />
                        <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" style={{width:"80%",marginTop: 10,}} />
                        <input type="text" onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" style={{width:"80%",marginTop: 10,}}/>
                        <Link to="/">If you Have Account</Link>

                        <button onClick={AddItem} type="button" class="btn btn-primary mt-2">Register</button>                                        
                </div>
    </div>
  )
}

export default Signup
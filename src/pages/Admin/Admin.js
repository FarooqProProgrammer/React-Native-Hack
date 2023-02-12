import React from 'react'
import "./Admin.css"
import {AiOutlineLeft,AiOutlineUnorderedList} from "react-icons/ai"
import Ellipse from "../../assets/Ellipse.png"
import {useNavigate} from  "react-router-dom"

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="Login">
        <div className="Admin">
            <div className="AdminInfo">
                    <AiOutlineLeft className="icon" />
                    <div className="AdminImage">
                            <img src={Ellipse}/>
                    </div>
                    <p>Admin</p>
                    <span className="Small">Admin</span>
                    <div className="iconList">
                        <AiOutlineUnorderedList size={35}/>
                      </div>
            </div>
            <div className="AllProduct">
                  <div className="ProductOne">
                      <div className="Image">
                        <img src="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"/>
                      </div>
                      <p className="ProductTitle">Apple</p>
                      <p className="ProductKg">Kg</p>
                      <p className="ProductPrice">12.00</p>
                      
                  </div>
                  <div className="ProductOne">
                      <div className="Image">
                        <img src="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"/>
                      </div>
                      <p className="ProductTitle">Apple</p>
                      <p className="ProductKg">Kg</p>
                      <p className="ProductPrice">12.00</p>
                      
                  </div>
                  <div className="ProductOne">
                      <div className="Image">
                        <img src="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"/>
                      </div>
                      <p className="ProductTitle">Apple</p>
                      <p className="ProductKg">Kg</p>
                      <p className="ProductPrice">12.00</p>
                      
                  </div>
                  
                  
            </div>

            <div className="Navigation">
                <div className="NavICon" onClick={()=> navigate("/Admin")}>Home</div>
                <div className="NavICon" onClick={()=> navigate("/AddProduct")}>Add Items</div>
                <div className="NavICon" onClick={()=> navigate("/Info")}>Profile</div>
                
            </div>
        </div>
    </div>
  )
}

export default Admin

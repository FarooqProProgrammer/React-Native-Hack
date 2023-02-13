import React,{useState} from 'react'
import "./Admin.css"
import {AiOutlineLeft,AiOutlineUnorderedList} from "react-icons/ai"
import Ellipse from "../../assets/Ellipse.png"
import {useNavigate} from  "react-router-dom"
import {db} from "../../config/db"
import { collection,query,getDocs } from "firebase/firestore";

const Admin = () => {
  const navigate = useNavigate();
  const [data,setData] = useState([]);

  async function dataGet(){
    const q = query(collection(db, "Product"));

    const querySnapshot = await getDocs(q);
    const list = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log({id:doc.id,...doc.data()});
        list.push({id:doc.id,...doc.data()})
    });
    console.log(data)
    setData(list)

  }

  React.useEffect(()=>{
      dataGet()
  },[])


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

              {
                data.map((item)=>{
                  return(
                    <div className="ProductOne">
                      <div className="Image">
                        <img src={item.Product}/>
                      </div>
                      <p className="ProductTitle">{item.name}</p>
                      <p className="ProductKg">{item.Product_Unit}</p>
                      <p className="ProductPrice">{item.ProductPrice}</p>
                      
                  </div>
                  )
                })
              }
                  
      
                  
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

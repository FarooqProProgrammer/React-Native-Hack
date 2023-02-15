import React,{useState} from 'react'
import "./Admin.css"
import {AiOutlineLeft,AiOutlineUnorderedList} from "react-icons/ai"
import Ellipse from "../../assets/Ellipse.png"
import {useNavigate} from  "react-router-dom"
import {db} from "../../config/db"
import { collection,query,getDocs } from "firebase/firestore";
import { Box, Typography } from '@mui/material'

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
    <Box className="Login">
        <Box className="Admin">
            <Box className="AdminInfo">
                    <AiOutlineLeft className="icon" />
                    <Box className="AdminImage">
                            <img src={Ellipse}/>
                    </Box>
                    <Typography>Admin</Typography>
                    <span className="Small">Admin</span>
                    <Box className="iconList">
                        <AiOutlineUnorderedList size={35}/>
                      </Box>
            </Box>
            <Box className="AllProduct">

              {
                data.map((item)=>{
                  return(
                    <Box className="ProductOne">
                      <Box className="Image">
                        <img src={item.Product}/>
                      </Box>
                      <Typography className="ProductTitle">{item.name}</Typography>
                      <Typography className="ProductKg">{item.Product_Unit}</Typography>
                      <Typography className="ProductPrice">{item.ProductPrice}</Typography>
                      
                  </Box>
                  )
                })
              }
                  
      
                  
            </Box>

            <Box className="Navigation">
                <Box className="NavICon" onClick={()=> navigate("/Admin")}>Home</Box>
                <Box className="NavICon" onClick={()=> navigate("/AddProduct")}>Add Items</Box>
                <Box className="NavICon" onClick={()=> navigate("/Info")}>Profile</Box>
                
            </Box>
        </Box>
    </Box>
  )
}

export default Admin

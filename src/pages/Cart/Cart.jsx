import React, { useState,useEffect } from 'react'
import "./Cart.css"
import Ellipse from "../../assets/Ellipse 4.png"
import Delete from "../../assets/Delete.png"
import { Box, Divider, Input, Button, Typography } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux'
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { BsFillHandIndexThumbFill, BsFillHandThumbsDownFill } from "react-icons/bs"
import { auth, db } from "../../config/db"
import { add } from '../../Store/cartSlice'
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai"
import { MdAccountCircle } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { BiFoodMenu } from "react-icons/bi"
import { onAuthStateChanged } from 'firebase/auth'


function Cart() {

    const dataProducts = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [user,setUser] = useState();
    const MySwal = withReactContent(Swal)

    const dispatch = useDispatch();
    console.log(dataProducts);

    const [FullName, setFullName] = useState();
    const [EmailADD, setFullEmail] = useState();
    const [Phone, setPhone] = useState();
    const [Address, setAddress] = useState();
    const [Quantity, setQuantity] = useState(0);

    const DeleteProdu = () => {
        dispatch(add([]))
    }

    const Place = async () => {
        // Add a new document with a generated id.
        console.log(FullName)

        console.log(Address)
        const docRef = await addDoc(collection(db, "Cart"), {
            Name: FullName,
            Email: EmailADD,
            Phone: Phone,
            Address: Address,
            user:user
        });
        console.log("Document written with ID: ", docRef.id);

        Upload()

        MySwal.fire({
            title: '<strong>Your  <u>Order</u> Has Successfully Placed</strong>',
            icon: 'Success',
            html:
                '<b>Thanks For Shopping</b>, ',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                <BsFillHandIndexThumbFill />,
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                <BsFillHandThumbsDownFill />,
            cancelButtonAriaLabel: 'Thumbs down'
        })


    }

    async function Upload() {
        for (let i = 0; i < dataProducts.length; i++) {
            const data = {

                Image: dataProducts[i].Product,
                ProductPrice: dataProducts[i].ProductPrice,
                Discription: dataProducts[i].Product_Dsce,
                ProductUnit: dataProducts[i].Product_Unit,
                id: dataProducts[i].id,
                Name: dataProducts[i].name

            }

            await setDoc(doc(db, "Cart/Items/Product", dataProducts[i].id), data);



        }
    }
    const addQuantity = (index) => {
        setQuantity(Quantity + 1)
        console.log(dataProducts[index])
        dataProducts[index].quantity = Quantity
    }


    function userCheck(){
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            console.log(uid);
            setUser(uid)
          } else {
            // User is signed out
            // ...
          }
        });
      }
      useEffect(()=>{
        userCheck()
      },[])
    return (
        <Box className="Login">

            <Box className="Cart">
                <Box className="Carticon">
                    <img src={Ellipse} />
                </Box>
                <Box className="titleCart">
                    <p>Shopping Cart</p>
                    <img src={Delete} onClick={DeleteProdu} />
                </Box>
                <Box className="CartProduct">
                    {
                        dataProducts.map((item, index) => {
                            return (
                                <Box className="Wrapper">
                                    <Box className="img">
                                        <img src={item.Product} />
                                    </Box>
                                    <Box className="ProductName">{item.name}</Box>
                                    <Box className="Pridce">Pkr {item.ProductPrice}</Box>
                                </Box>
                            )
                        })
                    }







                </Box>

                <hr />

                <Box className="CartForm">

                    <Input type="text" placeholder="Full name" onChange={(e) => setFullName(e.target.value)} />
                    <Input type="text" placeholder="Email" onChange={(e) => setFullEmail(e.target.value)} />
                    <Input type="text" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                    <Input type="text" placeholder="Shipping Address" onChange={(e) => setAddress(e.target.value)} />
                    <Button onClick={Place}>Place Order</Button>

                </Box>




                <Box className="bottomTab">
                    <Box className="tab">
                        <AiOutlineHome className='icon' onClick={() => navigate("/Home")}
                        />
                    </Box>
                    <Box className="tab">
                        <AiOutlineShoppingCart onClick={() => navigate("/Cart")} className='icon' />
                    </Box>
                    <Box className="tab">
                        <MdAccountCircle onClick={() => navigate("/UserSetting")} className='icon' />
                    </Box>

                </Box>
            </Box>



        </Box>
    )
}

export default Cart
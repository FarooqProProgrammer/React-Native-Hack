import React, { useState } from 'react'
import "./Cart.css"
import Ellipse from "../../assets/Ellipse 4.png"
import Delete from "../../assets/Delete.png"
import { Box, Divider, Input, Button } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux'
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/db"
import { add } from '../../Store/cartSlice'

function Cart() {

    const dataProducts = useSelector((state) => state.cart);
    // const [user,setUser] = useState();

    const dispatch = useDispatch();
    console.log(dataProducts);

    const [FullName, setFullName] = useState();
    const [EmailADD, setFullEmail] = useState();
    const [Phone, setPhone] = useState();
    const [Address, setAddress] = useState();



    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       const uid = user.uid;
    //       console.log(uid);
    //       setUser(uid)
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //     }
    //   })


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
        });
        console.log("Document written with ID: ", docRef.id);

        Upload()



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
    return (
        <div className="Login">

            <div className="Cart">
                <div className="Carticon">
                    <img src={Ellipse} />
                </div>
                <div className="titleCart">
                    <p>Shopping Cart</p>
                    <img src={Delete} onClick={DeleteProdu} />
                </div>
                <div className="CartProduct">
                    {
                        dataProducts.map((item) => {
                            return (
                                <div className="Wrapper">
                                    <div className="img">
                                        <img src={item.Product} />
                                    </div>
                                    <div className="ProductName">{item.name}</div>
                                    <div className="Counter">
                                        <span>-</span>
                                        <span>{0}</span>
                                        <span>+</span>
                                    </div>
                                    <div className="Pridce">Pkr {item.ProductPrice}</div>
                                </div>
                            )
                        })
                    }







                </div>

                <hr />

                <Box className="CartForm">

                    <Input type="text" placeholder="Full name" onChange={(e) => setFullName(e.target.value)} />
                    <Input type="text" placeholder="Email" onChange={(e) => setFullEmail(e.target.value)} />
                    <Input type="text" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                    <Input type="text" placeholder="Shipping Address" onChange={(e) => setAddress(e.target.value)} />
                    <Button onClick={Place}>Place Order</Button>

                </Box>


            </div>



        </div>
    )
}

export default Cart
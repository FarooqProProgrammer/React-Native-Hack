import React, { useState } from 'react';
import "./Admin.css"
import { AiOutlineLeft, AiOutlineUnorderedList } from "react-icons/ai"
import Ellipse from "../../assets/Ellipse.png"
import ProductImage from "../../assets/ProductAddImage.png"
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../config/db"
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore"
import { Box, Input, Typography } from '@mui/material';


export default function AddProduct() {
        let navigate = useNavigate();
        const [ProductName, setProductName] = useState();
        const [ProductImage, setProductImage] = useState();
        const [ProductUnit, setProductUnit] = useState();
        const [ProductPrice, setProductPrice] = useState();
        const [ProductDiscr, setProductDiscr] = useState();
        const [category,setCategory] = useState();

        const AddItem = async () => {
                console.log(category)
                const docRef = await addDoc(collection(db, "Product"), {
                        name: ProductName,
                        Product: ProductImage,
                        Product_Unit: ProductUnit,
                        ProductPrice: ProductPrice,
                        Product_Dsce: ProductDiscr,
                        category:category
                });
                console.log("Document written with ID: ", docRef.id);

        }

        return (
                <Box className="Login">
                        <Box className="ProductInfo">


                                <Box className="AdminInfo">
                                        <AiOutlineLeft className="icon" onClick={() => navigate(-1)} />
                                        <Box className="AdminImage">
                                                <img src={Ellipse} />
                                        </Box>
                                        <Typography>Admin</Typography>
                                        <span className="Small">Admin</span>
                                        <Box className="iconList">
                                                <AiOutlineUnorderedList size={35} />
                                        </Box>
                                </Box>



                                <Input type="url" placeholder="Enter Product Url" className="AddProduct" onChange={(e) => setProductImage(e.target.value)} id="raised-button-file" />





                                <Input type="text" className="inputName" onChange={(e) => setProductName(e.target.value)} placeholder="Input Name" />

                                <Box class="dropDown w-100">
                                        <select className="drop" onChange={(e)=> setCategory(e.target.value)}>
                                                <option>Drink</option>
                                                <option>Fast Food</option>
                                                <option>Mewa Jaat</option>
                                        </select>
                                </Box>

                                <Box className="discribe">
                                        <textarea onChange={(e) => setProductDiscr(e.target.value)}>

                                        </textarea>
                                </Box>
                                <Box className="Unit">

                                        <Input type="text" placeholder="Unit Name" onChange={(e) => setProductUnit(e.target.value)} />
                                        <Input type="text" placeholder="Unit Price" onChange={(e) => setProductPrice(e.target.value)} />

                                </Box>

                                <button onClick={AddItem} className="AddProductBtn">Add Product</button>



                        </Box>
                </Box>
        );
}

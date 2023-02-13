import React, { useState } from 'react';
import "./Admin.css"
import { AiOutlineLeft, AiOutlineUnorderedList } from "react-icons/ai"
import Ellipse from "../../assets/Ellipse.png"
import ProductImage from "../../assets/ProductAddImage.png"
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../config/db"
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore"
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
                <div className="Login">
                        <div className="ProductInfo">


                                <div className="AdminInfo">
                                        <AiOutlineLeft className="icon" onClick={() => navigate(-1)} />
                                        <div className="AdminImage">
                                                <img src={Ellipse} />
                                        </div>
                                        <p>Admin</p>
                                        <span className="Small">Admin</span>
                                        <div className="iconList">
                                                <AiOutlineUnorderedList size={35} />
                                        </div>
                                </div>



                                <input type="url" placeholder="Enter Product Url" className="AddProduct" onChange={(e) => setProductImage(e.target.value)} id="raised-button-file" />





                                <input type="text" className="inputName" onChange={(e) => setProductName(e.target.value)} placeholder="Input Name" />

                                <div class="dropDown w-100">
                                        <select className="drop" onChange={(e)=> setCategory(e.target.value)}>
                                                <option>Drink</option>
                                                <option>Fast Food</option>
                                                <option>Mewa Jaat</option>
                                        </select>
                                </div>

                                <div className="discribe">
                                        <textarea onChange={(e) => setProductDiscr(e.target.value)}>

                                        </textarea>
                                </div>
                                <div className="Unit">

                                        <input type="text" placeholder="Unit Name" onChange={(e) => setProductUnit(e.target.value)} />
                                        <input type="text" placeholder="Unit Price" onChange={(e) => setProductPrice(e.target.value)} />

                                </div>

                                <button onClick={AddItem} className="AddProductBtn">Add Product</button>



                        </div>
                </div>
        );
}

import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart, AiFillFolderAdd } from "react-icons/ai"
// import Grocery from "../assests/Grocery.png"
import "./Home.css"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { db } from '../../config/db';
import { add } from '../../Store/cartSlice';


function Home() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const dataProducts = useSelector((state) => state.cart);
    const navigate = useNavigate();

    async function getData() {
        const q = query(collection(db, "Product"));

        const querySnapshot = await getDocs(q);
        const list = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            list.push({ id: doc.id, ...doc.data() })
            setData(list)
            console.log(data);
        });

    }

    useEffect(() => {
        getData();
        console.log(data)
    }, [])

    async function AddProductDb(item) {
        dispatch(add(item))
    }

    return (
        <div className="Login">

            <div className="title">
                <h4>Food</h4>
                <p>{dataProducts.length}</p>
                <AiOutlineShoppingCart size={30} onClick={() => navigate("/Cart")} />
            </div>

            <div className="image">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60" />
            </div>

            <div className="search">
                <input type="text" placeholder="Search Product" />
            </div>

            <div className="category w-100 ">
                <p>Shop By Category</p>
            </div>

            <div className="categoryImage">
                <div className="CategoryOne">
                    <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" />
                </div>
                <div className="CategoryOne">
                    <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" />
                </div>
                <div className="CategoryOne">
                    <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" />
                </div>

            </div>

            <div className="ProductCard">
                {data.map((item) => {
                    return (
                        <div className="Product" onClick={() => AddProductDb(item)}>
                            <div className="imageProduct">
                                <img src={item.Product} />
                            </div>
                            <div className="imageTitle">{item.name}</div>
                            <div className="desc">{item.Product_Dsce}</div>
                            <div className="Price">{item.ProductPrice}</div>
                            <div className="icon">
                                <p>+</p>
                            </div>
                        </div>
                    )
                })}




            </div>


        </div>
    )
}

export default Home
import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai"
import "./Home.css"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { db } from '../../config/db';
import { add } from '../../Store/cartSlice';
import { IconButton } from '@mui/material';
import { MdAccountCircle } from "react-icons/md"

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
                <select>
                    <option>Drink</option>
                    <option>Fast Food</option>
                    <option>Halwa</option>

                </select>
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
                            <IconButton className="icon">
                                <p>+</p>
                            </IconButton>

                        </div>
                    )
                })}


            </div>

            <div className="bottomTab">
                <div className="tab">
                    <AiOutlineHome className='icon' />
                </div>
                <div className="tab">
                    <AiOutlineShoppingCart onClick={()=> navigate("/Cart")} className='icon' />
                </div>
                <div className="tab">
                    <MdAccountCircle onClick={()=> navigate("/UserSetting")} className='icon'/>
                </div>

            </div>

        </div>
    )
}

export default Home
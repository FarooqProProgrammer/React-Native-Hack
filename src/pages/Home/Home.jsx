import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai"
import "./Home.css"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { db } from '../../config/db';
import { add } from '../../Store/cartSlice';
import { Box, IconButton } from '@mui/material';
import { MdAccountCircle } from "react-icons/md"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function Home() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const dataProducts = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [InputFilter, setInputFilter] = useState([]);

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
        <Box className="Login">

            <Box className="title">
                <h4>Food</h4>
                <p>{dataProducts.length}</p>
                <AiOutlineShoppingCart size={30} onClick={() => navigate("/Cart")} />
            </Box>

            <Box className="image">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60" />
            </Box>

            <Box className="search">
                <input type="text" placeholder="Search Product" onChange={(e) => setInputFilter({ value: e.target.value, type: "Search" })} />
            </Box>

            <Box className="category w-100 ">
                <select onChange={(e) => setInputFilter({ value: e.target.value, type: "DropDown" })}>
                    <option>Drink</option>
                    <option>Fast Food</option>
                    <option>Halwa</option>

                </select>
            </Box>

            <Box className="ProductCard">
                {data.filter((item) => InputFilter.type == "Search" ? item.name.includes(InputFilter.value) : item.category.includes(InputFilter.value)).map((item) => {
                    return (
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar className='imageProduct'>
                                
                                        <img src={item.Product} weight={40} height={40} />
                                   
                                </ListItemAvatar>
                                <ListItemText primary={item.name} secondary={item.Product_Dsce} />
                                <ListItemText>{item.ProductPrice}</ListItemText>
                                <Button className='btn'  onClick={()=> AddProductDb(item)}>
                                        <AddIcon />
                                </Button>
                            </ListItem>
                        </List>
                    )
                })}


            </Box>

            <div className="bottomTab">
                <div className="tab">
                    <IconButton>
                    <AiOutlineHome className='icon' />
                    </IconButton>
                </div>
                <div className="tab">
                <IconButton>
                    <AiOutlineShoppingCart onClick={() => navigate("/Cart")} className='icon' />
                    </IconButton>
                </div>
                <div className="tab">
                <IconButton>
                    <MdAccountCircle onClick={() => navigate("/UserSetting")} className='icon' />

                    </IconButton>
                </div>

            </div>

        </Box>
    )
}

export default Home
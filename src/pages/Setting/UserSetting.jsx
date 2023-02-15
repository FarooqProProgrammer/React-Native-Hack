import React from 'react';
import "./Setting.css"
import Ellipse from "../../assets/Ellipse.png"
import { Box, Button, Typography } from "@mui/material"
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai"
import { MdAccountCircle } from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/db';
import { signOut } from 'firebase/auth';

export default function UserSetting() {
        const navigate = useNavigate();
        const LOGOUT = () => {
                signOut(auth).then(() => {
                        navigate("/")
                }).catch((error) => {
                        // An error happened.
                });
        }
        return (
                <Box className="Login">
                        <Box className="Setting">
                                <Box className="P">Setting</Box>
                                <Box className="imgAvator">
                                        <img src={Ellipse} />
                                        <Typography>Farooq</Typography>
                                </Box>
                                <p>Orders</p>

                                <Box className="OrderWrapper">
                                        <Typography>Title</Typography>
                                        <span>Just Pending</span>
                                        <span className="number">123456789</span>
                                        <Box className="Items">
                                                2x Items
                                        </Box>
                                        <Box className="Total">Total</Box>
                                        <Typography className="OrderPrice">$185</Typography>
                                </Box>

                                <Button className="logout" onClick={LOGOUT} >Logout</Button>
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
        );
}

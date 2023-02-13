import React from 'react';
import "../Setting/Setting.css"
import Ellipse from "../../assets/Ellipse.png"
import { Button } from "@mui/material"
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai"
import { MdAccountCircle } from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/db';
import { signOut } from 'firebase/auth';

export default function Info() {
        const navigate = useNavigate();
        const LOGOUT = () => {
                signOut(auth).then(() => {
                        navigate("/")
                }).catch((error) => {
                        // An error happened.
                });
        }
        return (
                <div className="Login">
                        <div className="Setting">
                                <div className="P">Setting</div>
                                <div className="imgAvator">
                                        <img src={Ellipse} />
                                        <p>Farooq</p>
                                </div>
                                <p>Orders</p>

                                <div className="OrderWrapper">
                                        <p>Title</p>
                                        <span>Just Pending</span>
                                        <span className="number">123456789</span>
                                        <div className="Items">
                                                2x Items
                                        </div>
                                        <div className="Total">Total</div>
                                        <p className="OrderPrice">$185</p>
                                </div>

                                <button className="logout" onClick={LOGOUT} >Logout</button>
                                <div className="bottomTab">
                                        <div className="tab">
                                                <AiOutlineHome className='icon' onClick={() => navigate("/Home")}
                                                />
                                        </div>
                                        <div className="tab">
                                                <AiOutlineShoppingCart onClick={() => navigate("/Cart")} className='icon' />
                                        </div>
                                        <div className="tab">
                                                <MdAccountCircle onClick={() => navigate("/UserSetting")} className='icon' />
                                        </div>

                                </div>
                        </div>
                </div>
        );
}

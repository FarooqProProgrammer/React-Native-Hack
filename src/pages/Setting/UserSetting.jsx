import React from 'react';
import "./Setting.css"
import Ellipse from "../../assets/Ellipse.png"
import { Button } from "@mui/material"

export default function UserSetting() {
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

                                <Button className="logout">Logout</Button>
                        </div>
                </div>
        );
}

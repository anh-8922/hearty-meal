import React from "react";
import '../Styles/layout.css';
import UserBar from "./UserBar";
import Login from "../Components/Login";


export default function UserLayout({children}) {
    return(
        <div className="main">
            <UserBar/>
            <div className="side">
                <div className="top"><Login/></div>
                <div className="content">{children}</div>
            </div>            
        </div>
    )
}
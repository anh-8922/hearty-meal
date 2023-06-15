import React from "react";
import '../Styles/layout.css';
import Sidebar from "./Sidebar";
import Login from "../Components/Login";
import SearchBar from "../Components/SearchBar";

export default function MainLayout({children}) {
    return(
        <div className="main">
            <div className="left"><Sidebar/></div>
            
            <div className="side">
                <div className="heading">
                    <div><SearchBar/></div>
                    <div className="top"><Login/></div>
                    
                </div>
                <div className="content">{children}</div>
            </div>            
        </div>
    )
}
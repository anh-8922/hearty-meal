import React from "react";
import '../Styles/layout.css';
import Sidebar from "./Sidebar";
import Login from "../Components/Login";


export default function SecondLayout({children}) {
    return(
        <div className="main" style={{height:'100%'}}>
            <Sidebar/>
            <div className="side" style={{height:'100%'}}>
                
                <div className="content">{children}</div>
            </div>            
        </div>
    )
}
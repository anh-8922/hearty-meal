import React from "react";
import '../Styles/component.css';
import { NavLink } from "react-router-dom";
// import { Routes, Route, NavLink } from "react-router-dom";
import {RiHomeSmileLine} from 'react-icons/ri';
import {GiSecretBook} from 'react-icons/gi';
import {RiAddBoxFill} from 'react-icons/ri';
import {RiMentalHealthFill} from 'react-icons/ri';
import {RiFileInfoFill} from 'react-icons/ri';
import {RiMailSendFill} from 'react-icons/ri';
//import SearchBar from "../Components/SearchBar";
import heartlogo from '../Assets/heartlogo.png'

export default function Sidebar() {
    
    return (
        <>
            <nav >
                <div id="logo"><img style={{width: '10rem' }} src={heartlogo} alt='logo'/></div>
                                                                                        
                <NavLink to="/home"  className='nav-items'>Home</NavLink>
                <NavLink to="/recipe" className="nav-items">Recipe</NavLink>
                
                <NavLink to='/tools'  className="nav-items">Tools</NavLink>   
                <NavLink to="/about" className="nav-items">About</NavLink>
                <NavLink to="/contact"  className="nav-items">Contact</NavLink>   
            </nav>
        </>
    )
}

//<NavLink to='/addnewrecipes'  className="nav-items"><RiAddBoxFill/>Add Recipe</NavLink>
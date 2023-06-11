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
import SearchBar from "../Components/SearchBar";
import heartlogo from '../Assets/heartlogo.png'

export default function Sidebar() {
    
    return (
        <>
            <nav >
                <div id="logo"><img style={{width: '10rem' }} src={heartlogo} alt='logo'/></div>
                <NavLink to='/search'  id="search"><SearchBar/></NavLink>                                                                        
                <NavLink to="/home"  className='nav-items'><RiHomeSmileLine/>Main Board</NavLink>
                <NavLink to="/recipe" className="nav-items"><GiSecretBook/>Recipe</NavLink>
                <NavLink to='/addnewrecipes'  className="nav-items"><RiAddBoxFill/>Add Recipe</NavLink>
                <NavLink   className="nav-items"><RiMentalHealthFill/>Tools</NavLink>   
                <NavLink to="/about" className="nav-items"><RiFileInfoFill/>About</NavLink>
                <NavLink to="/contact"  className="nav-items"><RiMailSendFill/>Contact</NavLink>   
            </nav>
        </>
    )
}

//
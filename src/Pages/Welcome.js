import label from '../Assets/label.png'
import '../Styles/page.css';
import {useNavigate} from 'react-router-dom';
// import { Routes, Route, useNavigate } from "react-router-dom";
//import Home from './home';

export default function WelcomePage() {
    const navigate = useNavigate();
    const navigateToPage = () => {
        navigate('/home')
    }
    return(
        <>
            <div id='welcome' style={{backgroundImage: `url(${label})`}}>
                <button onClick={navigateToPage}>Get Started</button>
            </div>
            {/* <Routes>
                
                
                
            </Routes> */}
            
        </>
    )
}




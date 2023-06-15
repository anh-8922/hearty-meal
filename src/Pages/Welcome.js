//import label from '../Assets/label.png'
import '../Styles/page.css';
import {useNavigate} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import slideA from '../Assets/slideA.jpg';
import slideB from '../Assets/slideB.jpg';
import slideC from '../Assets/slideC.jpg';
//import KitchenCarousel from '../Components/KitchenCarousel';
// import { Routes, Route, useNavigate } from "react-router-dom";
//import Home from './home';

export default function WelcomePage(props) {
    const navigate = useNavigate();
    const navigateToPage = () => {
        navigate('/home')
    }
    
    return(
        <Carousel style={{width: '100%', height:'100vh'}}>
        <Carousel.Item style={{background: `url(${slideA})`, height: '100%'}}>
            <div className='welcomeSlide' onClick={navigateToPage}>
                <h1>Hearty Meal</h1>
                <h5>"A Haven for Food Lovers and Recipe Explorers."</h5>
                <div class="btn btn-getstarted">
                    <span>WELCOME</span>
                </div>
                
            </div>
          
        </Carousel.Item>
        <Carousel.Item style={{background: `url(${slideB})`, height: '100%'}}>
            <div className='welcomeSlide' onClick={navigateToPage}>
                <h1>Our Recipe</h1>
                <h5>"Savor the Comfort, Embrace the Homemade Journey."</h5>
                <div class="btn btn-getstarted">
                    <span>EXPLORE OUR RECIPES</span>
                </div>
            </div>
          
        </Carousel.Item>
        <Carousel.Item style={{background: `url(${slideC})`, height: '100%'}}>
            <div className='welcomeSlide' onClick={navigateToPage}>
                <h1>Get Started</h1>
                <h5>"Unlock a World of Flavorful Recipes."</h5>
                <div class="btn btn-getstarted">
                    <span >GET STARTED</span>
                </div>
            </div>
  
        </Carousel.Item>
      </Carousel>
    )
}

//<button onClick={navigateToPage}>Get Started</button>




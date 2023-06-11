import React, { Children, useState } from 'react';
import '../Styles/component.css';

export const CarouselItems = ({children, width}) => {
    return(
        <div className='carousel-items' style={{width: width}}>{children}</div>
    )
}
export default function Carousel({children}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {newIndex = 0}
        else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) -1;
        }
        setCurrentIndex(newIndex);
    }
    return(
        <div className='carousel'>
            <div className='internal-organ' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "-200%"});
                })}
            </div>
            <div className='indicator'>
                <button onClick={() => {updateIndex(currentIndex -1)}}>Pre</button>
                <button onClick={() => {updateIndex(currentIndex +1)}}>Next</button>
            </div>
        </div>
    )
}
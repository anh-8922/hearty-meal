
import '../Styles/component.css';
//import Rating from '@mui/material/Rating';

//import { Link } from "react-router-dom"
export default function SummaryCard (props) {
    const {id, itemImage, itemTitle} =props

    return (
        <div key={id} className="summary-card">
            <div className="category-items">
                <img id="category-img" src={itemImage} alt={itemTitle}/>
                <p id="category-p">{itemTitle}</p>
                <button onClick={props.onHandleClick}>Read more...</button>
            </div>
        </div>
    )
}
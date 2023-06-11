
import '../Styles/component.css';
//import Rating from '@mui/material/Rating';

//import { Link } from "react-router-dom"
export default function SummaryCard (props) {
    const {id, itemImage, itemTitle} =props

    return (
        <div key={id}>
        <p><img src={itemImage} alt={itemTitle} style={{width:'400px', height:'300px'}}/></p>
        <p>{itemTitle}</p>
        {/* <p><Link to='/singlerecipepage'>Read more...</Link></p> */}
        <button onClick={props.onHandleClick}>Read more...</button>
    </div>
    )
}
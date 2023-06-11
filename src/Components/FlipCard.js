import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import './component.css'
const Page = React.forwardRef((props, ref) => {
    return(
        <div id="flip" ref={ref}>
        /* ref required */
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    )
}

)
export default function FlipCards(props) {
    return(
        <div>
            <HTMLFlipBook  width={750} height={350}>
                <Page number="1">Page text</Page>
                <Page number="2">Page text</Page>
                <Page number="3">Page text</Page>
                <Page number="4">Page text</Page>
                <Page number="5">Page text</Page>
                <Page number="6">Page text</Page>
                <Page number="7">Page text</Page>
            </HTMLFlipBook>
        </div>
        
    )
}
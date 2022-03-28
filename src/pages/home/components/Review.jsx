import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Title from "../../../utils/Title";
import {Link} from "react-router-dom";
import HvrButton from "../../../utils/HvrButton";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Container} from "react-bootstrap";

function Review({messages, reviews}) {
    return (
        <div style={{marginTop: 80, marginBottom: 80, paddingTop: 80, paddingBottom: 80, background: 'RGB(219, 190, 182)'}}>
            <Container>
                <Title text={messages['reviews']}/>
                <OwlCarousel
                    className='owl-theme'
                    loop
                    items={3}
                    slideBy={1}
                    margin={10}
                    dots={false}
                    nav
                >
                    {reviews.map((review, index) => <div key={`${index}${review.author}`}
                        className='item'
                        style={{
                            background: 'white',
                            // marginLeft: 5,
                            // marginRight: 5,
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 40,
                            paddingBottom: 40
                        }}>
                        <h6>{review.author}</h6>
                        <p>{review.body}</p>
                        <span>{review.date}</span>
                    </div>)}
                </OwlCarousel>
                <HvrButton text={messages['allReviews']} click={()=>console.log('11')}/>
            </Container>
            {/*<div className="owl-nav">*/}
            {/*    <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span>*/}
            {/*    </button>*/}
            {/*    <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>*/}
            {/*</div>*/}
        </div>
    )
}

export default Review;
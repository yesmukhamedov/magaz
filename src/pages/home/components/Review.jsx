import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Title from "../../../utils/Title";
import {Link} from "react-router-dom";
import HvrButton from "../../../utils/HvrButton";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Container} from "react-bootstrap";

function Review({messages, reviews}) {
    console.log('reviews', reviews)
    return (
        <div style={{marginTop: 80, marginBottom: 80, paddingTop: 80, paddingBottom: 80, background: 'RGB(219, 190, 182)'}}>
            <Container>
                <Title text={messages['reviews']}/>
                <OwlCarousel
                    className='owl-theme'
                    loop
                    items={3}
                    slideBy={5}
                    margin={0}
                    dots={false}
                    nav
                >
                    {reviews.map((review, index) => <div
                        className='item'
                        key={`${index}${review.author}`}
                        style={{
                            background: 'white',
                            marginLeft: 5,
                            marginRight: 5,
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
        </div>
    )
}

export default Review;
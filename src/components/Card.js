import React from "react";
import { Image, Icon, Grid, Card, Button, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { Carousel, Row, Col } from 'react-bootstrap';

const Card_In_CategoryPage = props => {

    const {product} = props;

    const diver = el => {
        return (
            <div align='center'>
                {el}
            </div>
        )
    }
    
    return (
        <div>
            {/* <Carousel fade>
                {product.photos.map((photo, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={photo.photo}
                            alt={photo.photo}
                        />
                    </Carousel.Item>
                ))}
            </Carousel> */}
            <Image width = '100%' src={product.photos[0].photo} wrapped ui={false} />
            
            <h6>{diver(product.name)}</h6>
            {diver(product.vendorCode)}
            {diver(
                <Link to={`/product?name=${product.vendorCode}`}>
                    <a>ВЫБРАТЬ</a>
                </Link>
            )}
            <br />
        </div>
    );
}

export default Card_In_CategoryPage;
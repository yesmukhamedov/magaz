import React from "react";
import { Link } from 'react-router-dom';
import { Carousel, Row, Col, Image } from 'react-bootstrap';
import {messages} from "../../../locale/messages";

const Content = props => {
    const {products, messages} = props;

    const card = product => <>
        <Image width = '100%' src={product.photos[0].photo} wrapped ui={false} />
        <div style={{alignItems: 'center'}}>
            <h6>{product.name}</h6>
            {product.vendorCode}
            <Link to={`/product?name=${product.vendorCode}`}>{messages['select']}</Link>
        </div>
    </>

    return (
        <>
            <Row>
                <Col md={4} sm={12}>
                    {products.map(product=>card(product))}
                </Col>
            </Row>
        </>
    );
}

export default Content;
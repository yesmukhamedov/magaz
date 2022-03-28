import React, { useState } from 'react';
import {Col, Row, Container} from 'react-bootstrap'
import {Icon, Image} from "semantic-ui-react";
import { Link } from 'react-router-dom';

import {hanger, lupa, whats} from '../../../assets/img/icons'
import '../style.css';

function Lower({ categories, lang }) {
    return (
        <>
            <Container fluid style={{paddingTop: 10, paddingBottom: 10 }}>
                <Row>
                    <Col md={12} style={{display: "flex", justifyContent:"center"}}>
                        <a href={'/'}>NICOLE</a>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <ul style={{display: "flex", justifyContent:"space-around"}}>
                            {categories.map(category =>
                                <li key={category.id}><Link to={`/${category.name}`}>{category.text[lang]}</Link></li>
                            )}
                        </ul>
                    </Col>
                    <Col md={2} style={{display: "flex", justifyContent:"space-around"}}>
                        <a href={'/'}><Image src={lupa} width="23"/></a>
                        <a href={'/'}><Image src={hanger} width="30"/></a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Lower;
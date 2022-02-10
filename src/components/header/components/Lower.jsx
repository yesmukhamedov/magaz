import React, { useState } from 'react';
import {Col, Row, Container} from 'react-bootstrap'
import {Icon, Image} from "semantic-ui-react";

import { hanger, lupa } from '../../../assets/img/icons'
import '../style.css';

function Lower(props) {

    const {
    } = props;
    return (
        <Container fluid style={{ paddingLeft: 300, paddingRight: 300 }}>
            <Row>
                <Col md={2} >

                </Col>
                <Col md={8} style={{display: "flex", justifyContent:"space-between"}}>
                    <a className={''} href={'/'}>NICOLE</a>
                </Col>
                <Col md={2} >

                </Col>
            </Row>
            <Row>
                <Col md={10} style={{display: "flex", justifyContent:"space-between"}}>
                    <a>Свадебные платья</a>
                    <a>Sale</a>
                    <a>Вечерние платья</a>
                    <a>Обувь</a>
                    <a>Фата</a>
                    <a>Будуар</a>
                    <a>Аксессуары</a>
                    {/*<ul>*/}
                    {/*    <li></li>*/}
                    {/*    <li></li>*/}
                    {/*    <li></li>*/}
                    {/*    <li></li>*/}
                    {/*    <li></li>*/}
                    {/*    <li></li>*/}
                    {/*</ul>*/}
                </Col>
                <Col md={2} style={{display: "flex", justifyContent:"space-between"}}>
                    <a><Image src={lupa} size='small' wrapped/></a>
                    <a><Image src={hanger} size='small' wrapped/></a>
                </Col>
            </Row>
        </Container>
    );
}

export default Lower;
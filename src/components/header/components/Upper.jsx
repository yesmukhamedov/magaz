import React, {useEffect, useState} from 'react';
import {Col, Row, Container} from 'react-bootstrap'
import Select from './Select'
import '../style.css';
import { whats, whats_h, viber, viber_h } from '../../../assets/img/icons'
import {Image} from "semantic-ui-react";

function Upper({props, changeLang, localeList}) {

    const {
        whatsApp,
        number,
        address,
        instagram,

        language
    } = props;

    const [ geo, setGeo ] = useState({})
    navigator.geolocation.getCurrentPosition(
        function(position) {
            setGeo({lat: position.coords.latitude, lon: position.coords.longitude})
        },
        function(error){
            console.log(error)
        }
    );

    return (
        <Container fluid>
            <Row style={{background: 'RGB(219, 190, 182)', paddingTop: 15, paddingBottom: 15}}>
                <Col md={8} style={{display: "flex"}}>
                    <Select active={language} onClick={changeLang} items={localeList}/>
                    <span>м. Шаболовская, Москва, Ленинский проспект, 13</span>
                </Col>
                <Col md={4} style={{display: "flex", justifyContent:"space-between"}}>
                    <a className="whatsApp" href={'/'} style={{display: "flex", alignItems:"center"}}><Image src={whats} size='small' wrapped/>WhatsApp</a>
                    <a className="viber" href={'/'} style={{display: "flex", alignItems:"center"}}><Image src={viber} size='small' wrapped/>Viber</a>
                    <a className="instagram" href={'/'} style={{display: "flex", alignItems:"center"}}>Instagram</a>
                    <Select active={language} onClick={changeLang} items={localeList}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Upper;
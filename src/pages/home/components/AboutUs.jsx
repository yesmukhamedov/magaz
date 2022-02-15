import React from "react";
import {Carousel, Image, Col, Row} from "react-bootstrap";
import HvrButton from '../../../utils/HvrButton';

const AboutUs = ({aboutUs, messages}) => {
    return (
        <Row style={{ background: 'RGB(219, 190, 182)', paddingTop: 0, paddingBottom: 0, display: 'flex', alignItems: 'center', }}>
            <Col md={6} sm={12} xs={12}>
                <Carousel fade>
                    {aboutUs.salon.map(slide => (
                        <Carousel.Item key={slide.id}>
                            <Image
                                className="d-block w-100"
                                src={slide.photo}
                                alt={slide.name}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col  md={5} sm={12} xs={12}>
                <h2>{aboutUs.title}</h2>
                {aboutUs.aboutUs.map((text, index)=>
                    <p key={index} style={{ display: 'flex', justifyContent: 'center', paddingBottom: 20, marginBottom: 0}}>{text}</p>)}
                <HvrButton onClick={()=>console.log('11')} text={messages['visitSalon']}/>
            </Col>
            <Col  md={1} sm={12} xs={12}>
            </Col>
        </Row>
    );
}

export default AboutUs;
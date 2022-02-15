import React from "react";
import {Image, Icon, Grid, Card, Button, Segment, Container} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import {Col, Row} from "react-bootstrap";

const Poster = ({posters, messages}) => {
    return (
        <>
            <Container style={{marginTop: 70}}>
                <Row>
                    {posters.map((poster, index) => (
                        <Col md={4} sm={6} xs={12} key={`${index}${poster.value}`} style={{paddingLeft: '15', paddingRight: '15'}}>
                            <Image width = '100%' src={poster.photo} wrapped ui={false} />
                            <span style={{display: 'flex', justifyContent: 'center', paddingTop: '15', paddingBottom: '15'}}>{poster.text21}</span>
                            <span style={{display: 'flex', justifyContent: 'center', paddingBottom: '15'}}>{poster.text42}</span>
                            <Link to={`catalog?categoryName=${poster.value}`}>
                                <a style={{display: 'flex', justifyContent: 'center'}}>{messages['select']}</a>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Poster;
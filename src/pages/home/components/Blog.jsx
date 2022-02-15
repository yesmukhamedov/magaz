import React from "react";
import Title from '../../../utils/Title';
import HvrButton from "../../../utils/HvrButton";
import {Col, Container, Image, Row} from "react-bootstrap";

const Blog = ({messages, posts}) => {
    return (
        <>
            <Container>
                <Title text={messages['bridesBlog']}/>
                <div style={{paddingTop: 50}}>
                    <Row>
                        {posts.map((card, index) => <Col md={4} sm={12} xs={12} key={`${index}${card.title}`}>
                            <div key={`${index}${card.title}`} style={{marginTop: index===1 && window.innerWidth>=768? -30 : 0}}>
                                <Image src={card.photo} style={{width: '100%'}}/>
                                <span>{card.title}</span>
                                <p>{card.description}</p>
                                <span>{card.date}</span>
                            </div>
                        </Col>)}
                    </Row>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <HvrButton text={messages['showMore']} click={()=>console.log('11')} light={true}/>
                </div>
            </Container>
        </>
    );
}

export default Blog;
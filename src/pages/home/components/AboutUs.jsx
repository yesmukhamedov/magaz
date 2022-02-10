import React, {useEffect, useState} from "react";
import {Grid, Image} from "semantic-ui-react";
import {Carousel} from "react-bootstrap";

const AboutUs = props => {
    const { title, slides, aboutUs } = props;

    return (
        <Grid style={{ background: 'RGB(219, 190, 182)'}}>
            <Grid.Row style={{paddingTop: 0, paddingBottom: 0}}>
                <Grid.Column width = {8}>
                    <Carousel fade>
                        {slides.map((slide, index) => (
                            <Carousel.Item key={index}>
                                <Image
                                    className="d-block w-100"
                                    src={slide.photo}
                                    alt={slide.name}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Grid.Column>
                <Grid.Column width = {8}>
                    <h4>{title}</h4>
                    {aboutUs.map((text, index)=>(<><p key={index}><div align='center'>{text}</div></p><br/></>))}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default AboutUs;
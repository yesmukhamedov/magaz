import React, {useState } from 'react'
import { connect } from 'react-redux';
import { Grid, Segment, Image, Icon, Container, Button } from 'semantic-ui-react'
import { Carousel, Row, Col } from 'react-bootstrap';
import { changeLang } from '../redux/actions'

import Card from '../components/Poster'
import { data, posters, slidePosters } from '../temporalBase'


import { localeList, defaultLocale, text} from '../locale'

const Home = props => {

    const {
        lang,
    } = props;

    console.log("pp =?", slidePosters.billboard[1].value?78:99)
  return (
    <>
        <Carousel fade>
            {slidePosters.billboard.map((poster, index) => (
                <Carousel.Item key={index}>
                    <Image
                        className="d-block w-100"
                        src={poster.photo}
                        alt={poster.name}
                    />
                    <Carousel.Caption>
                        <h3>{poster.text}</h3>
                        {poster.value
                            ? <>
                                <p><Button>{poster.value.text}</Button></p>
                            </>
                            : null}
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
        <br/><br/><br/>
        <Container>
            <Row>
            {posters.map(poster => (
                        <>
                            <Col md={4} sm={6}>
                              <Card 
                                key={poster.id} 
                                post={poster}
                              />
                            </Col>
                        </>
                    ))}
            </Row>
        </Container>
        <br/><br/><br/>
        <Grid style={{ background: 'RGB(219, 190, 182)'}}>
            <Grid.Row style={{paddingTop: 0, paddingBottom: 0}}>
                <Grid.Column width = {8}>
                    <Carousel fade>
                        {slidePosters.salon.map((poster, index) => (
                            <Carousel.Item key={index}>
                                <Image
                                    className="d-block w-100"
                                    src={poster.photo}
                                    alt={poster.name}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Grid.Column>
                <Grid.Column width = {8}>
                    <h4>{data.aboutSalonTitle}</h4>
                    {data.aboutSalonText.map((text, index)=>(<><p key={index}><div align='center'>{text}</div></p><br/></>))}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </>
  );
}

const putStateToProps = state => {
    console.log("language =>", state.lang)
    return {
        lang: state.lang.lang
    }
}

const putActionsToProps = {
    changeLang
}

export default connect(putStateToProps, putActionsToProps)(Home);

/*

 <Grid>
                <Grid.Row>
                    {products.map(product => (
                        <>
                            <Grid.Column width = {4}>
                              <Card 
                                fluid
                                key={product.id} 
                                product={product}
                              />
                            </Grid.Column>
                        </>
                    ))}
                </Grid.Row>
            </Grid>


 style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}
      {
                        products.map(product => (
                            <Card 
                                key = {product.id} 
                                product = {product}
                            />
                    ))}


                    , justifyContent: 'space-between'



                                    {
                        products.map(product => (
                            <Grid.Column width = {4}>
                                <Card1 
                                    key = {product.id} 
                                    product = {product}
                                />
                            </Grid.Column>
                    ))}
*/
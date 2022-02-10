import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { Grid, Segment, Image, Icon, Container, Button } from 'semantic-ui-react'
import { Carousel, Row, Col } from 'react-bootstrap';

import { localeList, defaultLocale, text} from '../../locale'
import {AboutUs, Billboard, Poster } from "./components";
import axios from "axios";

const Index = props => {

    const {
        lang,
    } = props;

    const initialState = {
        data: [],
        posters: [],
        slidePosters: [],

        title: '',
        slides: [],
        aboutUs: []
    };

    const [state, setState] = useState(initialState)
    // useEffect(
    //     ()=>fetch('http://localhost:3000/db.json')
    //         .then(resp => resp.json())
    //         .then(json => setState({
    //             ...state,
    //             data: json.data,
    //             posters: json.posters,
    //             slidePosters: json.slidePosters,
    //
    //             title: json.aboutUs.title,
    //             slides: json.aboutUs.salon,
    //             aboutUs: json.aboutUs.aboutUs
    //         })), [])

    axios.get('http://localhost:3000/db.json').then(resp=>console.log('axios', resp))
    const {
        data,
        posters,
        slidePosters,

        title,
        slides,
        aboutUs
    } = state;

  return (
    <>
        <Billboard billboards={[]}/>
        <Container>
            <Row>
            {posters.map(poster => (
                        <>
                            <Col md={4} sm={6}>
                              <Poster
                                key={poster.id} 
                                post={poster}
                              />
                            </Col>
                        </>
                    ))}
            </Row>
        </Container>
        <AboutUs
            title={title}
            slides={slides}
            aboutUs={aboutUs}
        />
    </>
  );
}

const putStateToProps = state => {
    console.log("language =>", state.lang)
    return {
        lang: state.lang.lang
    }
}

export default connect(putStateToProps)(Index);

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
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { Grid, Segment, Image, Icon, Container, Button } from 'semantic-ui-react'
import { Carousel, Row, Col } from 'react-bootstrap';

import { AboutUs, Billboard, Poster, Top50, Brides, Blog, Review } from "./components";
import { getBillboards, getPosters, getAboutUs, getPosts, getReviews } from "../../redux/actions/homeActions";

import {injectIntl} from "react-intl";

const Home = props => {

    const {
        intl: { messages },
        lang,

        billboards,
        posters,
        aboutUs,
        posts,
        reviews,

        getBillboards,
        getPosters,
        getAboutUs,
        getPosts,
        getReviews
    } = props;

    useEffect(()=> {
        getBillboards();
        getPosters();
        getAboutUs();
        getPosts();
        getReviews();
    }, []);

    // import axios from "axios";
    // axios.get('http://localhost:3000/db.json').then(resp=>console.log('axios', resp))

  return (
    <>
        <Billboard
            messages={messages}
            billboards={billboards}
        />
        <Poster
            messages={messages}
            posters={posters}
        />
        <Top50
            messages={messages}
            posters={posters}
        />
        <AboutUs
            messages={messages}
            aboutUs={aboutUs}
        />
        <Brides
            messages={messages}
            posters={posters}
        />
        <Blog
            messages={messages}
            posts={posts}
        />
        <Review
            messages={messages}
            reviews={reviews}
        />
    </>
  );
}

const putStateToProps = state => {
    return {
        lang: state.userInfo.lang,

        billboards: state.homeReducer.billboards,
        posters: state.homeReducer.posters,
        aboutUs: state.homeReducer.aboutUs,
        posts: state.homeReducer.posts,
        reviews: state.homeReducer.reviews,
    }
}

const putActionsToProps = {
    getBillboards,
    getPosters,
    getAboutUs,
    getPosts,
    getReviews
}

export default connect(putStateToProps, putActionsToProps)(injectIntl(Home));
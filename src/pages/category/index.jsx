import React, {useState, useEffect} from "react";
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import {connect} from 'react-redux';
import { injectIntl } from 'react-intl';
import Path from "../../utils/Path"
import {Menu, Header, Content} from "./components";
import {getCategories} from "../../redux/actions/directory";
import { useParams } from "react-router-dom";

const queryString = require('query-string');

const Category = props => {

    const {intl: {messages}, language, categories, products} = props;

    const [state, setState] = useState({});
    const path = useParams();

    useEffect(()=>{
        setState({...state, category: {name: path.category, text: categories.length && categories.find(item=>item.name===path.category).text[language]}})
    }, [path, categories])

    useEffect(()=>{
        props.getProducts(state.category.name)
    }, [])
    // console.log('state: ', state)
    return(
        <>
            <Path path={path}/>
            <Row>
                <Col md={3}>
                    <Menu
                        categories={categories}
                    />
                </Col>
                <Col md={9}>
                    <Header
                        category={state.category}
                        messages={messages}
                    />
                </Col>
            </Row>
            <Content products={products}/>
        </>
    )
}

const putStateToProps = state => {
    return {
        language: state.userInfo.lang,
        categories: state.directory.categories
    }
}

const putActionsToProps = {
    getCategories
}

export default connect(putStateToProps, putActionsToProps)(injectIntl(Category));
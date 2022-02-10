import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { messages } from './locale/messages'

import { Header, Footer } from './components'
import { Home, Category, Product, Blog } from './pages';

import './style.css';

function App(props) {
    const { lang } = props;
  return (
   <IntlProvider locale={lang} key={lang} messages={messages[lang]}>
    <>
        <Header />
        {/*<Routes>*/}
        {/*    <Route path="" element={<Home />} />*/}
        {/*    <Route path="catalog" component={Category} exact />*/}
        {/*    <Route path="product" render={() => <Product />} />*/}
        {/*</Routes>*/}
        <Footer />
    </>
   </IntlProvider>
  );
}

const mapStateToProps = state => {
  console.log("App state =>", state)
  return {
    lang: state.userInfo.lang,
    location: state.userInfo.location,
  }
}

export default connect(mapStateToProps)(App);
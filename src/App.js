import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { messages } from './locale/messages'
import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import Index from './pages/product';
import Category from './pages/category';
import './style.css';
function App() {

  return (
    <>
      {/* <IntlProvider locale={props.lang} messages={messages[props.lang]}> */}
        <Header />
        <br/><br/>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="catalog" element={<Category />} />
          <Route path="product" element={<Index />} />
        </Routes>   
        <br/><br/><br/>
        <Footer />
      {/* </IntlProvider> */}
    </>
  );
}

const mapStateToProps = state => {
  console.log("language =>", state)
  return {
    lang: state.lang.lang
  }
}

export default connect(mapStateToProps)(App);
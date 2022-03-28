import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { messages } from './locale/messages'

import { Header, Footer } from './components'
import { Home, Category, Product, Blog } from './pages';

import './style.css';


function App({ lang }) {
  //   // window.addEventListener('scroll', console.log(window.pageYOffset))
  //  // , window.pageYOffset, window.pageXOffset)
  //  //  React.useEffect(()=> console.log('scroll', document.documentElement.getBoundingClientRect().bottom), [document.documentElement.getBoundingClientRect().bottom]);
  // // while(true){
  // //       setTimeout(1000);
  // //     console.log(document.documentElement.getBoundingClientRect().bottom)
  // // }
  // console.log('go', document.documentElement.scrollTop)

    //exact
    return (
   <IntlProvider locale={lang} key={lang} messages={messages[lang]}>
    <>
        <Header />
        <Routes>
            <Route path="" component={Home} />
            <Route path="/:category" element={<Category />} />
            <Route path="/blog/:post" element={<Blog />} />
            <Route path="/:category/:product" element={<Product />} />
        </Routes>
        <Footer />
    </>
   </IntlProvider>
  );
}

const mapStateToProps = state => {
  console.log("App state =>", state)
  return {
    lang: state.userInfo.lang,
    // location: state.userInfo.location,
  }
}

export default connect(mapStateToProps)(App);
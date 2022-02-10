import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { changeLang } from '../../redux/actions/userInfo';
import { getUpperData } from '../../redux/actions/header';
import {Upper, Lower} from './components'
import { localeList } from "../../locale";
import './style.css';
import axios from "axios";

function Header(props) {

    useEffect(()=> {props.getUpperData()}, [])

    const onChangeLanguage = (langCode) => {
        props.changeLang(langCode);
        localStorage.setItem('locale', langCode)
    }

    return (
        <>
            <Upper
                props={props}
                changeLang={onChangeLanguage}
                localeList={localeList}
            />
            <Lower

            />
        </>
    );
}

const putStateToProps = state => {
    return {
        language: state.userInfo.lang,
        header: state.header,

    }
}

const putActionsToProps = {
    changeLang,
    getUpperData
}

export default connect(putStateToProps, putActionsToProps)(Header);
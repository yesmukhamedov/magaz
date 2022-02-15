import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { injectIntl } from 'react-intl';
import { setBranch, setLanguage } from '../../redux/actions/userInfo';
import { getBranches, getCategories } from '../../redux/actions/directory';
import {Upper, Lower} from './components'
import { localeList } from "../../locale";
import './style.css';
import axios from "axios";

function Header(props) {

    const {intl: { messages }} = props;

    useEffect(()=> {
        props.getBranches();
        props.getCategories();
    }, [])

    const onChangeLanguage = (langCode) => {
        props.setLanguage(langCode);
        localStorage.setItem('locale', langCode)
    }

    return (
        <>
            <Upper
                props={props}
                messages={messages}
                changeLang={onChangeLanguage}
                changeBranch={props.setBranch}
                localeList={localeList}

                branch={props.branch}
                branches={props.branches}
            />
            <Lower
                categories={props.categories}
            />
        </>
    );
}

const putStateToProps = state => {
    return {
        language: state.userInfo.lang,
        branch: state.userInfo.branch,

        header: state.header,

        branches: state.directory.branches,
        categories: state.directory.categories
    }
}

const putActionsToProps = {
    setBranch, setLanguage,

    getBranches, getCategories
}

export default connect(putStateToProps, putActionsToProps)(injectIntl(Header));
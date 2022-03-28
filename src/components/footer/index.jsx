import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import { injectIntl } from 'react-intl';
import {
    Button,
    Form,
    Input,
    Grid,
    Segment,
    Checkbox
} from 'semantic-ui-react';
import { getCategories } from '../../redux/actions/directory'
import { Upper, Lower } from './components'
import ScrollToTopButton from "../../utils/ScrollToTopButton";

function Footer({intl: { messages }, categories, branch, language}){
    const initialState = {
        error: []
    }
    const [state, setState] = useState(initialState)

    return (
        <>
            <Upper
                messages={messages}
            />
            <Lower
                lang={language}
                messages={messages}
                categories={categories}
                branch={branch}
            />
            <ScrollToTopButton />
        </>
    );
}

const putStateToProps = state => {
    return {
        language: state.userInfo.lang,
        branch: state.userInfo.branch,

        categories: state.directory.categories
    }
}

const putActionsToProps = {
    // setBranch, setLanguage,
    //
    // getCategories
    getCategories
}

export default connect(putStateToProps, putActionsToProps)(injectIntl(Footer));
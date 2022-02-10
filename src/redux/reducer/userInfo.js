import {CHANGE_CITY, CHANGE_LANG, FETCH_BRANCHES } from '../actions/userInfo'

import { defaultLocale } from "../../locale";

const initialState = {
    lang : defaultLocale,
    city : 'ALM'
}

const userInfo = (state = initialState, action) => {
    switch(action.type) {       
        case CHANGE_LANG: {
            return {...state, lang: action.data};
        }
        case CHANGE_CITY: {
            return {...state, location: action.data};
        }
        case FETCH_BRANCHES: {
            return {...state, location: action.data};
        }
        default: {
            return state;
        }
    }
}

export default userInfo;
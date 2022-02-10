import { combineReducers } from 'redux';

import userInfo from './userInfo';
import header from "./header";

const rootReducer = combineReducers({
    userInfo,
    header
});

export default rootReducer;
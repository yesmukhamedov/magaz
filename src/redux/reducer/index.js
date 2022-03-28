import { combineReducers } from 'redux';

import userInfo from './userInfo';
import directory from './directory';
import homeReducer from './homeReducer';
import categoryReducer from "./categoryReducer";


const rootReducer = combineReducers({
    userInfo,
    directory,
    homeReducer,
    categoryReducer
});

export default rootReducer;
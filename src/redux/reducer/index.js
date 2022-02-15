import { combineReducers } from 'redux';

import userInfo from './userInfo';
import directory from './directory';
import homeReducer from './homeReducer';


const rootReducer = combineReducers({
    userInfo,
    directory,
    homeReducer
});

export default rootReducer;
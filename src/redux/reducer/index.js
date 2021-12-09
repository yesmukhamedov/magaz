import { combineReducers } from 'redux';

import lang from './langReducer';

const rootReducer = combineReducers({
    lang: lang
});

export default rootReducer;
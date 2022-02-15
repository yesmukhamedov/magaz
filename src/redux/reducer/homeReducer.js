import { POSTERS, BILLBOARDS, ABOUT_US, POSTS, REVIEWS } from '../actions/homeActions'

const initialState = {
    posters: [],
    billboards: [],
    aboutUs: {
        title: '',
        aboutUs: [],
        salon: []
    },
    posts: [],
    reviews: []
}

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case POSTERS: {
            return {...state, posters: action.data};
        }
        case BILLBOARDS: {
            return {...state, billboards: action.data};
        }
        case ABOUT_US: {
            return {...state, aboutUs: action.data};
        }
        case POSTS: {
            return {...state, posts: action.data};
        }
        case REVIEWS: {
            return {...state, reviews: action.data};
        }
        default: {
            return state;
        }
    }
}

export default homeReducer;
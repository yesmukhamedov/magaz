export const POSTERS = 'FETCH_POSTERS';
export const BILLBOARDS = 'FETCH_BILLBOARDS';
export const ABOUT_US = 'FETCH_ABOUT_US';
export const POSTS = 'FETCH_POSTS';
export const REVIEWS = 'FETCH_REVIEWS';

export const getPosters = () =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: POSTERS,
                    data: json.posters})})
            .catch(error => {
                console.log(error);
            });
    };
};

export const getBillboards = () =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: BILLBOARDS,
                    data: json.billboards})})
            .catch(error => {
                console.log(error);
            });
    };
};

export const getAboutUs = () =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: ABOUT_US,
                    data: json.aboutUs})})
            .catch(error => {
                console.log(error);
            });
    };
};

export const getPosts = () =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: POSTS,
                    data: json.posts})})
            .catch(error => {
                console.log(error);
            });
    };
};

export const getReviews = () =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: REVIEWS,
                    data: json.reviews})})
            .catch(error => {
                console.log(error);
            });
    };
};
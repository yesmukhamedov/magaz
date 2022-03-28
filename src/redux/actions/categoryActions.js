export const PRODUCTS = 'FETCH_REVIEWS';

export const getProducts = () =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: PRODUCTS,
                    data: json.products})})
            .catch(error => {
                console.log(error);
            });
    };
};
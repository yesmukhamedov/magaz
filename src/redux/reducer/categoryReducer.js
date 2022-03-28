import { PRODUCTS } from '../actions/categoryActions'

const initialState = {
    products: []
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCTS: {
            return {...state, products: action.data};
        }
        default: {
            return state;
        }
    }
}

export default categoryReducer;
import { BRANCHES, CATEGORIES } from '../actions/directory'

const initialState = {
    branches: [],
    categories: [],
}

const directories = (state = initialState, action) => {
    switch(action.type) {
        case BRANCHES: {
            return {...state, branches: action.data};
        }
        case CATEGORIES: {
            return {...state, categories: action.data};
        }
        default: {
            return state;
        }
    }
}

export default directories;
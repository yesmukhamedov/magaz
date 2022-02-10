import { UPPER_DATA } from '../actions/header'

const initialState = {
    header: {
        name: {
            text: "",
            value: ""
        },
        whatsApp: {
            text: "",
            value: ""
        },
        number: {
            text: "",
            value: ""
        },
        address: {
            text: "",
            value: ""
        },
        instagram: {
            text: "",
            value: ""
        }
    }
}

const header = (state = initialState, action) => {
    switch(action.type) {
        case UPPER_DATA: {
            return {...state, header: action.data};
        }
        default: {
            return state;
        }
    }
}

export default header;
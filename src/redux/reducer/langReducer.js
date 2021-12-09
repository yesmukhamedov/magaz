const initialState = {
    lang : 'en'
}

const lang = (state = initialState, action) => {
    switch(action.type) {       
        case 'CHANGE_LANG': {
            const newLang = action.payload;
            console.log("payload=>", typeof newLang, newLang); //'en'
            return {...state, lang: newLang};
        }
        default: {
            return state;
        }
    }
}

export default lang;
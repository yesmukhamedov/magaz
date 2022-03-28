import { LANGUAGE, BRANCH } from '../actions/userInfo'

import { defaultLocale } from "../../locale";

const initialState = {
    lang : defaultLocale,
    branch: {
        id: 0,
        city: {
            en: "Almaty",
            ru: "Алматы",
            kk: "Алматы"
        },
        address: {
            en: "st. Nazarbayev",
            ru: "ул. Назарбаева",
            kk: "Назарбаев к-сі"
        },
        officeHours: {
            en: "Mon-Sun 11.00 - 21.00",
            ru: "ПН-ВС 11.00 - 21.00",
            kk: "Дүйсенбі-Жексенбі 11.00 - 21.00"
        },
        info: {
            number: {
                text: "+7 707 777 77 07",
                value: ""
            },
            whatsApp: {
                text: "+7 707 777 77 07",
                value: ""
            },
            instagram: {
                text: "insta_account",
                value: ""
            }
        }
    }
}

const userInfo = (state = initialState, action) => {
    switch(action.type) {       
        case LANGUAGE: {
            return {...state, lang: action.data};
        }
        case BRANCH: {
            return {...state, branch: action.data};
        }
        default: {
            return state;
        }
    }
}

export default userInfo;
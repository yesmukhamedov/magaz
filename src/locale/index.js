import { FormattedMessage } from 'react-intl';

const en = require('react-intl/locale-data/en');
const kk = require('react-intl/locale-data/kk');
const ru = require('react-intl/locale-data/ru');

const addLocaleData = require('react-intl').addLocaleData; 
addLocaleData(en);
addLocaleData(kk);
addLocaleData(ru);

export const defaultLocale = localStorage['locale'] || window.clientInformation.language || 'ru';

export const localeList = [
    // { key: 'en', text: 'English', value: 'en' },
    // { key: 'kk', text: 'Қазақша', value: 'kk' },
    // { key: 'ru', text: 'Русский', value: 'ru' }
    { name: 'English', code: 'en', lang: 'English' },
    { name: 'Қазақша', code: 'kk', lang: 'Kazakh' },
    { name: 'Русский', code: 'ru', lang: 'Russian' }
];

export const text = (code, defaultMessage) => {
    return (<FormattedMessage id={code} defaultMessage={defaultMessage? defaultMessage : 'none identifier text'}/>)
}
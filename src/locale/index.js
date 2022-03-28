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
    { text: 'English', code: 'en', name: 'English' },
    { text: 'Қазақша', code: 'kk', name: 'Kazakh' },
    { text: 'Русский', code: 'ru', name: 'Russian' }
];

export const text = (code, defaultMessage) => {
    return (<FormattedMessage id={code} defaultMessage={defaultMessage? defaultMessage : 'none identifier text'}/>)
}
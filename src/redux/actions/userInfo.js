import {UPPER_DATA} from "./header";

export const CHANGE_LANG = 'CHANGE_LANG';
export const CHANGE_CITY = 'CHANGE_CITY';
export const FETCH_BRANCHES = 'FETCH_BRANCHES';

export const changeLang = langCode =>({
    type: CHANGE_LANG,
    data: langCode
});

export const changeCity = cityCode =>({
    type: CHANGE_CITY,
    data: cityCode
});

export const getBranches = () =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: FETCH_BRANCHES,
                    data: json.branches
                })
            })
            .catch(error => {
                console.log(error);
            });
    };
};


export const LANGUAGE = 'CHANGE_LANG';
export const BRANCH = 'CHANGE_BRANCH';

export const setLanguage = langCode =>({
    type: LANGUAGE,
    data: langCode
});

export const setBranch = id =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: BRANCH,
                    data: json.branches.filter(branch => branch.id === id)[0]
                })
            })
            .catch(error => {
                console.log(error);
            });
    };
};

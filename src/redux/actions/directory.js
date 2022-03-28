export const BRANCHES = 'FETCH_BRANCHES';
export const CATEGORIES = 'FETCH_CATEGORIES';

export const getBranches = () =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: BRANCHES,
                    data: json.branches.map(
                        branch => ({
                            id: branch.id,
                            city: branch.city,
                            address: branch.address
                        }))})})
            .catch(error => {
                console.log(error);
            });
    };
};

export const getCategories = () =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: CATEGORIES,
                    data: json.categories.map(
                        category => ({
                            id: category.id,
                            text: category.text,
                            name: category.name
                        }))})})
            .catch(error => {
                console.log(error);
            });
    };
};
export const UPPER_DATA = 'UPPER_DATA';

export const getUpperData = () =>{
    return function(dispatch) {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: UPPER_DATA,
                    data: {
                        whatsApp: json.header.whatsApp,
                        number: json.header.number,
                        address: json.header.address,
                        instagram: json.header.instagram,
                    }
                })
            })
            .catch(error => {
                console.log(error);
            });
    };
};



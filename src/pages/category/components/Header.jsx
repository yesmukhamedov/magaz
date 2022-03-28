import React from "react";
import SortBy from "../../../utils/SortBy";

function Header({category, messages}) {
    const sortOptions = [
        {text: messages['sortByAscendingPrice'], code: 'ascendingPrice', name: 'ascendingPrice'},
        {text: messages['sortByDescendingPrice'],    code: 'descendingPrice', name: 'descendingPrice'},
        {text: messages['sortByPopular'],     code: 'byPopular', name: 'byPopular'}
    ];
    return(
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h1>{category && category.text}</h1>
            <SortBy
                onClick={()=>console.log('11')}
                items={sortOptions}
                active={sortOptions[0].code}
            />
        </div>
    )
}

export default Header;
import React from "react";

function Title({text}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <span style={{textTransform: 'uppercase', marginBottom: 8, paddingLeft: 50, paddingRight: 50}}>{text}</span>
        </div>
    )
}

export default Title;
import React from "react";
import {Button} from 'react-bootstrap'
import './style.css';

function HvrButton({text, click, light=false}) {
    return (
        <Button
            variant={'dark'}
            className={light? 'hoverBtnLight' : 'hoverBtnDark'}
            style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 40, paddingRight: 40}}
            onClick={()=>click}
        >
            {text}
        </Button>
    );
}

export default HvrButton;
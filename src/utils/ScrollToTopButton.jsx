import React from "react";
import {Button} from 'react-bootstrap'
import './style.css';

function ScrollToTopButton({text, click, light=false}) {
    return (
        <>
            <Button
                className={'scrollerButton'}
                // disabled={}
                style={{bottom: 80}}
                onClick={()=>window.scrollTo({
                    top: 0,
                    behavior: 'smooth'})}
                value={''}>^</Button>
            <Button
                className={'scrollerButton'}
                // disabled={}
                style={{bottom: 10, transform: 'rotate(180deg)'}}
                onClick={()=>window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'})}
                value={''}>^</Button>
        </>
    );
}

export default ScrollToTopButton;
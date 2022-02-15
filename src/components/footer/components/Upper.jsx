import React, {useState} from "react";
import {Col, Container, Form, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import HvrButton from "../../../utils/HvrButton";

function Upper({ messages }) {
    const initialForm = {
        parameter: {
            number: '',
            email: '',
            checked: false,
        },
        errors: []
    };
    const [state, setState] = useState(initialForm);

    const { number, email, checked } = state.parameter;

    const setForm = event => {
        const { name, value, checked } = event.target;

        name? setState({...state, parameter: {...state.parameter, [name]: value}})
            : setState({...state, parameter: {...state.parameter, 'checked': checked}})
    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    const sendForm = () => {
        const error = [];
        if(!number)
            error.push(messages['footer.formNumberError'])
        if(!email)
            error.push(messages['footer.formEmailError'])
        if(!checked)
            error.push(messages['footer.formCheckError'])
        if(!error.length)
            console.log('send', {number, email});
        setState({...state, errors: error});
    };

    return (
        <div style={{background: 'RGB(219, 190, 182)', paddingTop: 40, paddingBottom: 40, paddingLeft: 30, paddingRight: 30, marginTop: 80, marginBottom: 40}}>
            <Container style={{paddingLeft: 15, paddingRight: 15}}>
                <div style={{display: 'flex', justifyContent: 'center'}}><span style={{marginBottom: 8, paddingLeft: 50, paddingRight: 50}}><h3>{messages['footerTitle']}</h3></span></div>
                <p style={{textAlign: 'center'}}>{messages['footerText1']}<br />{messages['footerText2']}</p>
                {/*{messages['footerText'].split('.').map(str => (<><p>{str}</p><br/></>))}*/}
                <Form>
                    <Form.Group as={Row}>
                        <Col md={3} style={{marginBottom: 15}}>
                            <span>{messages['footer.formLabel']}</span>
                        </Col>
                        <Col md={3} style={{marginBottom: 15}}>
                            <Form.Control
                                name='number'
                                defaultValue={number}
                                // onChange={this.handleChange.bind(this)}
                                placeholder={messages['footer.formNumber']}
                                // onChange={(e, {value})=>setForm('number', value)}
                                onChange={e=>setForm(e)}
                            />
                        </Col>
                        <Col md={3} style={{marginBottom: 15}}>
                            <Form.Control
                                name='email'
                                defaultValue={email}
                                placeholder={messages['footer.formEmail']}
                                onChange={e=>setForm(e)}
                            />
                        </Col>
                        <Col md={3} style={{marginBottom: 15}}>
                            <HvrButton text={messages['footer.formSubmit']} click={sendForm} light={false}/>
                        </Col>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <ReCAPTCHA
                                sitekey="6LdTUnQeAAAAABPbxnZ_NNSil_ZcP7BQE_op5AOA"
                                onChange={onChange}
                            />
                        </div>
                        <Form.Check
                            onChange={e=>setForm(e)}
                            label={messages['footer.formCheck']}
                            type={'checkbox'}
                        />
                    </Form.Group>
                </Form>
                {state.errors.map((error, index) => <p key={index} style={{textAlign: 'center'}}>{error}</p>)}
            </Container>
        </div>
    );
}

export default Upper;
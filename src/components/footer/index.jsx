import React, {useEffect, useState} from 'react'
import {
    Button,
    Form,
    Input,
    Grid,
    Segment,
    Checkbox
} from 'semantic-ui-react';

function Footer(props){
    const initialState = {
        error: []
    }
    const [state, setState] = useState(initialState)
    // useEffect(
    //     ()=>fetch('http://localhost:3000/db.json')
    //         .then(resp => resp.json())
    //         .then(json => setState({
    //             ...state,
    //             data: json.data,
    //         })), [])
    const errorForm = {
        0: {ru: "Неверно введено слово с картинки"},
        1: {ru: "Введите телефон"},
        2: {ru: "Введите Email"},
        3: {ru: "Вы не дали согласие на обработку"}
    }
    return (
        <>
            <Form style={{ background: 'RGB(219, 190, 182)'}}>
                <div align="center">ПОЛУЧИТЬ СКИДКУ 10%</div>
                <div align="center">Введите номер телефона и получите промо-код на скидку 10% на первую покупку. Назовите его нашему менеджеру во время звонка или укажите в поле «Комментарий» при оформлении заказа!</div>
                <Form.Group style={{alignItems: 'center'}}>
                    <Form.Field width={2} >ХОЧУ ПРОМО-КОД</Form.Field>
                    <Form.Field width={2} ><Input placeholder={"телефон номер"}/></Form.Field>
                    <Form.Field width={2} ><Input placeholder={"электронная почта"}/></Form.Field>
                    <Form.Field width={2} ><Segment inverted style={{padding: '0'}} ><Button inverted fluid style={{margin: '0'}}>получить промо-код</Button></Segment></Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field width={16}>
                        <div align="center">
                            <Segment><Checkbox label='Я даю согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности' /></Segment><br />
                            <a></a><br />
                            <a></a><br />
                            <a></a><br />
                            <a></a><br />
                        </div>
                    </Form.Field>
                </Form.Group>
            </Form>
        </>
    );
}

export default Footer;

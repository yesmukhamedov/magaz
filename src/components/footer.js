import React from 'react'
import {
    Button,
    Form,
    Input,
    Grid,
    Segment,
    Checkbox
  } from 'semantic-ui-react';

function Footer() {
  return (
    <>
        <Form style={{ background: 'RGB(219, 190, 182)'}}>
            <Form.Group>
                <Form.Field width={16}><div align="center">ПОЛУЧИТЬ СКИДКУ 10%</div></Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Field width={4}>
                </Form.Field>
                <Form.Field width={8}>
                    <div align="center">Введите номер телефона и получите промо-код на скидку 10% на первую покупку. Назовите его нашему менеджеру во время звонка или укажите в поле «Комментарий» при оформлении заказа!</div>
                </Form.Field>
                <Form.Field width={4}>
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Field width={4} ></Form.Field>
                <Form.Field width={2} >ХОЧУ ПРОМО-КОД</Form.Field>
                <Form.Field width={2} ><Input placeholder={"телефон номер"}></Input></Form.Field>
                <Form.Field width={2} ><Input placeholder={"электронная почта"}></Input></Form.Field>
                <Form.Field width={2} ><Segment inverted style={{padding: '0'}} ><Button inverted fluid style={{margin: '0'}}>получить промо-код</Button></Segment></Form.Field>
                <Form.Field width={4} ></Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Field></Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Field width={16}>
                    <div align="center">
                        <Segment><Checkbox label='Я даю согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности' /></Segment><br />
                        <a>Неверно введено слово с картинки</a><br />
                        <a>Введите телефон</a><br />
                        <a>Введите Email</a><br />
                        <a>Вы не дали согласие на обработку</a><br />
                    </div>
                </Form.Field>
            </Form.Group>
        </Form>
    </>
  );
}

export default Footer;

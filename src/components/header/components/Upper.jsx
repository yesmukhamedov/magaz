import React, {useEffect, useState} from 'react';
import {Col, Row, Container} from 'react-bootstrap'

import Branch from './Branch'
import SortBy from "../../../utils/SortBy";
import '../style.css';
import { whats, whats_h, viber, viber_h } from '../../../assets/img/icons'
import {Button, Image} from "semantic-ui-react";

function Upper({props, messages, changeLang, localeList, branches, branch, changeBranch}) {

    const { language } = props;
    const { city, address, info } = props.branch;

    const [ state, setState ] = useState({
        setCityModalOpen: false
    })

    const select = id => {
        changeBranch(id);
        setState({...state, setCityModalOpen: false})
    }

    return (
        <>
            <Branch
                messages={messages}
                branches={branches}
                lang={language}
                open={state.setCityModalOpen}
                select={select}
                close={()=>setState({...state, setCityModalOpen: false})}
            />
            <Container fluid>
                <Row
                    style={{
                        background: 'RGB(219, 190, 182)',
                        paddingTop: 15,
                        paddingBottom: 15
                    }}>
                    <Col
                        md={8}
                        style={{
                            display: "flex"
                        }}>
                        <span
                            onClick={()=>setState({
                                ...state,
                                setCityModalOpen: true
                            })}>
                            {`${city[language]} ${address[language]}`}
                        </span>
                    </Col>
                    <Col
                        md={4}
                        style={{
                            display: "flex",
                            justifyContent:"space-between"
                        }}>
                        <a
                            className="whatsApp"
                            href={'/'}
                            style={{
                                display: "flex",
                                alignItems:"center"
                            }}>
                            <Image
                                src={whats}
                                width="20"
                            />
                            {info.number.text}
                        </a>
                        <a
                            className="viber"
                            href={'/'}
                            style={{
                                display: "flex",
                                alignItems:"center"
                            }}>
                            <Image
                                src={viber}
                                width="20"
                            />
                            {info.instagram.text}
                        </a>
                        <SortBy
                            active={language}
                            onClick={changeLang}
                            items={localeList}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Upper;
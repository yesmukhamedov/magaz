import React, { useState } from 'react';
import {Col, Row, Container, Modal, Table} from 'react-bootstrap'
import {Icon, Image, Button} from "semantic-ui-react";

import { hanger, lupa } from '../../../assets/img/icons'
import '../style.css';

function Branch(props) {

    const { open=false, close, messages, branches=[], select } = props
    return (
        <Modal
            show={open}
            onHide={() => close()}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {messages['setCity']}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table  bordered hover>
                    <tbody>
                    {branches.map(branch => (
                        <tr key={branch.id} onClick={()=>select(branch.id)}>
                            <td>{branch.city}</td>
                            <td>{branch.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>close()}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Branch;
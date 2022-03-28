import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {Image} from "semantic-ui-react"
import {maps, call, insta, facebook, vk} from '../../../assets/img/icons'

function Lower({ messages, categories, branch, lang }) {
    return (
        <div style={{background: 'RGB(219, 190, 182)'}}>
            <Row>
                <Col md={7} sm={12} xs={12} style={{paddingTop: 70, paddingBottom: 70, paddingLeft: 70, paddingRight: 0}}>
                    <Row>
                        <Col md={8} sm={12} xs={12}>
                            <a href={'/'}>NICOLE</a>
                        </Col>
                        <Col md={4} sm={12} xs={12} style={{display: 'flex'}}>
                            {[{link: insta, href: '/'}, {link: facebook, href: '/'}, {link: vk, href: '/'}, ].map((contact, index) => <a
                                key={index}
                                href={contact.href}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    background: 'rgb(0 0 0)',
                                    marginRight: 5,
                                    marginLeft: 5,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                                <Image src={contact.link} style={{height: 21, width: 21}}/>
                            </a>)}
                        </Col>
                    </Row>
                     <Row style={{marginTop: 30}}>
                        <Col md={8} sm={12} xs={12}>
                            <ul>
                                {categories.map(category => (
                                    <li
                                        key={category.id}>
                                        <a href={`${category.value}`}>
                                            {category.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={4} sm={12} xs={12}>
                            {[{
                                icon: maps,
                                info: `
                                    ${branch.city[lang]} 
                                    ${branch.address[lang]}
                                    ${messages['officeHours']} 
                                    ${branch.officeHours[lang]}
                                `
                            }, {
                                icon: call,
                                info: `${branch.info.number.text}`
                            }].map(
                                ({icon, info}, index) => (
                                    <span
                                        key={`${index}${icon}`}
                                        style={{
                                            display: 'flex',
                                            marginBottom: 20
                                        }}
                                    >
                                        <Image
                                            src={icon}
                                            style={{
                                                height: 12,
                                                width: 12,
                                                marginRight: 12
                                            }}
                                        />
                                        {info}
                                    </span>
                                ))}
                        </Col>
                    </Row>
                </Col>
                <Col md={5} sm={12} xs={12}>
                    <iframe
src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11631.29074602776!2d76.8605537!3d43.21320825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1644666365120!5m2!1sru!2skz"
loading="lazy" style={{height: '100%', width: '100%'}}/>
                </Col>
            </Row>
        </div>
    )
}

export default Lower;
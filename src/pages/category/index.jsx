import React, {useState} from "react";
import { Grid, Segment, Image, Icon, Button, Header, Dropdown, List } from 'semantic-ui-react'
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import Card from "./components/Card";
// import { products, categories } from "../../temporalBase";
const queryString = require('query-string');

const Index = props => {

    // const sortOptions = [
    //     {key: 0, text: 'по возрастанию цены', value: 0},
    //     {key: 1, text: 'по убыванию цены',    value: 1},
    //     {key: 2, text: 'по популярности',     value: 2},
    // ];
    //
    // const [histories, setHistories] = useState([
    //     {
    //         text: 'Main Page',
    //         link: ''
    //     },
    //     {
    //         text: 'test',
    //         link: 'product'
    //     }
    // ]);
    //
    // const url = window.location.search;
    // const current = queryString.parse(url);
    //
    // const [currentCategory, setCurrentCategory] = useState({});
    //
    //
    // categories.forEach(element => {
    //     if(currentCategory !== element && element.value === current.categoryName){
    //         setCurrentCategory(element)
    //     };
    // });
    //
    // console.log("currentCategory =>", currentCategory);
    //
    // return (
    //     <>
    //         <div>
    //             <h4>
    //                 <a
    //                     href = {histories.map(history => {
    //                         return (
    //                             `${history.link}/`
    //                         )
    //                     })}
    //                 >
    //                     {histories.map(history => {
    //                         return (
    //                             `${history.text}/`
    //                         )
    //                     })}
    //                 </a>
    //             </h4>
    //         </div>
    //         <Row>
    //             <Col md={3}>
    //                 <Container>
    //                     <List bulleted>
    //                         <List.Item>Gaining Access</List.Item>
    //                         <List.Item>Inviting Friends</List.Item>
    //                         <List.Item>
    //                         Benefits
    //                         <List.List>
    //                             <List.Item href='#'>Link to somewhere</List.Item>
    //                             <List.Item>Rebates</List.Item>
    //                             <List.Item>Discounts</List.Item>
    //                         </List.List>
    //                         </List.Item>
    //                         <List.Item>Warranty</List.Item>
    //                     </List>
    //                 </Container>
    //             </Col>
    //             <Col md={9}>
    //                 <>
    //                     <Header>
    //                         <Grid>
    //                             <Grid.Row>
    //                                 <Grid.Column width={12}>
    //                                     <h3>{currentCategory.text}</h3>
    //                                 </Grid.Column>
    //                                 <Grid.Column width={4}>
    //                                     <Dropdown fluid placeholder='Сортировать' search selection options={sortOptions} />
    //                                 </Grid.Column>
    //                             </Grid.Row>
    //                         </Grid>
    //                     </Header>
    //                     <Row>
    //                         {products.map(product => (
    //                             <>
    //                                 <Col md={4} sm={6}>
    //                                     <Card
    //                                     key={product.id}
    //                                     product={product}
    //                                     />
    //                                 </Col>
    //                             </>
    //                         ))}
    //                     </Row>
    //                 </>
    //             </Col>
    //         </Row>
    //     </>
    // );
}

export default Index;
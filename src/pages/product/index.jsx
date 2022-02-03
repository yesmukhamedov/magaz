import React, {useState} from "react";
import { Grid, Segment, Image, Icon, Button } from 'semantic-ui-react'
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import { products } from "../../temporalBase";
const queryString = require('query-string');

const Index = props => {

    const url = window.location.search;
    const current = queryString.parse(url);

    console.log("current =>", current)

    const [currentProduct, setCurrentProduct] = useState({});

    products.forEach(element => {
        if(currentProduct !== element && element.vendorCode === current.name){
            setCurrentProduct(element)
        };
    });

    console.log("currentProduct =>", currentProduct)

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        console.log("click")
        setIndex(selectedIndex);
      };

    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={1}>
                        {currentProduct.photos? currentProduct.photos.map((item, index) => (
                            <Image className="imgItem" onClick={()=>handleSelect(index)} style={{paddingBottom: 5}} key={index} src={item.photo} alt={item.name}/>
                        )): null}
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <h3>{currentProduct.name? currentProduct.name : null}</h3>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Carousel fade activeIndex={index} onSelect={handleSelect}>
                                        {currentProduct.photos? currentProduct.photos.map((item, index) => (
                                            <Carousel.Item key={index} className="parentImg">
                                                <Image 
                                                    className="d-block w-100 "
                                                    src={item.photo}
                                                    alt={item.name}
                                                />
                                                <span className="iconNew">New</span>
                                            </Carousel.Item>
                                        )): null}
                                    </Carousel>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <h5>{currentProduct.name? currentProduct.name : null}</h5>
                                    <div>
                                        <b>Метки: </b><br />
                                        <i>{currentProduct.tags? currentProduct.tags.map(tag=> (tag+', ')) : null}</i>
                                        <br /><b>Возможные цвета: </b><br />
                                        <ul>
                                        <li>{currentProduct.colors? currentProduct.colors.map(color=> {return color}) : null}</li>
                                        </ul>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Index;
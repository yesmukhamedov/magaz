import React from "react";
import {Carousel} from "react-bootstrap";
import {Button, Image} from "semantic-ui-react";

const Billboard = ({billboards, messages}) => {
    return (
        <Carousel fade style={{height: '40%'}}>
            {billboards.map(billboard => (
                <Carousel.Item key={billboard.id}>
                    <Image
                        className="d-block w-100"
                        src={billboard.photo}
                        alt={billboard.name}
                    />
                    {/*<Carousel.Caption>*/}
                    {/*    <h3>{billboard.text}</h3>*/}
                    {/*    {billboard.value*/}
                    {/*        ? <>*/}
                    {/*            <p><Button>{billboard.value.text}</Button></p>*/}
                    {/*        </>*/}
                    {/*        : null}*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Billboard;
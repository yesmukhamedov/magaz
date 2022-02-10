//
import React from "react";
import {Carousel} from "react-bootstrap";
import {Button, Image} from "semantic-ui-react";

const Billboard = props => {
    return (
        <Carousel fade>
            {props.billboards.map((billboard, index) => (
                <Carousel.Item key={index}>
                    <Image
                        className="d-block w-100"
                        src={billboard.photo}
                        alt={billboard.name}
                    />
                    <Carousel.Caption>
                        <h3>{billboard.text}</h3>
                        {billboard.value
                            ? <>
                                <p><Button>{billboard.value.text}</Button></p>
                            </>
                            : null}
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Billboard;
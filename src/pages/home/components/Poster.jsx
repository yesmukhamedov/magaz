import React from "react";
import { Image, Icon, Grid, Card, Button, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const Poster = props => {

    const diver = el => {
        return (
            <div align='center'>
                {el}
            </div>
        )
    }
    const {post} = props;
    console.log("card => ", post);
    return (
        <div>
            <Image width = '100%' src={post.photo} wrapped ui={false} />
            {diver(post.text21)}
            <h5>{diver(post.text42)}</h5>
            {diver(
                <Link to={`catalog?categoryName=${post.value}`}>
                    <a>ВЫБРАТЬ</a>
                </Link>
            )}
            {/* <Segment style={{padding: 0}} inverted>{diver(<Button fluid inverted color='orange'>ВЫБРАТЬ</Button>)}</Segment> */}
            <br />
        </div>
    );
}

export default Poster;
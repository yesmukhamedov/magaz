import React from "react";
import Title from "../../../utils/Title";
import HvrButton from "../../../utils/HvrButton";
import {Image} from "semantic-ui-react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Brides = ({messages, posters}) => {

    return (
        <>
            <div style={{paddingTop: 80, paddingBottom: 40}}>
                <Title text={messages['weBrides']}/>
                <OwlCarousel
                    className='owl-theme'
                    loop
                    items={5}
                    slideBy={5}
                    margin={0}
                    dots={false}
                    nav
                >
                    {posters.map((card, index) => <div className='item' key={`${index}${card.value}`} style={{paddingLeft: 5, paddingRight: 5, paddingTop: 40}}>
                        <Image width = '100%' src={card.photo} wrapped ui={false} />
                        <span style={{display: 'flex', justifyContent: 'center', paddingTop: '15', paddingBottom: '15'}}>{card.text21}</span>
                        <span style={{display: 'flex', justifyContent: 'center', paddingBottom: '15'}}>{card.text42}</span>
                        <Link to={`catalog?categoryName=${card.value}`}>
                            <a style={{display: 'flex', justifyContent: 'center', textTransform: 'uppercase'}}>{messages['select']}</a>
                        </Link>
                    </div>)}
                </OwlCarousel>;
                <HvrButton text={messages['showAll']} click={()=>console.log('11')} light={true}/>
            </div>
        </>
    );
}

export default Brides;
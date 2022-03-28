import React from "react";
import Title from '../../../utils/Title';
import HvrButton from '../../../utils/HvrButton';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

const TopProducts = ({messages, topProducts}) => {
    return (
        <>
            <div style={{paddingTop: 80, paddingBottom: 40}}>
                <Title text={messages['Top50Title']}/>
                <Link to={`/`}>
                    <span style={{display: 'flex', justifyContent: 'center', textTransform: 'uppercase'}}>{messages['viewAll']}</span>
                </Link>
                <OwlCarousel
                    className='owl-theme'
                    loop
                    items={5}
                    slideBy={5}
                    margin={0}
                    nav
                >
                    {topProducts.map((product, index) => <div className='item' key={`${index}${product.value}`} style={{paddingLeft: 5, paddingRight: 5, paddingTop: 40}}>
                        <Image width = '100%' src={product.photo} wrapped ui={false} />
                        <span style={{display: 'flex', justifyContent: 'center', paddingTop: '15', paddingBottom: '15'}}>{product.text21}</span>
                        <span style={{display: 'flex', justifyContent: 'center', paddingBottom: '15'}}>{product.text42}</span>
                        <Link to={`catalog?categoryName=${product.value}`}>
                            <a style={{display: 'flex', justifyContent: 'center', textTransform: 'uppercase'}}>{messages['select']}</a>
                        </Link>
                    </div>)}
                </OwlCarousel>;
            </div>
        </>
    );
}

export default TopProducts;
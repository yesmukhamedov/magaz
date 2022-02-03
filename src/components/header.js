import React, {useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Image, Icon } from 'semantic-ui-react';
import { changeLang } from '../redux/actions';
import { Link } from 'react-router-dom';

import { localeList, defaultLocale, text} from '../locale';
import { categories, data } from '../temporalBase';

const Header = props => {

    const {
        lang,
    } = props;

    const [currentLocale, setCurrentLocale] = useState(defaultLocale);

    const onChangeLanguage = (langCode) => {
        props.changeLang(langCode);
      setCurrentLocale(langCode);
      localStorage.setItem('locale',langCode)
    }

    console.log("lang: ",lang);

  return (
    <>
        <Grid>
            <Grid.Row style={{ background: 'RGB(219, 190, 182)' }}>
                <Grid.Column width = {8}><a href={data.address.value}>{data.address.text}</a></Grid.Column>
                <Grid.Column width = {2}><a href={data.whatsApp.value}><Icon name='whatsapp'/>{data.whatsApp.text}</a></Grid.Column>
                <Grid.Column width = {2}><a href={data.number.value}>{data.number.text}</a></Grid.Column>
                <Grid.Column width = {2}><a href={data.instagram.value}>{data.instagram.text}</a></Grid.Column>
                <Grid.Column width = {2}>
                    <select onChange={(e) => onChangeLanguage(e.target.value)} defaultValue={currentLocale}>
                        {
                            localeList.map((locale,index)=>(
                            <option key={index} value={locale.code}>{locale.name}</option>
                            ))
                        }
                    </select>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width = {5}></Grid.Column>
                <Grid.Column width = {6}><div align='center'><a href={data.name.value}>{data.name.text}</a></div></Grid.Column>
                <Grid.Column width = {5}></Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid>
            <Grid.Row>
                <Grid.Column width = {3}></Grid.Column>
                <Grid.Column width = {10} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    {categories.map(category => (
                        <Link to={`catalog?categoryName=${category.value}`}>
                            <a>{category.name}</a>
                        </Link>
                    ))}
                </Grid.Column>
                <Grid.Column width = {3}></Grid.Column>
            </Grid.Row>
        </Grid>
    </>
  );
}

const putStateToProps = state => {
    return {
        lang: state.lang.lang
    }
}

const putActionsToProps = {
    changeLang
}

export default connect(putStateToProps, putActionsToProps)(Header);
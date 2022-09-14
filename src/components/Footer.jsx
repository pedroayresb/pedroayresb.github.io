import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { languageChange } from '../redux/actions/index';
import reactlogo from '../imgs/reactlogo.png';
import javascript from '../imgs/javascript.png';
import css from '../imgs/css.png';
import html from '../imgs/html.png';
import redux from '../imgs/redux.png';
import framer from '../imgs/framer.png';
import '../styles/Footer.css';


function Footer(props) {
  const { dispatch } = props;
  const changeLanguage = () => {
    if(props.language === 'pt-br') {
      dispatch(languageChange({ language: 'en' }));
    } else {
      dispatch(languageChange({ language: 'pt-br'}));
    }
  }

  const flag = () => {
    if(props.language === 'pt-br') {
      return <span style={{color: 'black'}} >Mudar Linguagem 🇧🇷</span>
    } else {
      return <span style={{color: 'black'}} >Change Language 🇺🇸</span>
    }
  }

  const linkTo = () => {
    if(props.language === 'pt-br') {
      return '/en'
    } else {
      return '/pt-br'
    }
  }

  return ( 
    <footer className="footer">
      <p>Developed with:
        <img src={html} alt="html logo" className="footer-img" />
        <img src={css} alt="css logo" className="footer-img" />
        <img src={javascript} alt="javascript logo" className="footer-img" />
        <img src={reactlogo} alt="react logo" className="footer-img" />
        <img src={redux} alt="redux logo" className="footer-img" />
        <img src={framer} alt="framer logo" className="footer-img" />
      </p>
      <Link
        to={linkTo()}
        onClick={changeLanguage}
        className="language nav-link"
      >
      {flag()}
      </Link>
    </footer>
   );
}

const mapStateToProps = (state) => ({
  language: state.language.language,
});

export default connect(mapStateToProps, null)(Footer);

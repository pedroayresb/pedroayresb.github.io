import React from 'react'
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { languageChange } from '../redux/actions/index';
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion';
import '../styles/styles.css';


function Start(props) {
  const navigate = useNavigate();
  const { dispatch } = props;
  const redirect = () => {
    const language = navigator.language;
    setTimeout(() => {
      if (language === 'pt-BR') {
        dispatch(languageChange({ language: 'pt-br' })); 
        navigate('/pt-br');
      } else {
        dispatch(languageChange({ language: 'en' })); 
        navigate('/en');
      }
    }, 1000);
  }
  redirect();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-page"
    >
      <Loading />
    </motion.div>
  );
}

 
export default connect()(Start);
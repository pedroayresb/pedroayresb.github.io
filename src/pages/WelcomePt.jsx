import React, { Component } from 'react'
import HeaderPT from '../components/HeaderPT';
import Profile from '../components/Profile';
import InfosPT from '../components/InfosPT';
import WelcomeProjects from '../components/WelcomeProjects';
import { motion } from 'framer-motion';
import '../styles/styles.css';

class WelcomePt extends Component {
  render() { 
    return (
      <div style={ { width: '100%'} }>
        <HeaderPT />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >      
          <h1>Bem-vindo!</h1>
          <Profile />
          <InfosPT />
          <WelcomeProjects />
        </motion.div>
    </div>
    );
  }
}
 
export default WelcomePt;
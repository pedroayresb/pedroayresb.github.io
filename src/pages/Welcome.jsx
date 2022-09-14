import React, { Component } from 'react'
import Header from '../components/Header';
import ProfileEN from '../components/ProfileEN';
import Infos from '../components/Infos';
import WelcomeProjects from '../components/WelcomeProjects';
import { motion } from 'framer-motion';

class Welcome extends Component {
  render() {
    return (
      <div style={ { width: '100%'} }>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Welcome!</h1>
          <ProfileEN />
          <Infos />
          <WelcomeProjects />
      </motion.div>
    </div>
    );
  }
}
 
export default Welcome;
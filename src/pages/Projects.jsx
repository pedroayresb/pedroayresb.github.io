import React, { Component } from 'react';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import ProjectsContainer from '../components/ProjectsContainer';
import '../styles/styles.css';
import { motion } from 'framer-motion';

class Projects extends Component {
  render() { 
    return (
      <div>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="page-title">Trybe Progress</h1>
          <div className="page-container">
            <ProgressBar />
            <ProjectsContainer />
          </div>
        </motion.div>
      </div>
    );
  }
}

export default Projects;
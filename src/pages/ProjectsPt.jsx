import React, { Component } from 'react';
import HeaderPT from '../components/HeaderPT';
import ProgressBar from '../components/ProgressBar';
import ProjectsContainer from '../components/ProjectsContainer';
import '../styles/styles.css';
import { motion } from 'framer-motion';


class ProjectsPt extends Component {
  render() { 
    return (
      <div>
        <HeaderPT />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="page-title">Progresso na Trybe</h1>
          <div className="page-container">
            <ProgressBar />
            <ProjectsContainer />
          </div>
        </motion.div>
      </div>
    );
  }
}

export default ProjectsPt;
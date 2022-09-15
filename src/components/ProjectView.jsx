import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


function ProjectView(props) {
  const {
    name,
    screenshots,
    link,
    techs,
    startDate,
    endDate,
    module,
    description,
  } = props;
  const { width } = useWindowDimensions();

  const getWidth = () => {
    if (width < 600) {
      return '40%';
    } else {
      return '90%';
    }
  }

  const isImage = () => {
    if (screenshots !== undefined) {
      return (
        <Carousel
          dinamicHeight
          autoPlay
          interval={3000}
          infiniteLoop
          width={getWidth()}
        >
        {screenshots.map((screenshot, index) => (
          <div>
            <img src={screenshot} alt={name} key={index} className="project-slider" />
          </div>
        ))}
        </Carousel>
      );
    } else {
      return null 
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        className="project-popup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {isImage()}
        <div className="project-info">
          <h2>{name}</h2>
          <h4>{module}</h4>
          <p>{description}</p>
          <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
          <div>
            {techs.map((tech, index) => (
              <img src={tech} alt={tech} key={index} className="tech-img" />
            ))}
          </div>
          <div>
            <p>
              {startDate}
              {' - '}
              {endDate}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectView;

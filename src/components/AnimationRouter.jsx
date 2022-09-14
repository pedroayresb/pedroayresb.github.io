import React from 'react';
import { Routes } from 'react-router';
import { Route, useLocation } from 'react-router-dom';
import Start from '../pages/Start';
import Welcome from '../pages/Welcome';
import WelcomePt from '../pages/WelcomePt';
import Projects from '../pages/Projects';
import ProjectsPt from '../pages/ProjectsPt';

import { AnimatePresence } from "framer-motion";

function AnimationRouter() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={ location } key={ location.pathname }>
        <Route exact path="/" element={ <Start/> }/>
        <Route exact path="/en" element={ <Welcome/> } />
        <Route exact path="/pt-br" element={ <WelcomePt/> } />
        <Route path="/en/trybe-projects" element={ <Projects/> } />
        <Route path="/pt-br/trybe-projetos" element={ <ProjectsPt/> } />
      </Routes>
    </AnimatePresence>
   );
}

export default AnimationRouter;
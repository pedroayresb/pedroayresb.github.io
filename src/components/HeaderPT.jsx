import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function HeaderPT(props) {
  return (
    <header className="header">
      <div>
        <nav className="nav-buttons">
          <div className="nav-buttons-center">
            <Link to="/pt-br" className="nav-link">Início</Link>
            <Link to="/pt-br/trybe-projetos" className="nav-link">Trybe</Link>
          </div>
        </nav>
    </div>
  </header>
  );
}


export default HeaderPT;

import React from 'react';
import '../styles/styles.css';

function Infos() {
  return ( 
    <article className="infos-container">
      <div className="hard-skill-container">
        <h2>Hard Skills</h2>
        <ul className="info-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Jest</li>
          <li>RTL</li>
          <li>Git</li>
          <li>GitHub</li> 
        </ul>
      </div>
      <div className="soft-skill-container">
        <h2>Soft Skills</h2>
        <ul className="info-list">
          <li>Teamwork</li>
          <li>Problem Solving</li>
          <li>Adaptability</li>
          <li>Communication</li>
          <li>Leadership</li>
        </ul>
      </div>
      <div className="contact-container">
        <h2>Contact</h2>
        <ul className="info-list">
          <li><a href="https://www.linkedin.com/in/pedroayresb/">LinkedIn</a></li>
          <li>pedroayresb@gmail.com</li>
          <li>+55 (92) 98405-6550</li>
        </ul>
      </div>
    </article>
   );
}

export default Infos;

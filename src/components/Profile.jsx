import React from 'react';
import placeholder from '../imgs/placeholder.png';
import '../styles/Profile.css';

function Profile() {
  return ( 
    <section className="profile-container">
      <div className="profile-info">
        <h1>Pedro Ayres</h1>
        <p>Oi! Eu sou o Pedro, estudante de desenvolvimento Web Full-Stack na <a href="https://www.betrybe.com/">Trybe</a>!</p>
        <a href="q">Curriculo</a>
      </div>
      <img src={placeholder} alt="placeholder" className="profile-img" />
    </section>
   );
}

export default Profile;

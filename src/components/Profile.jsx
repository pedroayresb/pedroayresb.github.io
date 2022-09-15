import React from 'react';
import pedro from '../imgs/pedro.png';
import '../styles/Profile.css';

function Profile() {
  return ( 
    <section className="profile-container">
      <div className="profile-info">
        <h1>Pedro Ayres</h1>
        <p>Oi! Eu sou o Pedro, estudante de desenvolvimento Web Full-Stack na <a href="https://www.betrybe.com/">Trybe</a>!</p>
      </div>
      <img src={pedro} alt="placeholder" className="profile-img" />
    </section>
   );
}

export default Profile;

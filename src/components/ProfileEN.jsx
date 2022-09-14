import React from 'react';
import placeholder from '../imgs/placeholder.png';

function ProfileEN() {
  return ( 
    <section className="profile-container">
      <div className="profile-info">
        <h1>Pedro Ayres</h1>
        <p>Hi! My name is Pedro, I{"'"}m a brazilian Full-Stack web development Student at <a href="https://www.betrybe.com/">Trybe</a>!</p>
      </div>
      <img src={placeholder} alt="placeholder" className="profile-img" />
    </section>
   );
}

export default ProfileEN;

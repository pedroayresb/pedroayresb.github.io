import React from 'react';
import pedro from '../imgs/pedro.png';

function ProfileEN() {
  return ( 
    <section className="profile-container">
      <div className="profile-info">
        <h1>Pedro Ayres</h1>
        <p className='profile-text'>Hi! My name is Pedro, I{"'"}m a brazilian Full-Stack web development Student at <a href="https://www.betrybe.com/">Trybe</a>!</p>
      </div>
      <img src={pedro} alt="placeholder" className="profile-img" />
    </section>
   );
}

export default ProfileEN;

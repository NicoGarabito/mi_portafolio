import React from 'react';
import profilePic from '../assets/profile.jpg'; // Asegúrate de tener una imagen de perfil en esta ruta

const HeaderCard = () => {
  return (
    <section id="header-card" className="header-card">
      <img src={profilePic} alt="Nicolás Garabito" className="profile-pic" />
      <h1>Nicolás Garabito</h1>
      <h2>IT Support Analist Srr / Fullstack Developer</h2>
    </section>
  );
};

export default HeaderCard;

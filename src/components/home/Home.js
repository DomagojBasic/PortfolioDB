import React from 'react';
import './Home.css';

import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import videCut from '../../assets/portfolioVideo.mp4';
import CV from '../../assets/DomagojBasicZivotopis.pdf';

export const Home = () => {

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/domagoj-basic-b17ab6281", "_blank");
  };
  const handleGithubClick = () => {
    window.open("https://www.github.com/DomagojBasic", "_blank");
  };
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/domagoj.n.basic", "_blank");
  };

  const btnCV = () => {
    const link = document.createElement('cv');

    link.href = CV; 
    link.setAttribute('download', 'DomagojBasicZivotopis.pdf');
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  };



  return (
    <div className='container'>
      <div className='text-div'>
        <h2 className='home-h2'>Hello, It's Me</h2>
        <h1 className='home-h1'>Domagoj Bašić</h1>
        <h3 className='about-title'>About me</h3>
        <h5 className='about-text'>Hello! My name is Domagoj, and I'm a passionate IT enthusiast currently working as an IT reference officer at Plodine d.d. I hold a degree in Telematics from the University of Rijeka. While my current role focuses on IT support and management, I have a keen interest in exploring programming further.</h5>
        <div className="social-icons">
          <span onClick={handleLinkedinClick}><FaLinkedin/> &nbsp;</span>
          <span onClick={handleFacebookClick}><FaFacebook/> &nbsp;</span>
          <span onClick={handleGithubClick}><FaGithub/> &nbsp;</span>
        </div>
        <ul>
          <li><h2 onClick={btnCV} className='btn-cv'><Button variant="outline-primary">Download CV</Button>{''}</h2></li>
          <li><h2 className='btn-contact'><Button variant="outline-primary">Contact me</Button>{''}</h2></li>
        </ul>
      </div>
      <video className='videoTag' autoPlay loop muted >
        <source src={videCut} type='video/mp4' />
      </video>
    </div>
  );
};

export default Home;

import React from 'react'
import './Home.css'

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import black_backround from '../../assets/black_backround.png';


import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import videCut from '../../assets/portfolioVideo.mp4';
export const Home = () => {
  return (
      <div className='container'>
        <h2 className='home-h2'>Hello, It's Me</h2>
        <h1 className='home-h1'>Domagoj Bašić</h1>
        <img className='slika' src={black_backround} ></img>
        <h3 className='about'>About me</h3>
        <h5 className='aboutMe'>Hello! My name is Domagoj, and I'm a passionate IT enthusiast currently working as an IT reference officer at Plodine d.d. I hold a degree in Telematics from the University of Rijeka. While my current role focuses on IT support and management, I have a keen interest in exploring programming further.</h5>
        <div className="social-icons">
        <span><FaLinkedin/> &nbsp;</span>
        <span><FaFacebook /> &nbsp;</span>
        <span><FaGithub /></span>
        <h2 className='h2-button'><Button variant="outline-primary">Download CV</Button>{''}</h2>
        <h2 className='h2-contact'><Button variant="outline-primary">Contact me</Button>{''}</h2>
       
        </div>
        
    <video className='videoTag'autoplay="true" loop="true" muted>
      <source src={videCut} type='video/mp4' />
    </video>
    
      </div>
      
  )
}

export default Home
import React from 'react';
import Lottie from  "lottie-react";
import Animation from "../LottieFiles/Animation.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import girl from '../images/girl.jpg';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SHAGUN SHARMA</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={Animation} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            Be the change you want to see in the world.
            I love the process of developing websites and enjoy the process and efforts it take to
            develop a project. 
            I am a curious learner who wants to learn about technologies , do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b>C++</b> <b>SQL </b>and have knowledge of <b>Javascript</b> and am working on a few 
            projects in the <b>MERN</b> stack.<br />
            I plan to learn about more technologies in the future and ready to use  my knowledge for the society. <br /><br />
            Also, I love <b>modelling and fashion</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='girl' src={girl} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
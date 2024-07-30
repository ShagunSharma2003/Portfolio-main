import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hello, my name is <b>Shagun Sharma</b> and I am from Himachal Pradesh, India.
            I'm a <b> software developer</b> and a final year college student pursuing <b>BTech in CSE</b>. <br/><br/>
            I have done professional  training in <b>data structures and algorithms</b> provided by  Human Resource.
            I love to develop projects using mern stack, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new internship or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do <b>modelling</b>. Also I am Miss Himachal 2023 top20 finalist awarded by <b>deputy chief minister </b> 
            of Himachal Pradesh.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
      

        
      </div>
    </>
  )
}

export default About
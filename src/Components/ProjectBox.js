import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    CafeDesc : "This is a cafe management website used to manage cafe chores. It is made using HTML,CSS and javascript. In this website we can see menu, navigate through pages,book tables and order food",
    CafeGithub : "https://github.com/ShagunSharma2003/CoffeeShop",
    CafeWebsite : "https://github.com/ShagunSharma2003/CoffeeShop",

    WeatherDesc : "A website that shows you the weather of different cities. This project was made using reactjs and also use weather api",
    WeatherGithub : "https://github.com/ShagunSharma2003/weather-app",
    WeatherWebsite : "https://shagunsharma2003.github.io/weather-app/",

    QRDesc: "This is a qr generator website. This generate different qr for the words or link you enter in the text box",
    QRGithub:"https://github.com/ShagunSharma2003/qr-code",
    QRWebsite:"https://shagunsharma2003.github.io/qr-code/",
    
    ListDesc:"This is a todo list made using react where we can add , remove and keep the records of various tasks we have done.",
    ListGithub:"https://github.com/ShagunSharma2003/to-do-list",
    ListWebsite:"https://shagunsharma2003.github.io/to-do-list/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
import React from 'react';
import ProjectBox from './ProjectBox';
import coffee from '../images/coffee.png';
import weather from '../images/weather.png';
import qr from '../images/qr.png';
import todo from '../images/todo.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={coffee} projectName="Cafe" />
        <ProjectBox projectPhoto={weather} projectName="Weather" />
        <ProjectBox projectPhoto={qr} projectName="QR" />
        <ProjectBox projectPhoto={todo} projectName="List" />
      </div>

    </div>
  )
}

export default Projects
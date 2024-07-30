import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Shagun Sharma</h4>
      <h4>Copyright &copy; 2024 SS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ShagunSharma2003" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/shagunsharma2003/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:sharma.diva193@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/ShagunSharma1120/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer
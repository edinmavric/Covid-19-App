import React from 'react';
import './index.scss'
import { NavLink, } from "react-router-dom"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return <div className='footer'>
    <div className='icons_div'>
    <a
            href="https://www.facebook.com/OfficialNHSCOVID19app"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="icons" />
          </a>
          <a href="https://www.instagram.com/nhs/" target="_blank" rel="noreferrer">
            <InstagramIcon className="icons" />
          </a>
          <a href="https://twitter.com/nhscovid19app" target="_blank" rel="noreferrer">
            <TwitterIcon className="icons" />
          </a>
    </div>
    <div className='navlink_div'>
      <NavLink className={'footer_navlink'} to='/covid-stats'>covid stats</NavLink>
      <NavLink className={'footer_navlink'} to='/countries-stats'>country stats</NavLink>
      <NavLink className={'footer_navlink'} to='/about-us'>about us</NavLink>
    </div>
    <div className='coop'>
      <p>© Covid 19 Coorporation</p>
    </div>
  </div>;
};

export default Footer;

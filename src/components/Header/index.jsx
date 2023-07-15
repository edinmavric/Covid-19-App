import React from 'react';
import { NavLink, } from "react-router-dom"
import './index.scss'

const Header = () => {
  return <div className="navbar" >
    <NavLink to={'/'}>
    <img className="logo"
          src="https://iili.io/QOYltf.md.png"
          alt="QOYltf.md.png"
          border="0"></img>
    </NavLink>
    <ul style={{position:'relative',right:'100px'}}>
      <a className='navlink_placeholder'><NavLink className={'navlink'}  to='/covid-stats'>COVID STATS</NavLink></a>
      <a className='navlink_placeholder'><NavLink className={'navlink'} to='/countries-stats'>COUNTRY STATS</NavLink></a>
      <a className='navlink_placeholder'><NavLink className={'navlink'} to='/about-us'>ABOUT US</NavLink></a>
    </ul>
    {/* ja nemogu da nadjem isti takav font,ko nadje nek ispravi */}

  </div>;
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Header = () => {
  return (
    <div className="navbar">
      <NavLink to={'/'}>
        <img
          className="logo"
          src="https://iili.io/QOYltf.md.png"
          alt="QOYltf.md.png"
          border="0"
        ></img>
      </NavLink>
      <ul style={{ position: 'relative', right: '100px' }}>
        <NavLink className={'navlink'} to="/covid-stats">
          COVID STATS
        </NavLink>
        <NavLink className={'navlink'} to="/countries-stats">
          COUNTRY STATS
        </NavLink>
        <NavLink className={'navlink'} to="/about-us">
          ABOUT US
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;

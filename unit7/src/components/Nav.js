import React from 'react';
import { Outlet, NavLink } from "react-router-dom"


//nav links to easily display certain categories

const Nav = () => (
  <div>
      <ul className="main-nav">
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/computers'>Computers</NavLink></li>
      </ul>
    <Outlet />
  </div>
);

export default Nav;
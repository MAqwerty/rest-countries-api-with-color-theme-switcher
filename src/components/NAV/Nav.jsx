import React from 'react';
import './Nav.css';
import ThemeToggle from "./../DarkMode/DarkMode.jsx"

function Nav() {
  return ( 
    <>
      <nav className='NAV'>
        <h2>Where in the world ?</h2>
        <div className='Theme'>
          <ThemeToggle />
          <p>Dark Mode</p>
        </div>
      </nav>
    </>
  )
}

export default Nav;

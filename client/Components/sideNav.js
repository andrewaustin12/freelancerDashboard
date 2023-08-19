"use client"

import React, { useState } from 'react';
import '../app/globals.css';

const SideNav = () => {
  const [sideNavActive, setSideNavActive] = useState(false);

  const toggleSideNav = () => {
    // Toggle the state between true and false
    setSideNavActive(!sideNavActive);
  };

  return (
    <div className={`sidenav ${sideNavActive ? 'active' : ''}`}>
      <ul>
        <li>User Profile</li>
        {/* Add more navigation items here */}
      </ul>
      <button className="toggle-button" onClick={toggleSideNav}>
        Toggle Sidenav
      </button>
    </div>
  );
};

export default SideNav;
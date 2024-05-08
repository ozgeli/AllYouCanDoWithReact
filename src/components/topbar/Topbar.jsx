import React from 'react';
import './topbar.scss';


const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">.react </a>
        </div>
        <div className="center">
        <div className="itemContainer">
          <h1 className="header">All the things you can do with React!</h1>
          </div>
        </div>

        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Topbar;

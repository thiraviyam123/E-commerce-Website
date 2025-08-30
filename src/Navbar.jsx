import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo2.jpg';
import { FaPhone, FaServicestack, FaQuestionCircle, FaBoxOpen, FaBars, FaTimes,FaRobot } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa6';
import './Navbar.css'; // create this file next

function Navbar({ isLoggedIn }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>

        <div className="navbar-right desktop-only">
          <Link to="/contact"  style={{ textDecoration: 'none', color: 'white' }}>Contact <FaPhone /></Link>
          <Link to="/service"  style={{ textDecoration: 'none', color: 'white' }}>Service <FaServicestack /></Link>
          <Link to="/help"  style={{ textDecoration: 'none', color: 'white' }}>Help <FaQuestionCircle /></Link>
          <Link to="/AI"  style={{ textDecoration: 'none', color: 'white' }}>AI <FaRobot /></Link>
          {!isLoggedIn && <Link to="/"  style={{ textDecoration: 'none', color: 'white' }}>Login <FaLock /></Link>}
          {isLoggedIn && <Link to="/product"  style={{ textDecoration: 'none', color: 'white' }}>Product <FaBoxOpen /></Link>}
        </div>

        <div className="hamburger mobile-only" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}><FaTimes /></button>
        <Link to="/contact" onClick={closeSidebar} style={{ textDecoration: 'none', color: 'white' }}>Contact <FaPhone /></Link>
        <Link to="/service" onClick={closeSidebar} style={{ textDecoration: 'none', color: 'white' }}>Service <FaServicestack /></Link>
        <Link to="/help" onClick={closeSidebar} style={{ textDecoration: 'none', color: 'white' }}>Help <FaQuestionCircle /></Link>
        <Link to="/AI" onClick={closeSidebar} style={{ textDecoration: 'none', color: 'white' }}>AI <FaRobot /></Link>
        {!isLoggedIn && <Link to="/" onClick={closeSidebar} style={{ textDecoration: 'none', color: 'white' }}>Login <FaLock /></Link>}
        {isLoggedIn && <Link to="/product" onClick={closeSidebar} style={{ textDecoration: 'none', color: 'white' }}>Product <FaBoxOpen /></Link>}
      </div>
    </>
  );
}

export default Navbar;

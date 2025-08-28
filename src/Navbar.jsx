import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.PNG';
import { FaPhone, FaServicestack, FaQuestionCircle,FaBoxOpen  } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa6';




function Navbar({ isLoggedIn }) {
  return (
    <nav
      style={{
        background: '#4CAF50',
        padding: '10px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    borderRadius:'2px',
        position: 'fixed',
        top: 0,
        left: 0,
         zIndex: 1000,
        width: '100%',
        height:'50px'
       
       
      }}
    >
      <div>
 <img
          src={logo}  // <-- replace this with your logo path or URL
          alt="Logo"
         style={{width:"50px",height:"50px",borderRadius:"50%"}}
        />
      </div>
     <div style={{display:'flex',flexDirection:'row',columnGap:'50px',marginRight:'20px'}}>
{/* <Link to="/menu" style={{textDecoration: 'none', paddingTop:'15px', color: 'black'}} >Menu</Link> */}
        <Link to="/contact" style={{textDecoration: 'none', paddingTop:'15px', color: 'white'}}>Contact <FaPhone /></Link>
        <Link to="/service" style={{textDecoration: 'none' , paddingTop:'15px', color: 'white'}}>Service<FaServicestack /></Link>
        <Link to="/help" style={{textDecoration: 'none'  , paddingTop:'15px', color: 'white' }}>Help<FaQuestionCircle /></Link>
      

      {/* Right side links (Login / Product) */}
      
        {!isLoggedIn && <Link to="/" style={{ textDecoration: 'none', paddingTop:'15px', color: 'white' }}>Login <FaLock/></Link>}
        {isLoggedIn && <Link to="/product" style={{ textDecoration: 'none', paddingTop:'15px' , color: 'white' }}>Product <FaBoxOpen /></Link>}
      
     </div>
       
        
    </nav>
  );
}

export default Navbar;

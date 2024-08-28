import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Navbar.css';
import Image from '../Assests/Images/headerImage.png'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.style.display = 'flex';
    }
  }

  const closeSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.style.display = 'none';
    }
  }
  return (
    <div >
  <div className='navbar'>
      <div style={{marginTop:'1%',marginLeft:"8%"}}>
        <img src={Image} width={200} alt="header" />
      </div>
      <div className='navlinks'>
      <ul className='sidebar'>
          <li><CloseIcon onClick={closeSideBar}/></li>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
              
         
        </ul>
        <ul>
          <li className='hideOnMobile'><Link to="" >Home</Link></li>
          <li className='hideOnMobile'><Link to="/product">Product</Link></li>
          <li className='hideOnMobile'><Link to="/about">About us</Link></li>
          <li className='hideOnMobile'><Link to="/contact">Contact us</Link></li>
         
          <li className='menu-button'><MenuOpenIcon onClick={showSidebar} style={{fontSize:'45px',color:'#ffb400'}}/></li>
        </ul>
      </div>
    </div>
    </div>
  
  );
}

export default Navbar;
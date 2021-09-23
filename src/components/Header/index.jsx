
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/buttons.scss';
import MetaLogo from '../../assets/img/metamask.png';
import './header.scss';

const Header = () => {
  const [click, setClick] = useState(false);
  


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className="nav-container">
        <div className="nav-container__items">
          <Link to='/' className='navbar-logo ' onClick={closeMobileMenu}>
            GenBeast
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Membership
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/airdrops'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Artist drops 
              </Link>
            </li>
           
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
          <button className='navButton'><img src={MetaLogo} alt="metamask logo" />Connect</button>
      </div>

    </nav>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/buttons.scss';
import MetaLogo from '../../assets/img/metamask.png';
import './header.scss';

const Header = () => {
  const [click, setClick] = useState(false);
  


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [sticky, setSticky] = useState(false);
  const addStickyClass = () => {
    if (window.scrollY >= 0.1) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', addStickyClass);
    return () => {
      window.removeEventListener('scroll', addStickyClass)
    }
  }, [])

  return (
    <nav className={sticky ? 'navBar sticky' : 'navBar'}>
      <div className="nav-container">
        <div className="nav-container__items">
          <Link to='/' className='navbar-logo ' onClick={closeMobileMenu}>
            <span>GEN</span>BEAST
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
              <button className=' nav-links-mobile navButton '><img src={MetaLogo} alt="metamask logo" />Connect</button>
          </ul>
        </div>
          <button className='navButton'><img src={MetaLogo} alt="metamask logo" />Connect</button>
      </div>

    </nav>
  );
};

export default Header;

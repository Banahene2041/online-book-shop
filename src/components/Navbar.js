import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import Search from './Search'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../contex';

function Navbar() {
  const {showNavLink,setShowNavLink} = useGlobalContext()
  return (
    <nav>
      <Logo />
      <NavLinks />
      <Search />
      {
        showNavLink? <FaTimes className='burger' onClick={() => setShowNavLink(!showNavLink)} /> : <GiHamburgerMenu className='burger' onClick={() => setShowNavLink(!showNavLink)} />
      }
    </nav>
  )
}

export default Navbar

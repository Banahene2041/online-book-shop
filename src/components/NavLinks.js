import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../contex'

function NavLinks() {
  const {showNavLink} = useGlobalContext()
  return (
    <div className={`${showNavLink? "nav-links show-nav-link" : "nav-links hide-nav-link"}`}>
      <ul>
        <li>
            <NavLink to={'/'} className={({isActive})=> (isActive? "active": "inactive")} >Home</NavLink>
        </li>
        <li>
            <NavLink to={'/about'} className={({isActive})=> (isActive? "active": "inactive")}>About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks
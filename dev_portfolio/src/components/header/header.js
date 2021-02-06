// Importando o React
import React from 'react'
// Importandoos components necessários da lib react-materialize
import { Navbar, NavItem, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom'

function Header() {
  return (
  <Row>
    <Navbar className="grey darken-2">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </Navbar>
  </Row>
  )
}

export default Header
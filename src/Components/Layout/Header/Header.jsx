import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../CustomsHooks/useAuth';
import { Button } from '../../Ui/Button/Button';

import './Header.css'

export const Header = () => {
  const auth = () => {
    const token = localStorage.getItem('token')
    console.log(token);
  }

  auth()
  return (
    <header>
      <div className="center_header">
        <nav className='nav_header'>
          <NavLink to='/register'><Button style='btn_default' value='Register' /></NavLink>
          <NavLink to='/login'><Button style='btn_default' value='Login' /></NavLink>
   
        </nav>
      </div>
    </header>
  )
}

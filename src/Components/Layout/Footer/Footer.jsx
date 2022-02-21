import React from 'react'
import { Button } from '../../Ui/Button/Button'
import './Footer.css'

export const Footer = () => {
  return (
      <footer>
        <div className="center_footer">
          <nav className='nav_footer'>
            <Button style='btn_dark' value='GitHub' />
            <Button style='btn_dark' value='Facebook' />
            <Button style='btn_dark' value='WhatsApp' />
          </nav>
        </div>
      </footer>
  );
};

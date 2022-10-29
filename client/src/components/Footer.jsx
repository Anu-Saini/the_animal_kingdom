import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 myfooter">
     
       Copyright 2022{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            @
          </span>{' '}
          AnuraagSaini. All Rights Reserved
                  </footer>
  );
};

export default Footer;
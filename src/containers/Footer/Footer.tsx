import React from 'react';
import { Link } from 'react-router-dom';

import './style.sass';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <nav className="main-nav main-nav--footer">
        <ul className="main-nav__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Support</Link>
          </li>
          <li>
            <Link to="/">My Account</Link>
          </li>
          <li>
            <Link to="/">The Store</Link>
          </li>
          <li>
            <Link to="/">Contacts</Link>
          </li>
        </ul>
      </nav>
      <div className="footer__copyright">
        © 2020 Some Shop. Created by Viktor Panasiuk
      </div>
    </div>
  </footer>
);


export default Footer;

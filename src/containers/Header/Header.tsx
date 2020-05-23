import React from 'react';
import { Link } from 'react-router-dom';

import './style.sass';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const Header = () => {
  const dispatch = useDispatch();
  const handleOpenCart = () => dispatch(cartActions.openCart());

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="header__logo">
          Some Shop
        </a>
        <nav className="header__nav main-nav">
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
            <li>
              <button type="button" className="header__button-cart" onClick={handleOpenCart}>
                <i className="fas fa-shopping-cart" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


export default Header;

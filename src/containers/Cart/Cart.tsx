import React from 'react';

import productImage from '../../assets/images/product.jpg';
import './style.sass';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const handleCloseCart = () => dispatch(cartActions.closeCart());

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__header">
          <h2 className="cart__title">Cart</h2>
          <button type="button" onClick={handleCloseCart} className="cart__button-close">
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="cart__body">
          {
          [1, 2, 3].map((id) => (
            <div className="cart__item" key={id}>
              <div className="cart__item-image-wrap">
                <img className="cart__item-image" src={productImage} alt="" />
              </div>
              <h3 className="cart__item-title">Lorem ipsum dolor.</h3>
              <div className="cart__count">
                <input className="cart__count-input" value="0" />
              </div>
              <button type="button" className="cart__item-delete">Delete</button>
            </div>
          ))
        }
        </div>
        <div className="cart__footer">
          <div className="cart__total">
            <div className="cart__total-title">
              Total:
            </div>
            <b>1700</b>
            UAH
          </div>
          <button type="button" className="cart__buy button">Order</button>
        </div>
      </div>
    </div>
  );
};


export default Cart;

import React from 'react';
import productImage from '../../assets/images/product.jpg';

type ProductTypes = {
}

const ProductCart = ({ }: ProductTypes) => (
  <div className="product">
    <img src={productImage} alt="Product" className="product__image" />
    <h3 className="product__title">Lorem ipsum dolor.</h3>
    <div className="product__footer">
      <div className="product__price">
        <span>768</span>
        {' '}
        UAH
      </div>
      <button className="product__button" type="button">Add to Cart</button>
    </div>
  </div>
);

export default ProductCart;

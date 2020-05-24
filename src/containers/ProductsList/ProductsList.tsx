import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { path } from 'ramda';

import { getProductsEntities, getProductsResult } from '../../store/products/selector';
import { productsAction } from '../../store/products';
import './style.sass';
import { cartActions } from '../../store/cart';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { productsEntities, productsResult } = useSelector((data) => ({
    productsEntities: getProductsEntities(data),
    productsResult: getProductsResult(data),
  }));

  const handleAddProductToCart = (productId: number) => dispatch(
    cartActions.addProductToCart(productId),
  );

  useEffect(() => {
    dispatch(productsAction.getProductsRequest({}));
  }, [dispatch]);
  return (
    <section className="products">
      <div className="container">
        <h2 className="section-title">Products</h2>
        <ul className="products__list">
          {
            productsResult.map((id) => (
              <li key={id} className="products__item">
                <div className="product">
                  <img
                    src={`http://localhost:8888/images/${path([id, 'image'], productsEntities)}.jpg`}
                    alt="Product"
                    className="product__image"
                  />
                  <h3 className="product__title">{path([id, 'title'], productsEntities)}</h3>
                  <div className="product__footer">
                    <div className="product__price">
                      <span>{path([id, 'price'], productsEntities)}</span>
                      {' '}
                      UAH
                    </div>
                    <button
                      onClick={() => handleAddProductToCart(id)}
                      className="product__button"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            ))
              }
        </ul>
      </div>
    </section>
  );
};

export default ProductsList;

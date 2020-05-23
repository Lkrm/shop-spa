import React from 'react';
import './style.sass';
import productImage from "../../assets/images/product.jpg";

const ProductsList = () => (
    <section className="products">
        <div className="container">
            <h2 className="section-title">Products</h2>
            <ul className="products__list">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((key) => (
                        <li key={key} className="products__item">
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
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
);


export default ProductsList;

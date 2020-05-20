import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { Cart } from '../../containers';
import productImage from '../../assets/images/product.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.sass';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => (
  <div className="page-wrapper">
    <Cart />
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
              <Link to="/">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section className="preview">
      <div className="container">
        <div className="preview__left-col">
          <div className="preview__main-article">
            <h1 className="preview__main-title">Lorem ipsum dolor sit amet, consectetur.</h1>
            <div className="preview__main-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ad, distinctio fugit itaque laudantium officia,
                optio quaerat quod rerum sequi tenetur vel veritatis voluptatibus!
                Aliquid corporis nam necessitatibus sequi? Commodi, quos.
              </p>
            </div>
          </div>
        </div>
        <div className="preview__right-col">
          <Slider {...settings}>
            <div className="preview__item">
              <div className="preview__item">

              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
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
    <section className="short-blog">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <ul className="short-blog__list">
          {
            [1, 2, 3].map((item) => (
              <li key={item} className="short-blog__item">
                <article className="blog__article">
                  <h3 className="blog__title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                  <div className="blog__content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti earum,
                      excepturi minus non placeat. Asperiores dicta dolor doloribus
                      illo incidunt ipsa ipsum iusto libero nemo repudiandae, sint?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium libero
                      perferendis quaerat! Aliquam dicta
                      {' '}
                      <a href="/">facere magnam odit</a>
                      {' '}
                      qui quisquam? Aperiam,
                      assumenda dignissimos excepturi id iure nobis sunt tempore totam veritatis?
                    </p>
                    <div className="blog__footer">
                      <div className="blog__time">17/06/2020</div>
                      <Link className="blog__read-more" to="/">Read More</Link>
                    </div>
                  </div>
                </article>
              </li>
            ))
          }
        </ul>
        <div className="short-blog__button-row">
          <Link to="/" className="short-blog__show-all">Show All</Link>
        </div>
      </div>
    </section>
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
  </div>
);


export default Home;

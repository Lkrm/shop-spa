import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Header, Footer, ShortBlogSection, ProductsList,
} from '../../containers';

import './style.sass';
import { Layout } from '../../components';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => (
  <Layout>
    <Header />
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
              <div className="preview__item" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
    <ProductsList />
    <ShortBlogSection />
    <Footer />
  </Layout>
);


export default Home;

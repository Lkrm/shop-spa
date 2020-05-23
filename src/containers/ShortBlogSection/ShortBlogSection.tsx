import React from 'react';
import { Link } from 'react-router-dom';

import './style.sass';

const ShortBlogSection = () => (
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
);


export default ShortBlogSection;

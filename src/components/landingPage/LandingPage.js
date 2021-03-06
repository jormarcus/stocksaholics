import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingPageNavBar from './LandingPageNavBar';

function LandingPage() {
  return (
    <div>
      <div>
        <LandingPageNavBar />
        <header>
          <div className="showcase-container">
            <div className="showcase-content">
              <h1>
                <span className="showcase-h1"> Stocks</span>aholics
              </h1>
              <h3 className="showcase-h3">
                Sign up for free to buy and learn about new stocks or buy into
                the
                <span className="future"> future</span> of finance
              </h3>
              <Link to="/about">Learn More</Link>
            </div>
          </div>
        </header>
      </div>
      <section id="landing-info">
        <div className="info-img"></div>
        <div className="info-content">
          <h2>
            <span className="showcase-h1">How</span> it works?
          </h2>
          <h5> Step 1. Register for the app</h5>
          <h5> Step 2. Depost USD</h5>
          <h5>
            Step 3. Search for different stocks/cryptocurrencies to invest or
            track
          </h5>
        </div>
      </section>

      <section id="landing-test">
        <div className="test-content">
          <h1> What our customers say</h1>
          <div className="testimonial">
            <h2>Jordan Marcus</h2>
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              height="200"
            />
            <h4>
              Software Engineer <span className="showcase-h1">ADP.</span>{' '}
            </h4>
            <h4>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur."
            </h4>
          </div>
          <div className="testimonial">
            <h2>Eric Marcus</h2>
            <img
              src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg"
              height="200"
            />
            <h4>
              Accountant <span className="showcase-h1">Gemini.</span>{' '}
            </h4>
            <h4>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur."
            </h4>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="box">
          <h3> Stocks</h3>
          <h5>Learn and Discover new stocks</h5>
          <img src="https://mediacloud.kiplinger.com/image/private/s--_hz_SmZU--/t_primary-image-mobile@1/v1580335658/slideshow/investing/T052-S003-5-struggling-stocks-that-will-turn-around-in-2017/images/intro.jpg" />
        </div>
        <div className="box box-2">
          <h3> Invest</h3>
          <h5>Buy, sell, trade and hold stocks</h5>
          <img src="https://specials-images.forbesimg.com/imageserve/5da63b70db40260006202a39/960x0.jpg?fit=scale" />
        </div>
        <div className="box">
          <h3>Crypto</h3>
          <h5>Invest in the future of finance with a click a the button</h5>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzEDhu1Gf2vdOgrV7FLxPUsPpTgW_9buwmg&amp;usqp=CAU"
            data-lt=""
            jsname="Q4LuWd"
            width="180"
            height="180"
            alt="Bitcoin - Open source P2P money"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzEDhu1Gf2vdOgrV7FLxPUsPpTgW_9buwmg&amp;usqp=CAU"
          />
        </div>
      </section>
      <div className="footer-bg">
        <section className="footer">
          <h4> Copright to StockAholic Inc.</h4>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;

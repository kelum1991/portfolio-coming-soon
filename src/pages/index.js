import * as React from "react"
//import React, { Component } from 'react';
import CountDown from 'reactjs-countdown';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./index.css"

const IndexPage = () => (
  <div className="main-container">
    <div className="main-container__grid">
      <div className="main-container__grid-left">
        <div className="banner-wrapper"></div>
      </div>
      <div className="main-container__grid-right">
        <div className="content-wrapper">
          <div className="logo">
            <StaticImage
              src="../images/logo.png"
              width={180}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
            />
          </div>
          <div className="heading">
            <h1>COMING SOON</h1>
          </div>
          <div className="counter">
          <CountDown
                    deadline="July 22, 2021"
                />
          </div>
          <div className="main-desc">
            <p>We are launching soon please reload after days</p>
          </div>
          <div className="social-icons">
            <p className="social-icons__heading">Stay in touch: </p>
            <ul className="social-icons__list">
              <li className="social-icons__list-item">
                <a href="#"></a>
              </li>
              <li className="social-icons__list-item">
                <a href="#"></a>
              </li>
              <li className="social-icons__list-item">
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage

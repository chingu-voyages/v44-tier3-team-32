import React from 'react'
import './Hero.css'


function Hero() {

  return (
    <div id ="hero">
      <div className="wm-hero js-animate">
        <div className="wm-hero__inner container">
          <h1>Your one-stop-shop for<br />Hoodies</h1>
          <div className='hero-img'>
          <img src="https://img01.ztat.net/article/spp-media-p1/bab9df30b7ae4434b440dd3efbef2079/a2eba840628c446bbe053654cb404200.jpg?imwidth=1800"  alt="Random cover album" width="250" height="250"/>
          <img src="https://img01.ztat.net/article/spp-media-p1/e266488df745421c99e86ee787faebff/b1da47d375d54e20aea69b2247801c57.jpg?imwidth=1800"  alt="Random cover album" width="250" height="250"/>
          <img src="https://img01.ztat.net/article/spp-media-p1/a885b103ccd14a52849e9ac1495add81/057d97b2371349a0be98bd4a644c0206.jpg?imwidth=1800"  alt="Random cover album" width="250" height="250"/>
          <img src="https://img01.ztat.net/article/spp-media-p1/16d5491533724a3f9f12dc1d83898ce4/88b8cb4b79204f65a48a1a65b73939fc.jpg?imwidth=1800"  alt="Random cover album" width="250" height="250"/>
          </div>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
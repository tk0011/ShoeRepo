import React from 'react'
import {Link} from 'react-router-dom'
import videoIcon from '../../assets/imgs/video.svg'
import igIcon from '../../assets/imgs/insta.svg'
import twitterIcon from '../../assets/imgs/twitter.svg'
import fbIcon from '../../assets/imgs/facebook.svg'
import productImg from '../../assets/imgs/product.png'
import './hero.scss'

const Hero = () => {
    return (
        <div className="container">
            <div className="hero">
                <div className="product-image">
                    <img className="img-fluid" src={productImg} alt="product" />
                </div>
                <div className="hero-left">
                    <p className="text-styles prod-category">Men's Shoe</p>
                    <h2 className="prod-title text-heading">Nike Air Edge 270</h2>
                    <p className="text-styles prod-desc">The Nike Air Edge 270 takes the look of retro <span className="d-block"> basketball and puts it through a modern lens. </span></p>
                    <div className="product-vid d-flex align-items-center">
                        <img src={videoIcon} alt="" />
                        <p className="text-styles">PLAY VIDEO</p>
                    </div>
                    <p className="text-styles scrolldown"> Scroll down </p>
                </div>
                <div className="hero-right">
                     <div className="prod-sizes">
                        <p className="text-styles">Select Size (us)</p>
                        <ul>
                            <li className="text-styles">5</li>
                            <li className="text-styles">6</li>
                            <li className="text-styles">7</li>
                            <li className="text-styles">8</li>
                            <li className="text-styles">9</li>
                            <li className="text-styles">10</li>
                            <li className="text-styles">11</li>
                        </ul>
                     </div>
                     <div className="prod-colors">
                         <p className="text-styles">Select Color</p>
                         <ul>
                             <li style={{background: "#B6A179"}}></li>
                             <li style={{background: "#F2C758"}}></li>
                             <li style={{background: "#6389CB"}}></li>
                         </ul>
                     </div>
                     <div className="socials">
                         <Link to=""> <img src={igIcon} alt="Instagram" /></Link>
                         <Link to=""><img src={twitterIcon} alt="Twitter" /></Link>
                         <Link to=""><img src={fbIcon} alt="Facebook" /></Link>
                     </div>
                </div>
            </div>
            <div className="hero-bottom d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <button className="d-flex align-items-center flex-column bg-transparent border-0">
                        <span className="text-styles">Prev</span>
                        <span><svg width="59" height="12" viewBox="0 0 59 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="59" y1="6" x2="5" y2="6" stroke="black" stroke-width="2"/>
                            <path d="M6 0L6 12L-5.24537e-07 6L6 0Z" fill="black"/>
                            </svg>
                        </span>
                    </button>
                     <button className="mx-5 d-flex align-items-center flex-column bg-transparent border-0">
                        <span className="text-styles">Next</span>
                        <span><svg width="59" height="12" viewBox="0 0 59 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="6" x2="54" y2="6" stroke="black" stroke-width="2"/>
                            <path d="M53 12V0L59 6L53 12Z" fill="black"/>
                            </svg>
                        </span>
                    </button>
                </div>
                <div>
                    <button className="bg-transparent border-0 text-styles">ADD TO CART — $95.97</button>
                </div>
            </div>
        </div>
    )
}

export default Hero

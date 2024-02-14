import React from "react";
import './Hero.css'
import hand_icon from '../Assets/handicon.png'
import arrow_icon from '../Assets/arrow_icon.png'
import hero_image from '../Assets/heroicon.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt="" /> {/* Close the img tag properly */}
                    </div>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            
                <div className='hero-latest-btn'>     
                    <div className='latest-collections-box'  >Latest Collections</div>
                    <img src={arrow_icon} alt="" className="small-img" />
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero;

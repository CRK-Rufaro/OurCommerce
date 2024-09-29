import React from 'react';
import './Banner.scss';
export const Banner: React.FC = () => {
    return (
        <div className="banner">
            {/* <img className="banner-image" src="./src/assets/ourcommerce_logo.svg" alt="OurCommerce Logo" /> */}
            {/* <video className='banner-video' src = './src/assets/rotating_sneakers_banner_video.mp4' autoPlay loop muted /> */}
            <video className='banner-video' src = './src/assets/walking_banner_video.mp4' autoPlay loop muted />
            {/* <div className='banner-text'>
                SHOP NOW
            </div> */}
            
        </div>
    );
};

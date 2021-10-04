import React, { useState } from 'react';
import presentation from '../../assets/video/presentation3.mp4';
import '../../assets/scss/buttons.scss';
import { Helmet } from "react-helmet";
import './home.scss'
const Home = () => {
    const [ h1Hover, setH1Hover ] = useState(false)
    return (
        <div className="home-main-container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <video className="background-video" autoPlay loop muted>
                <source src={presentation} type="video/mp4" />
            </video>

            <div className="main-section">
                <div className="item1">
                    <div className="item1__header">
                        <h1>COLLECT THE FINEST GENERATIVE ART.</h1>
                    </div>
                    <div className="item1__body">
                        <p>Buy and sell Nft's from the world's top creative coders.
                        </p>
                    </div>
                    <div className="item1__footer">
                        <button className="home-Button">Learn more</button>
                    </div>
                </div>
                <div className="item2">
                    <h1 className={ h1Hover ? 'changeColor' : 'card'}>Become a member and access exclusive drops.</h1>
                    <button className="btn-Membership"
                        onMouseEnter={() => setH1Hover(true)}
                        onMouseLeave={() => setH1Hover(false)}>
                    
                        Buy Membership
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;
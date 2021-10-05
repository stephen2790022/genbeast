import React, { useEffect } from 'react';
import presentation from '../../assets/video/presentation3.mp4';
import '../../assets/scss/buttons.scss';
import { Helmet } from "react-helmet";
import './home.scss'
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <div className="home-main-container" >
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
                    <div className='card'>
                        <h1 >Become a member and access exclusive drops.  </h1>
                        <p>0,1 <i className="ethereum-logo fab fa-ethereum" /></p>
                    </div>

                    <button className="btn-Membership">

                        Buy Membership
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;
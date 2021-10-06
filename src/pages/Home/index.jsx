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

                {/* <div className="item2">
                    <div className="item2__header">
                        <h1>BECOME A MEMBER.</h1>
                    </div>
                    <div className="item2__body">
                        <p>
                            Obtain your membership token and access to exclusive drops.
                        </p>
                    </div>
                    <div className="item2__footer">
                        <button className="btn-Membership">Buy membership</button>
                    </div>
                </div> */}

                <div className="item2">
                    <div className='card'>
                        <h2 >BECOME A MEMBER  </h2>
                        <p>Obtain your membership and access to exclusive drops. </p>
                        <div className="pricing">
                        <p className="price">0,1 <i className="ethereum-logo fab fa-ethereum" /></p>
                        <p>5000/5000 Remaining</p>
                        </div>
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
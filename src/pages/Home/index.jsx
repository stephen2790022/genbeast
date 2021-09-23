import React from 'react';
import presentation from '../../assets/video/presentation2.mp4';
import '../../assets/scss/buttons.scss';
import './home.scss'
const Home = () => {
    return (
        <div className="home-main">
            <video className="home-video" autoPlay loop muted>
                <source src={presentation} type="video/mp4" />
            </video>

            <div className="main-section">
                <div className="main-section__grid">
                    <div className="item1">
                        <h1>Where code, art & creativity intersect.</h1>
                        <p>Monthly drops, world renowned artists, all whilst combining the best of both physical and digital. Operating as a quasi-DAO with a central governance token, our community is focused on pushing the boundaries of both technology and art.</p>
                        <button className="home-Button">Learn more</button>
                    </div>
                    <div className="item2">
                        Some content
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
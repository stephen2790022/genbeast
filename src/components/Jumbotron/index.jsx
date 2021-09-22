import React from 'react';
import presentation from '../../assets/video/presentation.mp4';
import './jumbotron.scss'
const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <video 
                autoPlay 
                loop
                muted
            >
                <source src={presentation} type="video/mp4"/>
            </video>
        </div>
    );
};

export default Jumbotron;
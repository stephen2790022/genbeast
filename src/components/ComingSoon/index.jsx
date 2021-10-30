import React from 'react';
import coming from "../../assets/img/coming-soon.png";
import "./cominSoon.scss";

const ComingSoon = () => {
    return (
        <div className="coming-soon" >
            <img src={coming} alt="" />
        </div>
    );
};

export default ComingSoon;
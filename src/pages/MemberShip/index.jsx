import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import './memberShip.scss';

const MemberShip = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Member Ship</title>
            </Helmet>
            <div className="MemberShip-section1">
                <div className="MemberShip-section1-content">
                    <h1 className="section1-title">THE GENBEAST MEMBERSHIP</h1>
                    <div className="content1">
                        <p>
                            Becoming a GenBeast Member is the only way to purchase exclusive
                            NFT Generative and Ai art piece from our exclusive drops. 
                            We will be minting 5 555 ERC-721 membership tokens.
                            The initial sale for the 5 555 membership will be here on 
                            the GenBeast membership page. In order to purchase a membership, 
                            you must have a MetaMask wallet and Ethereum. There will be 
                            a limit of 5 memberships per transaction. The membership will be 0.1<i className="ethereum-logo fab fa-ethereum" />.
                            This ERC-721 token is a lifetime membership.
                            We partnered with the most planed to at least 2 drops per month.
                            If the initial is sold out, they may be traded on the open market at Open Sea.
                            If you choose to sell this token you will lose access to our members only drops.

                        </p>
                    </div>
                    <div className="content2">THE GENBEAST MEMBERSHIP</div>
                </div>
            </div>
            <div className="core-function-section2">
                <div className="core-function-section2-content">
                <div className="core-function-title"><h2>Core Functions</h2></div>
                    <div className="section2-card">
                    <i className="fas fa-parachute-box"/>
                        <p>Access to limited arts series, 1000 token drop Maximum</p> 
                    </div>
                    <div className="section2-card">
                    <i className="fas fa-palette"/>
                        <p>Unique artists pushing the generative art boundaries</p>

                    </div>
                    <div className="section2-card">
                    <i className="far fa-handshake"/>
                        <p>Exclusive merch and fashion collaboration with the top generative artists</p>
                    </div>
                    <div className="section2-card">
                    <i className="fab fa-digital-ocean"/>
                        <p>Digital and phisical event/exhibitions</p>
                    </div>
                    <div className="section2-card">
                    <i className="fas fa-balance-scale"/>
                        <p>Voting rights on strategic decisions</p>
                    </div>
                    <div className="section2-card">
                    <i className="fas fa-gas-pump"/>
                        <p>Almost non existent gas fee</p>
                    </div>
                </div>
            </div>

            <div className="extra-section3">
                
            </div>
        </>
    );
};

export default MemberShip;
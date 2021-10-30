import React from 'react';
import ComingSoon from "../../components/ComingSoon";
const About = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <ComingSoon/>
    );
};

export default About;
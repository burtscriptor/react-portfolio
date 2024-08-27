import React, { useState } from 'react';
import Landing from '../components/Landing';
import Welcome from '../components/Welcome';

const LandingPage = ({ mainApp }) => {
    const [show, setShow] = useState(false)

    return(
        <>
        {!show ? <Landing setShow={setShow} /> : <Welcome mainApp={mainApp} /> }
        </>
    );
};

export default LandingPage;
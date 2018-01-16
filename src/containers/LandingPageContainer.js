import React from 'react';
import JumbotronComponent from '../components/landing-page/Jumbotron'
import About from '../components/landing-page/About'
import Features from '../components/landing-page/Features'
import Actions from '../components/landing-page/Actions'
import Footer from '../components/landing-page/Footer'


const LandingPageContainer = () => {
    return (
      <div className="landing-page">
        <JumbotronComponent />
        <About />
        <Features />
        <Actions />
        <Footer />
      </div>
    );
}

export default LandingPageContainer;

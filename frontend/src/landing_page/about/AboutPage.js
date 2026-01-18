import React, { Component } from 'react';
import Hero from './Hero';
import Team from './Team';
import Founder from './Founder';
function AboutPage() {
    return (  
        <div>
            <Hero/>
            <Founder/>
            <Team/>
        </div>
    );
}

export default AboutPage;
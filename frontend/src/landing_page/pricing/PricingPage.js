import React, { Component } from 'react';
import Hero from '../pricing/Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return (
        <div>
            <Hero/>
            <Brokerage/>
            <OpenAccount/>
        </div>
      );
}

export default PricingPage;
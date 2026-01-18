import React, { Component } from 'react';
import CreateTicket from './CreateTicket';
import Hero from '../support/Hero';
function SupportPage() {
    return ( 
        <div>
            <Hero/>
            <CreateTicket/>
        </div>
    );
}

export default SupportPage;
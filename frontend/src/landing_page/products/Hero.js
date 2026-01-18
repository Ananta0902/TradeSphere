import React, { Component } from 'react';

function Hero() {
    return (
        <div className='container m-5 p-5'>
            <div className='row text-center mt-5'>
                 <h2>Zerodha Products</h2>
                 <br></br><br></br>
                 <p className='text-muted'>Sleek, modern, and intuitive trading platforms</p>
                 <p>Check out our <a href=''>investment offerings</a><i class="fa-solid fa-arrow-right-long"></i></p>
            </div>
            <hr></hr>
        </div>
      );
}

export default Hero;
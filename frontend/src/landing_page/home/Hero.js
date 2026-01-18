import React from 'react';

function Hero() {
    return (
    <div className='container p-5 mt-5'>
        <div className='row text-center'>
       <img src='media/homeHero.png' className='mb-5' alt='HeroImage'/>
       <h1>Invest in everything</h1>
      <p className='mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
       <button className='p-3 btn btn-primary mt-3' style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>
        </div>
    </div>
  );
}

export default Hero;
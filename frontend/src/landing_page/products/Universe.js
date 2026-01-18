import React, { Component } from 'react';

function Universe() {
    return ( 
        <div className='container text-center'>
    <h2 className='mt-5'>The Zerodha Universe</h2>
    <br></br>
<p className='text-muted'>Extend your trading and investment experience even further with our partner 
    platforms</p>
    <div className='row mt-5' style={{fontSize:"0.75rem"}}>
        <div className='col-4'>
   <img src='media/zerodhaFundhouse.png' style={{width:"40%",marginBottom:"10px"}}/>
   <p className='text-muted'>Our asset management venture <br></br>
that is creating simple and transparent index <br></br>
funds to help you save for your goals.</p>
</div>
<div className='col-4'>
   <img src='media/sensibullLogo.svg' style={{width:"40%",marginBottom:"10px"}}/>
   <p><a href='' style={{textDecoration:"none"}} className='text-muted'>Options trading platform that lets you <br></br>
create strategies, analyze positions, and examine<br></br>
data points like open interest, FII/DII, and more.</a></p>
        </div>
        <div className='col-4'>
   <img src='media/tijori.svg' style={{width:"30%",marginBottom:"10px"}}/>
   <p><a href='' style={{textDecoration:"none"}} className='text-muted'>Investment research platform<br></br>
that offers detailed insights on stocks,<br></br>
sectors, supply chains, and more.</a></p>
        </div>
    </div>

    <div className='row mt-5' style={{fontSize:"0.75rem"}}>
        <div className='col-4'>
   <img src='media/streakLogo.png' style={{width:"40%",marginBottom:"10px"}}/>
   <p><a href='' style={{textDecoration:"none"}} className='text-muted'>Systematic trading platform<br></br>
that allows you to create and backtest<br></br>
strategies without coding.</a></p>
</div>
<div className='col-4'>
   <img src='media/smallcaseLogo.png' style={{width:"50%",marginBottom:"10px"}}/>
   <p><a href='' style={{textDecoration:"none"}} className='text-muted'>Thematic investing platform<br></br>
that helps you invest in diversified<br></br>
baskets of stocks on ETFs.</a></p>
        </div>
        <div className='col-4'>
   <img src='media/ditto-logo.png' style={{width:"30%",marginBottom:"10px"}}/>
   <p><a href='' style={{textDecoration:"none"}} className='text-muted'>Personalized advice on life<br></br>
and health insurance. No spam<br></br>
and no mis-selling.</a></p>
        </div>
    </div>
    <button className='btn btn-primary m-5' style={{width:"200px",height:"50px"}}>Sign up for free</button>
        </div>
     );
}

export default Universe;
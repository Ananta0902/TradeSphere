import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function Founder() {
    return ( 
        <div className='container'>
            <h3 style={{textAlign:"center",marginBottom:"40px"}}>People</h3>
            <div className='row'>
            <div className='col-6 text-center p-5'>
            <img src='media/nithinKamath.jpg' 
            style={{borderRadius:"50%",width:"40%"}}/>
            <br></br> <br></br>
            <h4>Nithin Kamath</h4>
            <h6 className='text-muted'>Founder, CEO</h6>
            </div>
            <div className='col-6 p-5'>
        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
<p>Playing basketball is his zen.</p>
<p>Connect on  
    <a  href='' style={{textDecoration:"none"}}> Homepage</a> / <a  href=''style={{textDecoration:"none"}}>TradingQnA</a> / <a href='' style={{textDecoration:"none"}}>Twitter</a> </p>
</div>
</div>
        </div>
     );
}

export default Founder;
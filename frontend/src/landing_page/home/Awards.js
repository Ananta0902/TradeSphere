import React from 'react';

function Awards() {
    return (
        <div className='container mt-3'>
            <div className='row'>
            <div className='col-6 p-5'>
                <img src='media/largestBroker.svg'/>
                   </div>
            <div className='col-6 p-5 mt-5'>  
                <h1>Largest Stock Broker in India</h1>
                <p className='mt-2'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments,contributing to 15% of daily retail exchange volumes in India.</p>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                    <li> <p>Futures and options</p></li>
                    <li> <p>Commodity deriavtives</p></li>
                    <li><p>Currency deriavtives</p></li>
                </ul>
                    </div>
                     <div className='col-6'>
                        <ul>
                    <li><p>Stocks and IPOS</p></li>
                    <li><p>Direct Mutual Funds</p></li>
                    <li><p>Bonds and Govt. Policies</p></li>
                </ul>
                    </div>
                </div>
          <img src='media/pressLogos.png' style={{width:"90%"}} />
                 </div>
            </div>
        </div>
    );
}

export default Awards;
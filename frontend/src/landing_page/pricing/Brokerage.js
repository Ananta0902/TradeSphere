import React, { Component } from 'react';

function Brokerage() {
    return ( 
        <div className='container m5 p-3'>
            <h2 style={{marginLeft:"50px"}}>Equity</h2>
            <hr></hr>
<table class="table table-bordered table-striped align-middle m-5 p-5">
  <thead  class="table-light text-center">
    <tr>
      <th scope="col"></th>
      <th scope="col">Equity delivery</th>
      <th scope="col">Equity intraday</th>
      <th scope="col">F&O - Futures</th>
      <th scope="col">F&O - Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className='text-muted'>Brokerage</th>
      <td>Zero Brokerage</td>
      <td>0.03% or Rs. 20/executed order whichever is lower</td>
      <td>0.03% or Rs. 20/executed order whichever is lower</td>
      <td>Flat Rs. 20 per executed order</td>
    </tr>
    <tr>
      <th scope="row" className='text-muted'>STT/CTT</th>
      <td>0.1% on buy & sell</td>
      <td>0.025% on the sell side</td>
      <td>0.02% on the sell side</td>
      <td>
        <ul>
            <li>0.125% of the intrinsic value on options that are bought and exercised</li>
        <li>0.1% on sell side (on premium)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" className='text-muted'>Transaction<br></br> charges</th>
      <td>NSE: 0.00297%<br></br>
BSE: 0.00375%</td>
      <td>NSE: 0.00297%<br></br>
BSE: 0.00375%</td>
      <td>
NSE: 0.00173%<br></br>
BSE: 0</td>
      <td>NSE: 0.03503% (on premium) <br></br>
BSE: 0.0325% (on premium)</td>
    </tr>
     <tr>
      <th scope="row" className='text-muted'>GST</th>
      <td >18% on (brokerage + SEBI charges + transaction charges)</td>
      <td>18% on (brokerage + SEBI charges + transaction charges)</td>
      <td>18% on (brokerage + SEBI charges + transaction charges)</td>
      <td>18% on (brokerage + SEBI charges + transaction charges)</td>
    </tr>
     <tr>
      <th scope="row" className='text-muted'>SEBI charges</th>
      <td>₹10 / crore</td>
      <td>₹10 / crore</td>
      <td>₹10 / crore</td>
      <td>₹10 / crore</td>
    </tr>
     <tr>
      <th scope="row" className='text-muted'> Stamp charges</th>
      <td>0.015% or ₹1500 / crore on buy side</td>
      <td>buy side	0.003% or ₹300 / crore on buy side</td>
      <td>0.002% or ₹200 / crore on buy side</td>
      <td>0.002% or ₹200 / crore on buy side</td>
    </tr>
  </tbody>
</table>
<p className='text-center fs-4 mb-5'><a href='' style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage calculator</p>
      <ul className='fs-5'>
        <li><p>Learn more about <a href='' style={{textDecoration:"none"}}>Charges for account opening</a></p></li>
         <li><p>Learn more about <a href='' style={{textDecoration:"none"}}>Demat AMC (Annual Maintenance Charge)</a></p></li>
          <li><p>Learn more about <a href='' style={{textDecoration:"none"}}>Charges for optional value added services</a></p></li>
           <li><p>Check <a href='' style={{textDecoration:"none"}}>Charges explained</a></p></li>
      </ul>
      <h6 className='text-muted mt-5'>Disclaimer</h6>
        <p className='text-muted'>
For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
        </p>
        </div>
     );
}

export default Brokerage;
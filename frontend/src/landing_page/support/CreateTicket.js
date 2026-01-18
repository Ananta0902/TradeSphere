import React, { Component } from 'react';

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <details className="ticket-item">
            <summary className="ticket-summary">
              <span><i class="fa-solid fa-circle-plus"></i> Account Opening</span>
              <span className="icon"><i class="fa-solid fa-circle-chevron-down"></i></span>
            </summary>
          </details>

          <details className="ticket-item">
            <summary className="ticket-summary">
              <span><i class="fa-solid fa-circle-user"></i> Your Zerodha Account</span>
              <span className="icon"><i class="fa-solid fa-circle-chevron-down"></i></span>
            </summary>
          </details>

          <details className="ticket-item">
            <summary className="ticket-summary">
              <span><i class="fa-brands fa-nfc-symbol"></i> Kite</span>
              <span className="icon"><i class="fa-solid fa-circle-chevron-down"></i></span>
            </summary>
          </details>

          <details className="ticket-item">
            <summary className="ticket-summary">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> Funds</span>
              <span className="icon"><i class="fa-solid fa-circle-chevron-down"></i></span>
            </summary>
          </details>

          <details className="ticket-item">
            <summary className="ticket-summary">
              <span><i class="fa-regular fa-circle-dot"></i> Console</span>
              <span className="icon"><i class="fa-solid fa-circle-chevron-down"></i></span>
            </summary>
          </details>

          <details className="ticket-item">
            <summary className="ticket-summary">
              <span><i class="fa-solid fa-coins"></i> Coin</span>
              <span className="icon"><i class="fa-solid fa-circle-chevron-down"></i></span>
            </summary>
          </details>
        </div>
        <div className='col-4'>
            <p className='m-4 p-4' style={{backgroundColor:"#FCE8BB",borderInlineStart:"10px solid #f86110ff"}}>
                <ul>
                   <a href=''><li>Offer for sale (OFS) – December 2025</li></a> 
                   <a href=''><li  className='mt-3'>Latest Intraday leverages and Square-off timings</li></a>  
                </ul>
            </p>
         <p>
            <table style={{height:"300px",width:"370px",marginLeft:"22px"}} >
                 <tr class="ticket-item" style={{backgroundColor:"#f6f6f6"}}><td>Quick Links </td></tr>
  <tr class="ticket-item"><td>  <a href='' style={{textDecoration:"none"}}> 1. Track account opening  </a> </td></tr>
  <tr class="ticket-item"><td><a href='' style={{textDecoration:"none"}}>   2. Track segment activation   </a> </td></tr>
  <tr class="ticket-item"><td><a href='' style={{textDecoration:"none"}}>  3. Intraday margins </a></td></tr>
  <tr class="ticket-item"><td><a href='' style={{textDecoration:"none"}}>  4. Kite user manual </a></td></tr>
  <tr class="ticket-item"><td>  <a href='' style={{textDecoration:"none"}}>5. Learn how to create a ticket   </a></td></tr>
</table>
</p>
        </div>
      </div>
    </div>
  );
}
export default CreateTicket;

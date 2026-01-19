import React, { Component } from 'react';
import Menu from './Menu';
import Logout from "./Logout";

function TopBar() {
    return ( 
        <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points" style={{color:"green"}}>26129.60 </p>
          <p className="percent">190.75 (0.74%) </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points" style={{color:"green"}}> 85220.60 </p>
          <p className="percent text-muted">545.52 (0.64%)</p>
        </div>
         </div>
      <Menu />
   
  <h2>TradeSphere</h2>
  <Logout />
        </div>
     );
}

export default TopBar;
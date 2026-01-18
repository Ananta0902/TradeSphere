import React, { useState,useEffect } from 'react';
import axios from 'axios';
// import { positions } from '../data/data';

const Positions=()=> {
    const [allPositions,setAllPositions]=useState([]);
    useEffect(()=>{
  axios.get("http://localhost:3002/allPositions").then((res)=>{
    setAllPositions(res.data);
  });
    },[]);
    return (
        <>
          <h3 className='title'>Positions ({allPositions.length})</h3> 
          <div className='order-table'>
            <table>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
{allPositions.map((stock,index)=>{
    const curValue=stock.price*stock.qty;
    const isProfit=curValue-stock.avg*stock.qty>=0.0;
    const profClass=isProfit?"profit":"loss";
    const dayChange=stock.isLoss?"loss":"profit";
    return(
 <tr key={index} >
            <td>{stock.product}</td>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td className={profClass}>
               {(curValue-stock.avg*stock.qty).toFixed(2)}
            </td>
            <td className={dayChange}>{stock.day}</td>
          </tr>
    );
})}

        </table>
      </div>
        </>
      );
}

export default Positions;
import React, { useEffect, useContext } from "react";
import GeneralContext from "./GeneralContext";
import './Orders.css';
const Orders = () => {
  const { orders, fetchOrders } = useContext(GeneralContext);

  useEffect(() => {
    fetchOrders();  
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <table  className="orders-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>
  <span className={order.mode === "BUY" ? "buy" : "sell"}>
    {order.mode}
  </span>
</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;

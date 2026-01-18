import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow, fetchOrders } = useContext(GeneralContext);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://tradesphere-backend.onrender.com
/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode, // BUY or SELL
        }
        );
        fetchOrders();
      console.log(`${mode} ORDER SAVED:`, response.data);
      closeBuyWindow();
    } catch (err) {
      console.error(`${mode} FAILED:`, err);
    }
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <button
          className={`btn ${mode === "BUY" ? "btn-blue" : "btn-red"}`}
          onClick={handleSubmit}
        >
          {mode}
        </button>

        <button className="btn btn-grey" onClick={closeBuyWindow}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;



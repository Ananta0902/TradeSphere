import React, { useState } from "react";
import axios from "axios";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext();

export const GeneralContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderType, setOrderType] = useState("BUY");

  // fetch orders from backend
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3002/orders");
      console.log("Fetched Orders:", res.data);  
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  };

  const openBuyWindow = (uid) => {
    setOrderType("BUY");
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const openSellWindow = (uid) => {
    setOrderType("SELL");
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        orders,
        fetchOrders,
        openBuyWindow,
        openSellWindow,
        closeBuyWindow,
      }}
    >
      {children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} mode={orderType} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;



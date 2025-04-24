import React, { useState }   from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid ,availableStock}) => {

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isInvalidQty, setIsInvalidQty] = useState(false);

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value, 10);
    setStockQuantity(qty);
    setIsInvalidQty(qty > availableStock);
  };


  const handleSellClick = () => {

    if (stockQuantity > availableStock) {
      alert("Entered quantity exceeds available stock!");
      return;
    }
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    GeneralContext.closeSellWindow();
  };



const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
                onChange={handleQuantityChange}
              value={stockQuantity}
              style={{ borderColor: isInvalidQty ? "red" : "" }}
        
            />
          </fieldset>
          <fieldset>
            <legend style={{color:"black"}}>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
             step="0.05"
             onChange={(e) => setStockPrice(e.target.value)}
             value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-orange" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
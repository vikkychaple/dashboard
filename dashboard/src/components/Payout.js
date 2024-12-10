
import React, { useState, useEffect } from "react";

const Payout = ({ articles }) => {
  const [rate, setRate] = useState(0);
  const [totalPayout, setTotalPayout] = useState(0);

  useEffect(() => {
    const savedRate = localStorage.getItem("payoutRate");
    if (savedRate) setRate(parseInt(savedRate, 10));
  }, []);

  useEffect(() => {
    setTotalPayout(rate * articles.length);
  }, [rate, articles]);

  const handleRateChange = (e) => {
    const newRate = parseInt(e.target.value, 10);
    setRate(newRate);
    localStorage.setItem("payoutRate", newRate);
  };

  return (
    <div className="payout-container">
      <h2>Payout Calculator</h2>
      <input type="number" value={rate} onChange={handleRateChange} placeholder="Payout per article" />
      <p>Total Articles: {articles.length}</p>
      <p>Total Payout: {totalPayout}</p>
    </div>
  );
};

export default Payout;

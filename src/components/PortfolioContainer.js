import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleClick }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock, index) => (
        <Stock key={index} stock={stock} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default PortfolioContainer;

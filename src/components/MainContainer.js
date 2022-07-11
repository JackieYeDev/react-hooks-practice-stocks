import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("None");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(data => setStocks(data));
  }, []);

  function handleClickBuy(stock) {
    setPortfolio([...portfolio, stock]);
  }

  function handleClickSell(stock) {
    setPortfolio(portfolio.filter(s => s.name !== stock.name));
  }
  function handleFilterChange(value) {
    setFilter(value);
  }
  function handleSortChange(value) {
    setSortCriteria(value);
  }
  const stocksToRender = stocks
    .filter(stock => (filter === "All" ? true : stock.type === filter))
    .sort((a, b) => {
      if (sortCriteria === "None") {
        return true;
      } else if (sortCriteria === "Alphabetically") {
        return a.name > b.name ? 1 : -1;
      } else if (sortCriteria === "Price") {
        return a.price > b.price ? 1 : -1;
      }
    });

  return (
    <div>
      <SearchBar
        handleFilterChange={handleFilterChange}
        handleSortChange={handleSortChange}
      />
      <div className='row'>
        <div className='col-8'>
          <StockContainer
            stocks={stocksToRender}
            handleClick={handleClickBuy}
          />
        </div>
        <div className='col-4'>
          <PortfolioContainer
            portfolio={portfolio}
            handleClick={handleClickSell}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

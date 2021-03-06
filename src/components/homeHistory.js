import React, { useState, useEffect } from 'react';
import Trades from './HomeTrades';

const HomeHistory = () => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    TradeHistory();
  }, []);

  const TradeHistory = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/${token}/recent`);
      const res = await response.json();
      setTrades(res.trades);
    } catch (error) {
      console.log(error);
    }
  };

  const limit_trades = trades.map((trade) => {
    return (
      <Trades
        key={trade[2]}
        datas={trade}
        numberShares={trade[3]}
        ticker={trade[2]}
        equity={trade[4]}
        tradeAction={trade[5]}
        date={trade[6]}
      />
    );
  });
  return (
    <div>
      <table className="content-table-transactions">
        <thead>
          <tr>
            <th> Recent Transactions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{limit_trades}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomeHistory;

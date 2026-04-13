import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Calculator from './components/Calculator'
import './App.css'

const App = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/history");
      setHistory(res.data);
    } catch (error) {
      console.log("Backend not running, history disabled");
    }
  };

  const handleCalculate = async (expression, result) => {
    try {
      await axios.post("http://localhost:5000/api/history", {
        expression,
        result,
      });
      fetchHistory();
    } catch (error) {
      console.log("Backend not running, history not saved");
    }
  };

  const clearHistory = async () => {
    try {
      await axios.delete("http://localhost:5000/api/history");
      setHistory([]);
    } catch (error) {
      console.log("Backend not running");
    }
  };

  return (
    <div className="app">
      <Calculator onCalculate={handleCalculate} />

      <div className="history-panel">
        <h3>📚 History</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item.expression} = {item.result}</li>
          ))}
        </ul>
        {history.length > 0 && (
          <button className="clear-history-btn" onClick={clearHistory}>Clear History</button>
        )}
      </div>
    </div>
  )
}

export default App
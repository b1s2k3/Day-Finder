import React, { useState } from "react";
import "./App.css";

import FirstCase from "./Cases/FirstCase";
import SecondCase from "./Cases/SecondCase";

function App() {
  const [day, setDay] = useState("");

  const [year, setYear] = useState("");

  const [date, setDate] = useState([]);

  const monthOptions = [
    {
      case1: [
        { value: "january", length: 31 },
        { value: "february", length: 28 },
        { value: "march", length: 31 },
        { value: "april", length: 30 },
        { value: "may", length: 31 },
        { value: "june", length: 30 },
        { value: "july", length: 31 },
        { value: "august", length: 31 },
        { value: "september", length: 30 },
        { value: "october", length: 31 },
        { value: "november", length: 30 },
        { value: "december", length: 31 },
      ],
    },
    {
      case2: [
        { value: "january", length: 31 },
        { value: "february", length: 29 },
        { value: "march", length: 31 },
        { value: "april", length: 30 },
        { value: "may", length: 31 },
        { value: "june", length: 30 },
        { value: "july", length: 31 },
        { value: "august", length: 31 },
        { value: "september", length: 30 },
        { value: "october", length: 31 },
        { value: "november", length: 30 },
        { value: "december", length: 31 },
      ],
    },
  ];

  const [month, setMonth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateInputs = [{ day, month, year }];
    setDate(dateInputs);
  };
  return (
    <div className="App">
      <form className="input-container">
        <div className="input-items">
          <label>Year: </label>
          <input
            type="number"
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          {year % 4 !== 0 ? (
            <div>
              <label className="month">Month: </label>
              <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option> </option>
                {monthOptions[0].case1.map((element) => {
                  return (
                    <option key={element.value} required value={element.value}>
                      {element.value}
                    </option>
                  );
                })}
              </select>
              <div className="day-container">
                <label>Day: </label>
                {monthOptions[0].case1
                  .filter((element) => element.value === month)
                  .map((elm) => (
                    <div className="day-items">
                      <input
                        type="number"
                        min={1}
                        max={elm.length}
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                      />
                      {day > elm.length
                        ? alert(`Number must be between 1 and ${elm.length}`)
                        : null}
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div>
              <label className="month">Month: </label>
              <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option> </option>
                {monthOptions[1].case2.map((element) => {
                  return (
                    <option key={element.value} required value={element.value}>
                      {element.value}
                    </option>
                  );
                })}
              </select>
              <div className="day-container">
                <label>Day: </label>
                {monthOptions[1].case2
                  .filter((element) => element.value === month)
                  .map((elm) => (
                    <div className="day-items">
                      <input
                        type="number"
                        min={1}
                        max={elm.length}
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                      />
                      {day > elm.length
                        ? alert(`Number must be between 1 and ${elm.length}`)
                        : null}
                    </div>
                  ))}
              </div>
            </div>
          )}
          <button className="submit-button" onClick={handleSubmit}>
            Find
          </button>
        </div>
      </form>
      <div className="result">
        {date.map((element) => {
          if (element.year % 4 === 0) {
            return (
              <FirstCase
                day={element.day}
                month={element.month}
                year={element.year}
                className="result"
              />
            );
          } else {
            return (
              <SecondCase
                day={element.day}
                month={element.month}
                year={element.year}
                className="result"
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;

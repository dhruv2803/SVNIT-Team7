import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./Body.css";
import CandlestickChart from "./Candlestick Chart";
import OhlcChart from "./OHLC Chart";
import RangeColumnChart from "./Range Column Chart";
import axios from "axios";
const Body = () => {
    const [inidate, setInidate] = useState("");
    const [fidate, setFidate] = useState("");
    const [symbol, setSymbol] = useState("");

    // const [data,setData] = useState([]);

    // useEffect(() => {
    //     async function getSymbols() {
    //         const res = await axios.get("http://localhost:5000/");
    //         console.log(res);
    //     }
    //     getSymbols();
    // });

    useEffect(() => {
        async function getdatabysymbol() {
            const res = await axios.get(
                `http://localhost:5000/?symbol=${symbol}`
            );
            console.log(res);
        }
        getdatabysymbol();
    }, [symbol]);

    return (
        <div className="body">
            <div className="chart">
                <div className="chart_plot">
                    <Route path="/" exact>
                        <OhlcChart />
                    </Route>
                    <Route path="/candlestick" exact>
                        <CandlestickChart />
                    </Route>
                    <Route path="/rangedcolumn" exact>
                        <RangeColumnChart />
                    </Route>
                </div>
            </div>

            <div className="query">
                <div className="query_daterange">
                    <p>Initial date:</p>
                    <input
                        type="date"
                        name="initialdate"
                        id="initialdate"
                        onChange={(e) => {
                            setInidate(e.target.value);
                        }}
                    />
                    <p>Final date:</p>
                    <input
                        type="date"
                        name="finaldate"
                        id="finaldate"
                        onChange={(e) => {
                            setFidate(e.target.value);
                        }}
                    />
                </div>

                <div className="query_symbol">
                    <p>Select symbol:</p>
                    <select
                        onChange={(e) => {
                            setSymbol(e.target.value);
                        }}
                    >
                        <option value="aapl">AAPL</option>
                        <option value="aapl">abc</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Body;

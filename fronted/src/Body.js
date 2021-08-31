import React, { useEffect, useState } from "react";
import "./Body.css";
const Body = () => {
    const [graphStyle, setGraphStyle] = useState("OHLC");
    const [inidate, setInidate] = useState("");
    const [fidate, setFidate] = useState("");
    const [symbol, setSymbol] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/", {
            method: "GET",
        })
            .then((res) => setSymbol(res.data))
            .catch((err) => console.log(err));
        console.log(symbol);
    }, [symbol]);

    return (
        <div className="body">
            <div className="chart"></div>

            <div className="query">
                <div className="query_charttype">
                    <select onChange={(e) => setGraphStyle(e.target.value)}>
                        <option value="OHLC">OHLC</option>
                        <option value="candleStick">Candle Stick</option>
                        <option value="coloredBar">Colored Bar</option>
                        <option value="vertexLine">Vertex Line</option>
                        <option value="hollowCandle">Hollow Candle</option>
                    </select>
                </div>
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

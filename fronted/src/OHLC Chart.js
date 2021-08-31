import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let data = [
    {
        symbol: "AAPL",
        open: 126.25,
        high: 127.89,
        low: 125.85,
        close: 127.45,
        volume: 81917951,
        date: "2021-05-14",
    },
    {
        symbol: "AAPL",
        open: 126.82,
        high: 126.93,
        low: 125.17,
        close: 126.27,
        volume: 74244624,
        date: "2021-05-17",
    },
    {
        symbol: "AAPL",
        open: 126.56,
        high: 126.99,
        low: 124.78,
        close: 124.85,
        volume: 63342929,
        date: "2021-05-18",
    },
    {
        symbol: "AAPL",
        open: 123.16,
        high: 124.915,
        low: 122.86,
        close: 124.69,
        volume: 92611989,
        date: "2021-05-19",
    },
    {
        symbol: "AAPL",
        open: 125.23,
        high: 127.72,
        low: 125.1,
        close: 127.31,
        volume: 76857123,
        date: "2021-05-20",
    },
    {
        symbol: "AAPL",
        open: 127.82,
        high: 128,
        low: 125.21,
        close: 125.43,
        volume: 79295436,
        date: "2021-05-21",
    },
    {
        symbol: "AAPL",
        open: 126.01,
        high: 127.94,
        low: 125.94,
        close: 127.1,
        volume: 63092945,
        date: "2021-05-24",
    },
    {
        symbol: "AAPL",
        open: 127.82,
        high: 128.32,
        low: 126.32,
        close: 126.9,
        volume: 72009482,
        date: "2021-06-25",
    },
    {
        symbol: "AAPL",
        open: 126.955,
        high: 127.39,
        low: 126.42,
        close: 126.85,
        volume: 56575920,
        date: "2021-06-26",
    },
];

let newdata = [];
data.forEach((ele) => {
    let newele = {};
    newele.x = new Date(ele.date);
    newele.y = [ele.open, ele.high, ele.low, ele.close];
    newdata.push(newele);
});
class OhlcChart extends Component {
    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2",
            exportFileName: "",
            title: {
                text: "",
            },
            axisX: {
                interval: 1,
                intervalType: "month",
                valueFormatString: "MMM",
            },
            axisY: {
                includeZero: false,
                prefix: "$",
                title: "Price ",
            },
            data: [
                {
                    type: "ohlc",
                    yValueFormatString: "$###0.00",
                    xValueFormatString: "MMM YYYY",
                    dataPoints: newdata,
                },
            ],
        };

        return (
            <div>
                <CanvasJSChart
                    options={options}
                    /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default OhlcChart;

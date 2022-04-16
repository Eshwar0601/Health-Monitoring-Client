import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import { useQuery } from "react-query";

const fetchPosts = async () => {
    const data = await axios
        .get("http://127.0.0.1:8080/api/posts/", {
            headers: {
                "auth-token": localStorage.getItem("auth-token"),
            },
        })
        .then((res) => res)
        .catch((err) => err);
    return data;
};

const GraphicalData = () => {
    const { data, error, isError, isLoading, status } = useQuery(
        "posts",
        fetchPosts
    );
    const [chartData, setChartData] = useState({});
    const [heartData, setHeartData] = useState({});
    const Chart = () => {
        let labelArr = [];
        let tempArr = [];
        let heartArr = [];
        if (status === "success") {
            data.data["userData"].map((item) => {
                let time = `${new Date(item.date).toLocaleTimeString()}`;
                labelArr.push(time);
                tempArr.push(item.temp);
                heartArr.push(item.hr);
            });
        }

        setChartData({
            labels: labelArr,
            datasets: [
                {
                    label: "Temperature",
                    data: tempArr,
                    backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                    borderColor: ["rgba(255, 99, 132, 1)"],
                    borderWidth: 1,
                },
            ],
        });

        setHeartData({
            labels: labelArr,
            datasets: [
                {
                    label: "Heart Rate",
                    data: heartArr,
                    backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                    borderColor: ["rgba(54, 162, 235, 1)"],
                    borderWidth: 1,
                },
            ],
        });
    };
    useEffect(() => {
        Chart();
    }, [data]);
    return (
        <div>
            <h1 className="text-white text-center my-5">Body Temperature</h1>
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    title: {
                        text: "Body Temperature",
                        display: true,
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }}
            />
            <h1 className="text-center my-5 text-white">Heart Rate :</h1>
            <Line
                data={heartData}
                options={{
                    responsive: true,
                    title: { text: "Heart Rate", display: true },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    );
};

export default GraphicalData;

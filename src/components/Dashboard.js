import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";
import { Table } from "reactstrap";
import { Bar, Line } from "react-chartjs-2";

const fetchPosts = async () => {
    const data = await axios
        .get("http://127.0.0.1:8080/api/posts/")
        .then((res) => res)
        .catch((err) => err);
    return data;
};

const Dashboard = () => {
    const { data, error, isError, isLoading, status } = useQuery(
        "posts",
        fetchPosts
    );
    const [chartData, setChartData] = useState({});
    const [heartData, setHeartData] = useState({});
    if (status === "success") {
        console.log("datttttttttttttttta", data.data["userData"]);
    }

    const Chart = () => {
        setChartData({
            labels: [
                "1:00 PM",
                "2:00 PM",
                "3:00 PM",
                "4:00 PM",
                "5:00 PM",
                "6:00 PM",
            ],
            datasets: [
                {
                    label: "Temperature",
                    data: [5, 22, 18, 19, 29, 30, 18, 24, 30, 21],
                    backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                    borderColor: ["rgba(255, 99, 132, 1)"],
                    borderWidth: 1,
                },
            ],
        });

        setHeartData({
            labels: [
                "1:00 PM",
                "2:00 PM",
                "3:00 PM",
                "4:00 PM",
                "5:00 PM",
                "6:00 PM",
                "7:00 PM",
                "8:00 PM",
                "9:00 PM",
                "10:00 PM",
            ],
            datasets: [
                {
                    label: "Heart Rate",
                    data: [91, 60, 99, 98, 98, 98, 70, 50, 90, 98],
                    backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                    borderColor: ["rgba(54, 162, 235, 1)"],
                    borderWidth: 1,
                },
            ],
        });
    };
    useEffect(() => {
        Chart();
    }, []);

    return (
        <>
            <div className="container">
                <h1 className="text-center my-5">Dashboard</h1>
                <div>
                    <Line
                        data={chartData}
                        options={{
                            responsive: true,
                            title: { text: "Body Temperature", display: true },
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
                    <h1 className="text-center my-5">Heart Rate :</h1>
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

                <h1 className="text-center my-5">Health Data</h1>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th className="text-center">Health ID</th>
                            <th className="text-center">Body Temperature</th>
                            <th className="text-center">Heart Rate</th>
                            <th className="text-center">Time Stamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {status === "success" &&
                            data.data["userData"].map((item) => (
                                <tr key={item._id}>
                                    <td className="text-center">{item._id}</td>
                                    <td className="text-center">{item.temp}</td>
                                    <td className="text-center">{item.hr}</td>
                                    <td className="text-center">{item.date}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                <div className="my-5">.</div>
            </div>
        </>
    );
};

export default Dashboard;

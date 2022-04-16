import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Table, Row, Col, Container } from "reactstrap";

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

const PeriodicalHealthTable = () => {
  const { data, error, isError, isLoading, status } = useQuery(
    "posts",
    fetchPosts
  );

  if (status === "success") {
    console.log("datttttttttttttttta", data.data["userData"]);
  }
  return (
    <>
      <div className="mt-5">
        <h1 className="text-white text-center my-3">Periodic Tabular Data</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th className="text-center text-white">Health ID</th>
              <th className="text-center text-white">Body Temperature</th>
              <th className="text-center text-white">Heart Rate</th>
              <th className="text-center text-white">Time Stamp</th>
            </tr>
          </thead>
          <tbody>
            {status === "success" &&
              data.data["userData"].map((item) => (
                <tr key={item._id}>
                  <td className="text-center text-white">{item._id}</td>
                  <td className="text-center text-white">{item.temp}</td>
                  <td className="text-center text-white">{item.hr}</td>
                  <td className="text-center text-white">{item.date}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default PeriodicalHealthTable;

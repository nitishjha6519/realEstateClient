import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";

const TableData = (props) => {
  console.log(props.filt.length);
  const token = window.localStorage.getItem("token");
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchdata = () => {
      fetch("http://127.0.0.1:5000/property/propertydetails", {
        method: "GET",

        headers: {
          Authorization: `random ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "details");
          setDetails(data.allData);
        });
    };
    fetchdata();
    // eslint-disable-next-line
  }, [setDetails]);

  return (
    <div className="tableContainer">
      {props.filt.length === 1 ? (
        <Table bordered hover>
          <thead>
            <tr>
              <th>PPD ID</th>
              <th>Property </th>
              <th>Contact</th>
              <th>Area</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.filt.map((data) => {
              return (
                <tr key={data.ppdid}>
                  <td>{data.ppdid}</td>
                  <td>{data.propertytype}</td>
                  <td>{data.mobile}</td>
                  <td>{data.totalarea}</td>
                  <td>Unsold</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Table bordered hover>
          <thead>
            <tr>
              <th>PPD ID</th>
              <th>Property </th>
              <th>Contact</th>
              <th>Area</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {details.map((data) => {
              return (
                <tr key={data.ppdid}>
                  <td>{data.ppdid}</td>
                  <td>{data.propertytype}</td>
                  <td>{data.mobile}</td>
                  <td>{data.totalarea}</td>
                  <td>Unsold</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TableData;

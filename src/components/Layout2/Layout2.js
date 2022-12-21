import React, { useEffect, useState } from "react";
import { showTabledata } from "../../api";

const Layout2 = () => {
  const [tableData, settableData] = useState([]);
  useEffect(() => {
    const getTableData = async () => {
      const response = await showTabledata();
      settableData(response.data);
    };
    getTableData();
  },[]);
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center align-items-center"style={{height:"75vh"}}>
          <table className="table table-bordered">
            <thead>
              <tr
                className="text-center"
                style={{ backgroundColor: "#F5F6FA", padding: "1rem" }}
              >
                <th style={{ padding: "12px" }}>#</th>
                <th style={{ padding: "12px" }}>Name</th>
                <th style={{ padding: "12px" }}>DOB</th>
                <th style={{ padding: "12px" }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data,index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{data.name}</td>
                  <td>{data.dob.split("-").reverse().join("-")}</td>
                  <td>{data.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Layout2;

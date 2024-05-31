import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Fees.css";

export default function Fees() {
  const [fee, setFee] = useState({
    total_fines: 0,
    paid_fines: 0,
    paid_fee: 0,
    paid_transport_fee: 0,
    transport_fee: 0,
    tuition_fee: 0,
  });
  const handleLoad = async () => {
    const response = await axios.get("http://localhost:3001/api/fees", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      setFee(response.data);
    }
  };
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="fees main-item">
      <table>
        <thead>
          <tr>
            <th rowSpan="2">RollNo</th>
            <th rowSpan="2">Name</th>
            <th colSpan="6">Fees</th>
          </tr>
          <tr>
            <th>Fine</th>
            <th>Paid</th>
            <th>Tuition</th>
            <th>Paid</th>
            <th>Transport</th>
            <th>Paid</th>
          </tr>
          <tr>
            <td>{localStorage.getItem("id")}</td>
            <td>{localStorage.getItem("name")}</td>
            <td>{fee.total_fines}</td>
            <td>
              <a
                href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=4988210"
                target="_blank"
              >
                {fee.paid_fines}
              </a>
            </td>
            <td>{fee.tuition_fee}</td>
            <td>
              <a
                href="https://www.onlinesbi.sbi/sbicollect/payment/filemodeforonecategory.htm"
                target="_blank"
              >
                {fee.paid_fee}
              </a>
            </td>
            <td>{fee.transport_fee}</td>
            <td>
              <a
                href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=958125"
                target="_blank"
              >
                {fee.paid_transport_fee}
              </a>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

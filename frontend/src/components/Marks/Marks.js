import React from "react";
import "./Marks.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Marks() {
  const [marks, setMarks] = useState({
    sem1: 0,
    sem2: 0,
    sem3: 0,
    sem4: 0,
    sem5: 0,
    sem6: 0,
    sem7: 0,
    sem8: 0
  });
  const handleLoad = async () => {
    const response = await axios.get("http://localhost:3001/api/marks", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      setMarks(response.data);
    }
  };
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="marks main-item">
      <table>
        <thead>
          <tr>
            <th rowSpan="2">RollNo</th>
            <th rowSpan="2">Name</th>
            <th rowSpan="2">CGPA</th>
            <th colSpan="8">SGPA</th>
          </tr>
          <tr>
            <th>Sem 1</th>
            <th>Sem 2</th>
            <th>Sem 3</th>
            <th>Sem 4</th>
            <th>Sem 5</th>
            <th>Sem 6</th>
            <th>Sem 7</th>
            <th>Sem 8</th>
          </tr>
          <tr>
            <td>{localStorage.getItem("id")}</td>
            <td>{localStorage.getItem("name")}</td>
            <td>{marks.cgpa}</td>
            <td>{marks.sem1}</td>
            <td>{marks.sem2}</td>
            <td>{marks.sem3}</td>
            <td>{marks.sem4}</td>
            <td>{marks.sem5}</td>
            <td>{marks.sem6}</td>
            <td>{marks.sem7}</td>
            <td>{marks.sem8}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

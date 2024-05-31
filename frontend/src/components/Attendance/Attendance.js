import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import "./Attendance.css";

export default function Attendance() {
  const [attendance, setAttendance] = useState({
    classes_attended: 0,
    labs_attended: 0,
    attendance: 0,
    total_classes: 0,
    total_labs: 0,
    remaining_classes: 0,
    remaining_labs: 0,
  });

  const handleLoad = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/attendance",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (response.status === 200) {
      console.log(response.data);
      setAttendance(response.data);
    }
  };
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="attendance">
      <div className="flex-classes flex-containers">
        <div className="frames">
          <h3>Total Classes</h3>
          <p className="total-classes">{attendance.total_classes}</p>
        </div>
        <div className="frames">
          <h3>Classes Attended</h3>
          <p className="attended-classes">{attendance.classes_attended}</p>
        </div>
        <div className="frames">
          <h3>Classes Absent</h3>
          <p className="classes-absent">
            {attendance.total_classes -
              attendance.remaining_classes -
              attendance.classes_attended}
          </p>
        </div>
        <div className="frames">
          <progress
            max={(attendance.total_classes - attendance.remaining_classes).toString()}
            value={attendance.classes_attended.toString()}
          ></progress>
        </div>
      </div>
      <div className="flex-labs flex-containers">
        <div className="frames">
          <h3>Total Labs</h3>
          <p className="total-labs">{attendance.total_labs}</p>
        </div>
        <div className="frames">
          <h3>Labs Attended</h3>
          <p className="attended-labs">{attendance.labs_attended}</p>
        </div>
        <div className="frames">
          <h3>Labs Absent</h3>
          <p className="labs-absent">
            {attendance.total_labs -
              attendance.remaining_labs -
              attendance.labs_attended}
          </p>
        </div>
        <div className="frames">
          <progress
            max={(attendance.total_labs - attendance.remaining_labs).toString()}
            value={attendance.labs_attended.toString()}
          ></progress>
        </div>
      </div>
      <div className="flex-labs flex-containers">
        <div className="frames">
          <h3>Total Attendance</h3>
          <p className="total-attendance">{attendance.attendance}%</p>
          <progress value={attendance.attendance.toString()} max="100"></progress>
        </div>
        <div className="frames">
          <h3>Remaining Classes</h3>
          <p className="remaining-classes">{attendance.remaining_classes}</p>
        </div>
        <div className="frames">
          <h3>Remaining Labs</h3>
          <p className="remaining-labs">{attendance.remaining_labs}</p>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./Course.css";
import axios from "axios";

export default function Course() {
  const [courses, setCourses] = useState([]);
  const handleCompleted = async () => {
    const response = await axios.get("http://localhost:3001/api/course/completed", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if(response.status === 200) setCourses(response.data);
    document.querySelectorAll(".bar").forEach((bar) => {
      bar.classList.remove("active-bar");
      document.querySelector(".completed").classList.add("active-bar");
    });
  };
  const handleUpcoming = async () => {
    const response = await axios.get("http://localhost:3001/api/course/upcoming", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if(response.status === 200) setCourses(response.data);
    document.querySelectorAll(".bar").forEach((bar) => {
      bar.classList.remove("active-bar");
      document.querySelector(".upcoming").classList.add("active-bar");
    });
  };
  const handleOngoing = async () => {
    const response = await axios.get("http://localhost:3001/api/course/ongoing", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if(response.status === 200) setCourses(response.data);
    document.querySelectorAll(".bar").forEach((bar) => {
      bar.classList.remove("active-bar");
      document.querySelector(".ongoing").classList.add("active-bar");
    });
  };
  useEffect(() => {handleOngoing()}, []);

  return (
    <>
      <div className="courses main-item">
        <div className="top">
          <div className="heading">My Courses</div>
        </div>
        <div className="status">
          <div className="bar ongoing active-bar" onClick={handleOngoing}>
            OnGoing
          </div>
          <div className="bar upcoming" onClick={handleUpcoming}>
            UpComing
          </div>
          <div className="bar completed" onClick={handleCompleted}>
            Completed
          </div>
        </div>
        <div className="topic-container active-course">
          <div className="topic-frames">
            {courses.map((course) => (<div key={course._id} className="plate frame-1">
              <h3 className="title">{course.course_id}</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/html.svg"
                alt=""
              />
            </div>))}
          </div>
        </div>
      </div>
    </>
  );
}

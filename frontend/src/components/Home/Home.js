import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="attendance-fees main-item">
        <div className="attendance-home">
          <div className="top">
            <div className="heading">My Attendance</div>
            <div className="view-more">View more</div>
          </div>
          <p>Total Attendance: 81%</p>
          <p>Days Attended: 81/100</p>
          <p>Labs Attended: 50/60</p>
        </div>
        <div className="fees">
          <div className="top">
            <div className="heading">Fees</div>
            <div className="view-more">View more </div>
          </div>
          <p>Pending Fees to be paid...</p>
        </div>
      </div>
      <div className="courses main-item">
        <div className="top">
          <div className="heading">My Courses</div>
          <div className="view-more">View more </div>
        </div>
        <div className="status">
          <div className="bar active-bar">OnGoing</div>
          <div className="bar">UpComing</div>
          <div className="bar">Completed</div>
        </div>
        <div className="topic-container OnGoing active-course">
          <div className="topic-frames">
            <div className="plate frame-1">
              <h3 className="title">COA</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/html.svg"
                alt=""
              />
            </div>
            <div className="plate frame-2">
              <h3 className="title">OS</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/css.svg"
                alt=""
              />
            </div>
            <div className="plate frame-3">
              <h3 className="title">DBMS</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/js.svg"
                alt=""
              />
            </div>
            <div className="plate frame-4">
              <h3 className="title">ADSJ</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/java.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <!-- for upcoming --> */}
        <div className="topic-container UpComing">
          <div className="topic-frames">
            <div className="plate frame-1">
              <h3 className="title">HTML</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/html.svg"
                alt=""
              />
            </div>
            <div className="plate frame-2">
              <h3 className="title">CSS</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/css.svg"
                alt=""
              />
            </div>
            <div className="plate frame-3">
              <h3 className="title">JavaScript</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/js.svg"
                alt=""
              />
            </div>
            <div className="plate frame-4">
              <h3 className="title">REACT</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/java.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <!-- for completed --> */}
        <div className="topic-container Completed">
          <div className="topic-frames">
            <div className="plate frame-1">
              <h3 className="title">DSC</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/html.svg"
                alt=""
              />
            </div>
            <div className="plate frame-2">
              <h3 className="title">C</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/css.svg"
                alt=""
              />
            </div>
            <div className="plate frame-3">
              <h3 className="title">PYTHON</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/js.svg"
                alt=""
              />
            </div>
            <div className="plate frame-4">
              <h3 className="title">MATHS</h3>
              <img
                src="https://my-learning.w3schools.com/tutorial-logos/java.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import logo from "../assets/Cvrh.ibp.png";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav">
        <ul>
          <li className="logo">
            <img src={logo} alt="" />
          </li>
          <li>
            <Link className="nav-link" to="/">
              <div className="a">
                <i className="fas fa-home"></i>
                <span className="nav-item">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/course">
              <div className="a">
                <i className="fas fa-list"></i>
                <span className="nav-item">Courses</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/fees">
              <div className="a">
                <i className="fas fa-wallet"></i>
                <span className="nav-item">Fees</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/marks">
              <div className="a">
                <i className="fas fa-pen"></i>
                <span className="nav-item">Marks</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/attendance">
              <div className="a">
                <i className="fas fa-chart-bar"></i>
                <span className="nav-item">Attendance</span>
              </div>
            </Link>
          </li>
          <li className="logout">
            <Link className="nav-link" to="/login">
              <div className="a">
                <i className="fas fa-sign-out-alt"></i>
                <span className="nav-item">LogOut</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
  )
}

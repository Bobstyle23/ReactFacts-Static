import React from "react";
import backgroundImage from "../assets/Group.svg";

const Main = () => {
  return (
    <div className="main-container">
      <h1 className="main-header">Fun facts about React</h1>
      <ul className="list-items">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise app, including mobile apps</li>
      </ul>
    </div>
  );
};

export default Main;

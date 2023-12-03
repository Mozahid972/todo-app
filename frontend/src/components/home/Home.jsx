import React from "react";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
          Organize Your <br />
          Work life finally.
        </h1>
        <p>
          The To-Do List Manager is a user-friendly web application designed to
          help users organize their tasks efficiently. This app provides a
          convenient way to manage tasks, create to-do lists, and keep track of
          daily activities.
          <br />
          The To-Do List Manager aims to simplify task management, enhance
          productivity, and provide users with a convenient tool to organize
          their daily activities efficiently.
        </p>
        <button className="home-btn p-2">Make Todo List</button>
      </div>
    </div>
  );
};

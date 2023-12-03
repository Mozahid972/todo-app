import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
          <p>
            Welcome to our To-Do App! We are passionate about helping you manage
            your tasks and increase productivity in a simple and effective way.
          </p>
          <h5>Our Mission</h5>
          <p>
            Our mission is to provide you with a user-friendly platform that
            simplifies task management, enabling you to organize your daily
            activities effortlessly. We aim to streamline your workflow and
            empower you to stay focused on what matters most to you.
          </p>
          <h5>Why Choose Our To-Do App?</h5>
          <ul>
            <li>
              User-Friendly Interface: We've designed our app with simplicity in
              mind, ensuring ease of use for all users, regardless of technical
              expertise.
            </li>
            <li>
              Efficient Task Management: With our app, you can easily add, edit,
              and delete tasks, keeping your to-do lists organized and
              accessible.
            </li>
            <li>
              Flexibility and Customization: Tailor the app to your needs by
              categorizing tasks, setting deadlines, or prioritizing items as
              you prefer.
            </li>
            <li>
              Flexibility and Customization: Tailor the app to your needs by
              categorizing tasks, setting deadlines, or prioritizing items as
              you prefer.
            </li>
            <li>
              Seamless Collaboration: Collaborate with colleagues, friends, or
              family by sharing task lists or assigning tasks, making teamwork
              effortless.
            </li>
          </ul>
          <h5>Contact Us</h5>
          Have any questions, suggestions, or feedback? We'd love to hear from
          you! Feel free to reach out to our support team at email@example.com
          for any inquiries or assistance.
          <br></br>
          Thank you for choosing our To-Do App. We're delighted to be a part of
          your productivity journey!
        </p>
      </div>
    </div>
  );
};

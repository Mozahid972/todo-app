import React, { useEffect, useState } from "react";
import axios from "axios"
import {  toast } from "react-toastify";

export const Update = ({ display, update }) => {


  useEffect(() => {
    setInput({
      title: update.title,
      body: update.body,
    });
  }, [update]);

  const [input, setInput] = useState({
    title: "",
    body: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });

  }


  

  const submit = async () => {
    await axios
      .put(`${window.location.origin}/api/v2/updateTask/${update._id}`, input)
      .then((response) => {
        toast.success(response.data.message);
      });
      display("none");
  }
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h3>Update Your Task</h3>
      <input
        type="text"
        placeholder="TITLE"
        className=" todo-inputs my-4 w-100 p-3"
        value={input.title}
        name="title"
        onChange={change}
      />
      <textarea
        placeholder="BODY "
        className="todo-inputs w-100 p-3"
        value={input.body}
        onChange={change}
        name="body"
      />

      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          UPDATE
        </button>
        <button className="btn btn-danger my-4 mx-3" onClick={() => {
          display("none");
        }}>
          Close
        </button>
      </div>
    </div>
  );
};

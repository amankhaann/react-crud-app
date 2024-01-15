import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const read = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://659fcabe5023b02bfe8a7ec5.mockapi.io/crud", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        read("/read");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Create Opertion</h3>
        <Link to={"/read"}>
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button onClick={handleSubmit} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;

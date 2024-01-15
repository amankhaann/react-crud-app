import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://659fcabe5023b02bfe8a7ec5.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h3>Update Opertion</h3>
      <form>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Name
          </label>
          <input
            value={name}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button onClick={handleUpdate} type="submit" class="btn btn-primary">
          Update
        </button>
        <Link to={"/read"}>
          <button class="btn btn-secondary mx-4">Back</button>
        </Link>
      </form>
    </>
  );
};

export default Update;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState("");

  const getData = () => {
    axios
      .get("https://659fcabe5023b02bfe8a7ec5.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://659fcabe5023b02bfe8a7ec5.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div class="form-check form-switch">
        <input
          onClick={() => {
            if (tableDark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
      </div>
      <div className="d-flex justify-content-between">
        <h3>Read Opertion</h3>
        <Link to={"/"}>
          <button className="btn btn-secondary">Create Data</button>
        </Link>
      </div>
      <table className={`table ${tableDark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to={"/update"}>
                      <button
                        className="btn-success"
                        onClick={() => {
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          );
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;

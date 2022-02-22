import React, { useState } from "react";
import "./App.css";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);
  const [Loaded, setLoaded] = useState(false);
  const [btnClick, setBtnClick] = useState(false);

  const getUsers = async () => {
    setBtnClick(true);
    try {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const jsData = await res.json();
      const userData = jsData.data;
      console.log(userData);
      setUsers(userData);
      setInterval(() => {
        setLoaded(true);
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <h2 className="text-white">Amkette</h2>
      </nav>

      <div>
        <div className="row justify-content-center ">
          {btnClick ? (
            Loaded ? (
              <div>
                <h2>List of Amkette Users</h2>
                <div className="container-fluid mt-4">
                  <div className="row text-center">
                    {users.map((curElem) => {
                      return (
                        <div key={curElem.id} className="box my-2 ">
                          <div className="col-4 col-md-4 mt-4">
                            <div className="card p-2">
                              <div className="d-align-items-center">
                                <div className="image">
                                  {" "}
                                  <img
                                    src={curElem.avatar}
                                    className="rounded"
                                    width="155"
                                    alt=""
                                  />{" "}
                                </div>
                                <div className="ml-3">
                                  <h4 className="mb-0 mt-0 textLeft">
                                    {curElem.first_name +
                                      " " +
                                      curElem.last_name}
                                  </h4>
                                  <span>{curElem.email}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-4 mt-5">
                <span className="loader"></span>
              </div>
            )
          ) : (
            <button
              style={{ width: 270, backgroundColor: "#000", marginTop: 250 }}
              className="btn btn-outline-info  col-6 mt-7"
              type="submit"
              onClick={getUsers}
            >
              Get Users
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FetchAPI;

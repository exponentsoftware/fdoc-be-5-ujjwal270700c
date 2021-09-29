import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import axios from "axios";
const Todo = () => {
  const [todoData, setTodoData] = useState([]);
  useEffect(async () => {
    let res = await axios.get("/todo");
    console.log(res);
    setTodoData(res.data.data);
  }, []);
  return (
    <>
      <Header />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {todoData === [] || todoData.length ===0 && <h3 style={{textAlign:"center"}} > NO DATA </h3>}
          {todoData &&
            todoData.length > 0 &&
            todoData.map((item, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.category}</td>
                <td>
                  {item?.complete === true ? (
                    <>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          defaultChecked
                          id="customSwitches"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitches"
                        />
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Todo;

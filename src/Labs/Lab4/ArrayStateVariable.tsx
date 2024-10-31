//src/Labs/Lab4/ArrayStateVariable.tsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div className="w-25" id="wd-array-state-variables" >
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success ">Add Element</button>
      <ul  >
        {array.map((item, index) => (
          <li className="form-control" key={index} >
            <span className="me-5 fs-5">{item}</span>
            <button onClick={() => deleteElement(index)}
                    id="wd-delete-element-click"
                    className="btn btn-danger "
                    >
              Delete</button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}

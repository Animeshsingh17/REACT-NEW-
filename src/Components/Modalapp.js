import React from "react";
import { useState } from "react";

function Modal({ closeModal }, props) {
  const employee = [
    { Id: 1, Name: "Raj", City: "Mumbai", empID: 7865 },
    { Id: 2, Name: "Surya", City: "Kalyan", empID: 8644 },
    { Id: 3, Name: "Karan", City: "Haryana", empID: 5436 },
    { Id: 4, Name: "Rahul", City: "Kolkata", empID: 8753 },
    { Id: 5, Name: "Sonam", City: "Bangalore", empID: 2976 },
    { Id: 6, Name: "Priya", City: "Pune", empID: 5678 },
    { Id: 7, Name: "Rohit", City: "Tamil Nadu", empID: 5677 },
    { Id: 8, Name: "Shashank", City: "Delhi", empID: 6544 },
    { Id: 9, Name: "Ravi", City: "Assam", empID: 6789 },
    { Id: 10, Name: "Ashu", City: "Gujrat", empID: 2223 },
  ];

  const [name, setName] = useState("");
  const [empID, setEmpID] = useState();
  const [city, setCity] = useState();
  const [list, setList] = useState(employee);
  const handleSubmit = () => {
    const newlist = { Id: 11, Name: name, City: city, empID: empID };
    setList((list) => {
      return list.concat(newlist);
    });
    console.log(list);
    alert(list);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}>X</button>
        <div className="title">
          <h6>Add Employee</h6>
        </div>
        <div className="body">
          <input
            className="Name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="City"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <input
            className="empId"
            placeholder="empId"
            onChange={(e) => setEmpID(e.target.value)}
          ></input>
        </div>
        <div className="footer">
          <button onClick={handleSubmit}>Add</button>
          <button onClick={() => closeModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

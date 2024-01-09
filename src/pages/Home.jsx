import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import User from "./User";
import Admin from "./Admin";
import { v4 as uuid } from "uuid";

let mockEmployees = [
  {
    id: uuid(),
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: uuid(),
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: uuid(),
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const keys = ["name", "lastname", "position"];
  const [text, setText] = useState("React-Assessment");

  const handleButton = (type) => {
    if (type) {
      setText("Home-User Sector");
    } else {
      setText("Home-Admin Sector");
    }
  };

  const create = (data) => {
    if (typeof data !== "object") {
      alert("Please input object of feed-post");
      return;
    }
    for (const key of keys) {
      if (!(key in data)) {
        alert(`Missing field ${key}`);
        return;
      }
    }
    setEmployees((prev) => [...prev, { id: uuid(), ...data }]);
  };

  const remove = (id) => {
    const updateEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updateEmployees);
  };

  return (
    <div className="Layout">
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <div style={{ margin: "40px" }}>
          <h1>Generation Thailand </h1>
          <h1>{text}</h1>
        </div>
        <div className="button">
          <button onClick={() => handleButton(true)}>User Home Sector</button>
          <button onClick={() => handleButton(false)}>Admin Home Sector</button>
        </div>
        {text === "Home-User Sector" ? (
          <User employees={employees} />
        ) : (
          <Admin
            employees={employees}
            handleCreate={create}
            handleRemove={remove}
          />
        )}
      </div>
    </div>
  );
};

export default Home;

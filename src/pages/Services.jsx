import { useState } from "react";
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

export const Services = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const keys = ["name", "lastname", "position"];

  const get = () => {
    return employees;
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

  return { get, create, remove };
};

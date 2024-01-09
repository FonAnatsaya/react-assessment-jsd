import { useState } from "react";

const Admin = ({ employees, handleSave, remove }) => {
  const [form, setForm] = useState({ name: "", lastname: "", position: "" });
  const handleChange = (evt) => {
    setForm((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };
  const onSaveButton = () => {
    handleSave(form);
    setForm({ name: "", lastname: "", position: "" });
  };

  return (
    <div>
      <div className="input-section">
        <h4>Create User Here</h4>
        <input
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
        ></input>
        <input
          name="lastname"
          value={form.lastname}
          placeholder="Last Name"
          onChange={handleChange}
        ></input>
        <input
          name="position"
          value={form.position}
          placeholder="Position"
          onChange={handleChange}
        ></input>
        <button onClick={onSaveButton}>Save</button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.lastname}</td>
                  <td>{emp.position}</td>
                  <td>
                    <button
                      style={{ backgroundColor: "lightgrey" }}
                      onClick={() => remove(emp.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Admin;
